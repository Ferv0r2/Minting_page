import { DomNode } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "./CommonUtil";
import KeplerMinterContract from "./contracts/KeplerMinterContract";
import Klaytn from "./klaytn/Klaytn";
import Wallet from "./klaytn/Wallet";

const walletAddress = new DomNode(document.getElementById("wallet-address") as any);
const remains = new DomNode(document.getElementById("remains") as any);

const connectWalletButton = new DomNode(document.getElementById("connect-wallet-button") as any);
connectWalletButton.onDom("click", () => Wallet.connect());

const balance = new DomNode(document.getElementById("balance") as any);
const bar = new DomNode(document.getElementById("mint-bar") as any);

const mint1Button = new DomNode(document.getElementById("mint-1-button") as any);
mint1Button.onDom("click", () => KeplerMinterContract.mint(1));

const mint2Button = new DomNode(document.getElementById("mint-2-button") as any);
mint2Button.onDom("click", () => KeplerMinterContract.mint(2));

const mint5Button = new DomNode(document.getElementById("mint-5-button") as any);
mint5Button.onDom("click", () => KeplerMinterContract.mint(5));

const mint10Button = new DomNode(document.getElementById("mint-10-button") as any);
mint10Button.onDom("click", () => KeplerMinterContract.mint(10));

const mint20Button = new DomNode(document.getElementById("mint-20-button") as any);
mint20Button.onDom("click", () => KeplerMinterContract.mint(20));

(async () => {

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
    const address = await Wallet.loadAddress();
    if (address !== undefined) {
        walletAddress.empty().appendText(CommonUtil.shortenAddress(address));
        const b = await Klaytn.balanceOf(address);
        balance.empty().appendText(`Your Klay balance = ${CommonUtil.numberWithCommas(utils.formatEther(b))} Klay`);
    }
})();

const TODAY_COUNT = 9500;

const progress = async () => {
    const limit = (await KeplerMinterContract.limit()).toNumber();
    const d = TODAY_COUNT - limit > TODAY_COUNT ? TODAY_COUNT : TODAY_COUNT - limit;
    bar.domElement.value = d;
    remains.empty().appendText(String(d));
    const address = await Wallet.loadAddress();
    if (address !== undefined) {
        const b = await Klaytn.balanceOf(address);
        balance.empty().appendText(`Your Klay balance = ${CommonUtil.numberWithCommas(utils.formatEther(b))} Klay`);
    }
};

progress();
setInterval(() => progress(), 1000);