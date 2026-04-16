# 📝 Publications

A full publication list is available on my [Google Scholar](https://scholar.google.com/citations?user=pg7iOtcAAAAJ) page.

{% assign listed_projects = site.projects | where_exp: "item", "item.show_in_publications != false" | sort: "year" | sort: "number" | reverse %}

{% assign featured_projects = listed_projects | where: "publication_section", "featured" %}
{% for project in featured_projects %}
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
arxiv=project.arxiv_url
github=project.github_url
project=project_link
youtube=project.youtube_url
demo=project.demo_url
description=project.short_intro
%}
{% endif %}
{% endfor %}

{% assign publication_projects = listed_projects | where: "publication_section", "publication" %}
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
arxiv=project.arxiv_url
github=project.github_url
project=project_link
youtube=project.youtube_url
demo=project.demo_url
description=project.short_intro
%}
{% endif %}
{% endfor %}

## Pre-prints

{% assign preprint_projects = listed_projects | where: "publication_section", "preprint" %}
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
arxiv=project.arxiv_url
github=project.github_url
project=project_link
youtube=project.youtube_url
demo=project.demo_url
description=project.short_intro
%}
{% endif %}
{% endfor %}