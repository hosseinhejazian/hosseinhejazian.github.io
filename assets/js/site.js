/* Light / dark theme toggle.
   The initial theme is applied inline in <head> so the page never flashes. */
(function () {
  'use strict';

  var root = document.documentElement;
  var button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return media && media.matches ? 'dark' : 'light';
  }

  function syncLabel() {
    var theme = currentTheme();
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    button.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  button.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* private browsing — the choice just won't persist */
    }
    syncLabel();
  });

  if (media) {
    var onChange = function () { syncLabel(); };
    if (media.addEventListener) media.addEventListener('change', onChange);
    else if (media.addListener) media.addListener(onChange);
  }

  syncLabel();
})();
