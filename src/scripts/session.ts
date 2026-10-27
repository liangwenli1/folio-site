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

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// Field errors (design spec 4), checked on submit: each reason goes under its field (a checkbox: under its label) and
// is tied to it for screen readers; '' clears one, and so does changing the field. The first field with a reason takes
// the focus. Returns whether any field has one.
export function invalid(checks: [Field, string][]){
  for (const [field, reason] of checks) mark(field, reason);
  const first = checks.find(([, reason]) => reason)?.[0];
  first?.focus();
  return !!first;
}

function mark(field: Field, reason: string){
  const id = `${field.id}-err`;
  let msg = document.getElementById(id);
  if (reason && !msg){
    msg = Object.assign(document.createElement('p'), { id, className: 'field-err' });
    (field.type === 'checkbox' ? field.closest('label')! : field.closest('.pw, .code-row') ?? field).after(msg);
  }
  if (msg){ msg.textContent = reason; msg.hidden = !reason; }
  const described = (field.getAttribute('aria-describedby') ?? '').split(' ').filter(x => x && x !== id);
  if (reason){
    described.unshift(id);
    field.setAttribute('aria-invalid', 'true');
    field.addEventListener('input', () => mark(field, ''), { once: true });
  } else field.removeAttribute('aria-invalid');
  if (described.length) field.setAttribute('aria-describedby', described.join(' ')); else field.removeAttribute('aria-describedby');
}

// Why an email box won't do, or '' when it will.
export const emailProblem = (field: HTMLInputElement) => (!field.value.trim() ? d.errors.emailMissing : field.checkValidity() ? '' : d.errors.emailInvalid);

// The server's refusals that are about one field, by that field's id; they go under it. Any other goes in `box`, at the
// top of the form — among them a wrong email or password, which can't say which of the two is wrong (v2 23).
const FIELD_OF: Record<string, string> = { email_taken: 'email', code_invalid: 'code', code_expired: 'code', too_many_attempts: 'code', wrong_password: 'pw-current' };
export function fail(box: HTMLElement, e: unknown){
  const field = e instanceof ApiFailure && FIELD_OF[e.code] ? document.getElementById(FIELD_OF[e.code]) as Field | null : null;
  if (field) invalid([[field, errorText(d, e)]]); else showError(box, e);
}

// A button while its request runs: a spinner in place of the label (aria-busy), the width kept, no more clicks.
export function busy(btn: HTMLButtonElement, on: boolean){
  btn.disabled = on;
  if (on) btn.setAttribute('aria-busy', 'true'); else btn.removeAttribute('aria-busy');
}

// Runs a submit handler with the button busy; what goes wrong is shown as `fail` does.
export function onSubmit(form: HTMLFormElement, box: HTMLElement, run: () => Promise<void>){
  form.addEventListener('submit', async ev => {
    ev.preventDefault();
    box.hidden = true;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (btn) busy(btn, true);
    try { await run(); } catch (e){ fail(box, e); } finally { if (btn) busy(btn, false); }
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
