/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MemoryInterface extends utils.Interface {
  functions: {
    "connectorID()": FunctionFragment;
    "getEventAddr()": FunctionFragment;
    "getMemoryAddr()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "connectorID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEventAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMemoryAddr",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "connectorID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEventAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMemoryAddr",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Memory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MemoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    connectorID(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _type: BigNumber; _id: BigNumber }>;

    getEventAddr(overrides?: CallOverrides): Promise<[string]>;

    getMemoryAddr(overrides?: CallOverrides): Promise<[string]>;
  };

  connectorID(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { _type: BigNumber; _id: BigNumber }>;

  getEventAddr(overrides?: CallOverrides): Promise<string>;

  getMemoryAddr(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    connectorID(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _type: BigNumber; _id: BigNumber }>;

    getEventAddr(overrides?: CallOverrides): Promise<string>;

    getMemoryAddr(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    connectorID(overrides?: CallOverrides): Promise<BigNumber>;

    getEventAddr(overrides?: CallOverrides): Promise<BigNumber>;

    getMemoryAddr(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    connectorID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEventAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMemoryAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
