---
slug: rarity
title: Rarity ranking on MintGarden
description: How MintGarden uses OpenRarity to rank pieces in collections.
authors: acevail
image: /img/rarity-header.png
---

MintGarden calculates a rarity rank based on the OpenRarity Information Content methodology. Ranking is currently in
beta and projects can opt-in to enable this for their collections.

:::caution

NFT rarity rankings should **NOT** be taken as financial advice!
:::

Check out the [Chia Friends collection](https://mintgarden.io/collections/chia-friends-col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl?sort_by=rank) to see the ranking in action.

![rarity example](/img/rarity-header.png)

## Frequently Asked Questions

### Is the rarity different from the ones calculated by Farmers Market?

Yes, the OpenRarity ranking is different to the ones provided by [Farmers Market](https://farmersmarket.cc/), since it
uses a different methodology to calculate it.

### What is OpenRarity?

OpenRarity is an open-source project originated by NFT marketplaces, tools & collections. The objective is to provide a
transparent rarity calculation that is entirely open-source, objective, and reproducible.

Learn more about the methodology in the [OpenRarity documentation](https://openrarity.gitbook.io/developers/).

### Are NFTs with a higher rank more valuable?

Not necessarily. The pieces with a higher rank contain traits that are rarer than others. But rarity and value are
subjective for each user. In the end, personal preference will be more important than calculated rarities.

### Can rankings change over time?

Yes, this could happen in the future.

For collections that are fully minted, the metadata is immutable for all NFTs following the Chia NFT1 standard. However, the
scoring calculation might change over time to better reflect the rarity of NFTs.

### How can I enable ranking for my collection?

For now, ranking is enabled manually. Please contact the MintGarden team on [Discord](https://discord.gg/FJt6ZRYyyS)
or [Twitter](https://twitter.com/MintGarden_io).

### Collection specific adjustments

For some collections, we adjust the raw attributes stored in the NFT metadata to improve the quality of the scoring and
the ranking.

#### Chia Friends

Two adjustments have been made to the Chia Friends metadata for scoring:

- The mutual exclusive above-head traits "Artifacts", "Coins" and "Keywords" have been merged
- The "Background", which may contain concatenated values like `Cosmic & Stars`, has been split into "Background Base"
  and "Background Modifier"

