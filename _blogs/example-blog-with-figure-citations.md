---
title: "Example Blog: Figure, Citations, and Discussion"
date: 2026-04-17
excerpt: "A complete example blog post with LaTeX, figure/caption, references, and a BibTeX block."
---

This is a second example post so you can verify formatting and structure.

Final URL for this file:

`/blogs/example-blog-with-figure-citations`

## 1. Problem Setup

Given a model $f_\theta$ and task stream $\{\mathcal{D}_t\}_{t=1}^T$, we optimize:

$$
\min_\theta \sum_{t=1}^{T} \mathcal{L}_t(\theta) + \lambda \Omega(\theta).
$$

A common regularizer is:

$$
\Omega(\theta) = \left\|\theta - \theta^{(t-1)}\right\|_2^2.
$$

## 2. Figure Example

<figure>
  <img src="/images/paper_teasers/continual_clip.png" alt="Example teaser image" />
  <figcaption>Figure 1. Example figure with caption inside a blog post.</figcaption>
</figure>

## 3. Discussion

### Key observations

- The regularization term can reduce forgetting.
- Strong regularization may reduce adaptation on new tasks.
- Hyperparameter $\lambda$ controls the trade-off.

### Practical checklist

1. Start with a small validation sweep for $\lambda$.
2. Monitor both old-task and new-task performance.
3. Report average accuracy and forgetting metrics.

## 4. Reference Style Examples

Inline citation style:

- Elastic Weight Consolidation was introduced in [1].
- Episodic memory-based approaches are discussed in [2].

Numbered references:

[1] Kirkpatrick et al., *Overcoming catastrophic forgetting in neural networks*, PNAS 2017.  
[2] Lopez-Paz and Ranzato, *Gradient Episodic Memory for Continual Learning*, NeurIPS 2017.  
[3] Parisi et al., *Continual Lifelong Learning with Neural Networks*, Neural Networks 2019.

## 5. BibTeX Block Example

```bibtex
@article{kirkpatrick2017ewc,
  title   = {Overcoming catastrophic forgetting in neural networks},
  author  = {Kirkpatrick, James and others},
  journal = {Proceedings of the National Academy of Sciences},
  year    = {2017}
}
```
