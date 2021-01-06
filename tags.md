---
title: Tags
layout: landing
description: Most of my blog posts, sorted by tag
image:
nav-menu: true
---
<!-- Main -->
<div id="main">
	% capture temptags %}
	  {% for tag in site.tags %}
	    {{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
	  {% endfor %}
	{% endcapture %}
	{% assign sortedtemptags = temptags | split:' ' | sort | reverse %}
	{% for temptag in sortedtemptags %}
	  {% assign tagitems = temptag | split: '#' %}
	  {% capture tagname %}{{ tagitems[1] }}{% endcapture %}
	  <a href="/tag/{{ tagname }}"><code class="highligher-rouge"><nobr>{{ tagname }}</nobr></code></a>
	{% endfor %}
</div>
