---
layout: page
title: Registration
permalink: /registration/
description: Register for EMO 2027 - the 14th International Conference on Evolutionary Multi-Criterion Optimization.
---

## Conference Registration

<div class="info-box tbd">
  <h3>Coming Soon</h3>
  <p>Registration will open in early 2027. Please check back later for registration details and fees.</p>
</div>

## Registration Fees (Tentative)

The following registration fees are tentative and subject to change:

| Category           | Early Bird | Regular |
| ------------------ | ---------- | ------- |
| Regular (Academic) | TBD        | TBD     |
| Student            | TBD        | TBD     |
| Industry           | TBD        | TBD     |

### What's Included

Full conference registration includes:

- Access to all technical sessions, keynotes, and tutorials
- Conference materials and proceedings
- Welcome reception (Monday evening)
- Coffee breaks and lunches (Monday-Thursday)
- Conference banquet (Wednesday evening)

### Optional Events

- **Boat Tour** (Tuesday evening, TBC) - Additional fee applies
- **Accompanying Person Registration** - Available for social events only

## Important Dates

<table>
  <thead>
    <tr>
      <th>Milestone</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {% assign registration_dates = site.data.dates.dates | where: "include_in_registration", true %}
    {% for milestone in registration_dates %}
    <tr>
      <td>{{ milestone.name }}</td>
      <td>{% if milestone.date contains '-' %}{{ milestone.date | date: "%-d %B %Y" }}{% else %}{{ milestone.date }}{% endif %}</td>
    </tr>
    {% endfor %}
    <tr>
      <td>On-site Registration</td>
      <td>{{ site.data.conference.dates.display }}</td>
    </tr>
  </tbody>
</table>

## Author Registration

<div class="info-box notice">
  <strong>Important:</strong> At least one author of each accepted paper must register for the conference at the <strong>full registration rate</strong> and present the paper in person. Papers without a registered presenter will not be included in the proceedings.
</div>

## Payment Methods

Registration fees can be paid by:

- Credit card (Visa, Mastercard, American Express)
- Bank transfer

Detailed payment instructions will be provided when registration opens.

## Cancellation Policy

<div class="info-box tbd">
  <h3>To Be Announced</h3>
  <p>The cancellation policy will be announced when registration opens.</p>
</div>

## Visa Support Letters

Registered participants who require a visa support letter for UK entry can request one through the registration system. Please allow sufficient time for visa processing.

## Contact

For registration inquiries, please contact:

Email: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})
