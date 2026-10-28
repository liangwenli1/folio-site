// The help center's guides: their order (previous and next follow it), their categories, and the pictures beside some
// of their steps — named as recorded in public/shots/ and zoomed towards what the step is about.
import type { IconName } from './icons';
import type { Dict } from './i18n';

export type Slug = keyof Dict['help']['articles'];
export type Category = keyof Dict['help']['categories'];

export const UPDATED = '2026-10-28';
export const CATEGORIES: { id: Category; icon: IconName }[] = [
  { id: 'start', icon: 'book' }, { id: 'profiles', icon: 'layers' }, { id: 'proxies', icon: 'proxies' }, { id: 'team', icon: 'team' }, { id: 'account', icon: 'billing' }
];
export const ORDER: Slug[] = ['install', 'create-profile', 'screen-and-window', 'import-cookies', 'window-sync', 'proxies', 'group-access', 'plans-and-billing'];

export const categoryOf = (d: Dict, slug: Slug) => d.help.articles[slug].cat as Category;
export const inCategory = (d: Dict, id: Category) => ORDER.filter(s => categoryOf(d, s) === id);

export interface Picture { name: string; zoom: number; origin: string }
export const PICTURES: Partial<Record<Slug, Record<number, Picture>>> = {
  'create-profile': { 0: { name: 'new', zoom: 1.35, origin: '62% 30%' }, 2: { name: 'new-opening', zoom: 1.35, origin: '65% 45%' }, 3: { name: 'opening', zoom: 1.2, origin: '100% 0' } },
  'screen-and-window': { 0: { name: 'drawer-check', zoom: 1.2, origin: '100% 0' }, 1: { name: 'new-opening', zoom: 1.35, origin: '65% 45%' } },
  'import-cookies': { 0: { name: 'cookies', zoom: 1.2, origin: '100% 0' } },
  'window-sync': { 3: { name: 'sync', zoom: 1.2, origin: '100% 0' } },
  proxies: { 2: { name: 'proxies', zoom: 1.2, origin: '100% 0' } },
  'group-access': { 1: { name: 'groups', zoom: 1.2, origin: '100% 0' }, 3: { name: 'members', zoom: 1.2, origin: '100% 0' } }
};
