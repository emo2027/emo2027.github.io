/**
 * EMO 2027 Search Functionality
 * Client-side search using Lunr.js
 */

(function() {
  'use strict';

  let searchIndex = null;
  let searchData = null;
  let searchInput = null;
  let searchResults = null;
  let searchOverlay = null;
  let searchToggle = null;
  let searchClose = null;

  /**
   * Load search index from JSON
   */
  async function loadSearchIndex() {
    try {
      const response = await fetch('/search.json');
      if (!response.ok) {
        throw new Error('Failed to load search index');
      }
      searchData = await response.json();

      // Build Lunr index
      searchIndex = lunr(function() {
        this.ref('url');
        this.field('title', { boost: 10 });
        this.field('content');

        searchData.forEach(function(doc) {
          this.add(doc);
        }, this);
      });
    } catch (error) {
      console.warn('Search index not available:', error.message);
    }
  }

  /**
   * Perform search and display results
   * @param {string} query
   */
  function performSearch(query) {
    if (!searchIndex || !query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    try {
      const results = searchIndex.search(query + '*');

      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item"><p>No results found.</p></div>';
        return;
      }

      const html = results.slice(0, 10).map(function(result) {
        const doc = searchData.find(function(d) { return d.url === result.ref; });
        if (!doc) return '';

        const excerpt = doc.content ? doc.content.substring(0, 150) + '...' : '';

        return '<div class="search-result-item">' +
          '<a href="' + doc.url + '">' +
          '<h4>' + escapeHtml(doc.title) + '</h4>' +
          '<p>' + escapeHtml(excerpt) + '</p>' +
          '</a></div>';
      }).join('');

      searchResults.innerHTML = html;
    } catch (error) {
      searchResults.innerHTML = '<div class="search-result-item"><p>Search error. Please try again.</p></div>';
    }
  }

  /**
   * Escape HTML special characters
   * @param {string} text
   * @returns {string}
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Open search overlay
   */
  function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close search overlay
   */
  function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    document.body.style.overflow = '';
  }

  /**
   * Initialize mobile navigation
   */
  function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
        }
      });
    }
  }

  /**
   * Initialize search functionality
   */
  function init() {
    searchInput = document.getElementById('search-input');
    searchResults = document.getElementById('search-results');
    searchOverlay = document.getElementById('search-overlay');
    searchToggle = document.getElementById('search-toggle');
    searchClose = document.getElementById('search-close');

    // Initialize mobile navigation
    initMobileNav();

    if (!searchInput || !searchOverlay) return;

    // Load search index
    loadSearchIndex();

    // Search toggle
    if (searchToggle) {
      searchToggle.addEventListener('click', openSearch);
    }

    // Close search
    if (searchClose) {
      searchClose.addEventListener('click', closeSearch);
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearch();
      }
    });

    // Close on overlay click (not on content)
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });

    // Debounced search
    let debounceTimer;
    searchInput.addEventListener('input', function(e) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        performSearch(e.target.value);
      }, 300);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
