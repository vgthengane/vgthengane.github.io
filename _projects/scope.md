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
author_entries:
  - name: "Vishal Thengane"
    affiliations: [1, 2]
    highlight: true
  - name: "Zhaochong An"
    affiliations: [3]
  - name: "Tianjin Huang"
    affiliations: [4]
  - name: "Son Lam Phung"
    affiliations: [2]
  - name: "Abdesselam Bouzerdoum"
    affiliations: [2]
  - name: "Lu Yin"
    affiliations: [1]
  - name: "Na Zhao"
    affiliations: [5]
  - name: "Xiatian Zhu"
    affiliations: [1]

affiliation_entries:
  - id: 1
    name: "University of Surrey, UK"
  - id: 2
    name: "University of Wollongong, Australia"
  - id: 3
    name: "University of Copenhagen, Denmark"
  - id: 4
    name: "University of Exeter, UK"
  - id: 5
    name: "Singapore University of Technology and Design, Singapore"
contact_email: "vgthengane (at) gmail (dot) com"

teaser_image: "/images/paper_teasers/scope.png"
tags:
  - Few-shot learning
  - Continual learning
  - Point Cloud Segmentation

paper_url: "https://arxiv.org/pdf/2603.06572"
arxiv_url: "https://arxiv.org/abs/2603.06572"
youtube_url: ""
code_url: "https://github.com/Surrey-UP-Lab/SCOPE"

short_intro: "A framework that utilises background context to recognise novel classes in a sequential manner, without additional fine-tuning or introducing new parameters."

abstract: "Incremental Few-Shot (IFS) segmentation aims to learn new categories over time from only a few annotations. Although widely studied in 2D, it remains underexplored for 3D point clouds. Existing methods suffer from catastrophic forgetting or fail to learn discriminative prototypes under sparse supervision, and often overlook a key cue: novel categories frequently appear as unlabelled background in base-training scenes. We introduce SCOPE (Scene-COntextualised Prototype Enrichment), a plug-and-play background-guided prototype enrichment framework that integrates with any prototype-based 3D segmentation method. After base training, a class-agnostic segmentation model extracts high-confidence pseudo-instances from background regions to build a prototype pool. When novel classes arrive with few labelled samples, relevant background prototypes are retrieved and fused with few-shot prototypes to form enriched representations without retraining the backbone or adding parameters. Experiments on ScanNet and S3DIS show that SCOPE achieves SOTA performance, improving novel-class IoU by up to 6.98% and 3.61%, and mean IoU by 2.25% and 1.70%, respectively, while maintaining low forgetting."
method: "Briefly explain the method, model design, and training strategy."
results: "Summarize key quantitative/qualitative results and important takeaways."
bibtex: |
  @inproceedings{thengane2026scope,
    title={SCOPE: Scene-Contextualized Incremental Few-Shot 3D Segmentation},
    author={Thengane, Vishal and An, Zhaochong and Huang, Tianjin and Phung, Son Lam and Bouzerdoum,    Abdesselam and Yin, Lu and Zhao, Na and Zhu, Xiatian},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Findings},
    year={2026}
  }
---