---
slug: chia-releases-nft0
title: Chia Releases NFT0
description: Overview of the NFT0 alpha NFT standard, how to mint NFTs, and how to view them on MintGarden.io
authors: clydewallace22
tags: [overview, nft, nft0, announcement]
image: /img/blog/nft0_wallet.png
---
![Chia Releases NFT0](/img/blog/nft0_wallet.png)

Today, Chia released the NFT0 alpha standard and a timeline for the official NFT standard release (NFT1). The NFT0 alpha standard enables the community to test minting capabilities and gain insights into how the official NFT standard will look and operate in their Chia client.

<!--truncate-->

## Chia Releases NFT0

***

Chia has released NFT0, a public, testnet10 standard for NFTs: ["Our vision for NFTs aligns with the Chia core pillars of security, sustainability, and compliance."](https://www.chia.net/2022/05/11/our-vision-for-chia-nfts.en.html). MintGarden has incorporated the NFT0 standard directly into testnet.mintgarden.io so any NFTs created on the blockchain using NFT0 will automatically be identified and displayed on MintGarden (mainnet NFTs will likely require an opt-in for listing on MintGarden).

![NFT0 Has Arrived on MintGarden](/img/blog/nft0_mg.png)

### 📑 Tutorial for minting NFT0 compliant NFTs via CLI commands:

1. Install and setup the main_dids branch on testnet10
 - Steps 3-11 https://docs.chia.net/docs/15resources/nft_dev_guide/#install-and-configure-chia
2. Add txch to your Standard Wallet
 - Step 12 https://docs.chia.net/docs/15resources/nft_dev_guide/#install-and-configure-chia
 - Alternative Faucet: https://xchdev.com/faucet/
3. Create an NFT Wallet

  ```
  chia rpc wallet create_new_wallet '{"wallet_type": "nft_wallet"}'
  ```
 - Step 1-2 https://docs.chia.net/docs/15resources/nft_dev_guide/#create-an-nft-wallet-cli

4. Obtain Image and File Hash

  ```
  curl https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg | sha256sum
  ```

 - Step 1-2 https://docs.chia.net/docs/15resources/nft_dev_guide/#obtain-an-image-and-its-hash

5. Mint an NFT
  ```
  chia rpc wallet nft_mint_nft '{"wallet_id": 2, "uris": ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/1280px-Felis_catus-cat_on_snow.jpg"], "hash": "8c950275f16583b93ce4be9652739d43e45ab3d2be8bc19d379318d2c45d7cef", "artist_address": "txch1qpv4cxa4j5pyjmm4mzxhkhtxqj3my6k4kmcf45tp76wr6uvppfcq9fg4vl"}'
  ```  
 - NOTE: using the artist address flag will ensure all of your NFTs are available under the same creator, this can be any address associated with your mnemonics. (example here uses the first wallet address from the 'chia wallet get_address' command).
 - Step 1-2 https://docs.chia.net/docs/15resources/nft_dev_guide/#mint-an-nft-rpc

6. View NFT information
  ```
  chia rpc wallet nft_get_nfts '{"wallet_id": 2}'
  ```
7. (Optional) Add additional uris to NFT

  ```
  chia rpc wallet nft_add_uri '{"wallet_id": 2, "nft_coin_id": "B5178AB54CD922889B4E97B2DDC0DD43FD85BE26F69DD3D697084C80AE4E9625", "uri": "https://newuri.net"}'
  ```
  - https://docs.chia.net/docs/15resources/nft_dev_guide/#add-a-uri-to-an-nft-rpc

### 💻 Access to view all of your minted NFTs on MintGarden:

1. Access https://mintgarden.io/
2. Select your recently created NFT
3. Select the Creator Address
4. Browse your created and owned NFTs

### 📖  An overview of NFT0 and how it will differ from NFT1 (mainnet standard):

#### What is the difference between NFT0 and NFT1

|                              | NFT0      | NFT1     |
| :---                         | :---:     | :---:    |
| Artist Address               | &#x2611;  | &#x2611; |
| Permanence (multiple uris)   | &#x2611;  | &#x2611; |
| Offer Files                  | &#x2611;  | &#x2611; |
| MetaData                     | &#x2612;  | &#x2611; |
| Provenance (dids)            | &#x2612;  | &#x2611; |
| Royalties                    | &#x2612;  | &#x2611; |



The NFT0 alpha standard is a testnet only NFT standard enabling users to mint, view, and trade NFTs (for txch) on Chia testnet10. The NFT1 official standard will be a mainnet NFT standard that expands NFT0 to include creator royalties, metadata, DIDs, and CAT for NFT trading.

NFT0 will be used by MintGarden.io to test the functionality of Chia NFTs and gain valuable insights from the community as to how they want to interact with NFTs.

To prepare for the above we recommend reviewing the tutorial Chia has released for minting NFT0 compliant NFTs on testnet. (We advise these NFTs are only minted on testnet10)
https://docs.chia.net/docs/15resources/nft_dev_guide/
(Note: minting testnet NFTs via CLI does require some technical knowledge, please let us know if you run into any issues or have questions)
