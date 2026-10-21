// Guilloche security lines drawn on canvases marked `canvas.gl[data-kind]`. Redraws on resize and theme change.
const tok = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

function prep(c: HTMLCanvasElement){
  const r = c.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.max(1, r.width), h = Math.max(1, r.height);
  c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
  const ctx = c.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  return { ctx, w, h, rect: r };
}

function ring(ctx: CanvasRenderingContext2D, cx: number, cy: number, R: number, amp: number, m: number, m2: number, lines: number, color: string, alpha: number, lw: number){
  ctx.strokeStyle = color; ctx.globalAlpha = alpha; ctx.lineWidth = lw;
  const N = 900, TAU = Math.PI * 2;
  for (let j = 0; j < lines; j++){
    const ph = j * TAU / lines;
    ctx.beginPath();
    for (let i = 0; i <= N; i++){
      const t = i / N * TAU;
      const r = R + amp * Math.sin(m * t + ph) + amp * 0.38 * Math.sin(m2 * t - 2 * ph);
      const x = cx + r * Math.cos(t), y = cy + r * Math.sin(t);
      if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function waves(ctx: CanvasRenderingContext2D, w: number, y0: number, A: number, f: number, lines: number, color: string, alpha: number, lw: number){
  ctx.strokeStyle = color; ctx.globalAlpha = alpha; ctx.lineWidth = lw;
  for (let j = 0; j < lines; j++){
    const ph = j * Math.PI * 2 / lines;
    ctx.beginPath();
    for (let x = -4; x <= w + 4; x += 3){
      const y = y0 + A * Math.sin(x * f + ph) + A * 0.5 * Math.sin(x * f * 2.3 - ph * 1.7);
      if (x > -4) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function draw(c: HTMLCanvasElement){
  const { ctx, w, h, rect } = prep(c);
  const kind = c.dataset.kind;
  if (kind === 'hero'){
    const col = tok('--guilloche');
    const stack = document.querySelector('.stack')?.getBoundingClientRect();
    const cx = stack ? stack.left - rect.left + stack.width / 2 : w * 0.75, cy = stack ? stack.top - rect.top + stack.height / 2 : h / 2;
    const R = stack ? Math.max(stack.width, stack.height) * 0.6 : Math.min(w, h) * 0.35;
    ring(ctx, cx, cy, R, R * 0.09, 16, 7, 30, col, 0.17, 0.6);
    ring(ctx, cx, cy, R * 1.22, R * 0.045, 28, 11, 18, col, 0.11, 0.5);
    waves(ctx, w, h - 92, 9, 0.011, 12, col, 0.12, 0.6);
  } else if (kind === 'card'){
    const col = tok('--guilloche');
    waves(ctx, w, 86, 7, 0.024, 10, col, 0.09, 0.55);
    waves(ctx, w, h - 30, 6, 0.03, 9, col, 0.08, 0.5);
  } else if (kind === 'band'){
    const col = tok('--band-line');
    const R = Math.min(h * 0.62, w * 0.36);
    ring(ctx, w * 0.84, h * 0.5, R, R * 0.1, 18, 5, 34, col, 0.22, 0.6);
    ring(ctx, w * 0.84, h * 0.5, R * 0.62, R * 0.06, 24, 7, 22, col, 0.18, 0.5);
  }
}

export function startGuilloche(){
  const canvases = Array.from(document.querySelectorAll<HTMLCanvasElement>('canvas.gl'));
  const pending = new Set<HTMLCanvasElement>();
  let raf = 0;
  const queue = (c: HTMLCanvasElement) => {
    pending.add(c);
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; pending.forEach(draw); pending.clear(); });
  };
  const all = () => canvases.forEach(queue);
  const ro = new ResizeObserver(es => es.forEach(e => queue(e.target as HTMLCanvasElement)));
  canvases.forEach(c => ro.observe(c));
  all();
  document.fonts?.ready.then(all);
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', all);
  new MutationObserver(all).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}
