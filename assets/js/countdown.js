/**
 * EMO 2027 Countdown Timer
 * Reads dates from data attributes and displays countdown timers
 */

(function() {
  'use strict';

  /**
   * Parse a date string and optional time into a Date object
   * @param {string} dateStr - Date in YYYY-MM-DD format
   * @param {string} timeStr - Optional time in HH:MM format
   * @returns {Date}
   */
  function parseDate(dateStr, timeStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    let hours = 23, minutes = 59, seconds = 59; // Default to end of day

    if (timeStr) {
      const [h, m] = timeStr.split(':').map(Number);
      hours = h;
      minutes = m;
      seconds = 59;
    }

    return new Date(year, month - 1, day, hours, minutes, seconds);
  }

  /**
   * Calculate time remaining until target date
   * @param {Date} targetDate
   * @returns {Object|null} Object with days, hours, minutes, seconds or null if passed
   */
  function getTimeRemaining(targetDate) {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return null;
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  /**
   * Update a single countdown timer display
   * @param {HTMLElement} element - The countdown item element
   */
  function updateCountdown(element) {
    const dateStr = element.dataset.date;
    const timeStr = element.dataset.time;

    if (!dateStr) return;

    const targetDate = parseDate(dateStr, timeStr);
    const timeRemaining = getTimeRemaining(targetDate);

    const daysEl = element.querySelector('.days');
    const hoursEl = element.querySelector('.hours');
    const minutesEl = element.querySelector('.minutes');
    const secondsEl = element.querySelector('.seconds');

    if (!timeRemaining) {
      // Date has passed
      element.classList.add('completed');
      if (daysEl) daysEl.textContent = '0';
      if (hoursEl) hoursEl.textContent = '0';
      if (minutesEl) minutesEl.textContent = '0';
      if (secondsEl) secondsEl.textContent = '0';
      return;
    }

    // Update display
    if (daysEl) daysEl.textContent = timeRemaining.days;
    if (hoursEl) hoursEl.textContent = String(timeRemaining.hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(timeRemaining.minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(timeRemaining.seconds).padStart(2, '0');
  }

  /**
   * Initialize all countdown timers on the page
   */
  function initCountdowns() {
    const countdownItems = document.querySelectorAll('.countdown-item');

    if (countdownItems.length === 0) return;

    // Initial update
    countdownItems.forEach(updateCountdown);

    // Update every second
    setInterval(function() {
      countdownItems.forEach(updateCountdown);
    }, 1000);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdowns);
  } else {
    initCountdowns();
  }
})();
