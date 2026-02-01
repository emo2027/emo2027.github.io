/**
 * EMO 2027 Dark Mode Toggle
 * Handles theme switching with localStorage persistence
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  /**
   * Get the current theme preference
   * @returns {string} 'dark' or 'light'
   */
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  /**
   * Set the theme on the document
   * @param {string} theme - 'dark' or 'light'
   */
  function setTheme(theme) {
    if (theme === DARK) {
      document.documentElement.setAttribute('data-theme', DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === DARK ? LIGHT : DARK;

    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }

  /**
   * Initialize dark mode functionality
   */
  function init() {
    // Set initial theme (already done in head, but ensure consistency)
    setTheme(getPreferredTheme());

    // Add click handler to toggle button
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      // Only update if user hasn't set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? DARK : LIGHT);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
