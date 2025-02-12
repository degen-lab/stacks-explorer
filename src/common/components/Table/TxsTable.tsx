import { useCallback, useMemo, useState } from 'react';

import { ColumnDefinition, Table } from './Table';
import { useConfirmedTransactionsInfinite } from '@/common/queries/useConfirmedTransactionsInfinite';
import { Transaction } from '@stacks/stacks-blockchain-api-types';
import { useInfiniteQueryResult } from '@/common/hooks/useInfiniteQueryResult';
import { Table as ChakraTable, Flex } from '@chakra-ui/react';

enum TxTableColumns {
    FunctionName = 'functionName',
    ContractName = 'contractName',
    TxId = 'txId',
    TxType = 'txType',
    From = 'from',
    To = 'to',
    Fee = 'fee',
    BlockTime = 'blockTime',
    Amount = 'blockTimeIso',
  }

interface TxTableData {
    [TxTableColumns.FunctionName]: string;
    [TxTableColumns.ContractName]: string;
    [TxTableColumns.TxId]: string;
    [TxTableColumns.TxType]: string;
    [TxTableColumns.From]: string;
    [TxTableColumns.To]: string;
    [TxTableColumns.Fee]: string;
    [TxTableColumns.BlockTime]: string;
    [TxTableColumns.Amount]: string;
  }


// Add a new component for special rows
export function UpdateTxTableBannerRow({ 
    content, 
    type, 
    colSpan 
  }: { content: string, type: string, colSpan: number }) {
    return (
      <ChakraTable.Row
      css={{
        '& > td:first-of-type': {
          borderTopLeftRadius: 'redesign.md',
          borderBottomLeftRadius: 'redesign.md',
        },
        '& > td:last-of-type': {
          borderTopRightRadius: 'redesign.md',
          borderBottomRightRadius: 'redesign.md',
        },
      }}
      boxShadow="0px 4px 12px 0px rgba(255, 85, 18, 0.25)"
      border="1px dashed var(--stacks-colors-accent-stacks-500)"
      borderRadius="redesign.lg"
      >
        <ChakraTable.Cell 
          colSpan={colSpan} 
          px={6} 
          py={3}
          border="none"
        >
          {type === 'update-banner' && (
            <Flex
              alignItems="center"
              justifyContent="center"
              border="1px dashed"
              borderColor="border.warning"
              borderRadius="redesign.lg"
              py={2}
              px={4}
              color="text.warning"
            >
              <Flex alignItems="center" gap={2}>
                {content}
              </Flex>
            </Flex>
          )}
          {/* Add more type-specific styling as needed */}
        </ChakraTable.Cell>
      </ChakraTable.Row>
    );
  }
  

export function TxsTable() {
    const response = useConfirmedTransactionsInfinite();
    const txs = useInfiniteQueryResult<Transaction>(response, 100); 

  const rowData: TransactionData[] = useMemo(
    () =>
      txs.map(tx => [
        tx.tx_id,
        tx.sender_address,
        tx.token_transfer?.recipient_address,
        tx.tx_type,
        tx.fee_rate
        tx.block_time,
        tx.block_time_iso,
      ]),
    []
  );

  const columnDefinitions: ColumnDefinition<TxTableData, TxTableColumns>[] = useMemo(
    () => [
      { id: 'FunctionName', header: 'Function Name',  },
      { id: 'ContractName', header: 'Contract Name',  },
      { id: 'TxId', header: 'Tx Id',  },
      { id: 'TxType', header: 'Tx Type',  },
      {
        id: 'From',
        header: 'From',
      },
      {
        id: 'To',
        header: 'To',
      },
      { id: 'Fee', header: 'Fee', accessor: (val: TxTableData) => val[4], sortable: true },
      { id: 'BlockTime', header: 'Block Time', accessor: (val: TxTableData) => val[4], sortable: true },
      { id: 'Amount', header: 'Amount', accessor: (val: TxTableData) => val[4], sortable: true },
    ],
    []
  );

  const [sortColumn, setSortColumn] = useState<null | string>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const onSort = useCallback((columnId: string, newSortDirection: 'asc' | 'desc') => {
    setSortColumn(columnId);
    setSortDirection(newSortDirection);
  }, []);

  return (
    <Table
      title="Active Pools"
      topRight={null}
      rowData={rowData}
      columnDefinitions={columnDefinitions}
      onSort={onSort}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
    />
  );
}