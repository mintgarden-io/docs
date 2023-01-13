---
slug: migrate-skynft
title: Migrate from SkyNFT to the Chia wallet
description: Step-by-step instructions on how to migrate a your wallet from SkyNFT to the Chia wallet.
authors: acevail
tags: [guides]
image: /img/migrate-skynft/skynft-chia-header.png
---

This guide describes how to migrate your wallet from SkyNFT to the Chia wallet.

![SkyNFT home page](/img/migrate-skynft/skynft-chia-header.png)

<!--truncate-->

## Requirements

1. A [SkyNft](https://skynft.org) account
2. [Chia Client](https://www.chia.net/downloads/) installed

## Migrate your SkyNFT wallet

This section describes how to export your SkyNFT wallet mnemonic (24-words) from their website.

### Retrieve your wallet mnemonic

Starting from the [SkyNft](https://skynft.org) homepage, navigate to `Wallet` -> `New Wallet` in the top menu.

![SkyNFT home page with menu](/img/migrate-skynft/skynft-homepage-with-menu.png)

You will now see a list of your wallets. You can start the export by clicking `Show mnemonic`.

![SkyNFT wallet list](/img/migrate-skynft/skynft-new-wallet.png)

To confirm the export, you will have to verify your identity by providing both an email `Verification Code` and
a `Google two-factor authentication code`.   
Finally, click `Confirm to show mnemonic` to reveal your secret wallet key.

![SkyNFT wallet show mnemonic](/img/migrate-skynft/skynft-show-mnemonic.png)

Your mnemonic will look something like this:

```
isolate hybrid high soon unable effort
hat sister betray emotion tower link
math water trigger usage bring suit
debris length ask hat enjoy panther
```

:::caution

Never share this secret key with **anyone**!

:::

### Import your mnemonic into the official Chia wallet

Open the official Chia wallet. There, select `Import from Mnemonics (24 Words)` to start the import.

![Chia wallet import mnemonic](/img/migrate-skynft/chia-wallet-import.png)

Click `Paste mnemonic` and then paste the 24 words you have exported from SkyNFT into the provided textarea.

![Chia wallet paste mnemonic](/img/migrate-skynft/chia-wallet-import-paste.png)

After clicking `Import`, your wallet can now be used in the Chia client! 🌱

## Next steps

Use the MintGarden Studio to [mint an NFT](/mintgarden-studio/mint-an-nft) or [bulk mint a whole colleciton of NFTs](/mintgarden-studio/bulk-mint-nfts).