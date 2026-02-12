---
layout: page
title: At a Glance
permalink: /at-a-glance/
description: Key facts, dates, and links for EMO 2027.
---

## Key Facts

<ul>
  <li><strong>Dates:</strong> {{ site.data.conference.dates.display }} (inclusive)</li>
  <li><strong>Location:</strong> {{ site.data.conference.location.full }}</li>
  <li><strong>Venue:</strong> <a href="{{ site.data.conference.venue.url }}">{{ site.data.conference.venue.name }}</a>, University of Exeter ({{ site.data.conference.venue.room }})</li>
  <li><strong>Format:</strong> {{ site.data.conference.format.summary }}</li>
  {% assign glance_events = site.data.social_events.events | where_exp: "event", "event.at_a_glance" %}
  {% for event in glance_events %}
  <li><strong>{{ event.at_a_glance.label }}:</strong> {{ event.at_a_glance.detail }}</li>
  {% endfor %}
</ul>

## Add to Your Calendar

<a href="{{ '/assets/ics/emo-2027-conference.ics' | relative_url }}" class="btn btn-primary">Download Conference Dates (ICS)</a>
<a href="{{ '/assets/ics/emo-2027-deadlines.ics' | relative_url }}" class="btn btn-secondary">Download Key Deadlines (ICS)</a>

<div class="info-box notice">
  <strong>Note:</strong> Deadlines are currently listed as placeholders and will be updated once confirmed.
</div>

## Quick Links

- [Call for Papers]({{ '/calls/' | relative_url }})
- [Programme]({{ '/programme/' | relative_url }})
- [Registration]({{ '/registration/' | relative_url }})
- [Venue & Campus]({{ '/venue/' | relative_url }})
- [Accommodation]({{ '/accommodation/' | relative_url }})
- [Local Information]({{ '/local-info/' | relative_url }})
- [Social Events]({{ '/social-events/' | relative_url }})

## Contact

For questions, contact the organisers at [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }}).
