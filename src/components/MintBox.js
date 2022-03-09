import React, { Component } from "react";
import caver from "klaytn/caver";
import keplerContract from "klaytn/keplerContract";

import "./MintBox.scss";

const mixCA = "0xdd483a970a7a7fef2b223c3510fac852799a88bf";
const ownerA = "0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C";
const minterCA = "0x4E9513Cb7F167bF0c1D51af9fAd4BfF81921Cb6c";

class MintBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 0,
    };
  }

  componentDidMount() {
    this.getLimit();
  }

  getLimit = async () => {
    const myContract = new caver.klay.Contract(
      [
        {
          constant: true,
          inputs: [],
          name: "limit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      minterCA
    );
    let limit = await myContract.methods.limit().call();
    this.setState({ limit });
  };

  getMintprice = async () => {
    const myContract = new caver.klay.Contract(
      [
        {
          constant: true,
          inputs: [],
          name: "mintPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      minterCA
    );
    let mintPrice = await myContract.methods.mintPrice().call();
    return mintPrice;
  };

  // transferMix = async () => {
  //   const account = this.props.account;
  //   const data = caver.klay.abi.encodeFunctionCall(
  //     {
  //       constant: false,
  //       inputs: [
  //         {
  //           internalType: "address",
  //           name: "recipient",
  //           type: "address",
  //         },
  //         {
  //           internalType: "uint256",
  //           name: "amount",
  //           type: "uint256",
  //         },
  //       ],
  //       name: "transfer",
  //       outputs: [
  //         {
  //           internalType: "bool",
  //           name: "",
  //           type: "bool",
  //         },
  //       ],
  //       payable: false,
  //       stateMutability: "nonpayable",
  //       type: "function",
  //     },
  //     [ownerA, caver.utils.toPeb("1", "KLAY")]
  //   );
  //   const result = await caver.klay.sendTransaction({
  //     type: "SMART_CONTRACT_EXECUTION",
  //     from: account,
  //     to: mixCA,
  //     gas: "8000000",
  //     data,
  //   });
  //   console.log(result);
  //   const trxResult = await caver.klay.getTransactionReceipt(
  //     result.senderTxHash
  //   );
  //   if (trxResult.status === true) return true;
  //   return false;
  // };

  minting = async () => {
    const account = this.props.account;
    const balance = this.props.balance;
    const limit = this.state.limit;
    const myContract = new caver.klay.Contract(
      [
        {
          constant: false,
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "sendMix",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      minterCA
    );

    const mixContract = new caver.klay.Contract(
      [
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      mixCA
    );

    let mintPrice = await this.getMintprice();
    if (balance >= mintPrice) {
      if (limit != 0) {
        const allow = await mixContract.methods.allowance(ownerA, minterCA);
        if (allow) {
          await mixContract.methods.approve(minterCA, mintPrice).send({
            from: account,
            gas: "15000000",
          });
          await new Promise((resolve) => {
            setTimeout(async () => {
              await myContract.methods.sendMix(1).send({
                // await myContract.methods.mint(0, 1).send({
                type: "SMART_CONTRACT_EXECUTION",
                from: account,
                gas: "15000000",
              });
              resolve();
            }, 2000);
          });
          alert("민팅 성공 !");
        } else {
          await myContract.methods.mint(0, 1).send({
            type: "SMART_CONTRACT_EXECUTION ",
            from: account,
            gas: "15000000",
          });
          alert("민팅 성공 !");
        }
      } else {
        alert("남은 수량이 없습니다.");
      }
    } else {
      alert("클레이가 부족합니다.");
    }
  };

  // minting = async () => {
  //   const account = this.props.account;
  //   const balance = this.props.balance;
  //   const myContract = new caver.klay.Contract(
  //     [
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "limit",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "count",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         payable: true,
  //         stateMutability: "payable",
  //         type: "function",
  //       },
  //     ],
  //     "0x95024A0d0855aF15f5141f6f36fc0229c3d1a864"
  //   );
  //   let limit = await myContract.methods.limit().call();
  //   if (balance >= 1) {
  //     if (limit != 0) {
  //       await myContract.methods.mint(1).send({
  //         type: "SMART_CONTRACT_EXECUTION",
  //         from: account,
  //         gas: "15000000",
  //         value: caver.utils.toPeb("1", "KLAY"),
  //       });
  //       alert("민팅 성공 !");
  //     } else {
  //       alert("남은 수량이 없습니다.");
  //     }
  //   } else {
  //     alert("클레이가 부족합니다.");
  //   }
  // };

  render() {
    const { balance } = this.props;
    const { limit } = this.state;
    return (
      <div className="MintBox">
        <div className="MintBox__contents">
          <img src="images/mix.png"></img>
          <video
            src="images/stone.mp4"
            autoPlay="autoPlay"
            loop="loop"
            muted="muted"
          ></video>
          <div className="MintBox__count">남은 수량 : {limit}개</div>
          <div className="MintBox__button" onClick={() => this.minting()}>
            Mint
          </div>
          <div className="MintBox__balanceOf">
            <span className="MintBox__label">Your Balance : </span>
            <span className="MintBox__balance">{balance}</span>
            <span className="MintBox__unit"> Mix</span>
          </div>
          <div className="MintBox__info">
            <p>* 믹스스톤 민팅은 케플러 홀더만 가능합니다.</p>
            <p>* 트랜잭션은 최대 1개로 개당 15 Mix입니다.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default MintBox;
