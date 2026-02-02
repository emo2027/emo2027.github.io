/**
 * EMO 2027 External Link Handling
 * Opens external links in a new tab with safe rel attributes.
 */

(function() {
  'use strict';

  const INTERNAL_HOSTS = new Set([
    '127.0.0.1',
    'localhost',
    '0.0.0.0',
    'emo2027.github.io'
  ]);

  function isExternalLink(link) {
    const href = link.getAttribute('href');
    if (!href) return false;

    if (href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;

    try {
      const url = new URL(href, window.location.href);
      if (url.origin === window.location.origin) {
        return false;
      }
      if (INTERNAL_HOSTS.has(url.hostname)) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  function applyExternalTargets() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(function(link) {
      if (link.hasAttribute('data-no-external')) return;
      if (!isExternalLink(link)) return;

      link.setAttribute('target', '_blank');

      const relValue = (link.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
      if (!relValue.includes('noopener')) {
        relValue.push('noopener');
      }
      link.setAttribute('rel', relValue.join(' '));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyExternalTargets);
  } else {
    applyExternalTargets();
  }
})();
