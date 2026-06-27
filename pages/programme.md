---
layout: page
title: Programme
permalink: /programme/
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

- [**Benjamin Doerr**](https://www.lix.polytechnique.fr/Labo/Benjamin.Doerr/), École Polytechnique, France
- [**Sanaz Mostaghim**](https://www.ci.ovgu.de/Team/Sanaz+Mostaghim.html), Otto-von-Guericke-Universität Magdeburg, Germany
- [**Margaret Wiecek**](https://www.clemson.edu/science/academics/departments/mathstat/about/profiles/wmalgor), Clemson University, USA

## Tutorials

Tutorial proposals are currently being solicited. Confirmed tutorials will be listed here once finalised.

<a href="{{ '/calls/' | relative_url }}#tutorials" class="btn btn-secondary">Submit a Tutorial Proposal</a>

{% comment %}
## Detailed Schedule

Use the filters below to explore the schedule by day or event type.
{% endcomment %}
