"use strict";
const ethers = require("ethers");
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // bootstrap(/*{ strapi }*/) {
  //   // listen for payments
  //   let provider = new ethers.providers.JsonRpcProvider("");
  //   const daiAddress = "dai.tokens.ethers.eth";
  //   const nftAddress = ""
  //   const nftABi = []

  //   let signer
  //   const nftContract = new ethers.Contract(nftAddress, nftABi, signer)

  //   // The ERC-20 Contract ABI, which is a common contract interface
  //   // for tokens (this is the Human-Readable ABI format)
  //   const daiAbi = [
  //     // Some details about the token
  //     "function name() view returns (string)",
  //     "function symbol() view returns (string)",

  //     // Get the account balance
  //     "function balanceOf(address) view returns (uint)",

  //     // Send some of your tokens to someone else
  //     "function transfer(address to, uint amount)",

  //     // An event triggered whenever anyone transfers to someone else
  //     "event Transfer(address indexed from, address indexed to, uint amount)",
  //   ];

  //   // The Contract object
  //   const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

  //   let filterTo = daiContract.filters.Transfer(
  //     null,
  //     process.env.APP_WALLET_ADDRESS
  //   );
  //   daiContract.on(filterTo, (from, to, amount, event) => {});
  //   daiContract.on("Transfer", (from, to, amount, event) => {
  //     let hash = event.transactionHash;

  //     let task = async () => {
  //       let payment = await strapi.query("api::payment.payment").findOne({
  //         where: {
  //           tx_hash: hash,
  //         },

  //         populate: {
  //           book: true,
  //         },
  //       });

  //       if(payment && payment.book.price == amount) {
  //         let bookCopy = await strapi.query("api::payment.payment").create({
  //           data : {
  //             owner: from,
  //             book: payment.book.id
  //           }
  //         })

  //         let signerContract = nftContract.connect(signer)
  //         let tx = signerContract.awardItem(from, `${process.env.SERVER_URL}/api/book-copies/nft/${bookCopy.id}`)

  //         await tx.wait()
  //         // Send 

  //       }
  //     };

  //     // The event object contains the verbatim log data, the
  //     // EventFragment and functions to fetch the block,
  //     // transaction and receipt and event functions
  //   });
  // },
};
