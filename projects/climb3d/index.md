---
layout: project
title: "CLIMB-3D"
author_profile: false
permalink: /climb3d
---

<div class="project-hero">
  <div class="project-header-center">
    <h1 class="project-title">CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation</h1>
    <p class="project-conference">BMVC 2025</p>
    <p class="project-authors">Vishal Thengane, Jean Lahoud, Hisham Cholakkal, Rao Muhammad Anwer, Lu Yin, Xiatian Zhu, Salman Khan</p>
    <p class="project-affiliation">University of Surrey, University of Wollongong</p>
    <p class="project-email">vgthengane (at) gmail (dot) com</p>
    <div class="project-links-grid">
      <a class="project-link-card" href="https://arxiv.org/abs/2502.17429"><i class="fa-solid fa-file-lines"></i>Paper</a>
      <a class="project-link-card" href="#"><i class="fa-brands fa-youtube"></i>YouTube</a>
      <a class="project-link-card" href="https://github.com/vgthengane/CLIMB3D"><i class="fa-solid fa-code"></i>Code</a>
      <a class="project-link-card" href="https://vgthengane.github.io/climb3d"><i class="fa-solid fa-arrow-up-right-from-square"></i>Demo</a>
    </div>
  </div>

  <figure class="project-cover">
    <img src="{{ '/images/paper_teasers/climb3d.png' | relative_url }}" alt="CLIMB-3D teaser">
  </figure>

  <span class="project-tags">
    <span class="project-tag">Continual Learning</span>
    <span class="project-tag">3D Vision</span>
    <span class="project-tag">Instance Segmentation</span>
  </span>
</div>

<section class="project-section">
  <h2>Abstract</h2>
  <p class="project-abstract">
    CLIMB-3D introduces class-incremental learning for point cloud instance segmentation and evaluates it on long-tail settings derived from ScanNet200. The method addresses class imbalance to improve performance across both frequent and rare classes.
  </p>
</section>

<section class="project-section">
  <h2>Method</h2>
  <p class="project-method">
    The framework formulates continual point cloud instance segmentation with class imbalance in mind. It uses an incremental training strategy with imbalance-aware components to preserve prior knowledge while learning new classes more uniformly.
  </p>
</section>

<section class="project-section">
  <h2>Results</h2>
  <p class="project-results">
    Across long-tail splits derived from ScanNet200, CLIMB-3D improves performance consistency between frequent and rare classes while maintaining strong overall segmentation quality in incremental settings.
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
    <pre class="project-bibtex">@inproceedings{thengane2025climb3d,
  title={CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation},
  author={Thengane, Vishal and Lahoud, Jean and Cholakkal, Hisham and Anwer, Rao Muhammad and Yin, Lu and Zhu, Xiatian and Khan, Salman},
  booktitle={BMVC},
  year={2025}
}</pre>
  </div>
</section>
