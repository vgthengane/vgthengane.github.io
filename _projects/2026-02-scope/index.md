---
layout: project_auto
title: "SCOPE: Scene-Contextualised Incremental Few-Shot 3D Segmentation"
permalink: /scope
published: true
show_in_publications: true
publication_section: publication
publication_show_project_link: true
number: 6

year: 2026
venue: "CVPR 2026"
venue_long: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Findings 2026"
authors:
  - "<a class='project-author-home-link' href='/'><strong>Vishal Thengane</strong></a><sup>1, 2</sup>"
  - "Zhaochong An<sup>3</sup>"
  - "Tianjin Huang<sup>4</sup>"
  - "Son Lam Phung<sup>2</sup>"
  - "Abdesselam Bouzerdoum<sup>2</sup>"
  - "Lu Yin<sup>1</sup>"
  - "Na Zhao<sup>5, †</sup>"
  - "Xiatian Zhu<sup>1, †</sup>"

affiliations:
  - "<sup>1</sup>University of Surrey, UK"
  - "<sup>2</sup>University of Wollongong, Australia"
  - "<sup>3</sup>University of Copenhagen, Denmark"
  - "<sup>4</sup>University of Exeter, UK"
  - "<sup>5</sup>Singapore University of Technology and Design, Singapore"
author_notes_markdown: "<sup>†</sup>Corresponding authors."
contact_email: "vgthengane (at) gmail (dot) com"

teaser_image: "/projects/2026-02-scope/assets/teaser.png"
# tags:
#   - Few-shot learning
#   - Continual learning
#   - Point Cloud Segmentation

paper_url: "https://arxiv.org/pdf/2603.06572"
arxiv_url: "https://arxiv.org/abs/2603.06572"
youtube_url: ""
code_url: "https://github.com/Surrey-UP-Lab/SCOPE"

short_intro: "A framework that utilises background context to recognise novel classes in a sequential manner, without additional fine-tuning or introducing new parameters."

abstract: "Incremental Few-Shot (IFS) segmentation aims to learn new categories over time from only a few annotations. Although widely studied in 2D, it remains underexplored for 3D point clouds. Existing methods suffer from catastrophic forgetting or fail to learn discriminative prototypes under sparse supervision, and often overlook a key cue: novel categories frequently appear as unlabelled background in base-training scenes. We introduce SCOPE (Scene-COntextualised Prototype Enrichment), a plug-and-play background-guided prototype enrichment framework that integrates with any prototype-based 3D segmentation method. After base training, a class-agnostic segmentation model extracts high-confidence pseudo-instances from background regions to build a prototype pool. When novel classes arrive with few labelled samples, relevant background prototypes are retrieved and fused with few-shot prototypes to form enriched representations without retraining the backbone or adding parameters. Experiments on ScanNet and S3DIS show that SCOPE achieves SOTA performance, improving novel-class IoU by up to 6.98% and 3.61%, and mean IoU by 2.25% and 1.70%, respectively, while maintaining low forgetting."
method: |
  SCOPE is a plug-and-play **background-guided prototype enrichment** framework for incremental few-shot 3D segmentation.

  ![](/projects/2026-02-scope/assets/teaser.png)

  Pipeline overview:

  - Train a base model with prototype-based 3D segmentation.
  - Use a class-agnostic segmenter to mine high-confidence pseudo-instances from background regions.
  - Build a reusable background prototype pool from these pseudo-instances.
  - At each incremental step, retrieve and fuse relevant background prototypes with few-shot prototypes.
  - Adapt to new classes **without retraining the backbone** and without introducing extra learnable parameters.

results: |
  SCOPE improves both novel-class recognition and overall segmentation quality across incremental few-shot settings.

  Key outcomes:

  - On ScanNet and S3DIS, SCOPE achieves state-of-the-art performance for incremental few-shot 3D segmentation.
  - Novel-class IoU gains reach up to **6.98%** and **3.61%**.
  - Mean IoU gains reach up to **2.25%** and **1.70%**.
  - Strong transfer to new classes while keeping forgetting low.
  
bibtex: |
  @inproceedings{thengane2026scope,
    title={SCOPE: Scene-Contextualized Incremental Few-Shot 3D Segmentation},
    author={Thengane, Vishal and An, Zhaochong and Huang, Tianjin and Phung, Son Lam and Bouzerdoum,    Abdesselam and Yin, Lu and Zhao, Na and Zhu, Xiatian},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Findings},
    year={2026}
  }
---