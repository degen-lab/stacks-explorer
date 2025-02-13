import { Text } from '@/ui/Text';
import ClarityIcon from '@/ui/icons/ClarityIcon';
import { Flex, Icon } from '@chakra-ui/react';
import { ArrowsLeftRight, PhoneCall } from '@phosphor-icons/react';

import { Transaction } from '@stacks/stacks-blockchain-api-types';

function getTxTypeLabel(txType: string) {
  switch (txType) {
    case 'token_transfer':
      return <ArrowsLeftRight style={{ transform: 'rotate(-60deg)' }} />;
    case 'contract_call':
      return <PhoneCall />;
    case 'smart_contract':
      return <ClarityIcon />;
  }
}

function getTxTypeIcon(txType: string) {
  switch (txType) {
    case 'token_transfer':
      return 'Token Transfer';
    case 'contract_call':
      return 'Contract Call';
    case 'smart_contract':
      return 'Contract Deploy';
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
    >
      <Flex alignItems="center" gap={1.5}>
        <Flex
          alignItems="center"
          justifyContent="center"
          p={1}
          borderRadius="sm"
          bg="transactionTypes.contractCall"
        >
          <Icon h={3} w={3} color="neutral.sand-1000">
            {getTxTypeIcon(txType)}
          </Icon>
          <Text fontSize="sm" fontWeight="medium" color="textPrimary">
            {getTxTypeLabel(txType)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
