---
permalink: /
title: ""
excerpt: ""
author_profile: true
# redirect_from: 
#   - /index/
#   - /index.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class="anchor" id="about"></span>
{% capture about %}{% include_relative _pages/about.md %}{% endcapture %}
{{ about | markdownify }}

<span class="anchor" id="news"></span>
{% capture news %}{% include_relative _pages/news.md %}{% endcapture %}
{{ news | markdownify }}

<span class="anchor" id="publications"></span>
{% capture publications %}{% include_relative _pages/publications.md %}{% endcapture %}
{{ publications | markdownify }}

<span class="anchor" id="awards"></span>
{% capture awards %}{% include_relative _pages/awards.md %}{% endcapture %}
{{ awards | markdownify }}

<span class="anchor" id="educations"></span>
{% capture educations %}{% include_relative _pages/educations.md %}{% endcapture %}
{{ educations | markdownify }}
