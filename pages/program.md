---
layout: program
title: Programme
permalink: /program/
description: EMO 2027 conference schedule and programme details.
---

<div class="info-box notice">
  <strong>Note:</strong> The programme below is a preliminary schedule. The detailed programme with paper presentations will be announced after the paper acceptance notification.
</div>

## Conference Overview

EMO 2027 spans four days with the following structure:

<ul>
  {% for day in site.data.schedule.days %}
  <li><strong>{{ day.date | date: "%A, %-d %B" }}:</strong> {{ day.overview }}</li>
  {% endfor %}
</ul>

{{ site.data.conference.format.detail }}

## Keynote Speakers

<div class="info-box tbd">
  <h3>To Be Announced</h3>
  <p>Keynote speakers will be announced in early 2027.</p>
</div>

## Tutorials

Tutorial proposals are currently being solicited. Confirmed tutorials will be listed here once finalised.

<a href="{{ '/calls/' | relative_url }}#special-sessions-and-tutorials" class="btn btn-secondary">Submit a Tutorial Proposal</a>

## Detailed Schedule

Use the filters below to explore the schedule by day or event type.
