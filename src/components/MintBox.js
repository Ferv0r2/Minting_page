import React, { Component } from "react";
import caver from "klaytn/caver";

import "./MintBox.scss";

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
      "0x97ef0f1094fb9be74AB5e1ce5102D33BCa92D7F8"
    );
    let limit = await myContract.methods.limit().call();
    this.setState({ limit });
  };

  transferMix = async (account) => {
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
      [
        "0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C",
        caver.utils.toPeb("1", "KLAY"),
      ]
    );

    const result = await caver.klay.sendTransaction({
      type: "SMART_CONTRACT_EXECUTION",
      from: account,
      to: "0xdd483a970a7a7fef2b223c3510fac852799a88bf",
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
    const account = this.props.address;
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
      "0x97ef0f1094fb9be74AB5e1ce5102D33BCa92D7F8"
    );
    let limit = await myContract.methods.limit().call();
    if (limit != 0) {
      const mixTransferResult = await this.transferMix(account);
      if (mixTransferResult === true) {
        alert("민팅 성공");
      }
    } else {
      alert("남은 수량이 없습니다.");
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
            <span className="MintBox__unit"> Mix</span>
          </div>
        </div>
      </div>
    );
  }
}
export default MintBox;
