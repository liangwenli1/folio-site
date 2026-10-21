// "Open another profile" on the landing page: draws a new identity on the passport card.
// The order matches the localized city list in the dictionaries.
const CITY_DATA = [
  { cc: 'US', mrz: 'SEATTLE', tz: 'America/Los_Angeles', lang: 'en-US, en', ip: '172.58' },
  { cc: 'GB', mrz: 'LONDON', tz: 'Europe/London', lang: 'en-GB, en', ip: '81.2' },
  { cc: 'JP', mrz: 'TOKYO', tz: 'Asia/Tokyo', lang: 'ja-JP, ja', ip: '126.15' },
  { cc: 'DE', mrz: 'FRANKFURT', tz: 'Europe/Berlin', lang: 'de-DE, de', ip: '84.141' },
  { cc: 'BR', mrz: 'SAOPAULO', tz: 'America/Sao_Paulo', lang: 'pt-BR, pt', ip: '177.71' },
  { cc: 'CA', mrz: 'TORONTO', tz: 'America/Toronto', lang: 'en-CA, fr-CA', ip: '99.229' },
  { cc: 'SG', mrz: 'SINGAPORE', tz: 'Asia/Singapore', lang: 'en-SG, zh-SG', ip: '118.189' },
  { cc: 'AU', mrz: 'SYDNEY', tz: 'Australia/Sydney', lang: 'en-AU, en', ip: '1.144' },
  { cc: 'KR', mrz: 'SEOUL', tz: 'Asia/Seoul', lang: 'ko-KR, ko', ip: '211.36' },
  { cc: 'US', mrz: 'MIAMI', tz: 'America/New_York', lang: 'en-US, es-US', ip: '73.85' }
];
// GPUs stay consistent with the system, as the Chromium engine guarantees.
const DEVICES = [
  { os: 'Windows 11', osm: 'WIN11', gpu: 'Intel Iris Xe Graphics', res: ['1920 × 1080', '1536 × 864'], fonts: [54, 72] },
  { os: 'Windows 10', osm: 'WIN10', gpu: 'Intel UHD Graphics 630', res: ['1920 × 1080', '1366 × 768'], fonts: [50, 68] },
  { os: 'Windows 11', osm: 'WIN11', gpu: 'NVIDIA GeForce RTX 3060', res: ['1920 × 1080', '2560 × 1440'], fonts: [54, 72] },
  { os: 'macOS 15', osm: 'MAC15', gpu: 'Apple M2', res: ['1440 × 900', '1512 × 982'], fonts: [64, 80] },
  { os: 'macOS 14', osm: 'MAC14', gpu: 'Apple M1 Pro', res: ['1728 × 1117', '1512 × 982'], fonts: [64, 80] }
];
const ENGINES = ['Chromium 150', 'Chromium 150', 'Firefox 156'];
const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';

const pick = <T>(a: T[]) => a[Math.floor(Math.random() * a.length)];
const hex = (n: number) => Array.from({ length: n }, () => '0123456789abcdef'[Math.random() * 16 | 0]).join('');
const pad = (s: string, n: number) => (s + '<'.repeat(n)).slice(0, n);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function scramble(el: Element, to: string, dur: number){
  if (reduce){ el.textContent = to; return; }
  const start = performance.now();
  const frame = (now: number) => {
    const p = Math.min(1, (now - start) / dur), reveal = Math.floor(p * to.length);
    el.textContent = Array.from(to, (ch, i) => (i < reveal || /[\s.,/×…•<_\-一-鿿]/.test(ch) ? ch : GLYPHS[Math.random() * GLYPHS.length | 0])).join('');
    if (p < 1) requestAnimationFrame(frame); else el.textContent = to;
  };
  requestAnimationFrame(frame);
}

function restart(el: Element, cls: string){ el.classList.remove(cls); void (el as HTMLElement).offsetWidth; el.classList.add(cls); }

export function startReroll(){
  const card = document.getElementById('idcard');
  if (!card) return;
  const cities = JSON.parse(card.dataset.cities!) as { city: string; region: string }[];
  const unit = card.dataset.fontsUnit!;
  const stamp = document.getElementById('stamp')!;
  const b1 = document.getElementById('back1')!, b2 = document.getElementById('back2')!;
  let no = 42, cityIdx = 0;
  const today = new Date();
  card.querySelector('[data-f="date"]')!.textContent = `${today.getFullYear()}·${String(today.getMonth() + 1).padStart(2, '0')}·${String(today.getDate()).padStart(2, '0')}`;
  const read = (el: Element, attr: string) => Object.fromEntries(['no', 'city', 'region', 'tz', 'os'].map(k => [k, el.querySelector(`[${attr}="${k}"]`)?.textContent ?? '']));
  const fillBack = (el: Element, v: Record<string, string>) => Object.entries(v).forEach(([k, val]) => { const t = el.querySelector(`[data-b="${k}"]`); if (t) t.textContent = val; });

  document.getElementById('reroll')!.addEventListener('click', () => {
    fillBack(b2, read(b1, 'data-b'));
    fillBack(b1, read(card, 'data-f'));
    let i; do { i = Math.random() * cities.length | 0; } while (i === cityIdx);
    cityIdx = i;
    const c = CITY_DATA[i], d = pick(DEVICES), res = pick(d.res), h = hex(8), engine = pick(ENGINES);
    no += 1;
    const id = String(no).padStart(4, '0');
    const fonts = d.fonts[0] + (Math.random() * (d.fonts[1] - d.fonts[0]) | 0);
    const next: Record<string, string> = {
      no: id, ip: `${c.ip}.•••.••`, tz: c.tz, lang: c.lang, os: d.os, core: engine, res, gpu: d.gpu,
      hash: `${h.slice(0, 4)}…${h.slice(4)}`, fonts: `${fonts} ${unit}`,
      mrz1: pad(`FOLIO<ENV${id}<<${c.cc}<${c.mrz}`, 32),
      mrz2: pad(`${d.osm}<${engine.startsWith('Firefox') ? 'FFX156' : 'CHR150'}<${res.replace(' × ', 'X')}<<${h.toUpperCase()}`, 32)
    };
    card.querySelector('[data-f="city"]')!.textContent = cities[i].city;
    card.querySelector('[data-f="region"]')!.textContent = cities[i].region;
    Object.entries(next).forEach(([k, v]) => { const el = card.querySelector(`[data-f="${k}"]`); if (el) scramble(el, v, 480 + Math.random() * 320); });
    if (!reduce){ restart(card, 'lift'); restart(stamp, 'stamping'); }
  });
}
