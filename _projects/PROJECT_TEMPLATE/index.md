---
layout: project_auto
title: "PROJECT_NAME"
permalink: /PROJECT_SLUG
published: false
show_in_publications: false
publication_section: publication
publication_show_project_link: true
number: 0

year: 2026
venue: "CONFERENCE ABBR. YEAR"
venue_long: "FULL CONFERENCE OR JOURNAL NAME"
authors:
  - "<a class='project-author-home-link' href='/'><strong>AUTHOR_1</strong></a><sup>1,2*</sup>"
  - "AUTHOR_2<sup>1*</sup>"
  - "AUTHOR_3<sup>2†</sup>"

affiliations:
  - "<sup>1</sup>UNIVERSITY_OR_LAB_1"
  - "<sup>2</sup>UNIVERSITY_OR_LAB_2"

# Optional extra author note line (shown under affiliations):
# author_notes_markdown: "<sup>*</sup>Equal contribution. <sup>†</sup>Corresponding author: your_email@domain.com"

# Optional legacy fields (use only if needed):
# author_block_markdown / authors_markdown / author_notes_markdown still supported.
# You can keep using author_entries/affiliation_entries if you prefer structured YAML.
# authors / affiliations also accept markdown block strings.
# author_notes_markdown: "<sup>*</sup>Equal contribution. <sup>†</sup>Corresponding author."
contact_email: "your_email@domain.com"

teaser_image: "/projects/YYYY-MM-PROJECT_SLUG/assets/teaser.png"
tags:
  - Tag 1
  - Tag 2
  - Tag 3

paper_url: "https://arxiv.org/abs/xxxx.xxxxx"
arxiv_url: "https://arxiv.org/abs/xxxx.xxxxx"
youtube_url: "https://youtube.com/..."
code_url: "https://github.com/owner/repo"

short_intro: "2-3 sentence short intro shown in Publications page."

# Folder-based project structure (recommended):
# - _projects/YYYY-MM-PROJECT_SLUG/index.md
# - _projects/YYYY-MM-PROJECT_SLUG/assets/method.png
# - _projects/YYYY-MM-PROJECT_SLUG/assets/results_qualitative.png
#
# In markdown fields below, reference project-local assets with:
# ![](/projects/YYYY-MM-PROJECT_SLUG/assets/method.png)

abstract: "3-5 sentence abstract describing the problem, setup, and key contribution."
method: |
  Briefly explain the method, model design, and training strategy.

  ![](/projects/YYYY-MM-PROJECT_SLUG/assets/method.png)

  Example equation:

  $$
  \mathcal{L}=\mathcal{L}_{\text{base}}+\lambda\mathcal{L}_{\text{replay}}
  $$

  - Step 1
  - Step 2
results: |
  Summarize key quantitative/qualitative results and important takeaways.

  ![](/projects/YYYY-MM-PROJECT_SLUG/assets/results_qualitative.png)

  - +X.X metric on split A
  - +Y.Y metric on split B

# Method and results accept Markdown (use this format for images, lists, equations, etc.):
# You can still use single-line text if you prefer:
# method: "Brief method summary."
# results: "Key findings."
bibtex: |
  @inproceedings{key,
    title={PROJECT_NAME},
    author={AUTHOR_1 and AUTHOR_2},
    booktitle={CONFERENCE_YEAR},
    year={YEAR}
  }

---

Add optional extra markdown content below this line if needed.
