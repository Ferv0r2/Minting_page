import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KeplerMinter } from "../KeplerMinter";
export declare class KeplerMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, _feeTo: string, overrides?: Overrides): Promise<KeplerMinter>;
    getDeployTransaction(_nft: string, _feeTo: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KeplerMinter;
    connect(signer: Signer): KeplerMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KeplerMinter;
}
//# sourceMappingURL=KeplerMinter__factory.d.ts.map