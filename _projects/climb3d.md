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
author_entries:
  - name: "Vishal Thengane"
    affiliations: [1, 2]
    highlight: true
  - name: "Jean Lahoud"
    affiliations: [1]
  - name: "Hisham Cholakkal"
    affiliations: [2]
  - name: "Rao Muhammad Anwer"
    affiliations: [2]
  - name: "Lu Yin"
    affiliations: [1]
  - name: "Xiatian Zhu"
    affiliations: [1]
  - name: "Salman Khan"
    affiliations: [2, 3]

affiliation_entries:
  - id: 1
    name: "University of Surrey, UK"
  - id: 2
    name: "Mohamed bin Zayed University of Artificial Intelligence, UAE"
  - id: 3
    name: "Australian National University, Australia"
contact_email: "vgthengane (at) gmail (dot) com"

teaser_image: "/images/paper_teasers/climb3d.png"
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
method: "The framework formulates continual point cloud instance segmentation with class imbalance in mind. It uses an incremental training strategy with imbalance-aware components to preserve prior knowledge while learning new classes more uniformly."
results: "Across long-tail splits derived from ScanNet200, CLIMB-3D improves performance consistency between frequent and rare classes while maintaining strong overall segmentation quality in incremental settings."
bibtex: |
  @inproceedings{thengane2025climb3d,
    title={CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation},
    author={Thengane, Vishal and Lahoud, Jean and Cholakkal, Hisham and Anwer, Rao Muhammad and Yin, Lu and Zhu, Xiatian and Khan, Salman},
    booktitle={Proceedings of British Machine Vision Conference (BMVC)},
    year={2025}
  }
---
