import { en } from '../i18n/en';
import { zh } from '../i18n/zh';

export type Lang = 'en' | 'zh';
export type Dict = typeof en;
export const LANGS: Lang[] = ['en', 'zh'];
const dicts: Record<Lang, Dict> = { en, zh };

export const t = (lang: Lang) => dicts[lang];
export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'zh' : 'en');
export const langPaths = () => LANGS.map(lang => ({ params: { lang } }));
export const link = (lang: Lang, path = '') => `/${lang}/${path}`;

// In the browser: the page language comes from <html lang>.
export const pageLang = (): Lang => (document.documentElement.lang === 'zh' ? 'zh' : 'en');
