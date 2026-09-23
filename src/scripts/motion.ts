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

  /* ---------- Header scroll states ----------
     Solidifies once the page moves, tucks away on a deliberate scroll down,
     returns on any scroll up. Never hides while its menu is open or near the
     top of the page. */
  const header = document.querySelector<HTMLElement>('.site-header');
  const nav = document.getElementById('nav-links');
  let lastY = window.scrollY;

  const onScroll = () => {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    const menuOpen = nav?.classList.contains('open');
    if (!menuOpen && y > 320 && y - lastY > 6) header.classList.add('is-tucked');
    else if (lastY - y > 6 || y <= 320) header.classList.remove('is-tucked');
    if (Math.abs(y - lastY) > 6) lastY = y;
  };
  lenis.on('scroll', onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Keyboard users tabbing into a tucked header must be able to see it.
  header?.addEventListener('focusin', () => header.classList.remove('is-tucked'));

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

  /* ---------- Reading progress (long-form pages only) ---------- */
  const article = document.querySelector<HTMLElement>('.cs-body')?.closest('article, main') as HTMLElement | null;
  if (article) {
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    const update = () => {
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    lenis.on('scroll', update);
    window.addEventListener('resize', update);
    update();
  }
}
