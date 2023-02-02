import { LockingVault } from "@council/sdk";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ethers, Signer } from "ethers";
import { ReactElement } from "react";
import { councilConfigs } from "src/config/council.config";
import { ErrorMessage } from "src/ui/base/error/ErrorMessage";
import { useCouncil } from "src/ui/council/useCouncil";
import { useChainId } from "src/ui/network/useChainId";

import {
  ChangeDelegateForm,
  ChangeDelegateFormSkeleton,
} from "src/ui/vaults/ChangeDelegateForm";
import { useChangeDelegate } from "src/ui/vaults/lockingVault/hooks/useChangeDelegate";
import {
  LockingVaultStatsBar,
  VaultStatsBarSkeleton,
} from "src/ui/vaults/lockingVault/LockingVaultStatsBar";
import { VaultHeader, VaultHeaderSkeleton } from "src/ui/vaults/VaultHeader";
import { useAccount, useSigner } from "wagmi";

interface LockingVaultDetailsProps {
  address: string;
}

export function FrozenLockingVaultDetails({
  address,
}: LockingVaultDetailsProps): ReactElement {
  const { address: account } = useAccount();
  const { data: signer } = useSigner();
  const { data, status, error } = useFrozenLockingVaultDetailsData(
    address,
    account,
  );

  const { mutate: changeDelegate } = useChangeDelegate(address);

  if (status === "error") {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      {status === "success" ? (
        <VaultHeader name={data.name} descriptionURL={data.descriptionURL} />
      ) : (
        <VaultHeaderSkeleton />
      )}

      {status === "success" ? (
        <LockingVaultStatsBar
          accountVotingPower={data.accountVotingPower}
          accountPercentOfTVP={data.accountPercentOfTVP}
          delegatedToAccount={data.delegatedToAccount}
          participants={data.participants}
          tokenAddress={data.tokenAddress}
          tokenSymbol={data.tokenSymbol}
        />
      ) : (
        <VaultStatsBarSkeleton />
      )}

      <div className="flex flex-col w-full h-48 gap-8 sm:flex-row">
        {status === "success" ? (
          <ChangeDelegateForm
            currentDelegate={data.delegate || ethers.constants.AddressZero}
            disabled={!signer || !+data.accountVotingPower}
            onDelegate={(delegate) =>
              changeDelegate({ signer: signer as Signer, delegate })
            }
          />
        ) : (
          <ChangeDelegateFormSkeleton />
        )}
      </div>
    </>
  );
}

interface LockingVaultDetailsData {
  accountPercentOfTVP: number;
  accountVotingPower: string;
  activeProposalCount: number;
  delegate?: string;
  delegatedToAccount: number;
  depositedBalance: string;
  descriptionURL: string | undefined;
  name: string | undefined;
  participants: number;
  tokenAddress: string;
  tokenAllowance: string;
  tokenBalance: string;
  tokenSymbol: string;
}

function useFrozenLockingVaultDetailsData(
  address: string,
  account: string | undefined,
): UseQueryResult<LockingVaultDetailsData> {
  const { context } = useCouncil();
  const chainId = useChainId();
  const coreVotingConfig = councilConfigs[chainId].coreVoting;
  const vaultConfig = coreVotingConfig.vaults.find(
    (vault) => vault.address === address,
  );

  return useQuery({
    queryKey: ["frozenLockingVaultDetails", address, account],
    queryFn: async () => {
      const lockingVault = new LockingVault(address, context);
      const token = await lockingVault.getToken();
      const delegate = account
        ? await lockingVault.getDelegate(account)
        : undefined;
      const accountVotingPower = account
        ? await lockingVault.getVotingPower(account)
        : "0";

      return {
        accountPercentOfTVP:
          (+accountVotingPower / +(await lockingVault.getTotalVotingPower())) *
          100,
        accountVotingPower,

        tokenAddress: token.address,
        tokenSymbol: await token.getSymbol(),
        tokenBalance: account ? await token.getBalanceOf(account) : "0",
        tokenAllowance: account
          ? await token.getAllowance(account, address)
          : "0",
        depositedBalance: account
          ? await lockingVault.getDepositedBalance(account)
          : "0",

        delegate: delegate?.address,
        descriptionURL: vaultConfig?.descriptionURL,
        name: vaultConfig?.name,
        participants: (await lockingVault.getVoters()).length,
        delegatedToAccount: account
          ? (await lockingVault.getDelegatorsTo(account)).length
          : 0,
      };
    },
  });
}