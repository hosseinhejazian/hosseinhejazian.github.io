---
layout: page
title: "Teaching"
permalink: /teaching/
eyebrow: "Courses"
lead: >-
  My teaching emphasizes clarity, engagement, and the connection between
  analytical methods and real-world decision-making. Students describe my
  courses as *“a difficult class taught well which made it easier”* and praise
  my patience and approachability.
---

<h2 class="section-title" id="lecturer"><span>Lecturer — McGill University</span></h2>

{% include course-list.html items=site.data.teaching.lecturer %}

{%- if site.data.teaching.assistant %}
<h2 class="section-title" id="assistant"><span>Teaching assistant</span></h2>

{%- for block in site.data.teaching.assistant %}
<h3 class="subhead">{{ block.institution }}</h3>
<ul class="plain-list">
  {%- for course in block.courses %}<li>{{ course }}</li>{% endfor %}
</ul>
{%- endfor %}
{%- endif %}
