---
layout: page
title: Lake Temperature Forecasting
description: Physics-Informed Neural Networks for Multi-Depth Lake Water Temperature Modeling
importance: 2
category: research
related_publications: true
---

A **physics-informed neural network** combining **Koopman operator embeddings** with **LSTM recurrent networks** for long-horizon, multi-depth forecasting of lake water temperature — a problem that matters both for climate-change attribution (lake temperature is a sentinel signal of regional warming) and for managing freshwater drinking supplies, fisheries, and aquatic-ecosystem habitats.

### The problem

Conventional recurrent neural networks (LSTMs) learn temperature dynamics directly from observations. They produce accurate short-term forecasts but accumulate error at multi-month horizons because they have no mechanism for the underlying physics — heat diffusion, vertical stratification, seasonal mixing. Long-horizon multi-depth lake-temperature forecasting demands both learning flexibility and the inductive bias of physical structure.

### Our approach

We combine two ideas:

- **Koopman operator embeddings** lift the nonlinear thermal dynamics into a higher-dimensional space where they become approximately linear, providing a physics-grounded representation that generalizes across temperature regimes and depths. The Koopman embeddings are jointly learned end-to-end with the rest of the network, building on prior Koopman-based dynamics modelling (Takeishi et al., MLPS 2017; Lusch et al., Nat. Commun. 2018).
- **LSTM recurrent networks** learn the residual lake-specific dynamics that the Koopman linearization cannot capture.

The resulting hybrid model takes multi-depth temperature time series as input and produces multi-depth temperature forecasts at long horizons.

### Evaluation

We evaluate the model on a benchmark of **450 lakes across the U.S. Midwest** spanning **40 years (1980–2019)** of multi-depth temperature observations. It significantly outperforms a conventional LSTM baseline on long-horizon multi-depth forecasting.

### Publication

Peer-reviewed and published at the [**ICLR 2025 Workshop on Tackling Climate Change with Machine Learning**](https://www.climatechange.ai/events/iclr2025) — the dedicated climate-AI workshop co-located with the [International Conference on Learning Representations](https://iclr.cc/Conferences/2025) — Singapore, April 2025.

### Co-authors

- **Trieu H. Vo** (lead author) — PhD Student, [Florida International University](https://www.fiu.edu/)
- [**Prof. Cuong V. Nguyen**](https://www.durham.ac.uk/staff/viet-c-nguyen/) — Assistant Professor, Department of Mathematical Sciences, [Durham University](https://www.durham.ac.uk/), United Kingdom
- **Prof. Dongsheng Luo** — Assistant Professor, [Knight Foundation School of Computing and Information Sciences](https://www.cis.fiu.edu/), Florida International University
- [**Prof. Leonardo Bobadilla**](https://www.cis.fiu.edu/faculty-staff/leonardo-bobadilla/) — Associate Professor, Knight Foundation School of Computing and Information Sciences, Florida International University

### Funding

The [**NSF AI Institute for Research on Trustworthy AI in Weather, Climate, and Coastal Oceanography (AI2ES)**](https://www.ai2es.org/) funds this research via the FIU–AI2ES ExpandAI partnership.

### Paper

Full paper, slides, and poster are available open-access from the [Climate Change AI workshop archive](https://www.climatechange.ai/papers/iclr2025/48).
