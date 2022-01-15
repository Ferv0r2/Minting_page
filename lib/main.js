"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("./CommonUtil"));
const KeplerMinterContract_1 = __importDefault(require("./contracts/KeplerMinterContract"));
const Klaytn_1 = __importDefault(require("./klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const walletAddress = new skynode_1.DomNode(document.getElementById("wallet-address"));
const remains = new skynode_1.DomNode(document.getElementById("remains"));
const connectWalletButton = new skynode_1.DomNode(document.getElementById("connect-wallet-button"));
connectWalletButton.onDom("click", () => Wallet_1.default.connect());
const balance = new skynode_1.DomNode(document.getElementById("balance"));
const bar = new skynode_1.DomNode(document.getElementById("mint-bar"));
const mint1Button = new skynode_1.DomNode(document.getElementById("mint-1-button"));
mint1Button.onDom("click", () => KeplerMinterContract_1.default.mint(1));
const mint2Button = new skynode_1.DomNode(document.getElementById("mint-2-button"));
mint2Button.onDom("click", () => KeplerMinterContract_1.default.mint(2));
const mint5Button = new skynode_1.DomNode(document.getElementById("mint-5-button"));
mint5Button.onDom("click", () => KeplerMinterContract_1.default.mint(5));
const mint10Button = new skynode_1.DomNode(document.getElementById("mint-10-button"));
mint10Button.onDom("click", () => KeplerMinterContract_1.default.mint(10));
const mint20Button = new skynode_1.DomNode(document.getElementById("mint-20-button"));
mint20Button.onDom("click", () => KeplerMinterContract_1.default.mint(20));
(async () => {
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
    const address = await Wallet_1.default.loadAddress();
    if (address !== undefined) {
        walletAddress.empty().appendText(CommonUtil_1.default.shortenAddress(address));
        const b = await Klaytn_1.default.balanceOf(address);
        balance.empty().appendText(`Your Klay balance = ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(b))} Klay`);
    }
})();
const TODAY_COUNT = 9500;
const progress = async () => {
    const limit = (await KeplerMinterContract_1.default.limit()).toNumber();
    const d = TODAY_COUNT - limit > TODAY_COUNT ? TODAY_COUNT : TODAY_COUNT - limit;
    bar.domElement.value = d;
    remains.empty().appendText(String(d));
    const address = await Wallet_1.default.loadAddress();
    if (address !== undefined) {
        const b = await Klaytn_1.default.balanceOf(address);
        balance.empty().appendText(`Your Klay balance = ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(b))} Klay`);
    }
};
progress();
setInterval(() => progress(), 1000);
//# sourceMappingURL=main.js.map