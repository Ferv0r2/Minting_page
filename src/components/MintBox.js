import React, { Component } from "react";
import caver from "klaytn/caver";
import keplerContract from "klaytn/keplerContract";

import "./MintBox.scss";

const mixCA = "0xdd483a970a7a7fef2b223c3510fac852799a88bf";
const ownerA = "0x820479C7B095C5ca4969353ECcA5421c7012df5f";

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
      "0x95024A0d0855aF15f5141f6f36fc0229c3d1a864"
    );
    let limit = await myContract.methods.limit().call();
    this.setState({ limit });
  };

  transferMix = async () => {
    const account = this.props.account;
    const data = caver.klay.abi.encodeFunctionCall(
      {
        constant: false,
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
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
      [ownerA, caver.utils.toPeb("1", "KLAY")]
    );
    const result = await caver.klay.sendTransaction({
      type: "SMART_CONTRACT_EXECUTION",
      from: account,
      to: mixCA,
      gas: "8000000",
      data,
    });
    console.log(result);
    const trxResult = await caver.klay.getTransactionReceipt(
      result.senderTxHash
    );
    if (trxResult.status === true) return true;
    return false;
  };

  minting = async () => {
    const account = this.props.account;
    const balance = this.props.balance;
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
        {
          constant: false,
          inputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
      ],
      "0x95024A0d0855aF15f5141f6f36fc0229c3d1a864"
    );
    let limit = await myContract.methods.limit().call();
    if (balance >= 1) {
      if (limit != 0) {
        await myContract.methods.mint(1).send({
          type: "SMART_CONTRACT_EXECUTION",
          from: account,
          gas: "15000000",
          value: caver.utils.toPeb("1", "KLAY"),
        });
        alert("민팅 성공 !");
      } else {
        alert("남은 수량이 없습니다.");
      }
    } else {
      alert("클레이가 부족합니다.");
    }
  };

  render() {
    const { balance } = this.props;
    const { limit } = this.state;
    return (
      <div className="MintBox">
        <div className="MintBox__contents">
          <img src="images/char.png"></img>
          <div className="MintBox__count">남은 수량 : {limit}개</div>
          <div className="MintBox__button" onClick={() => this.minting()}>
            Mint
          </div>
          <div className="MintBox__balanceOf">
            <span className="MintBox__label">Your Balance : </span>
            <span className="MintBox__balance">{balance}</span>
            <span className="MintBox__unit"> KLAY</span>
          </div>
        </div>
      </div>
    );
  }
}
export default MintBox;
