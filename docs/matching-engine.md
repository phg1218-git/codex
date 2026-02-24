# Matching Algorithm Design

## Hard filters
1. `stopMatching = false`
2. Dealbreaker exclusion: candidate `dislikedPartnerConditions` must not conflict.
3. Optional location filter can be enabled by adding province compatibility clause.

## Soft score formula
Total score `S` in range `[0,1]`:

`S = 0.50*Survey + 0.20*Lifestyle + 0.20*Values + 0.10*Personality`

- Survey similarity: exact answer match ratio on immutable survey IDs.
- Lifestyle compatibility: drinking + smoking equality.
- Value alignment: Jaccard overlap of `preferences`.
- Personality weighting: MBTI exact match boost.

Each response includes full breakdown for transparency.
