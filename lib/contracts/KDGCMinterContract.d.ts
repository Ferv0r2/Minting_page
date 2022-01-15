import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class KeplerMinterContract extends Contract {
    constructor();
    mintPrice(): Promise<BigNumber>;
    limit(): Promise<BigNumber>;
    mint(count: number): Promise<void>;
}
declare const _default: KeplerMinterContract;
export default _default;
//# sourceMappingURL=KDGCMinterContract.d.ts.map