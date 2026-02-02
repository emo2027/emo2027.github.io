---
layout: page
title: Call for Papers
permalink: /calls/
description: Submit your research to EMO 2027 - the premier venue for evolutionary multi-criterion optimization.
---

## Overview

The 14th International Conference on Evolutionary Multi-Criterion Optimization (EMO 2027) invites high-quality submissions presenting original research on all aspects of multi-criterion optimization using evolutionary computation and related approaches.

EMO 2027 will be held **{{ site.data.conference.dates.display }}** at the University of Exeter, {{ site.data.conference.location.full }}.

## Important Dates

<div class="info-box notice">
  <strong>Note:</strong> All dates are tentative and subject to change. Deadlines are at 23:59 AoE (Anywhere on Earth).
</div>

<table>
  <thead>
    <tr>
      <th>Milestone</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {% assign call_dates = site.data.dates.dates | where: "include_in_calls", true %}
    {% for milestone in call_dates %}
    <tr>
      <td>{{ milestone.name }}</td>
      <td>{% if milestone.date contains '-' %}{{ milestone.date | date: "%-d %B %Y" }}{% else %}{{ milestone.date }}{% endif %}</td>
    </tr>
    {% endfor %}
    <tr>
      <td>Conference Dates</td>
      <td>{{ site.data.conference.dates.display }}</td>
    </tr>
  </tbody>
</table>

<p><a href="{{ '/assets/ics/emo-2027-deadlines.ics' | relative_url }}">Add key deadlines to your calendar (ICS)</a></p>

## Topics of Interest

{{ site.data.topics.intro }}

{% for category in site.data.topics.categories %}
### {{ category.name }}
{% for topic in category.topics %}
- {{ topic }}
{% endfor %}

{% endfor %}

## Submission Guidelines

### Paper Format

Papers should not exceed **15 pages** including references and appendices.
<!-- COMMENTED OUT - awaiting official Springer confirmation: Papers must be submitted in **Springer LNCS format** and should not exceed... -->

- Papers must be submitted as PDF files
- All submissions must be original and not under review elsewhere
- Formatting guidelines will be announced soon
<!-- COMMENTED OUT - awaiting official Springer confirmation: - LaTeX template: [LNCS Author Guidelines](https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines) -->

### Submission System

<div class="info-box tbd">
  <h3>Coming Soon</h3>
  <p>The submission system will be announced in early 2026.</p>
</div>

### Review Process

All submissions will undergo peer review by at least three members of the Programme Committee. Details of the review process (including any anonymization requirements) will be announced with the submission system.

## Publication

Publication details will be announced soon.

<!-- COMMENTED OUT - awaiting official Springer confirmation:
Accepted papers will be published in **Springer Lecture Notes in Computer Science (LNCS)** and indexed in major databases including:

- Scopus
- Web of Science
- DBLP
- Google Scholar

Selected high-quality papers may be invited for extension and submission to special issues in leading journals.
-->

## Presentation Requirements

At least one author of each accepted paper must register for the conference at the **full registration rate** and present the paper in person. Papers without a registered presenter will not be included in the proceedings.

## Special Sessions and Tutorials

### Special Sessions

We invite proposals for **special sessions** focusing on emerging topics within the scope of EMO. Special session proposals should include:

- Title and brief description (200-300 words)
- Names, affiliations, and brief bios of organizers
- List of potential contributors (if available)
- Relevance to the EMO community

### Tutorial Proposals

We also welcome proposals for **tutorials** on topics relevant to the EMO community. Tutorial proposals should include:

- Title and abstract (300-500 words)
- Intended audience and prerequisites
- Outline of the tutorial content
- Duration (half-day or full-day)
- CV of the presenter(s)

<div class="info-box notice">
  <h3>Proposal Submission</h3>
  <p>Please submit special session and tutorial proposals to <a href="mailto:{{ site.data.conference.contact.email }}">{{ site.data.conference.contact.email }}</a></p>
</div>

## Contact

For questions regarding submissions, please contact the Programme Chairs:

{% assign programme_chairs = site.data.organizers.organizer_sections | where: "title", "Programme Chairs" | first %}
{% if programme_chairs %}
{% for chair in programme_chairs.people %}
- **{{ chair.name }}** ({{ chair.affiliation }}){% if chair.email %} — [{{ chair.email }}](mailto:{{ chair.email }}){% endif %}
{% endfor %}
{% else %}
- **Oliver Schutze** (CINVESTAV-IPN, Mexico)
- **Tea Tusar** (Jozef Stefan Institute, Slovenia)
{% endif %}

Email: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})
