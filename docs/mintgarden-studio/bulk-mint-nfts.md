---
slug: bulk-mint-nfts
title: How to bulk mint NFTs
description: Step-by-step instructions on how to bulk mint NFTs using MintGarden Studio.
authors: acevail
tags: [guides]
image: /img/bulk-mint-nft/wizard-3.png
---

This guide describes how to bulk mint NFTs using the early access version
of MintGarden Studio.

![MintGarden Studio Minting Page](/img/bulk-mint-nft/wizard-3.png)

<!--truncate-->

## Requirements

1. [Chia Client 1.6.1 or newer](https://www.chia.net/downloads/) with a wallet set up.
2. MintGarden Studio ([Early Access Version](https://mintgarden.io/mint))
3. A profile in the Chia Client. <br/> If you didn't create a profile yet, head over
   to [create a profile](/mintgarden-studio/create-a-profile).
4. Some XCH for minting. You can get some from the [Chia Faucet](https://faucet.chia.net/).

## Prepare the Mint

Start with selecting `Minting` in the sidebar and then click the `Bulk Minting` button.

### Step 1: Creator and Payment

![Bulk Minting Wizard Page 1](/img/bulk-mint-nft/wizard-1.png)

#### Profile

Select the profile you want to use for minting. This profile will be connected to the NFT and identifies you as the
creator.

#### Payment

The bulk minting part of MintGarden Studio is a paid service. You have two options for payment

1. You pay a flat fee per NFT upfront
2. You pay a percentage of all future royalties to MintGarden.  
   The splitting will be on chain and handled automatically.

#### Royalty percentage

One great feature of Chia NFTs is the automatic payment of royaties on secondary sales!

For example, when you set `Royalty percentage` to 5% and your NFT sells for 1 XCH on the seconday market, you will
automatically receive a payment of 0.05 XCH.

### Step 2: Collection and Minting Strategy

![Bulk Minting Wizard Page 2](/img/bulk-mint-nft/wizard-2-bulk.png)

#### Collection

You can assign this new NFT to a collection if you want to group your NFTs together.
If you didn't create a collection yet, head over to [create a collection](/mintgarden-studio/create-a-collection).

#### Minting Strategy

There are two minting strategies available

1. **Bulk Minting**: Mint the whole collection at once, in batches of 25 NFTs.   
   If you enter a **Sale Price**, it will generate an offer file for you and put it on your computer.  
   If you toggle **Upload to dexie.space**, the offer will automatically be uploaded to dexie as well.
2. **Random Minting**: You determine a price for each NFT. We will generate a payment address for you.   
   After you activate the minter, people can send NFTs to your payment address and pay the price you specified.
   For each payment, the Studio will mint an NFT on demand and send this NFT back to the payment sender.

Note that your computer has to be active while minting in both cases.

### Step 3: NFTs and attributes

![Bulk Minting Wizard Page 3](/img/bulk-mint-nft/wizard-3.png)

Select the folder where your images and your metadata information are stored.

Three formats are supported:

#### 1. Image folder + metadata.csv

```
my-project/
├─ metadata.csv
├─ 1.png
├─ 2.png
├─ 3.png
├─ 4.png
└─ 5.png
```

The `metadata.csv` has the following format:

```csv
file;name;description;Background;Eyeball;Eye Color;Iris;Shine;Bottom lid;Top lid
1.png;Eyes #1;Description 1;Black;White;Red;Small;Shapes;High;Middle
2.png;Eyes #2;Description 2;Black;White;Yellow;Large;Shapes;High;High
3.png;Eyes #3;Description 3;Black;White;Yellow;Small;Shapes;High;Middle
4.png;Eyes #4;Description 4;Black;Red;Red;Small;Shapes;High;Middle
5.png;Eyes #5;Description 5;Black;White;Red;Small;Shapes;High;Middle
```

The column `file` contains the filename of your image. The next columns `name` and `description` describe the NFT itself
and will be displayed prominently in explorers and marketplaces.

The rest of the columns are the attributes of your NFTs. The first row is the header row and defines the trait types for
your collection.

You can download this sample here: <a target="_blank" href='/assets/metadata.csv'>Sample metadata.csv</a>

#### 2. `images` and `json` folders with matching filenames

```
my-project/
├── images/
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   └── 5.png
└── json/
    ├── 1.json
    ├── 2.json
    ├── 3.json
    ├── 4.json
    └── 5.json
```

The `.json` files look like this:

```json5
{
  "name": "Eyes #1",
  "description": "Description 1",
  "attributes": [  //optional
    {
      "trait_type": "Background",
      "value": "Black"
    },
    // ...
  ]
}
```

#### 3. Single folder with `.png` and `.json` files with matching filenames


```
my-project/
├── 1.json
├── 1.png
├── 2.json
├── 2.png
├── 3.json
├── 3.png
├── 4.json
├── 4.png
├── 5.json
└── 5.png
```

The `.json` files look like this:

```json5
{
  "name": "Eyes #1",
  "description": "Description 1",
  "attributes": [  //optional
    {
      "trait_type": "Background",
      "value": "Black"
    },
    // ...
  ]
}
```

The Studio will show you a preview of all the NFTs and their metadata.

When you're happy, click `Save and Continue`.

## Run the Mint

The MintGarden Studio will now show a summary of your mint. You can `Click to show details` at the top to expand more
details.

![Bulk Minting Status Page Ready Collapsed](/img/bulk-mint-nft/mint-status-ready-collapsed.png)

#### Blockchain Fees

Optionally set a blockchain fee if you want to speed up the minting process in times of a busy network.
You can check [Spacescan](https://www.spacescan.io/xch/insight/mempool-size) to see the current mempool size.
When the mempool size is close to 0, you can mint without fees.

### Start Minting

Once you click `Start Minting`, the MintGarden Studio starts uploading an minting your NFTs. Note that you have to keep
this application open to continue minting.

:::tip
No MintGarden servers ever get access to your keys and files.  
Only you and your local computer are capable of minting NFTs in your name!
:::

You can always press `Pause` to pause the minting process and continue it at a later time.
The same happens if you close the application while minting.