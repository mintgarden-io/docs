---
slug: mint-an-nft
title: How to mint an NFT
description: Step-by-step instructions on how to mint an NFT using MintGarden Studio.
authors: acevail
tags: [guides]
image: /img/mint-an-nft/nft-filled.png
---
This guide describes how to mint a single NFT using the community version
of [MintGarden Studio](https://github.com/mintgarden-io/mintgarden-studio).

![MintGarden Studio Minting Page](/img/mint-an-nft/nft-filled.png)

<!--truncate-->

### Requirements

1. [Chia Client](https://www.chia.net/downloads) with a wallet set up.
2. [MintGarden Studio](https://mintgarden.io/mint)
3. A profile in the [Chia Client](https://www.chia.net/downloads). <br/> If you didn't create a profile yet, head over
   to [create a profile](/mintgarden-studio/create-a-profile).
4. Some XCH for minting. You can get some from the [Chia Faucet](https://faucet.chia.net/).

### Mint an NFT

Start with selecting `Single Mint` in the sidebar to prepare and mint your NFT.
Here are some explanations for the various fields.

![Empty NFT page](/img/mint-an-nft/nft-empty.png)

#### Profile

Select the profile you want to use for minting. This profile will be connected to the NFT and identifies the creator.

#### Collection

You can assign this new NFT to a collection if you want to group your NFTs together.
If you didn't create a collection yet, head over to [create a collection](/mintgarden-studio/create-a-collection).

#### Name and Description

This information is prominently displayed with the NFT on explorers and marketplaces.

#### License URL

By assigning a license to the NFT, buyers of your NFTs will directly see what rights they will receive when owning your
NFTs.
The content of your license will largely depend on what you as the creator want to achieve.

Some licenses used by other projects:

* [Creative Commons licenses](https://creativecommons.org/2014/01/07/plaintext-versions-of-creative-commons-4-0-licenses/)
* [CantBeEvil licenses](https://github.com/a16z/a16z-contracts#cantbeevil-license)
* Custom licenses such as the [Marmotverse License](https://assets.marmotverse.io/spacemarmots/marmotverse_license.pdf)

When in doubt, consult a lawyer to pick the right license for your project. This is not legal advice.

Make sure to point to a plain text file or PDF file here.
Pointing to a website will only work if the content of the website never changes.

This field is read only if you defined the license URL in your collection.

#### Royalty percentage

One great feature of Chia NFTs is the automatic payment of royaties on secondary sales!

For example, when you set `Royalty percentage` to 5% and your NFT sells for 1 XCH on the seconday market, you will
automatically receive a payment of 0.05 XCH. 

#### Image
Select the image that should be referenced in your new NFT.
This image will be uploaded to https://nft.storage.

#### Blockchain fee

Optionally set a blockchain fee if you want to speed up the minting process in times of a busy network.
Most of the time you can leave this at 0.