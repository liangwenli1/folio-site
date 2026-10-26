// Browser-side client for folio-server. Types come from the server's OpenAPI document (npm run api:types).
import type { paths } from './api-schema';
import type { Dict } from './i18n';

type Ok<P extends keyof paths, M extends 'get' | 'post' | 'patch'> =
  paths[P][M] extends { responses: { 200: { content: { 'application/json': infer T } } } } ? T :
  paths[P][M] extends { responses: { 201: { content: { 'application/json': infer T } } } } ? T : never;

export type Me = Ok<'/me', 'get'>;
export type User = Me['user'];
export type WorkspaceSummary = Me['workspaces'][number];
export type MyRole = WorkspaceSummary['role'];
// Administering a workspace — members, roles, settings, the subscription — goes with managing its members.
export const canManage = (role: { permissions: readonly string[] }) => role.permissions.includes('team.manage');
// The four roles every workspace starts with are translated; a workspace's own keeps the name it was given.
export const roleLabel = (role: { key: string | null; name: string }, names: Record<string, string>) => (role.key ? names[role.key] : role.name);
export type Workspace = Ok<'/workspaces/{id}', 'get'>;
export type Subscription = Workspace['subscription'];
export type Plans = Ok<'/plans', 'get'>;
export type Quote = Ok<'/workspaces/{id}/billing/quote', 'post'>;
export type QuoteLine = Quote['lines'][number];
export type CheckoutStarted = Ok<'/workspaces/{id}/billing/checkout', 'post'>;
export type Paid = Ok<'/billing/checkouts/{id}/pay', 'post'>;
export type Payment = Paid['payment'];
export type Invoice = Ok<'/payments/{id}', 'get'>;
export type Inquiry = Ok<'/sales-inquiries', 'post'>;

const BASE = import.meta.env.PUBLIC_API_URL ?? 'http://localhost:47110';

export class ApiFailure extends Error {
  constructor(public code: string, message: string, public status: number){ super(message); }
}

export async function api<T>(method: 'GET' | 'POST' | 'PATCH', path: string, body?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(BASE + path, {
      method, credentials: 'include',
      headers: body === undefined ? {} : { 'content-type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body)
    });
  } catch {
    throw new ApiFailure('network', 'network error', 0);
  }
  if (res.status === 204) return undefined as T;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiFailure(data?.error?.code ?? 'internal', data?.error?.message ?? res.statusText, res.status);
  return data as T;
}

export const errorText = (d: Dict, e: unknown) => (e instanceof ApiFailure ? d.errors[e.code] ?? e.message : d.errors.internal);
