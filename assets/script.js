(() => {
  const root = document.documentElement;
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  const themeToggle = document.querySelector('.theme-toggle');
  const year = document.querySelector('#current-year');

  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation, with keyboard-friendly open/close behaviour.
  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('is-open');
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  // Optional light/dark theme switch. The website starts in dark mode.
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* Storage may be disabled. */ }
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  const updateThemeLabel = () => {
    if (!themeToggle) return;
    const isLight = root.dataset.theme === 'light';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  };
  updateThemeLabel();
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (_) { /* Theme still changes for this session. */ }
      updateThemeLabel();
    });
  }

  // Enable WhatsApp/Facebook only after valid contact information is supplied.
  const config = window.SITE_CONFIG || {};
  const disablePlaceholderLink = (link, instruction) => {
    link.setAttribute('aria-disabled', 'true');
    link.setAttribute('href', '#contact');
    link.setAttribute('title', instruction);
    link.classList.add('is-unconfigured');
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const small = link.querySelector('small');
      if (small) {
        const original = small.textContent;
        small.textContent = instruction;
        window.setTimeout(() => { small.textContent = original; }, 2800);
      }
    });
  };

  document.querySelectorAll('[data-social="whatsapp"]').forEach((link) => {
    const number = String(config.whatsappNumber || '').replace(/\D/g, '');
    if (/^\d{8,15}$/.test(number)) {
      link.href = `https://wa.me/${number}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
      link.classList.remove('is-unconfigured');
      const small = link.querySelector('small');
      if (small) small.textContent = 'Message me on WhatsApp';
    } else {
      disablePlaceholderLink(link, 'Add your WhatsApp number (country code + number, digits only) in site-config.js.');
    }
  });

  document.querySelectorAll('[data-social="facebook"]').forEach((link) => {
    let url = null;
    try {
      const candidate = new URL(String(config.facebookUrl || ''));
      if (candidate.protocol === 'https:' && ['facebook.com', 'www.facebook.com', 'm.facebook.com'].includes(candidate.hostname)) url = candidate.href;
    } catch (_) { /* No profile URL has been set, or the URL is invalid. */ }

    if (url) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
      link.classList.remove('is-unconfigured');
      const small = link.querySelector('small');
      if (small) small.textContent = 'Personal profile';
    } else {
      disablePlaceholderLink(link, 'Add a valid https://www.facebook.com/... profile URL in site-config.js.');
    }
  });
})();
