/**
 * Site-wide motion: inertial scrolling, scroll reveals, the header's scroll
 * states, the card spotlight and the case-study reading bar.
 *
 * Contract with the rest of the site:
 * - Nothing here is needed to *see* content. Reveal targets are only hidden
 *   once this module has tagged them (`.reveal`), so if it never runs, every
 *   element simply renders in place. The cover's entrance is pure CSS.
 * - prefers-reduced-motion: reduce → this module does nothing at all.
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  /* ---------- Inertial scroll ----------
     Wheel and trackpad only — touch keeps the platform's own momentum, which
     no library improves on. Nested scrollers (tables, the slide strip) keep
     native scrolling. Anchors land below the fixed header: Lenis honours the
     page's scroll-padding-top, so no offset is added here. */
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    autoRaf: true,
    allowNestedScroll: true,
    anchors: true,
    stopInertiaOnNavigate: true,
  });

  // The photo viewer locks the page; inertia must stop with it.
  new MutationObserver(() => {
    if (root.classList.contains('lightbox-open')) lenis.stop();
    else lenis.start();
  }).observe(root, { attributes: true, attributeFilter: ['class'] });

  /* ---------- Scroll reveals ----------
     Each target rises 28px and fades in once, the first time it enters the
     viewport. Siblings inside a grid or list stagger by 90ms so a row arrives
     as a sequence rather than a block. */
  const targets = document.querySelectorAll<HTMLElement>(
    [
      '.section-head',
      '.media-row',
      '.event-card',
      '.cs-meta',
      '.cs-body > :not(script, style, template)',
      '.deck',
      '.mosaic-item',
      '.door-stage',
      '.book-card',
    ].join(','),
  );

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  targets.forEach((el) => {
    const siblings = el.parentElement
      ? [...el.parentElement.children].filter((c) => (c as HTMLElement).matches?.('.media-row, .event-card, .mosaic-item'))
      : [];
    const i = siblings.indexOf(el);
    if (i > 0) el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 90}ms`);
    el.classList.add('reveal');
    io.observe(el);
  });

  /* ---------- Everything that follows the scroll position ----------
     One handler on Lenis's tick, not one listener per effect. It reads only
     cached geometry (measured on load and resize, never per frame, so no
     forced layout) and writes only GPU-cheap properties: transforms and two
     header classes, each touched only when its value actually changes. */
  const header = document.querySelector<HTMLElement>('.site-header');
  const nav = document.getElementById('nav-links');
  const coverBg = document.querySelector<HTMLElement>('.page-header-bg');
  const cover = coverBg?.parentElement ?? null;
  const scene = document.querySelector<HTMLElement>('.door-scene');
  const sceneArt = scene?.querySelector<HTMLElement>('.door-scene-art') ?? null;
  const article = document.querySelector<HTMLElement>('.cs-body')?.closest('article, main') as HTMLElement | null;

  let bar: HTMLElement | null = null;
  if (article) {
    bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
  }

  // Document-space geometry, refreshed when layout can have changed.
  const geo = { vh: 0, coverBottom: 0, sceneTop: 0, sceneH: 1, artTop: 0, artH: 1 };
  const docTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;
  const measure = () => {
    geo.vh = window.innerHeight;
    if (cover) geo.coverBottom = docTop(cover) + cover.offsetHeight;
    if (scene) { geo.sceneTop = docTop(scene); geo.sceneH = scene.offsetHeight || 1; }
    if (article) { geo.artTop = docTop(article); geo.artH = article.offsetHeight || 1; }
  };

  const TRAVEL = 60; // footer engraving drift, px
  let lastY = window.scrollY;
  let scrolled = false, tucked = false;
  let coverY = NaN, sceneY = NaN, barP = NaN;

  const frame = (y: number) => {
    // Header: solid once the page moves; tucks on a deliberate scroll down.
    if (header) {
      const nextScrolled = y > 24;
      let nextTucked = tucked;
      const menuOpen = nav?.classList.contains('open');
      if (!menuOpen && y > 320 && y - lastY > 6) nextTucked = true;
      else if (lastY - y > 6 || y <= 320) nextTucked = false;
      if (Math.abs(y - lastY) > 6) lastY = y;
      if (nextScrolled !== scrolled) header.classList.toggle('is-scrolled', (scrolled = nextScrolled));
      if (nextTucked !== tucked) header.classList.toggle('is-tucked', (tucked = nextTucked));
    }

    // Cover parallax: the engraving trails the page at 35% of scroll speed.
    if (coverBg && y < geo.coverBottom) {
      const v = Math.round(y * 0.35);
      if (v !== coverY) coverBg.style.transform = `translate3d(0, ${(coverY = v)}px, 0)`;
    }

    // Footer parallax: 0 → -60px as the footer scrolls in; lands bottom-aligned.
    if (scene) {
      const top = geo.sceneTop - y;
      if (top < geo.vh) {
        const pr = Math.min(1, Math.max(0, (geo.vh - top) / geo.sceneH));
        const v = Math.round(-TRAVEL * pr * 10) / 10;
        if (v !== sceneY && sceneArt) sceneArt.style.transform = `translate3d(0, ${(sceneY = v)}px, 0)`;
      }
    }

    // Reading progress on long-form pages.
    if (bar) {
      const total = geo.artH - geo.vh;
      const pr = total > 0 ? Math.min(1, Math.max(0, (y - geo.artTop) / total)) : 0;
      const v = Math.round(pr * 1000) / 1000;
      if (v !== barP) bar.style.transform = `scaleX(${(barP = v)})`;
    }
  };

  measure();
  frame(window.scrollY);
  lenis.on('scroll', ({ scroll }: { scroll: number }) => frame(scroll));
  window.addEventListener('resize', () => { measure(); frame(window.scrollY); });
  // Lazy images and fonts shift layout after load; re-measure when they do.
  new ResizeObserver(() => { measure(); frame(window.scrollY); }).observe(document.body);

  // Keyboard users tabbing into a tucked header must be able to see it.
  header?.addEventListener('focusin', () => {
    if (tucked) header.classList.toggle('is-tucked', (tucked = false));
  });

  /* ---------- Cloud bands pause off screen ---------- */
  const cloudIO = new IntersectionObserver((entries) => {
    for (const e of entries) e.target.classList.toggle('is-offscreen', !e.isIntersecting);
  });
  document.querySelectorAll('.cloud-drift').forEach((el) => cloudIO.observe(el));

  /* ---------- Card spotlight ----------
     A soft light that follows the pointer across a card. Fine pointers only. */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll<HTMLElement>('.media-row, .event-card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }
}
