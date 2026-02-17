---
layout: page
title: Organisers
permalink: /organisers/
description: EMO 2027 organising committee and contact information.
---

## Organising Committee

EMO 2027 is organised by a dedicated team of researchers from around the world. We are committed to making this conference a memorable and productive experience for all attendees.

{% for section in site.data.organizers.organizer_sections %}

## {{ section.title }}

{% if section.title == "EMO Steering Committee" %}
The EMO conference series is guided by a steering committee. For the current membership, please see the <a href="{{ section.external_link.url }}">EMO conference series website</a>.
{% elsif section.people.size > 0 %}

<div class="organizer-section">
  <div class="organizer-grid">
    {% for person in section.people %}
    <div class="organizer-card">
      <span class="organizer-name">{{ person.name }}</span>
      {% if person.affiliation %}
      <span class="organizer-affiliation">{{ person.affiliation }}</span>
      {% endif %}
      {% comment %}Emails hidden from site but kept in _data/organizers.yml for reference{% endcomment %}
    </div>
    {% endfor %}
  </div>
</div>
{% endif %}
{% endfor %}

{% assign programme_committee = site.data.organizers.programme_committee %}

## {{ programme_committee.title }}

<div class="info-box tbd">
  <h3>{{ programme_committee.heading }}</h3>
  <p>{{ programme_committee.note }}</p>
</div>

## Contact

For general inquiries about EMO 2027, please contact:

{% assign contact = site.data.organizers.contact %}
**Email**: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})

### Specific Inquiries

<table>
  <thead>
    <tr>
      <th>Topic</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    {% for item in contact.topics %}
    <tr>
      <td>{{ item.topic }}</td>
      <td>
        {% if item.use_conference_email %}
        <a href="mailto:{{ site.data.conference.contact.email }}">{{ site.data.conference.contact.email }}</a>
        {% elsif item.email %}
        <a href="mailto:{{ item.email }}">{{ item.email }}</a>
        {% else %}
        {{ item.contact }}
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Host Institution

<div class="info-box notice">
  <p>EMO 2027 is proudly hosted by the <strong>University of Exeter</strong>, a Russell Group university consistently ranked among the top 15 universities in the UK.</p>
  <p>The university's Department of Computer Science is home to leading research groups in computational intelligence, machine learning, and optimization.</p>
  <a href="https://www.exeter.ac.uk" class="btn btn-secondary">Visit University of Exeter</a>
</div>
