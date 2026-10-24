// The feature animations on the landing page, marked `data-reveal`: each plays once when it scrolls into view. With
// reduced motion the finished state shows straight away. Until this runs, the page shows the plain version.
const PLAY: Record<string, (el: HTMLElement) => void> = {
  // A beam sweeps across the signal chips; each turns green as it passes.
  scan(el){
    el.querySelectorAll<HTMLElement>('.chips li').forEach(li => li.style.setProperty('--d', `${((li.offsetLeft + li.offsetWidth / 2) / el.clientWidth) * 1.4}s`));
  },
  // The comparison marks appear row by row, then the "passed" stamp lands (both in CSS).
  check(){},
  // A click in the leading window travels to the others; the last one reports a problem.
  sync(el){
    el.querySelector<SVGAnimationElement>('#sync-go')!.beginElement();
    setTimeout(() => el.classList.add('done'), 1300);
  }
};

export function startReveal(){
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches){
    els.forEach(el => el.classList.add('play', 'done'));
    return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target as HTMLElement;
    PLAY[el.dataset.reveal!](el);
    el.classList.add('play');
  }), { threshold: 0.3 });
  els.forEach(el => { el.classList.add('armed'); io.observe(el); });
}
