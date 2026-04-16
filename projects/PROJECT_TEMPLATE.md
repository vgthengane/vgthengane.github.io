---
layout: project
title: "PROJECT_NAME"
author_profile: false
permalink: /PROJECT_SLUG
---

<div class="project-hero">
  <div class="project-header-center">
    <h1 class="project-title">PROJECT_NAME</h1>
    <p class="project-conference">CONFERENCE_YEAR</p>
    <p class="project-authors">AUTHOR_1, AUTHOR_2, AUTHOR_3</p>
    <p class="project-affiliation">UNIVERSITY_OR_LAB</p>
    <p class="project-email">your_email@domain.com</p>
    <span class="project-tags">
      <span class="project-tag">Tag 1</span>
      <span class="project-tag">Tag 2</span>
      <span class="project-tag">Tag 3</span>
    </span>
    <div class="project-links-grid">
      <a class="project-link-card" href="https://arxiv.org/abs/xxxx.xxxxx"><i class="fa-solid fa-file-lines"></i>Paper</a>
      <a class="project-link-card" href="https://youtube.com/..."><i class="fa-brands fa-youtube"></i>YouTube</a>
      <a class="project-link-card" href="https://github.com/owner/repo"><i class="fa-solid fa-code"></i>Code</a>
      <a class="project-link-card" href="https://project-page-url"><i class="fa-solid fa-arrow-up-right-from-square"></i>Demo</a>
    </div>
  </div>

  <figure class="project-cover">
    <img src="{{ '/images/paper_teasers/PROJECT_IMAGE.png' | relative_url }}" alt="PROJECT_NAME teaser">
  </figure>

  <span class="project-tags">
    <span class="project-tag">Tag 1</span>
    <span class="project-tag">Tag 2</span>
    <span class="project-tag">Tag 3</span>
  </span>
</div>

<section class="project-section">
  <h2>Abstract</h2>
  <p class="project-abstract">
    3-5 sentence abstract describing the problem, setup, and key contribution.
  </p>
</section>

<section class="project-section">
  <h2>Method</h2>
  <p class="project-method">
    Briefly explain the method, model design, and training strategy.
  </p>
</section>

<section class="project-section">
  <h2>Results</h2>
  <p class="project-results">
    Summarize key quantitative/qualitative results and important takeaways.
  </p>
</section>

<section class="project-section project-bibtex-section">
  <h2>BibTeX</h2>
  <div class="project-bibtex-block">
    <div class="project-bibtex-block-header">
      <button class="project-bibtex-copy" type="button" aria-label="Copy BibTeX">
        <i class="fa-regular fa-copy"></i><span>Copy</span>
      </button>
    </div>
    <pre class="project-bibtex">@inproceedings{key,
  title={PROJECT_NAME},
  author={AUTHOR_1 and AUTHOR_2},
  booktitle={CONFERENCE_YEAR},
  year={YEAR}
}</pre>
  </div>
</section>
