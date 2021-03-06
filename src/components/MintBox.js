import React, { Component } from "react";
import caver from "klaytn/caver";

import "./MintBox.scss";

const mixCA = "0xdd483a970a7a7fef2b223c3510fac852799a88bf";
const ownerA = "0x33365F518A0F333365b7FF53BEAbf1F5b1247b5C";
const minterCA = "0xE7061A42069aFa2DD5146aFdcc0bA8Fb82A67a61";

class MintBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 0,
    };
  }

  componentDidMount() {
    this.setLimit = setInterval(() => this.getLimit(), 1000);
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
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "firstMint",
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
    if (balance >= mintPrice / 1000000000000000000) {
      if (limit != 0) {
        const token = Math.floor(Math.random() * 5) + 15;
        const allow = await mixContract.methods.allowance(ownerA, minterCA);
        if (allow) {
          await mixContract.methods.approve(minterCA, mintPrice).send({
            from: account,
            gas: "15000000",
          });
          await new Promise((resolve) => {
            setTimeout(async () => {
              // await myContract.methods.sendMix(1).send({
              // await myContract.methods.firstMint(token, 1).send({
              await myContract.methods.mint(token, 1).send({
                type: "SMART_CONTRACT_EXECUTION",
                from: account,
                gas: "15000000",
              });
              resolve();
            }, 1000);
          });
          if (token == 15) {
            alert("Mixstone A ?????? ?????? !");
          } else if (token == 16) {
            alert("Mixstone B ?????? ?????? !");
          } else if (token == 17) {
            alert("Mixstone C ?????? ?????? !");
          } else if (token == 18) {
            alert("Mixstone D ?????? ?????? !");
          } else if (token == 19) {
            alert("Mixstone E ?????? ?????? !");
          }
        } else {
          await myContract.methods.mint(token, 1).send({
            type: "SMART_CONTRACT_EXECUTION ",
            from: account,
            gas: "15000000",
          });
          if (token == 15) {
            alert("Mixstone A ?????? ?????? !");
          } else if (token == 16) {
            alert("Mixstone B ?????? ?????? !");
          } else if (token == 17) {
            alert("Mixstone C ?????? ?????? !");
          } else if (token == 18) {
            alert("Mixstone D ?????? ?????? !");
          } else if (token == 19) {
            alert("Mixstone E ?????? ?????? !");
          }
        }
      } else {
        alert("?????? ????????? ????????????.");
      }
    } else {
      alert("????????? ???????????????.");
    }
  };

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
            muted="muted"></video>
          <div className="MintBox__count">
            ?????? ?????? : {limit} / 100 ??? ( 1??? 200??? ?????? )
          </div>
          <div className="MintBox__button" onClick={() => this.minting()}>
            Mint
          </div>
          <div className="MintBox__balanceOf">
            <span className="MintBox__label">Your Balance : </span>
            <span className="MintBox__balance">{balance}</span>
            <span className="MintBox__unit"> Mix</span>
          </div>
          <div className="MintBox__info">
            <p>* ???????????? ????????? ????????? ????????? ???????????????.</p>
            <p>* ??????????????? ?????? 1?????? ?????? 15 Mix?????????.</p>
            <br></br>
            <p>
              * ??????????????? 2??? ????????????, ????????? ?????? ?????? ??????, ?????? ?????????
              ???????????????.
            </p>
            <br></br>
            <p>
              <a href="https://klu.bs/metaverse/6/item/0x301895164F700e8f9556c562882AC1b63dFB3F44/mine">
                [ ????????? ?????? ???????????? ]
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default MintBox;
