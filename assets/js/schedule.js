/**
 * EMO 2027 Interactive Schedule
 * Handles filtering and display of conference schedule
 */

(function() {
  'use strict';

  let dayFilter = null;
  let typeFilter = null;
  let scheduleDays = null;
  let eventCards = null;

  /**
   * Filter schedule by selected criteria
   */
  function filterSchedule() {
    const selectedDay = dayFilter ? dayFilter.value : 'all';
    const selectedType = typeFilter ? typeFilter.value : 'all';

    // Filter days
    scheduleDays.forEach(function(day) {
      const dayDate = day.dataset.date;
      const showDay = selectedDay === 'all' || dayDate === selectedDay;

      if (showDay) {
        day.classList.remove('hidden');
      } else {
        day.classList.add('hidden');
      }
    });

    // Filter events by type
    eventCards.forEach(function(card) {
      const eventType = card.dataset.type;
      const showEvent = selectedType === 'all' || eventType === selectedType;

      if (showEvent) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    // Hide days that have no visible events
    scheduleDays.forEach(function(day) {
      if (day.classList.contains('hidden')) return;

      const visibleEvents = day.querySelectorAll('.event-card:not(.hidden)');
      if (visibleEvents.length === 0 && selectedType !== 'all') {
        day.classList.add('hidden');
      }
    });
  }

  /**
   * Initialize schedule filtering
   */
  function init() {
    dayFilter = document.getElementById('day-filter');
    typeFilter = document.getElementById('type-filter');
    scheduleDays = document.querySelectorAll('.schedule-day');
    eventCards = document.querySelectorAll('.event-card');

    if (!dayFilter && !typeFilter) return;

    if (dayFilter) {
      dayFilter.addEventListener('change', filterSchedule);
    }

    if (typeFilter) {
      typeFilter.addEventListener('change', filterSchedule);
    }

    // Add keyboard navigation for accessibility
    eventCards.forEach(function(card) {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          card.classList.toggle('expanded');
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
