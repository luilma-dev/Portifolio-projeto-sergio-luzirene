import { siteConfig } from './config.js';

const heroMenu = document.querySelector('.hero-menu');
const heroNav = document.querySelector('.hero-nav');
if (heroMenu && heroNav) {
  const closeMenu = () => heroMenu.setAttribute('aria-expanded', 'false');
  heroMenu.addEventListener('click', () => {
    heroMenu.setAttribute('aria-expanded', String(heroMenu.getAttribute('aria-expanded') !== 'true'));
  });
  heroNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && heroMenu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      heroMenu.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.hero-header')) closeMenu();
  });
}

const galleryQuote = document.querySelector('.gallery-union');
if (galleryQuote && 'IntersectionObserver' in window) {
  const quoteMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const quoteObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.25, rootMargin: '-12% 0px -12% 0px' });
  const updateQuoteMotion = () => {
    quoteObserver.disconnect();
    galleryQuote.classList.remove('quote-reveal', 'is-visible');
    if (quoteMotionPreference.matches) return;
    galleryQuote.classList.add('quote-reveal');
    quoteObserver.observe(galleryQuote);
  };
  updateQuoteMotion();
  quoteMotionPreference.addEventListener('change', updateQuoteMotion);
}

const experienceStat = document.querySelector('.experience-stat');
const experienceCount = document.querySelector('[data-experience-count]');
const experienceYears = Math.max(0, Math.trunc(Number(siteConfig.experienciaAnos) || 0));
experienceCount.textContent = String(experienceYears);
experienceStat.setAttribute('aria-label', `Mais de ${experienceYears} anos de experiência`);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    const duration = 1600;
    let start;
    const tick = (now) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      experienceCount.textContent = String(Math.round(experienceYears * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, { threshold: 0.5 });
  observer.observe(experienceStat);
}

if (siteConfig.nome.trim()) {
  document.querySelector('[data-driver-name]').textContent = siteConfig.nome.trim();
}

const contactButton = document.querySelector('#contact-button');
const status = document.querySelector('#contact-status');
contactButton.addEventListener('click', () => {
  const phone = siteConfig.whatsapp.replace(/\D/g, '');
  if (!/^55\d{10,11}$/.test(phone)) {
    status.textContent = 'O contato pelo WhatsApp estará disponível em breve. Volte para consultar.';
    status.hidden = false;
    return;
  }
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(siteConfig.mensagem)}`, '_blank', 'noopener,noreferrer');
});

const neighborhoodButtons = document.querySelectorAll('[data-map-neighborhood]');
const mapConnections = document.querySelectorAll('[data-neighborhood]');
neighborhoodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.getAttribute('aria-pressed') !== 'true';
    const name = selected ? button.dataset.mapNeighborhood : '';
    neighborhoodButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button && selected)));
    mapConnections.forEach((route) => {
      route.classList.toggle('is-muted', Boolean(name) && route.dataset.neighborhood !== name);
      route.classList.toggle('is-selected', route.dataset.neighborhood === name);
    });
    document.querySelector('#neighborhood-status').textContent = name
      ? `${name} em destaque. Consulte a disponibilidade para sua escola e turno.`
      : '';
  });
});

// Cada grupo possui um ritmo próprio; os efeitos existentes continuam independentes.
function initScrollReveals() {
  if (!('IntersectionObserver' in window)) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compact = window.matchMedia('(max-width: 700px)');
  const groups = new Map();
  const completed = new WeakSet();
  let observer;

  const addGroup = (root, parts) => {
    if (!root) return;
    const items = [];
    parts.forEach(([selector, kind, delay]) => {
      const matches = selector ? root.querySelectorAll(selector) : [root];
      matches.forEach((item, index) => {
        item.dataset.motion = kind;
        item.style.setProperty('--motion-delay', `${delay + index * 65}ms`);
        items.push(item);
      });
    });
    if (items.length) groups.set(root, items);
  };

  addGroup(document.querySelector('.section-heading'), [['h2', 'heading', 0], ['p', 'copy', 130]]);
  document.querySelectorAll('.care-item').forEach((item, index) =>
    addGroup(item, [['', 'copy', compact.matches ? 0 : index * 85]]));
  addGroup(document.querySelector('.driver-copy'), [
    ['h2', 'heading', 0], ['p', 'copy', 110], ['.driver-button', 'action', 230],
  ]);
  addGroup(document.querySelector('.locality-copy'), [
    ['h2', 'heading', 0], ['.locality-lead', 'copy', 100],
    ['p:not([class])', 'copy', 170], ['.neighborhoods', 'copy', 230],
    ['.locality-actions', 'action', 280],
  ]);
  addGroup(document.querySelector('.locality-map'), [['', 'map', 0]]);
  addGroup(document.querySelector('.reviews-heading'), [['h2', 'heading', 0], ['button', 'action', 140]]);
  document.querySelectorAll('.review').forEach((item, index) =>
    addGroup(item, [['', 'copy', compact.matches ? 0 : index * 90]]));
  document.querySelectorAll('.polaroid').forEach((item, index) =>
    addGroup(item, [['', 'photo', compact.matches ? 0 : index * 70]]));
  addGroup(document.querySelector('.contact-inner'), [['h2', 'heading', 0], ['.contact-action', 'action', 170]]);
  addGroup(document.querySelector('.footer'), [['', 'quiet', 0]]);

  const showGroup = (root) => {
    groups.get(root)?.forEach((item) => item.classList.add('motion-visible'));
    completed.add(root);
    observer?.unobserve(root);
  };
  const updateMotion = () => {
    observer?.disconnect();
    groups.forEach((items) => items.forEach((item) => item.classList.remove('motion-ready', 'motion-visible')));
    if (preference.matches) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) showGroup(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    groups.forEach((items, root) => {
      if (completed.has(root)) return;
      items.forEach((item) => item.classList.add('motion-ready'));
      observer.observe(root);
    });
  };
  // O foco de teclado nunca espera pela animação.
  document.addEventListener('focusin', (event) => {
    groups.forEach((items, root) => {
      if (root.contains(event.target)) {
        items.forEach((item) => item.style.setProperty('--motion-delay', '0ms'));
        showGroup(root);
      }
    });
  });
  updateMotion();
  preference.addEventListener('change', updateMotion);
}
initScrollReveals();

function initPortraitScroll() {
  const panel = document.querySelector('.portrait-panel');
  const portrait = panel?.querySelector('img');
  if (!portrait) return;

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (value) => Math.min(1, Math.max(0, value));
  let frame = 0;

  const render = () => {
    frame = 0;
    if (preference.matches) return;
    const top = panel.getBoundingClientRect().top;
    const height = window.innerHeight;
    const reveal = clamp((height * 0.96 - top) / (height * 0.6));
    portrait.style.setProperty('--portrait-opacity', reveal * reveal * (3 - 2 * reveal));
  };

  const schedule = () => {
    if (!frame && !preference.matches) frame = requestAnimationFrame(render);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  preference.addEventListener('change', schedule);
  portrait.classList.add('portrait-scroll');
  render();
}
initPortraitScroll();
