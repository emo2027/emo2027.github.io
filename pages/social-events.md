---
layout: page
title: Social Events
permalink: /social-events/
description: Social events at EMO 2027 including the welcome reception, boat tour, and conference banquet.
---

EMO 2027 offers an exciting social programme designed to foster networking, collaboration, and enjoyment outside of the technical sessions. All social events provide opportunities to explore Exeter's charm while connecting with fellow researchers.

{% for event in site.data.social_events.events %}

## {{ event.title }}

{% assign schedule_day = nil %}
{% assign schedule_event = nil %}
{% for day in site.data.schedule.days %}
{% assign match = day.events | where: "id", event.schedule_id | first %}
{% if match %}
{% assign schedule_day = day %}
{% assign schedule_event = match %}
{% endif %}
{% endfor %}

{% if schedule_day and schedule_event %}
**{{ schedule_day.date | date: "%A, %-d %B %Y" }} \| {{ schedule_event.time }}**
{: .event-datetime }
{% endif %}

{% if event.location %}
**{{ event.location.label }}: [{{ event.location.name }}]({{ event.location.url }}){% if event.location.suffix %}, {{ event.location.suffix }}{% endif %}**
{: .event-datetime }
{% endif %}

{{ event.intro }}

{% if event.sections %}
{% for section in event.sections %}

### {{ section.heading }}

{% for item in section.items %}

- {{ item }}
  {% endfor %}

{% endfor %}
{% endif %}

{% if event.notes %}
{% for note in event.notes %}
{{ note }}

{% endfor %}
{% endif %}

{% if event.info_box %}

<div class="info-box {{ event.info_box.style }}">
  <p><strong>{{ event.info_box.label }}</strong> {{ event.info_box.text }}</p>
</div>
{% endif %}

{% endfor %}

## Contact

For questions about social events, please contact the organisers at [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }}).
