# 📝 Publications

A full publication list is available on my [Google Scholar](https://scholar.google.com/citations?user=pg7iOtcAAAAJ) page.

{% assign listed_projects = site.projects | where_exp: "item", "item.show_in_publications != false" %}

## Publications

{% assign publication_projects = listed_projects | where: "publication_section", "publication" | sort: "path" | reverse %}
{% for project in publication_projects %}
{% if project.paper_url and project.paper_url != "" %}
{% assign project_link = "" %}
{% if project.publication_show_project_link != false %}
  {% assign project_link = project.url %}
{% endif %}
{% include paper-box.html
venue=project.venue
image=project.teaser_image
title=project.title
link=project.paper_url
authors=project.authors
author_entries=project.author_entries
arxiv=project.arxiv_url
code=project.code_url
project=project_link
youtube=project.youtube_url
demo=project.demo_url
description=project.short_intro
%}
{% endif %}
{% endfor %}

## Pre-prints

{% assign preprint_projects = listed_projects | where: "publication_section", "preprint" | sort: "path" | reverse %}
{% for project in preprint_projects %}
{% if project.paper_url and project.paper_url != "" %}
{% assign project_link = "" %}
{% if project.publication_show_project_link != false %}
  {% assign project_link = project.url %}
{% endif %}
{% include paper-box.html
venue=project.venue
image=project.teaser_image
title=project.title
link=project.paper_url
authors=project.authors
author_entries=project.author_entries
arxiv=project.arxiv_url
code=project.code_url
project=project_link
youtube=project.youtube_url
demo=project.demo_url
description=project.short_intro
%}
{% endif %}
{% endfor %}