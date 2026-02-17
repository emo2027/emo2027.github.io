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

### Author Guidelines

<!-- COMMENTED OUT - awaiting official Springer confirmation: All submissions must be prepared in accordance with Springer LNCS guidelines available at [LNCS Author Guidelines](https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines). -->

- Papers must be submitted as PDF files
- All submissions must be original and not under review elsewhere
- Formatting guidelines will be announced soon

### Types of Submissions

The conference will comprise the main EMO track, along with special MCDM and Industry tracks.

**EMO track:** This is the main track of the conference, where traditional full papers (maximum **12 pages excluding references**) should present state-of-the-art results on theory, algorithms, benchmarking, applications and other topics of interest as outlined in the Topics of Interest section.

**MCDM special track:** This track is intended to foster collaborations and knowledge-exchange between the two distinct but related areas of EMO and Multi-criteria Decision-making (MCDM). It recognises the value of methods in either domain that may be less known in the other, but can be of mutual benefit in solving open challenges in both fields. For this track, authors have the option to submit a full paper (maximum **12 pages excluding references**) or an abstract (maximum **2 pages including references if any**), which are MCDM focused. Studies that use non-evolutionary methods are also welcome, but the relevance to the EMO field should be indicated for the benefit of the audience.

**Industry special track:** This track is intended to encourage collaborations and knowledge-exchange between practitioners and academics on topics relevant to the conference. The aim is to improve the collective understanding of the fundamental challenges that occur in real-world applications and work collaboratively towards solving them. To emphasise the involvement of practitioners, at least one author of the submission must be from industry or a non-academic institution (e.g. public service) to qualify for submission in this track. Authors have the option to submit a full paper (maximum **12 pages excluding references**) or an abstract (maximum **2 pages including references if any**), which are focused on industrial/non-academic problems.

### Submission System

<div class="info-box tbd">
  <h3>Coming Soon</h3>
  <p>The submission system will be announced in early 2026.</p>
</div>

### Review Process

All full paper submissions (submitted to any track) will undergo standard peer review (at least 2, typically 3 reviews). The review and selection of abstract submissions will be overseen by the MCDM/Industry chairs and 1-2 additional reviewers from the programme committee if needed.

Details of the review process (including any anonymisation requirements) will be announced with the submission system.

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

Accepted papers, both full and abstract, will be presented as either oral or poster presentations. Submitting authors will be given an option to specify their preference of presentation mode (oral/poster/either), based on what suits their content the best. The final mode of presentation will be decided by considering the authors' preferences, the number of submissions received/accepted, and the conference scheduling constraints.

<!-- Wording from EMO 2025 call for papers -->
The presentation mode assigned will in no way be indicative of the quality or the reviews of the paper.

## Awards

At the conference, we will confer an **Outstanding EMO Paper Award** and an **Outstanding EMO Student Paper Award** (honorarium + plaque). Full papers in any track will be eligible for these awards (independently of presentation mode).

## Tutorials

We invite proposals for delivering a **tutorial** at EMO 2027. Tutorials are intended to provide a valuable opportunity for attendees, especially students and early career researchers, to learn from domain experts in the field. Tutorials should provide an introduction to interesting research directions and cover the key developments in sufficient breadth. Interactivity in the sessions to engage the audience is encouraged.

The tutorial slots are expected to be **75-90 minutes** and delivered in person. To apply, please send a brief proposal to <a href="mailto:{{ site.data.conference.contact.email }}">{{ site.data.conference.contact.email }}</a> containing the following information:

- Title
- A brief description of the scope and content (~1 page)
- Name and brief biography of the organiser(s)
- Email address of the corresponding organiser(s)
- If the tutorial has been delivered before, please indicate the venue(s) and differences if any

## Contact

For questions regarding submissions, please contact the Programme Chairs:

{% assign programme_chairs = site.data.organizers.organizer_sections | where: "title", "Programme Chairs" | first %}
{% if programme_chairs %}
{% for chair in programme_chairs.people %}

- **{{ chair.name }}** ({{ chair.affiliation }}){% comment %} Email hidden: {% if chair.email %} — [{{ chair.email }}](mailto:{{ chair.email }}){% endif %}{% endcomment %}
  {% endfor %}
  {% else %}
- **Oliver Schütze** (CINVESTAV-IPN, Mexico)
- **Tea Tušar** (Jožef Stefan Institute, Slovenia)
  {% endif %}

Email: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})
