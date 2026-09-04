---
layout: page
title: Registration
permalink: /registration/
description: Registration fees, deadlines and policies for EMO 2027 - the 14th International Conference on Evolutionary Multi-Criterion Optimization.
---

## Conference Registration

<div class="info-box notice">
  <h3>Registration Opening Soon</h3>
  <p>The registration system will open soon. The registration fees and conditions are listed below; please check back for the registration link.</p>
</div>

## Registration Fees

All fees are in pounds sterling (GBP). Early bird rates apply to registrations completed by **14 January 2027**; standard rates apply from 15 January 2027 onwards.

| Category                            | Early Bird (until 14 Jan 2027) | Standard (from 15 Jan 2027) |
| ----------------------------------- | ------------------------------ | --------------------------- |
| Regular                             | £500                           | £560                        |
| Student                             | £370                           | £430                        |
| Tutorial Speaker (one per tutorial) | £250                           | £280                        |

### Additional Fees

| Item                                             | Fee  |
| ------------------------------------------------ | ---- |
| Additional paper/abstract (one per registration) | £160 |
| Additional ticket for welcome reception          | £25  |
| Additional ticket for conference dinner          | £65  |

### Regular Registration

Each regular registration covers up to two (2) papers/abstracts co-authored by the delegate. A third paper/abstract can be covered at an additional charge of £160. No more than three papers/abstracts can be covered by a single registration.

### Student Registration

Student registration gives access to everything included in a regular registration, but covers only one (1) paper/abstract; a second can be covered at an additional charge of £160. To qualify for the student rate:

- the registered student must be enrolled in a full-time undergraduate or postgraduate degree at the time of registration;
- the registered student should be the presenter of the paper at the conference (unless the paper is already covered under a different registration);
- the registered student should send proof of student status to [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }}), e.g. a letter from a university or supervisor/advisor confirming full-time student enrolment.

### Tutorial Speaker Registration

The tutorial speaker rate is available to one speaker per accepted tutorial. It is treated as a full registration, i.e. it covers up to two (2) papers/abstracts co-authored by the speaker. A speaker giving more than one tutorial is eligible for only one discounted registration. This discount is non-stackable.

### What's Included

Every registration (regular, student, and tutorial speaker) includes:

- Access to all conference sessions (tutorials, keynotes, and paper sessions)
- Arrival, morning, and afternoon coffee/tea breaks
- Buffet lunches
- Social events, e.g. the welcome reception (Monday 5 April 2027) and the conference dinner (Wednesday 7 April 2027)

Additional tickets for the welcome reception and conference dinner, e.g. for accompanying persons, can be purchased at the prices listed above.

## Important Dates

<div class="info-box notice">
  <strong>Note:</strong> All deadlines are at 23:59 Anywhere on Earth.
</div>

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

{% assign author_registration = site.data.dates.dates | where: "name", "Author Registration Deadline" | first %}

<div class="info-box warning">
  <strong>Important:</strong> To be included in the proceedings, each accepted paper/abstract must be covered under a registration of at least one of the authors who will present the work at the conference. This registration must be completed by the author registration deadline (<strong>{{ author_registration.date | date: "%-d %B %Y" }}, AoE</strong>).
</div>

## Cancellation and Transfer Policy

The registration fee is non-refundable. However, a registration can be transferred to another person who qualifies for an equal or lower cost registration category. To request a transfer, or for any other queries related to registration, please contact [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }}).

## Visa Support Letters

Registered participants who require a visa support letter for UK entry should email [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }}) with their registration details. Please allow sufficient time for visa processing.

## Contact

For registration inquiries, please contact:

Email: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})
