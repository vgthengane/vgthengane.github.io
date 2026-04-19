---
layout: project_auto
title: "CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation"
permalink: /climb3d
show_in_publications: true
publication_section: publication
publication_show_project_link: true
number: 5

year: 2025
venue: "BMVC 2025"
venue_long: "British Machine Vision Conference (BMVC) 2025"
authors:
  - "<a class='project-author-home-link' href='/'><strong>Vishal Thengane</strong></a><sup>1, 2</sup>"
  - "Jean Lahoud<sup>1</sup>"
  - "Hisham Cholakkal<sup>2</sup>"
  - "Rao Muhammad Anwer<sup>2</sup>"
  - "<a class='project-author-home-link' href='https://luuyin.com/'>Lu Yin</a><sup>1</sup>"
  - "<a class='project-author-home-link' href='https://x-up-lab.github.io/'>Xiatian Zhu</a><sup>1</sup>"
  - "<a class='project-author-home-link' href='https://salman-h-khan.github.io'>Salman Khan</a><sup>2, 3</sup>"

affiliations:
  - "<sup>1</sup>University of Surrey, UK"
  - "<sup>2</sup>Mohamed bin Zayed University of Artificial Intelligence, UAE"
  - "<sup>3</sup>Australian National University, Australia"
  
contact_email: "vgthengane (at) gmail (dot) com"

teaser_image: "/projects/2025-02-climb3d/assets/teaser.png"
# tags:
#   - Continual Learning
#   - 3D Vision
#   - Instance Segmentation

paper_url: "https://arxiv.org/pdf/2502.17429.pdf"
arxiv_url: "https://arxiv.org/abs/2502.17429"
code_url: "https://github.com/vgthengane/CLIMB3D"
youtube_url: ""

short_intro: "We introduce class-incremental learning for point cloud instance segmentation, with benchmarks from the long-tail ScanNet200 dataset. We also propose a module to address class imbalance and improve performance across frequent and rare classes.."

abstract: "While 3D instance segmentation (3DIS) has advanced significantly, most existing methods assume that all object classes are known in advance and uniformly distributed. However, this assumption is unrealistic in dynamic, real-world environments where new classes emerge gradually and exhibit natural imbalance. Although some approaches address the emergence of new classes, they often overlook class imbalance, which leads to suboptimal performance, particularly on rare categories. To tackle this, we propose CLIMB-3D, a unified framework for CLass-incremental IMBalance-aware 3DIS. Building upon established exemplar replay (ER) strategies, we show that ER alone is insufficient to achieve robust performance under memory constraints. To mitigate this, we introduce a novel pseudo-label generator (PLG) that extends supervision to previously learned categories by leveraging predictions from a frozen model trained on prior tasks. Despite its promise, PLG tends to be biased towards frequent classes. Therefore, we propose a class-balanced re-weighting (CBR) scheme that estimates object frequencies from pseudo-labels and dynamically adjusts training bias, without requiring access to past data. We design and evaluate three incremental scenarios for 3DIS on the challenging ScanNet200 dataset and additionally validate our method for semantic segmentation on ScanNetV2. Our approach achieves state-of-the-art results, surpassing prior work by up to 16.76% mAP for instance segmentation and approximately 30% mIoU for semantic segmentation, demonstrating strong generalisation across both frequent and rare classes."

method: |
  CLIMB-3D extends class-incremental 3D instance segmentation with imbalance-aware learning.

  ![](/projects/2025-02-climb3d/assets/teaser.png)

  Core components:

  - **Pseudo-Label Generator (PLG):** transfers supervision from a frozen model for previously seen classes.
  - **Class-Balanced Re-weighting (CBR):** estimates pseudo-label frequencies and reduces bias toward frequent classes.
  - **Replay-based incremental training:** preserves old knowledge while learning new categories under limited memory.

results: |
  Qualitatively and quantitatively, CLIMB-3D improves continual 3DIS on long-tail distributions.

  Highlights:

  - Stronger balance between frequent and rare classes.
  - Better stability across incremental tasks with memory constraints.
  - State-of-the-art gains reported in the paper, including up to **16.76% mAP** on instance segmentation settings.

  See paper and arXiv links above for full benchmark tables and protocol details.

bibtex: |
  @inproceedings{thengane2025climb3d,
    title={CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation},
    author={Thengane, Vishal and Lahoud, Jean and Cholakkal, Hisham and Anwer, Rao Muhammad and Yin, Lu and Zhu, Xiatian and Khan, Salman},
    booktitle={Proceedings of British Machine Vision Conference (BMVC)},
    year={2025}
  }
---
