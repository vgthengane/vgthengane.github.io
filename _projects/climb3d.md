---
layout: project_auto
title: "CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation"
permalink: /climb3d
show_in_publications: true
publication_section: featured
publication_show_project_link: true
number: 1

year: 2025
venue: "BMVC 2025"
authors: "<strong>Vishal Thengane</strong>, Jean Lahoud, Hisham Cholakkal, Rao Muhammad Anwer, Lu Yin, Xiatian Zhu, Salman Khan"
affiliation: "University of Surrey, University of Wollongong"
contact_email: "vgthengane (at) gmail (dot) com"

teaser_image: "/images/paper_teasers/climb3d.png"
tags:
  - Continual Learning
  - 3D Vision
  - Instance Segmentation

paper_url: "https://arxiv.org/pdf/2502.17429.pdf"
arxiv_url: "https://arxiv.org/abs/2502.17429"
github_url: "https://github.com/vgthengane/CLIMB3D"
youtube_url: ""
code_url: "https://github.com/vgthengane/CLIMB3D"

short_intro: "We introduce class-incremental learning for point cloud instance segmentation and curate benchmarks from the long-tail ScanNet200 dataset. To address class imbalance, we propose a novel module that ensures more uniform performance across frequent and rare classes."

abstract: "CLIMB-3D introduces class-incremental learning for point cloud instance segmentation and evaluates it on long-tail settings derived from ScanNet200. The method addresses class imbalance to improve performance across both frequent and rare classes."
method: "The framework formulates continual point cloud instance segmentation with class imbalance in mind. It uses an incremental training strategy with imbalance-aware components to preserve prior knowledge while learning new classes more uniformly."
results: "Across long-tail splits derived from ScanNet200, CLIMB-3D improves performance consistency between frequent and rare classes while maintaining strong overall segmentation quality in incremental settings."
bibtex: |
  @inproceedings{thengane2025climb3d,
    title={CLIMB-3D: Continual Learning for Imbalanced 3D Instance Segmentation},
    author={Thengane, Vishal and Lahoud, Jean and Cholakkal, Hisham and Anwer, Rao Muhammad and Yin, Lu and Zhu, Xiatian and Khan, Salman},
    booktitle={BMVC},
    year={2025}
  }
---
