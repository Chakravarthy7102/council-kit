/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface MerkleRewardsInterface extends utils.Interface {
  functions: {
    "claim(uint256,uint256,bytes32[],address)": FunctionFragment;
    "claimAndDelegate(uint256,address,uint256,bytes32[],address)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "lockingVault()": FunctionFragment;
    "rewardsRoot()": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "claim(uint256,uint256,bytes32[],address)"
      | "claimAndDelegate"
      | "claimAndDelegate(uint256,address,uint256,bytes32[],address)"
      | "claimed"
      | "claimed(address)"
      | "lockingVault"
      | "lockingVault()"
      | "rewardsRoot"
      | "rewardsRoot()"
      | "token"
      | "token()",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claim(uint256,uint256,bytes32[],address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate(uint256,address,uint256,bytes32[],address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "claimed(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "lockingVault",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "lockingVault()",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot()",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "token()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claim(uint256,uint256,bytes32[],address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate(uint256,address,uint256,bytes32[],address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimed(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault()",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot()",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token()", data: BytesLike): Result;

  events: {};
}

export interface MerkleRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleRewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    lockingVault(overrides?: CallOverrides): Promise<[string]>;

    "lockingVault()"(overrides?: CallOverrides): Promise<[string]>;

    rewardsRoot(overrides?: CallOverrides): Promise<[string]>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;
  };

  claim(
    amount: PromiseOrValue<BigNumberish>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "claim(uint256,uint256,bytes32[],address)"(
    amount: PromiseOrValue<BigNumberish>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimAndDelegate(
    amount: PromiseOrValue<BigNumberish>,
    delegate: PromiseOrValue<string>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
    amount: PromiseOrValue<BigNumberish>,
    delegate: PromiseOrValue<string>,
    totalGrant: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  "claimed(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  lockingVault(overrides?: CallOverrides): Promise<string>;

  "lockingVault()"(overrides?: CallOverrides): Promise<string>;

  rewardsRoot(overrides?: CallOverrides): Promise<string>;

  "rewardsRoot()"(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<string>;

    "lockingVault()"(overrides?: CallOverrides): Promise<string>;

    rewardsRoot(overrides?: CallOverrides): Promise<string>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<BigNumber>;

    "lockingVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "claim(uint256,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimAndDelegate(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "claimAndDelegate(uint256,address,uint256,bytes32[],address)"(
      amount: PromiseOrValue<BigNumberish>,
      delegate: PromiseOrValue<string>,
      totalGrant: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "claimed(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    lockingVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lockingVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardsRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}