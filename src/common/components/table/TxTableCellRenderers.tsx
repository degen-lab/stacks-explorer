import { AddressLink, TxLink } from '@/common/components/ExplorerLinks';
import { Text } from '@/ui/Text';
import ClarityIcon from '@/ui/icons/ClarityIcon';
import StxIcon from '@/ui/icons/StxIcon';
import { Flex, Icon } from '@chakra-ui/react';
import { ArrowsLeftRight, PhoneCall, Question } from '@phosphor-icons/react';

import { CellRenderer } from './Table';
import { TxTableData } from './TxsTable';

export const defaultCellRenderer: CellRenderer<TxTableData, string> = value => {
  return (
    <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
      {String(value)}
    </Text>
  );
};

function getTxTypeIcon(txType: string) {
  switch (txType) {
    case 'token_transfer':
      return <ArrowsLeftRight style={{ transform: 'rotate(-60deg)' }} />;
    case 'contract_call':
      return <PhoneCall />;
    case 'smart_contract':
      return <ClarityIcon />;
    default:
      return <Question />;
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
    default:
      return 'Unknown';
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
      w='fit-content'
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

export const TxLinkCellRenderer: CellRenderer<TxTableData, string> = (value: string) => {
  return (
    <TxLink txId={value}>
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
        {value}
      </Text>
    </TxLink>
  );
};

export const AddressLinkCellRenderer: CellRenderer<TxTableData, string> = (value: string) => {
  return (
    <AddressLink principal={value}>
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
        {value}
      </Text>
    </AddressLink>
  );
};

export const FeeCellRenderer: CellRenderer<TxTableData, string> = (value: string) => {
  return (
    <Flex alignItems="center" gap={1}>
      <Icon h={3} w={3} color="textSecondary">
        <StxIcon />
      </Icon>
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
        {value} STX
      </Text>
    </Flex>
  );
};

export const AmountCellRenderer: CellRenderer<TxTableData, number> = (value: number) => {
  return (
    <Flex alignItems="center" gap={1}>
      <Icon h={3} w={3} color="textSecondary">
        <StxIcon />
      </Icon>
      <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
        {value} STX
      </Text>
    </Flex>
  );
};

export const TimeStampCellRenderer: CellRenderer<TxTableData, string> = (value: string) => {
  return (
    <Flex alignItems="center" justifyContent="center" bg='surfacePrimary' borderRadius='sm' p={1.5}>
    <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
      {value}
    </Text>
    </Flex>
  );
};