(function() {
  'use strict';

  // Constants
  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // Sync giscus theme with site theme
  function setGiscusTheme(theme) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: theme } } },
        'https://giscus.app'
      );
    }
  }

  // Initialize theme from localStorage or system preference
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
      document.body.setAttribute('data-theme', saved);
    } else {
      // No saved preference - check system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = prefersDark ? DARK : LIGHT;
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      // Don't save to localStorage - let user explicitly toggle to save preference
    }
  }

  // Toggle theme and save preference
  window.toggleTheme = function() {
    const current = document.body.getAttribute('data-theme') || 'light';
    const newMode = current === DARK ? LIGHT : DARK;
    document.documentElement.setAttribute('data-theme', newMode);
    document.body.setAttribute('data-theme', newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
    setGiscusTheme(newMode);
  };

  // Run initialization on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
