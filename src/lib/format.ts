import type { QuoteLine } from './api';
import type { Dict, Lang } from './i18n';

const locale = (lang: Lang) => (lang === 'zh' ? 'zh-CN' : 'en-US');

export const money = (cents: number, lang: Lang) =>
  new Intl.NumberFormat(locale(lang), { style: 'currency', currency: 'USD', minimumFractionDigits: cents % 100 ? 2 : 0 }).format(cents / 100);

export const day = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(locale(lang), { year: 'numeric', month: lang === 'zh' ? 'long' : 'short', day: 'numeric' }).format(new Date(iso));

export function lineLabel(d: Dict, line: QuoteLine){
  switch (line.kind){
    case 'plan': return d.checkout.lines.plan(d.plans[line.plan], d.periods[line.period]);
    case 'addon': return d.checkout.lines.addon(line.quantity, line.prorated);
    case 'credit': return d.checkout.lines.credit(d.plans[line.plan]);
  }
}
