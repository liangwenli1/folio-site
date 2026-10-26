// Fills the pricing cards from GET /plans, so prices are defined only on the server, and runs the calculator: how many
// profiles are needed → the cheapest plan with add-on packs, its monthly cost, and the matching card.
import { api, type Plans } from '../lib/api';
import { money } from '../lib/format';
import { link, pageLang, t } from '../lib/i18n';

type Period = 'monthly' | 'yearly';
type Price = { monthly: number; yearly: number };
type Option = { plan: Plans['plans'][number]; packs: number; profiles: number; cents: number };

// What a month costs in this period: yearly prices are shown per month.
const perMonth = (price: Price, period: Period) => (period === 'monthly' ? price.monthly : Math.round(price.yearly / 12));

// Each paid plan topped up with add-on packs to hold `n` profiles, cheapest first; plans that can't hold them are left out.
function options(plans: Plans, n: number, period: Period): Option[]{
  return plans.plans.filter(p => p.id !== 'free').map(plan => {
    const packs = Math.max(0, Math.ceil((n - plan.profiles) / plans.addon.profiles));
    return { plan, packs, profiles: plan.profiles + packs * plans.addon.profiles, cents: perMonth(plan.price, period) + packs * perMonth(plans.addon.price, period) };
  }).filter(o => o.profiles <= plans.maxProfiles).sort((a, b) => a.cents - b.cents);
}

// The slider: equal room between the ticks (free, studio, company, half the maximum, the maximum), finer steps for
// small counts, and its far end meaning "more than the maximum".
const SEG = 100, ROUND = [5, 10, 50, 100];
function scale(ticks: number[]){
  const max = SEG * (ticks.length - 1);
  return {
    max,
    count(pos: number){
      if (pos >= max) return Infinity;
      const i = Math.floor(pos / SEG), v = ticks[i] + ((pos % SEG) / SEG) * (ticks[i + 1] - ticks[i]);
      return Math.max(ticks[0], Math.round(v / ROUND[i]) * ROUND[i]);
    },
    pos(n: number){
      const i = Math.max(0, ticks.findIndex((_, k) => n <= ticks[k + 1]));
      return i * SEG + ((n - ticks[i]) / (ticks[i + 1] - ticks[i])) * SEG;
    }
  };
}

export async function startPricing(){
  const lang = pageLang(), d = t(lang).pricing, c = d.calc, names = t(lang).plans;
  let plans: Plans;
  try { plans = await api<Plans>('GET', '/plans'); } catch { return; }
  let period: Period = 'monthly';
  // Until payments open, paid plans can't be bought; the free trial and Free still work.
  if (!plans.payments) document.querySelectorAll('[data-buy]').forEach(a => {
    const soon = document.createElement('span');
    soon.className = 'buy soon';
    soon.textContent = d.soon;
    a.replaceWith(soon);
  });
  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const free = plans.plans.find(p => p.id === 'free')!;
  const ticks = [free.profiles, ...plans.plans.filter(p => p.id !== 'free').map(p => p.profiles), plans.maxProfiles / 2, plans.maxProfiles];
  const sc = scale(ticks);
  const slider = $<HTMLInputElement>('calc-n');
  slider.max = String(sc.max);
  slider.value = String(sc.pos(180));
  $('calc-ticks').innerHTML = ticks.map((n, i) => `<span style="--i:${i / (ticks.length - 1)}">${i === ticks.length - 1 ? `${n}+` : n}</span>`).join('');

  const renderCards = () => {
    for (const p of plans.plans){
      const card = document.querySelector<HTMLElement>(`[data-plan="${p.id}"]`);
      if (!card) continue;
      const set = (sel: string, text: string) => { card.querySelector(sel)!.textContent = text; };
      const monthly = perMonth(p.price, period);
      set('[data-amt]', money(monthly, lang));
      set('[data-per]', p.id === 'free' ? d.forever : d.perMonth);
      const members = p.members === 1 ? d.oneMember : d.unlimitedMembers;
      set('[data-perenv]', p.id === 'free' ? d.profilesMembers(p.profiles, members) : `${d.profilesMembers(p.profiles, members)}\n${d.perProfile(money(Math.round(monthly / p.profiles), lang))}`);
      set('[data-note]', p.id === 'free' ? d.noCard : period === 'monthly' ? d.billedMonthly : d.billedYearly(money(p.price.yearly, lang)));
      const buy = card.querySelector<HTMLAnchorElement>('[data-buy]');
      if (buy) buy.href = buy.href.replace(/period=\w+/, `period=${period}`);
    }
    document.querySelector('[data-foot]')!.textContent = d.foot(money(perMonth(plans.addon.price, period), lang));
    document.querySelectorAll('[data-period]').forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-period') === period)));
  };

  const renderCalc = () => {
    const n = sc.count(Number(slider.value));
    const out = $('calc-out'), cta = $<HTMLAnchorElement>('calc-cta');
    out.textContent = n === Infinity ? `${plans.maxProfiles}+` : String(n);
    $('calc-track').style.setProperty('--p', String(Number(slider.value) / sc.max));
    slider.setAttribute('aria-valuetext', n === Infinity ? c.custom(plans.maxProfiles) : c.profiles(n));
    document.querySelectorAll<HTMLElement>('[data-plan]').forEach(card => { card.classList.remove('match'); card.querySelector<HTMLElement>('[data-fit]')!.hidden = true; });
    const show = (id: string, text: string) => { $(id).textContent = text; $(id).hidden = !text; };
    $('calc-cheapest').hidden = true;
    $('calc-per').hidden = n === Infinity;
    cta.hidden = false;
    if (n === Infinity){
      show('calc-plan', c.custom(plans.maxProfiles)); show('calc-amt', ''); show('calc-detail', c.customBody); show('calc-alt', '');
      cta.textContent = d.cta.company; cta.href = link(lang, 'contact/');
      return;
    }
    if (n <= free.profiles){
      show('calc-plan', names.free); show('calc-amt', money(0, lang)); show('calc-detail', d.profilesMembers(free.profiles, d.oneMember)); show('calc-alt', '');
      $('calc-per').hidden = true;
      cta.textContent = d.cta.free; cta.href = link(lang, 'signup/');
      return;
    }
    const [best, ...rest] = options(plans, n, period);
    const pick = best.packs ? c.withPacks(names[best.plan.id], best.packs) : names[best.plan.id];
    show('calc-plan', pick); show('calc-amt', money(best.cents, lang));
    show('calc-detail', `${c.profiles(best.profiles)} · ${d.perProfile(money(Math.round(best.cents / best.profiles), lang))}`);
    const company = rest.find(o => o.plan.id === 'company');
    show('calc-alt', company ? c.company(money(company.cents, lang)) : '');
    $('calc-cheapest').hidden = !rest.length;
    // Buying goes through checkout with the packs filled in; until payments open there is nothing to buy.
    cta.hidden = !plans.payments;
    cta.textContent = c.buy;
    cta.href = link(lang, `checkout/?plan=${best.plan.id}&period=${period}&packs=${best.packs}`);
    const card = document.querySelector<HTMLElement>(`[data-plan="${best.plan.id}"]`)!;
    card.classList.add('match');
    const fit = card.querySelector<HTMLElement>('[data-fit]')!;
    fit.textContent = c.fit(n, pick);
    fit.hidden = false;
  };

  document.querySelectorAll<HTMLButtonElement>('[data-period]').forEach(b => b.addEventListener('click', () => {
    period = b.dataset.period as Period;
    renderCards(); renderCalc();
  }));
  slider.addEventListener('input', renderCalc);
  renderCards(); renderCalc();
  $('calc').hidden = false;
}
