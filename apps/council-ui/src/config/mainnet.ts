import { CouncilConfig } from "src/config/CouncilConfig";

export const mainnetCouncilConfig: CouncilConfig = {
  version: "",
  chainId: 1,
  timelock: {
    address: "0x81758f3361A769016eae4844072FA6d7f828a651",
    abi: {},
  },
  coreVoting: {
    address: "0xEaCD577C3F6c44C3ffA398baaD97aE12CDCFed4a",
    abi: {},
    descriptionURL: "https://moreinfo.com",
    vaults: [
      {
        name: "Locking Vault",
        address: "0x02Bd4A3b1b95b01F2Aa61655415A5d3EAAcaafdD",
        type: "LockingVault",
        abi: {},
        descriptionURL: "https://moreinfo.com",
      },
      {
        name: "Vesting Vault",
        address: "0x6De73946eab234F1EE61256F10067D713aF0e37A",
        type: "VestingVault",
        abi: {},
        descriptionURL: "https://moreinfo.com",
      },
    ],
    proposals: {
      0: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
      },
      1: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
      },
    },
  },

  gscVoting: {
    address: "0x40309f197e7f94B555904DF0f788a3F48cF326aB",
    abi: {},
    descriptionURL: "https://moreinfo.com",
    vaults: [
      {
        name: "GSC Vault",
        address: "0xcA870E8aa4FCEa85b5f0c6F4209C8CBA9265B940",
        type: "GSCVault",
        abi: {},
        descriptionURL: "https://moreinfo.com",
      },
    ],
    proposals: {
      0: { descriptionURL: "", targets: [], calldatas: [] },
      1: { descriptionURL: "", targets: [], calldatas: [] },
    },
  },
};