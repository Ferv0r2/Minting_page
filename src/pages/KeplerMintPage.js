import React, { Component } from "react";
import caver from "klaytn/caver";
import keplerMintContract from "klaytn/KeplerMinterContract";
// import fetch from "node-fetch";

import Loading from "components/Loading";
import Nav from "components/Nav";
import MintBox from "components/MintBox";
import Stone from "components/Stone";
import Footer from "components/Footer";

import "./KeplerMintPage.scss";

class KeplerMintPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      balance: 0,
      network: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadAccountInfo();
    this.setNetworkInfo();
  }

  loadAccountInfo = async () => {
    const { klaytn } = window;

    if (klaytn) {
      try {
        await klaytn.enable();
        this.setAccountInfo(klaytn);
        this.setOwner(klaytn);
        klaytn.on("accountsChanged", () => {
          this.setAccountInfo(klaytn);
          this.setOwner(klaytn);
        });
      } catch (error) {
        // console.log(error);
        console.log("User denied account access");
      }
    } else {
      console.log(
        "Non-Kaikas browser detected. You should consider trying Kaikas!"
      );
    }
  };

  setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    const account = klaytn.selectedAddress;
    // const balance = await caver.klay.getBalance(account);
    const myContract = new caver.klay.Contract(
      [
        {
          constant: true,
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
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
      "0xdd483a970a7a7fef2b223c3510fac852799a88bf"
    );
    const mixBalance = await myContract.methods.balanceOf(account).call();
    const balance = String(mixBalance / 1000000000000000000);
    this.setState({
      account,
      balance,
    });
  };

  setNetworkInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    this.setState({ network: klaytn.networkVersion });
    klaytn.on("networkChanged", () =>
      this.setNetworkInfo(klaytn.networkVersion)
    );
  };

  render() {
    const { account, balance } = this.state;
    return (
      <div className="KeplerMintPage">
        <Nav address={account} />
        <div className="KeplerMintPage__main">
          <div className="KeplerMintPage__contents">
            <MintBox address={account} balance={balance} />
            <Stone />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default KeplerMintPage;
