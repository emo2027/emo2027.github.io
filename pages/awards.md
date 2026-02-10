---
layout: page
title: Awards
permalink: /awards/
description: EMO 2027 best paper awards and recognition.
---

## EMO 2027 Awards

EMO 2027 will present several awards to recognize outstanding contributions to the field of evolutionary multi-objective optimization.

## Best Paper Award

The **Best Paper Award** recognizes the highest quality contribution to EMO 2027, as determined by the Awards Committee.

### Eligibility

- All papers accepted for publication in the EMO 2027 proceedings are eligible
- Papers must be presented at the conference by one of the authors

### Selection Criteria

The Awards Committee evaluates papers based on:

1. **Technical Quality** - Rigour of methodology, validity of results
2. **Novelty** - Originality of ideas and approaches
3. **Significance** - Potential impact on the field
4. **Clarity** - Quality of presentation and writing

### Selection Process

1. Programme Committee members nominate outstanding papers during review
2. The Awards Committee reviews nominated papers
3. Finalists are invited to present at a special session
4. The winner is announced at the conference banquet

## Best Student Paper Award

The **Best Student Paper Award** recognizes excellent research conducted primarily by a student author.

### Eligibility

- The first author must be a registered student at the time of submission
- The paper must represent work primarily conducted by the student
- The student must present the paper at the conference
- A letter from the student's advisor confirming student status is required

### Selection Process

The selection process mirrors that of the Best Paper Award, with additional consideration given to the student's contribution relative to their experience level.

<div class="info-box notice">
  <strong>Student Authors:</strong> Please indicate student paper status during the submission process and be prepared to provide verification if selected as a finalist.
</div>

## Award Nominations

### Self-Nomination

Authors who believe their work deserves recognition may submit a brief statement (max 200 words) explaining the significance of their contribution. Self-nominations should be sent to the Awards Committee.

### Nomination by Others

Programme Committee members and attendees may nominate papers by contacting the Awards Committee with a brief justification.

## Awards Committee

The Awards Committee for EMO 2027 consists of distinguished researchers from the EMO community.

<div class="info-box tbd">
  <h3>To Be Announced</h3>
  <p>Awards Committee members will be announced in late 2026.</p>
</div>

## Prize

Award recipients will receive:

- Honorarium
- Plaque
- Award presentation at the conference banquet
- Recognition on the EMO 2027 website and proceedings

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
    {% assign banquet_date = nil %}
    {% for day in site.data.schedule.days %}
      {% assign banquet_event = day.events | where: "id", "conference-banquet" | first %}
      {% if banquet_event %}
        {% assign banquet_date = day.date %}
      {% endif %}
    {% endfor %}
    <tr>
      <td>Award Ceremony</td>
      <td>{% if banquet_date %}{{ banquet_date | date: "%-d %B %Y" }} (Banquet){% else %}TBC{% endif %}</td>
    </tr>
  </tbody>
</table>

## Questions?

For questions regarding awards, please contact the Awards Committee:

**Email**: [{{ site.data.conference.contact.email }}](mailto:{{ site.data.conference.contact.email }})
