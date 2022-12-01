# NFTRokz 🤘
### Your Bear 🐻 Market Partner

## Links
- [Contract](https://github.com/harshu4/NFTRokz-Contract)
- [Devfolio Project](https://devfolio.co/projects/nftrokz-347c)


## Introduction

As most of us know NFT market are highly illiquid, and sometimes while we agree sometimes this has it's own benefits but most of the times this makes us sell our NFT's at a discount just to get the needed cash. So in this hackathon we decided to build something that can be your companion i the bear market, just use your NFT's as collateral and also enjoy using your assets on the L2, now you can bridge your NFT's in a single click to the Starknet and also use them as collateral to get instant loan. By utilzing the message passing between the starknet and ethchain. we are able to bridge any erc-721 assets to the starknet. Also in order to provide a hassle free experience to our users we have integrated our contract to Jediswap so that user can put any NFT as collateral and get any assets available on the jedi swap.

## Our Platform 

We have integrated several important features to the platform in order  to make it useful and now let us talk about them. In simple words our platform is a lending platform that provides collaterized loans ands  offers an investing opportuinity for people. The platform basically has two interface one is for borrowers who  want to stake there NFT's and other is for lenders who want to earn certain side income by providing liquidity to lending pool. 

For the gamers this is a pretty good opportuinity to put there extra assets into work as most of the gamers have many weapons and things that they don't use on a regular basis but still like to hold on to as they may help them in a crucial better, also we have integrated our contracts with JEDI SWAP in order to maintain our liquidity pool as well as to provide seamless experience to the user. we allow on the go conversion of the loan disbursements so the users can easily interact with the platform

## Architecture

User experience has been our top priority while building this project as we wanted to abstract users as much as possible from the complexity and security practices it takes to interact with the blockchains. we fully believe that account abstraction is the future. keeping this in mind we have made all our users on chain call via ArgentX. 

- Starknet : We have used starknet as our primary backend in order to support all the operations such as SWAP's maintaining the liquidity pool, calculating yield and other management things. People are tired of paying high gas fees and don't want to sacrifice decentralization we think Zk based rollups are a perfect option and the message passing protocol of starknet allows us make our project decentralize.

- Jedi Swap : We have integrated the router interface of Jedi swap on our protocol inorder to give users seamless experience when they take loans or invest in the pool, as well as the security that the assets are held by a decentralized protocol 

- Argent X : We truly think that account abstraction is the way to move forward hence we have integrated ArgentX as a primary means for users to interact with the starknetchain

## Challenges 

- As the hackathon was only 24 hours long thinking of an idea and implementing an idea in such time frame with a language that you don't know about is very difficult but somehow due to the very helpful starknet team who supported us constantly to debug isssues and going beyond there limits to help us we were able to complete our project in time.


## Future Improvements 

- Supporting other standards besides erc-721 in order to make the product more generic 
- Add oracle support to get a more accurate pricing of the NFT's and all the assets 
- Improve on the cairo code a bit , was made in a hurry.
