---
layout: default
title: Home
---

<div class="hero-section">
  <h1>EMO 2027</h1>
  <p class="lead">
    Welcome to the {{ site.data.conference.full_name }},
    hosted by the University of Exeter in the beautiful city of {{ site.data.conference.location.full }}.
  </p>
  <div class="hero-buttons">
    <a href="{{ '/calls/' | relative_url }}" class="btn btn-primary btn-lg">Call for Papers</a>
    <a href="{{ '/registration/' | relative_url }}" class="btn btn-secondary btn-lg">Register</a>
    <a href="{{ '/at-a-glance/' | relative_url }}" class="btn btn-accent btn-lg">At a Glance</a>
  </div>
</div>

## About EMO 2027

The **International Conference on Evolutionary Multi-Criterion Optimization (EMO)** is the premier venue for researchers and practitioners working on multi-objective and many-objective optimization using evolutionary and nature-inspired computation approaches.

EMO 2027 will bring together leading experts from academia and industry to present and discuss the latest advances in evolutionary multi-objective optimization, including theoretical foundations, algorithm design, performance assessment, and real-world applications.

### Conference Format

EMO 2027 will feature:

<ul>
  {% for item in site.data.conference.highlights %}
  <li><strong>{{ item.title }}:</strong> {{ item.detail }}</li>
  {% endfor %}
</ul>

<div class="feature-grid">
  <div class="feature-item">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    </div>
    <h3>Papers</h3>
    <p>Peer-reviewed research presentations from the EMO community</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    </div>
    <h3>Keynotes</h3>
    <p>Inspiring talks from world-leading researchers</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
    <h3>Tutorials</h3>
    <p>Hands-on learning from leading experts</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    </div>
    <h3>Networking</h3>
    <p>Connect with peers at social events</p>
  </div>
</div>

{% include countdown.html %}

## Venue

EMO 2027 will be held at the **[{{ site.data.conference.venue.name }}]({{ site.data.conference.venue.url }})** on the University of Exeter's picturesque Streatham Campus. The venue features modern conference facilities including the 174-seat Henderson Lecture Theatre and the XFi break-out area for posters and networking.

<a href="{{ '/venue/' | relative_url }}" class="btn btn-secondary">Learn More About the Venue</a>

## Topics of Interest

EMO 2027 welcomes submissions on all aspects of evolutionary multi-objective optimization, including but not limited to:

- Multi-objective and many-objective optimization
- Theoretical foundations of EMO algorithms
- Algorithm design and performance assessment
- Preference-based and interactive methods
- Real-world applications
- Benchmarking and test problems
- Hybrid and memetic approaches
- Machine learning and EMO
- Dynamic and robust optimization
- Large-scale optimization

<a href="{{ '/calls/' | relative_url }}" class="btn btn-primary">View Full Call for Papers</a>

{% include sponsors.html %}
