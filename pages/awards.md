---
layout: page
title: Awards
permalink: /awards/
description: EMO 2027 Outstanding Paper awards and recognition.
---

## EMO 2027 Awards

EMO 2027 will present awards to recognise outstanding contributions to the field of evolutionary multi-objective optimisation.

## Outstanding EMO Paper Award

The **Outstanding EMO Paper Award** recognises the highest quality contribution to EMO 2027, as determined by the Awards Committee.

### Eligibility

- All full papers accepted for publication in the EMO 2027 proceedings are eligible, regardless of track or presentation mode
- Papers must be presented at the conference by one of the authors
- General Chairs, Programme Chairs, and Awards Committee members are not eligible

### Selection Process

1. Peer reviewers nominate outstanding papers during the review process, with brief justification
2. The Awards Committee meets to evaluate nominated papers based on their professional judgement
3. Evaluation is based on paper quality, not presentation quality
4. The Awards Committee may decline to confer an award in a category if no paper meets the required standard
5. Programme Chairs ratify the final decisions
6. The winners are announced at the conference closing ceremony

## Outstanding EMO Student Paper Award

The **Outstanding EMO Student Paper Award** recognises excellent research conducted primarily by a student author.

### Eligibility

- The first author must be a registered student at the time of submission
- The paper must represent work primarily conducted by the student
- The student must present the paper at the conference
- Student paper status must be declared during the submission process (students must be registered at the time of acceptance, but may have completed their studies by the time of the award)

### Selection Process

The selection process mirrors that of the Outstanding EMO Paper Award.

<div class="info-box notice">
  <strong>Student Authors:</strong> Please indicate student paper status during the submission process.
</div>

## Awards Committee

The Awards Committee for EMO 2027 consists of distinguished researchers from the EMO community.

<div class="info-box tbd">
  <h3>To Be Announced</h3>
  <p>Awards Committee members will be announced in late 2026.</p>
</div>

## Prize

Award recipients will receive:

- Certificate for each co-author
- Honorarium (shared among co-authors)
- Plaque
- Recognition on the EMO 2027 website

## Important Dates

<table>
  <thead>
    <tr>
      <th>Milestone</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {% assign paper_deadline = site.data.dates.dates | where: "name", "Paper Submission Deadline" | first %}
    {% if paper_deadline %}
      <tr>
        <td>Paper Submission Deadline</td>
        <td>{% if paper_deadline.date contains '-' %}{{ paper_deadline.date | date: "%-d %B %Y" }}{% else %}{{ paper_deadline.date }}{% endif %}</td>
      </tr>
    {% else %}
      <tr>
        <td>Paper Submission Deadline</td>
        <td>TBC</td>
      </tr>
    {% endif %}
    <tr>
      <td>Award Nominees Notified</td>
      <td>TBC</td>
    </tr>
    <tr>
      <td>Award Ceremony</td>
      <td>{{ site.data.conference.dates.end | date: "%-d %B %Y" }} (Closing Ceremony)</td>
    </tr>
  </tbody>
</table>

## Questions?

For questions regarding awards, please contact the Awards Committee:

**Email**: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})
