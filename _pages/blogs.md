---
title: "Blogs"
permalink: /blogs/
author_profile: false
---

{% assign sorted_blogs = "" | split: "" %}
{% if site.blogs %}
{% assign sorted_blogs = site.blogs | sort: "date" | reverse %}
{% endif %}

{% if sorted_blogs.size > 0 %}
{% for post in sorted_blogs %}
### [{{ post.title }}]({{ post.url | relative_url }})

{% if post.date %}
*{{ post.date | date: "%b %-d, %Y" }}*
{% endif %}

{% if post.excerpt %}
{{ post.excerpt }}
{% else %}
{{ post.content | markdownify | strip_html | truncate: 180 }}
{% endif %}

{% endfor %}
{% else %}
No blog posts yet. Add a Markdown file in `_blogs/` to publish your first post.
{% endif %}
