---
layout: page
title: "Curriculum Vitae"
permalink: /cv/
eyebrow: "At a glance"
redirect_from:
  - /resume
  - /resume/
---

<p class="cta">
  <a class="button button--primary button--lg" href="{{ site.cv_url }}" rel="noopener">
    {% include icon.html name="download" %}<span>Download full CV (PDF)</span>
  </a>
</p>

{%- if site.data.cv.positions %}
<h2 class="section-title" id="positions"><span>Position</span></h2>

<ul class="entries">
  {%- for item in site.data.cv.positions %}
  <li class="entry">
    <h3 class="entry__title entry__title--plain">{{ item.role }}</h3>
    <p class="entry__meta">
      {%- if item.url -%}
        <a href="{{ item.url }}" rel="noopener">{{ item.org }}</a>
      {%- else -%}
        {{ item.org }}
      {%- endif -%}
      {%- if item.period %}<span class="pill pill--quiet">{{ item.period }}</span>{% endif -%}
    </p>
    {%- if item.note %}<p class="entry__note">{{ item.note }}</p>{% endif %}
  </li>
  {%- endfor %}
</ul>
{%- endif %}

{%- if site.data.cv.education %}
<h2 class="section-title" id="education"><span>Education</span></h2>

<ul class="entries">
  {%- for item in site.data.cv.education %}
  <li class="entry">
    <h3 class="entry__title entry__title--plain">{{ item.role }}</h3>
    <p class="entry__meta">
      {%- if item.url -%}
        <a href="{{ item.url }}" rel="noopener">{{ item.org }}</a>
      {%- else -%}
        {{ item.org }}
      {%- endif -%}
    </p>
    {%- if item.note %}<p class="entry__note">{{ item.note }}</p>{% endif %}
  </li>
  {%- endfor %}
</ul>
{%- endif %}

<h2 class="section-title" id="honours"><span>Honours &amp; awards</span></h2>

{% include award-list.html %}

<p class="note">
  You can also visit my
  <a href="https://scholar.google.com/citations?user=Di4VDJgAAAAJ" rel="noopener">Google Scholar</a> and
  <a href="https://www.linkedin.com/in/hossein-hejazian-1ab60053/" rel="noopener">LinkedIn</a> profiles for updates.
</p>
