"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const ExtWallet_1 = __importDefault(require("../klaytn/ExtWallet"));
const KeplerMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/KeplerMinter.sol/KeplerMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class KeplerMinterContract extends Contract_1.default {
    constructor() {
        super("0xe7828d2063825701CA8c8C90FF16a64CCc495c79", KeplerMinter_json_1.default.abi);
    }
    async mintPrice() {
        return bignumber_1.BigNumber.from(await this.runMethod("mintPrice"));
    }
    async limit() {
        return bignumber_1.BigNumber.from(await this.runMethod("limit"));
    }
    async mint(count) {
        const limit = (await this.limit()).toNumber();
        if (count > limit) {
            alert(`남은 개수는 ${limit}개입니다.`);
        }
        else {
            const price = (await this.mintPrice()).mul(count);
            const balance = await ExtWallet_1.default.loadBalance();
            if (balance.lt(price)) {
                alert("Klay가 부족합니다.");
            }
            else if (count > 10) {
                await this.runWalletMethodWithValue2(price, "mint", count);
            }
            else {
                await this.runWalletMethodWithValue(price, "mint", count);
            }
        }
    }
}
exports.default = new KeplerMinterContract();
//# sourceMappingURL=KeplerMinterContract.js.map