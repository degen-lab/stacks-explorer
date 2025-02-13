import { TxLink } from '@/common/components/ExplorerLinks';
import { Text } from '@/ui/Text';
import ClarityIcon from '@/ui/icons/ClarityIcon';
import { Flex, Icon } from '@chakra-ui/react';
import { ArrowsLeftRight, PhoneCall } from '@phosphor-icons/react';

import { CellRenderer } from './Table';
import { TxTableData } from './TxsTable';

function getTxTypeIcon(txType: string) {
  switch (txType) {
    case 'token_transfer':
      return <ArrowsLeftRight style={{ transform: 'rotate(-60deg)' }} />;
    case 'contract_call':
      return <PhoneCall />;
    case 'smart_contract':
      return <ClarityIcon />;
  }
}

function getTxTypeLabel(txType: string) {
  switch (txType) {
    case 'token_transfer':
      return 'Token Transfer';
    case 'contract_call':
      return 'Contract Call';
    case 'smart_contract':
      return 'Contract Deploy';
  }
}

function getTxTypeColor(txType: string) {
  switch (txType) {
    case 'token_transfer':
      return 'transactionTypes.tokenTransfer';
    case 'contract_call':
      return 'transactionTypes.contractCall';
    case 'smart_contract':
      return 'transactionTypes.contractDeploy';
  }
}

export const TxTypeCellRenderer = ({ txType }: { txType: string }) => {
  return (
    <Flex
      p={1}
      borderRadius="md"
      borderColor="surfaceSecondary"
      borderWidth={1}
      borderStyle="solid"
      bg="surfaceSecondary"
    >
      <Flex alignItems="center" gap={1.5}>
        <Flex
          alignItems="center"
          justifyContent="center"
          p={1}
          borderRadius="sm"
          bg={getTxTypeColor(txType)}
        >
          <Icon h={3} w={3} color="neutral.sand-1000">
            {getTxTypeIcon(txType)}
          </Icon>
        </Flex>
        <Text fontSize="sm" fontWeight="medium" color="textPrimary" whiteSpace="nowrap">
          {getTxTypeLabel(txType)}
        </Text>
      </Flex>
    </Flex>
  );
};

export const LinkCellRenderer: CellRenderer<TxTableData, string> = (value: string) => {
  return (
    <TxLink txId={value}>
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
        {value}
      </Text>
    </TxLink>
  );
};
