---
layout: page
title: "Research"
permalink: /research/
eyebrow: "Papers & interests"
lead: >-
  My research sits at the intersection of operations management and AI/ML for
  health-care delivery and the business of health, drawing on empirical
  research, causal inference, interpretable machine learning, and reinforcement
  learning to design, evaluate, and govern decision systems that improve
  access, quality, and cost.
redirect_from:
  - /publications/
---

{% include interest-list.html %}

<h2 class="section-title" id="publications"><span>Publications</span></h2>

{% include publication-list.html items=site.data.publications.published %}

<h2 class="section-title" id="under-review"><span>Under review</span></h2>

{% include publication-list.html items=site.data.publications.under_review %}

{%- if site.data.publications.working_papers %}
<h2 class="section-title" id="working-papers"><span>Working papers</span></h2>

{% include publication-list.html items=site.data.publications.working_papers %}
{%- endif %}

{%- if site.data.publications.in_progress %}
<h2 class="section-title" id="in-progress"><span>Work in progress</span></h2>

{% include publication-list.html items=site.data.publications.in_progress %}
{%- endif %}

<p class="note">
  For the most current list, see my
  <a href="https://scholar.google.com/citations?user=Di4VDJgAAAAJ" rel="noopener">Google Scholar profile</a>.
</p>
