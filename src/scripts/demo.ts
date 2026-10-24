// The product demo (components/Demo.astro): four scenes on a loop, advanced by a 100 ms tick that only counts while the
// demo is on screen, the tab is visible and nobody paused it. Each scene starts from a known state and changes it at set
// times, so a jump to a scene, a pause and reduced motion (finished scenes, no autoplay) all land on the same states.
type State = { launch: number; pins: number; tip: boolean; risk: boolean; checks: number };
type Step = [number, Partial<State>];

// launch: 0 not running, 1–4 the opening steps, 5 running. checks: how many passed; one more than there are is the stamp.
const PINS = 7, CHECKS = 5;
const SCENES: { start: Partial<State>; at: Step[]; end: number }[] = [
  // Open a profile: proxy, engine, sign-ins, browser; then it runs and the card is stamped.
  { start: { launch: 0, pins: PINS, tip: false, risk: false, checks: 0 }, at: [1, 2, 3, 4, 5].map((launch, i) => [300 + i * 900, { launch }]), end: 6000 },
  // Exit map: the exits light up one by one, then New York says what is there.
  { start: { launch: 5, pins: 0, tip: false, risk: false }, at: [...Array.from({ length: PINS }, (_, i): Step => [300 + i * 260, { pins: i + 1 }]), [2400, { tip: true }]], end: 5500 },
  // Link risks: the two New York profiles share a proxy.
  { start: { launch: 5, pins: PINS, tip: false, risk: false }, at: [[500, { risk: true }]], end: 5000 },
  // Health check: each check passes, then the stamp lands.
  { start: { launch: 5, pins: PINS, tip: false, risk: true, checks: 0 }, at: Array.from({ length: CHECKS + 1 }, (_, i): Step => [500 + i * 500, { checks: i + 1 }]), end: 6000 }
];
const finished = (n: number): State => Object.assign({ launch: 5, pins: PINS, tip: false, risk: false, checks: 0 }, SCENES[n - 1].start, ...SCENES[n - 1].at.map(s => s[1]));

function restart(el: Element, cls: string){ el.classList.remove(cls); void (el as HTMLElement).offsetWidth; el.classList.add(cls); }

export function startDemo(){
  const root = document.getElementById('demo-root');
  if (!root) return;
  const q = <T extends Element = HTMLElement>(sel: string) => Array.from(root.querySelectorAll<T>(sel));
  const steps = q('.dstep'), pins = q<SVGGElement>('.dpin'), checks = q('.dcheck'), scenes = q<HTMLButtonElement>('[data-go]');
  const opening = root.querySelector<HTMLElement>('.r2')!, segs = q('.r2 .segs i'), stage = root.querySelector('.r2 .stage')!;
  const ny = root.querySelector<SVGGElement>('[data-pin="ny"]')!;
  const stamp = root.querySelector('.dstamp')!, passed = root.querySelector('.dpassed')!;
  const stages = JSON.parse(stage.parentElement!.dataset.stages!) as string[];
  const toggle = document.getElementById('demo-toggle') as HTMLButtonElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let scene = 1, t = 0, next = 0, playing = !reduce, inView = false;
  let state: State = finished(1);

  const render = (prev: State, s: State, animate: boolean) => {
    root.dataset.scene = String(scene);
    scenes.forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.go) === scene)));
    steps.forEach((li, i) => { li.classList.toggle('done', s.launch > i + 1); li.classList.toggle('now', s.launch === i + 1); });
    const run = s.launch === 5 ? 'run' : s.launch ? 'boot' : 'idle';
    opening.dataset.state = run;
    ny.classList.remove('idle', 'boot', 'run');
    ny.classList.add(run);
    segs.forEach((i, k) => { i.classList.toggle('done', k < s.launch - 1); i.classList.toggle('now', k === s.launch - 1); });
    if (s.launch >= 1 && s.launch <= 4) stage.textContent = stages[s.launch - 1];
    root.classList.toggle('stamped', s.launch === 5);
    pins.forEach((p, i) => p.classList.toggle('on', i < s.pins));
    root.classList.toggle('tip', s.tip);
    root.classList.toggle('risk', s.risk);
    checks.forEach((li, i) => li.classList.toggle('ok', i < s.checks));
    root.classList.toggle('passed', s.checks > CHECKS);
    if (animate && s.launch === 5 && prev.launch !== 5) restart(stamp, 'thud');
    if (animate && s.checks > CHECKS && prev.checks <= CHECKS) restart(passed, 'thud');
  };
  const set = (s: State, animate: boolean) => { const prev = state; state = s; render(prev, s, animate); };
  const enter = (n: number) => { scene = n; t = 0; next = 0; set({ ...state, ...SCENES[n - 1].start }, false); };
  const setPlaying = (on: boolean) => {
    playing = on;
    root.classList.toggle('paused', !on);
    toggle.classList.toggle('paused', !on);
    toggle.querySelector('span')!.textContent = on ? toggle.dataset.pause! : toggle.dataset.play!;
  };

  setInterval(() => {
    if (!playing || !inView || document.hidden) return;
    t += 100;
    const sc = SCENES[scene - 1];
    while (next < sc.at.length && sc.at[next][0] <= t) set({ ...state, ...sc.at[next++][1] }, !reduce);
    if (t >= sc.end) enter((scene % SCENES.length) + 1);
  }, 100);
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0.25 }).observe(root);

  // A scene button plays from the start of that scene; with reduced motion it shows the scene finished.
  scenes.forEach(b => b.addEventListener('click', () => {
    const n = Number(b.dataset.go);
    if (reduce){ scene = n; set(finished(n), false); return; }
    enter(n);
    setPlaying(true);
  }));
  toggle.addEventListener('click', () => {
    if (!playing && reduce) enter(scene);
    setPlaying(!playing);
  });

  if (reduce) set(finished(1), false); else enter(1);
  setPlaying(playing);
}
