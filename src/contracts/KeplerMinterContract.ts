import { BigNumber } from "@ethersproject/bignumber";
import ExtWallet from "../klaytn/ExtWallet";
import KeplerMinterArtifact from "./abi/artifacts/contracts/KeplerMinter.sol/KeplerMinter.json";
import Contract from "./Contract";

class KeplerMinterContract extends Contract {

    constructor() {
        super("0xe7828d2063825701CA8c8C90FF16a64CCc495c79", KeplerMinterArtifact.abi);
    }

    public async mintPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mintPrice"));
    }

    public async limit(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("limit"));
    }

    public async mint(count: number): Promise<void> {
        const limit = (await this.limit()).toNumber();
        if (count > limit) {
            alert(`남은 개수는 ${limit}개입니다.`);
        } else {
            const price = (await this.mintPrice()).mul(count);
            const balance = await ExtWallet.loadBalance();
            if (balance.lt(price)) {
                alert("Klay가 부족합니다.");
            } else if (count > 10) {
                await this.runWalletMethodWithValue2(price, "mint", count);
            } else {
                await this.runWalletMethodWithValue(price, "mint", count);
            }
        }
    }
}

export default new KeplerMinterContract();
