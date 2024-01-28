---
slug: bulk-mint-nfts
title: How to bulk mint NFTs
description: Step-by-step instructions on how to bulk mint NFTs using MintGarden Studio.
authors: acevail
tags: [guides]
image: /img/bulk-mint-nft/wizard-3.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide describes how to bulk mint NFTs using the early access version
of MintGarden Studio.

![MintGarden Studio Minting Page](/img/bulk-mint-nft/wizard-1.png)

<!--truncate-->

## Requirements

1. [Chia Client 2.1.4 or newer](https://www.chia.net/downloads/) with a wallet set up.
2. The latest [MintGarden Studio](https://mintgarden.io/mint).
3. A profile in the Chia Client. <br/> If you didn't create a profile yet, head over
   to [create a profile](/mintgarden-studio/create-a-profile).
4. Some XCH for minting.

## Prepare the Mint

Start with selecting `Minting` in the sidebar and then click the `Bulk Minting` button.


### Step 1: NFTs and attributes

![Bulk Minting Wizard Page 1](/img/bulk-mint-nft/wizard-1.png)

Select the folder where your images and your metadata information are stored.

Three different formats are supported:

<Tabs>
<TabItem value="csv" label="Metadata as CSV" default>

#### Single folder containing image files and a `metadata.csv`

The expected folder structure looks like this.

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

<iframe src="https://drive.google.com/file/d/1j_f0c-y534o_3eaDFFXyilv-tdM3J-Q1/preview" width="100%" allow="autoplay"></iframe>

The column `file` contains the filename of your image. The next columns `name` and `description` describe the NFT itself
and will be displayed prominently in explorers and marketplaces.

The rest of the columns are the attributes of your NFTs. The first row is the header row and defines the trait types for
your collection.

You can download this sample here: <a target="_blank" href='https://drive.google.com/drive/folders/1Nl0uz42G-_AXFkL3g653dYsVuUr3IN5i'>Sample folder on Google Drive</a>

</TabItem>
<TabItem value="nested_folder" label="Metadata as JSON in nested folder">

#### `images` and `json` folders with matching filenames

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

</TabItem>
<TabItem value="flat_folder" label="Metadata as JSON in single folder">

#### Single folder with `.png` and `.json` files with matching filenames

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

</TabItem>
</Tabs>
The Studio will show you a preview of all the NFTs and their metadata.

When you're happy, click `Save and Continue`.

### Step 2: Creator and Payment

![Bulk Minting Wizard Page 2](/img/bulk-mint-nft/wizard-2.png)

#### Profile

Select the profile you want to use for minting. This profile will be connected to the NFT and identifies you as the
creator.

#### Payment

The bulk minting part of MintGarden Studio is a paid service.
You pay a flat fee per NFT upfront. 

If you mint more than 100 pieces, a volume discount will be applied automatically.

#### Royalties

One great feature of Chia NFTs is the automatic payment of royaties on secondary sales!

For example, when you set `Royalty percentage` to 5% and your NFT sells for 1 XCH on the seconday market, you will
automatically receive a payment of 0.05 XCH.

### Step 2: Collection and Minting Strategy

![Bulk Minting Wizard Page 3](/img/bulk-mint-nft/wizard-3.png)

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

## Run the Mint

The MintGarden Studio will now show a summary of your mint. You can `Click to show details` at the top to expand more
details.

![Bulk Minting Status Page Ready Collapsed](/img/bulk-mint-nft/mint-status-ready-collapsed.png)

#### Blockchain Fees

Set a blockchain fee if you want to speed up the minting process in times of a busy network.
You will see a warning banner if your fees are deemed too low
When the mempool size is close to 0, you can mint without fees.

### Start Minting

Once you click `Start Minting`, the MintGarden Studio starts uploading and minting your NFTs. Note that you have to keep
this application open to continue minting.

:::tip
No MintGarden servers ever get access to your keys and files.  
Only you and your local computer are capable of minting NFTs in your name!
:::

You can always press `Pause` to pause the minting process and continue it at a later time.
The same happens if you close the application while minting.
