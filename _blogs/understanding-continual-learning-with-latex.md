---
title: "Understanding Continual Learning with a Simple Objective"
date: 2026-04-17
excerpt: "An example blog post showing LaTeX equations, discussion, and references in Markdown."
---

This is an example post to show how to write blogs as `.md` files and publish them under `/blogs/<name>`.

For this file, the URL will be:

`/blogs/understanding-continual-learning-with-latex`

## 1. Setup

Suppose tasks arrive sequentially as $\mathcal{D}_1, \mathcal{D}_2, \dots, \mathcal{D}_T$, and model parameters are $\theta$.

A standard objective for task $t$ is:

$$
\mathcal{L}_t(\theta) = \frac{1}{N_t} \sum_{i=1}^{N_t} \ell\big(f_\theta(x_i^{(t)}), y_i^{(t)}\big).
$$

To reduce forgetting, we can add a quadratic regularizer around previous parameters $\theta^{t-1}$:

$$
\mathcal{J}_t(\theta) = \mathcal{L}_t(\theta) + \lambda \lVert \theta - \theta^{t-1} \rVert_2^2.
$$

Inline example: when $\lambda \to 0$, the method approaches ordinary fine-tuning.

## 2. A Small Derivation

Taking gradient of the regularized objective gives:

$$
\nabla_\theta \mathcal{J}_t(\theta) = \nabla_\theta \mathcal{L}_t(\theta) + 2\lambda(\theta - \theta^{t-1}).
$$

The second term pulls parameters toward the previous solution, which can help preserve old-task performance.

## 3. Discussion

### What this captures

- Stability from the regularization term.
- Plasticity from the current task loss.
- A direct knob ($\lambda$) to trade off both.

### Practical notes

- Too small $\lambda$: stronger adaptation, more forgetting.
- Too large $\lambda$: less forgetting, but may underfit new tasks.
- In practice, tune $\lambda$ using a validation split from recent tasks.

## 4. References

[1] Kirkpatrick et al., *Overcoming catastrophic forgetting in neural networks*, PNAS 2017.  
[2] Lopez-Paz and Ranzato, *Gradient Episodic Memory for Continual Learning*, NeurIPS 2017.  
[3] Parisi et al., *Continual Lifelong Learning with Neural Networks*, Neural Networks 2019.
