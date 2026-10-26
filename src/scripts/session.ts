// Shared helpers for the account pages.
import { api, ApiFailure, errorText, type Me } from '../lib/api';
import { pageLang, t } from '../lib/i18n';

export const lang = pageLang();
export const d = t(lang);
export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
export const param = (name: string) => new URLSearchParams(location.search).get(name);
export const here = () => location.pathname + location.search;

// Only same-site paths are allowed as a post-login destination.
export function nextPath(){
  const n = param('next');
  return n && n.startsWith('/') && !n.startsWith('//') ? n : null;
}
export const withNext = (path: string, next = nextPath()) => (next ? `${path}?next=${encodeURIComponent(next)}` : path);
export const to = (path: string) => `/${lang}/${path}`;

export async function requireMe(): Promise<Me> {
  try {
    return await api<Me>('GET', '/me');
  } catch (e){
    if (e instanceof ApiFailure && e.status === 401) location.replace(withNext(to('login/'), here()));
    throw e;
  }
}

export function showError(box: HTMLElement, e: unknown){
  box.textContent = typeof e === 'string' ? e : errorText(d, e);
  box.hidden = false;
}

// Runs a submit handler with the button disabled and errors shown in `box`.
export function onSubmit(form: HTMLFormElement, box: HTMLElement, run: () => Promise<void>){
  form.addEventListener('submit', async ev => {
    ev.preventDefault();
    box.hidden = true;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (btn) btn.disabled = true;
    try { await run(); } catch (e){ showError(box, e); } finally { if (btn) btn.disabled = false; }
  });
}

// After a code is sent: the button rests for a minute before it can send another, saying how long is left.
export function cooldown(btn: HTMLButtonElement, label: (seconds: number) => string, seconds = 60){
  const text = btn.textContent;
  btn.disabled = true;
  const tick = () => {
    if (seconds === 0){ clearInterval(timer); btn.disabled = false; btn.textContent = text; return; }
    btn.textContent = label(seconds--);
  };
  const timer = setInterval(tick, 1000);
  tick();
}

export const devBuild = import.meta.env.DEV || import.meta.env.PUBLIC_DEV_NOTICE === '1';

export const esc = (s: string) => s.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]!));
