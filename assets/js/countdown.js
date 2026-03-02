/**
 * EMO 2027 Countdown Timer
 * Reads dates from data attributes and displays countdown timers
 */

(function() {
  'use strict';

  /**
   * Parse a date string into a target Date object
   * @param {string} dateStr - Date in YYYY-MM-DD format
   * @param {string} timeStr - Optional time in HH:MM format
   * @param {boolean} isAoE - Whether this is an Anywhere on Earth deadline
   * @returns {Date}
   */
  function parseDate(dateStr, timeStr, isAoE) {
    const parts = dateStr.split('-').map(Number);
    if (parts.length < 3 || parts.some(Number.isNaN)) {
      return null;
    }

    const [year, month, day] = parts;

    if (isAoE) {
      // AoE is UTC-12, so 23:59:59 AoE = next day 11:59:59 UTC
      var hours = 23, minutes = 59;
      if (timeStr) {
        var timeParts = timeStr.split(':').map(Number);
        if (!Number.isNaN(timeParts[0])) hours = timeParts[0];
        if (!Number.isNaN(timeParts[1])) minutes = timeParts[1];
      }
      return new Date(Date.UTC(year, month - 1, day, hours + 12, minutes, 59));
    }

    // Non-AoE: midnight UK time (Europe/London)
    // Determine the UTC offset for London on this date using Intl
    var testDate = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
    var londonHour = parseInt(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      hour: 'numeric',
      hour12: false
    }).format(testDate), 10);
    var offsetHours = londonHour - 12;
    return new Date(Date.UTC(year, month - 1, day, -offsetHours, 0, 0));
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
    const isAoE = element.dataset.aoe === 'true';

    if (!dateStr) return;

    const targetDate = parseDate(dateStr, timeStr, isAoE);
    if (!targetDate) return;
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
