// Fills the pricing cards from GET /plans, so prices are defined only on the server.
import { api, type Plans } from '../lib/api';
import { money } from '../lib/format';
import { pageLang, t } from '../lib/i18n';

export async function startPricing(){
  const lang = pageLang(), d = t(lang).pricing;
  let plans: Plans;
  try { plans = await api<Plans>('GET', '/plans'); } catch { return; }
  let period: 'monthly' | 'yearly' = 'monthly';
  // Until payments open, paid plans can't be bought; the free trial and Free still work.
  if (!plans.payments) document.querySelectorAll('[data-buy]').forEach(a => {
    const soon = document.createElement('span');
    soon.className = 'buy soon';
    soon.textContent = d.soon;
    a.replaceWith(soon);
  });

  const render = () => {
    for (const p of plans.plans){
      const card = document.querySelector<HTMLElement>(`[data-plan="${p.id}"]`);
      if (!card) continue;
      const set = (sel: string, text: string) => { card.querySelector(sel)!.textContent = text; };
      const monthly = period === 'monthly' ? p.price.monthly : Math.round(p.price.yearly / 12);
      set('[data-amt]', money(monthly, lang));
      set('[data-per]', p.id === 'free' ? d.forever : d.perMonth);
      const members = p.members === 1 ? d.oneMember : d.unlimitedMembers;
      set('[data-perenv]', p.id === 'free' ? d.profilesMembers(p.profiles, members) : `${d.profilesMembers(p.profiles, members)} · ${d.perProfile(money(Math.round(monthly / p.profiles), lang))}`);
      set('[data-note]', p.id === 'free' ? d.noCard : period === 'monthly' ? d.billedMonthly : d.billedYearly(money(p.price.yearly, lang)));
      const buy = card.querySelector<HTMLAnchorElement>('[data-buy]');
      if (buy) buy.href = buy.href.replace(/period=\w+/, `period=${period}`);
    }
    document.querySelector('[data-foot]')!.textContent = d.foot(money(period === 'monthly' ? plans.addon.price.monthly : Math.round(plans.addon.price.yearly / 12), lang));
    document.querySelectorAll('[data-period]').forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-period') === period)));
  };

  document.querySelectorAll<HTMLButtonElement>('[data-period]').forEach(b => b.addEventListener('click', () => {
    period = b.dataset.period as typeof period;
    render();
  }));
  render();
}
