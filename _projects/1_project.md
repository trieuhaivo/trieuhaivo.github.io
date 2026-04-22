---
layout: page
title: DMI
description: Depth-wise Multivariate Imputation for Environmental Time Series
importance: 1
category: research
related_publications: true
---

**Depth-wise Multivariate Imputation (DMI)** is a deep-learning architecture for filling in missing measurements across multi-depth environmental sensor networks — the kind of monitoring infrastructure that water agencies, environmental regulators, and climate-research programs depend on to track lake stratification, coastal hypoxia, drinking-water reservoirs, and the long-running aquatic time series that feed climate-change attribution and policy decisions.

### The problem

Environmental sensors lose data. Buoys flood, transmitters fail, calibrations drift, and maintenance windows leave multi-day gaps that are otherwise unrecoverable. Existing time-series imputation methods treat such gaps as a generic missing-data problem and recover values one variable at a time. They ignore the most informative structure in stratified water bodies: the **vertical correlation between adjacent depth layers**. A missing surface reading almost always correlates with the readings just below it, but standard imputation architectures have no built-in mechanism to use that physical structure.

### Our approach

DMI uses an **axis-factored attention mechanism** — an architectural family with established precedent in vision (axial attention, Ho et al., 2019) and time-series modelling (e.g. iTransformer, Liu et al., 2024) — adapted here to decompose attention along three physically-meaningful axes: *depth*, *feature*, and *time*. The contribution is the depth axis: prior multivariate-imputation methods compress depth-wise dependencies into a single feature dimension, losing the structured vertical correlation that defines stratified aquatic systems. DMI gives depth its own attention head, so reconstructed values respect both the temporal dynamics of each sensor and the physical relationships between sensors at different depths.

### Evaluation

We evaluate DMI on two real-world multi-depth water-quality datasets:

- [**LakeBeD-US**](https://essd.copernicus.org/articles/17/3141/2025/) — a published benchmark of multi-depth lake water-quality measurements (21 U.S. lakes, >500 million observations across 17 variables) hosted by Copernicus *Earth System Science Data*. Our DMI experiments use the LakeBeD-US Minnesota partition (4 lakes monitored by the North Temperate Lakes LTER).
- **Miami-WQ** — a newly collected multi-depth water-quality dataset assembled by our group from sensor deployments in South Florida.

Across both datasets, DMI outperforms prior multivariate-imputation baselines under three missing-data regimes: random-element missingness, structured *block* missingness simulating sensor outages and transmission failures, and combined feature- and time-axis missingness. The baseline set includes diffusion-based imputation (**CSDI** — Tashiro et al., 2021; **PriSTI** — Liu et al., 2023; **CoFILL** — Liu et al., 2024), Transformer-based imputation (**SAITS** — Du et al., 2023; **iTransformer** — Liu et al., 2024), recurrent imputation (**BRITS** — Cao et al., 2018; **GRU-D** — Che et al., 2018), and classical interpolation. Detailed comparisons appear in the manuscript currently under review at ACM SIGKDD 2026.

### Beyond water — transferability

The axis-factored attention design generalises to any structured-data problem where the data tensor carries independent informative axes. Examples include multi-resolution medical sensor fusion (depth → tissue layers in ultrasound; depth → MRI slices), manufacturing telemetry across machine layers, multi-modal Earth observation (depth → vertical atmospheric levels in numerical weather prediction), and any time-series problem with a structured non-temporal axis that warrants explicit representation. The water-quality benchmarks anchor the empirical evaluation; the architectural contribution is general.

### Collaborators

- [**Prof. Leonardo Bobadilla**](https://www.cis.fiu.edu/faculty-staff/leonardo-bobadilla/) — Associate Professor, [Knight Foundation School of Computing and Information Sciences](https://www.cis.fiu.edu/), [Florida International University](https://www.fiu.edu/)
- [**Prof. Cuong V. Nguyen**](https://www.durham.ac.uk/staff/viet-c-nguyen/) — Assistant Professor, Department of Mathematical Sciences, Durham University, United Kingdom
- **Dr. Ana Sophia Cavalcanti Alves Vilas Boas** — Research Specialist, Florida International University; PhD in Electrical Engineering (UFJF, Brazil), with marine-robotics and embedded-systems expertise

### Funding

The **[NSF AI Institute for Research on Trustworthy AI in Weather, Climate, and Coastal Oceanography (AI2ES)](https://www.ai2es.org/)** funds this research via the FIU–AI2ES ExpandAI partnership — a U.S. National Science Foundation program that develops trustworthy artificial intelligence for Earth-system, weather, and climate-resilience applications.

### Status

Manuscript under peer review at [**ACM SIGKDD 2026**](https://kdd2026.kdd.org/) (the ACM SIGKDD Conference on Knowledge Discovery and Data Mining).

### Code & data

Source code and the Miami-WQ dataset will be released publicly upon paper acceptance, in accordance with standard pre-publication confidentiality during peer review.
