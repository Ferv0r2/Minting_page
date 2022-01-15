/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface KeplerMinterInterface extends ethers.utils.Interface {
  functions: {
    "feeTo()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "setLimit(uint256)": FunctionFragment;
    "nft()": FunctionFragment;
    "mintPrice()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "maxCount()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "setMaxCount(uint256)": FunctionFragment;
    "limit()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setMintPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(functionFragment: "mintPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setMaxCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "limit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMintPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLimit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "limit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMintPrice",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class KeplerMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: KeplerMinterInterface;

  functions: {
    feeTo(overrides?: CallOverrides): Promise<[string]>;

    "feeTo()"(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setLimit(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    "nft()"(overrides?: CallOverrides): Promise<[string]>;

    mintPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mintPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    maxCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    setMaxCount(
      _maxCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMaxCount(uint256)"(
      _maxCount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    limit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  feeTo(overrides?: CallOverrides): Promise<string>;

  "feeTo()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  setLimit(
    _limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLimit(uint256)"(
    _limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nft(overrides?: CallOverrides): Promise<string>;

  "nft()"(overrides?: CallOverrides): Promise<string>;

  mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  maxCount(overrides?: CallOverrides): Promise<BigNumber>;

  "maxCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    count: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "mint(uint256)"(
    count: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  setMaxCount(
    _maxCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMaxCount(uint256)"(
    _maxCount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  limit(overrides?: CallOverrides): Promise<BigNumber>;

  "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFeeTo(_feeTo: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setFeeTo(address)"(
    _feeTo: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMintPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMintPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    feeTo(overrides?: CallOverrides): Promise<string>;

    "feeTo()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    setLimit(_limit: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nft(overrides?: CallOverrides): Promise<string>;

    "nft()"(overrides?: CallOverrides): Promise<string>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    maxCount(overrides?: CallOverrides): Promise<BigNumber>;

    "maxCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(count: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxCount(
      _maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMaxCount(uint256)"(
      _maxCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    "feeTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    setLimit(_limit: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    "nft()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxCount(overrides?: CallOverrides): Promise<BigNumber>;

    "maxCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(count: BigNumberish, overrides?: PayableOverrides): Promise<BigNumber>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    setMaxCount(
      _maxCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMaxCount(uint256)"(
      _maxCount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFeeTo(_feeTo: string, overrides?: Overrides): Promise<BigNumber>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeTo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLimit(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    setMaxCount(
      _maxCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMaxCount(uint256)"(
      _maxCount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    limit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}