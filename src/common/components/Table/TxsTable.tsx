'use client';

import { useInfiniteQueryResult } from '@/common/hooks/useInfiniteQueryResult';
import { useConfirmedTransactionsInfinite } from '@/common/queries/useConfirmedTransactionsInfinite';
import { truncateMiddle } from '@/common/utils/utils';
import { Text } from '@/ui/Text';
import { useMemo } from 'react';

import { Transaction } from '@stacks/stacks-blockchain-api-types';

import { CellRenderer, ColumnDefinition, Table } from './Table';
import { TableContainer } from './TableContainer';
import { LinkCellRenderer, TxTypeCellRenderer } from './TxTableCellRenderers';

enum TxTableColumns {
  Transaction = 'transaction',
  TxId = 'txId',
  TxType = 'txType',
  From = 'from',
  To = 'to',
  BlockTime = 'blockTime',
  Amount = 'blockTimeIso',
  Fee = 'feeRate',
}

export interface TxTableData {
  [TxTableColumns.Transaction]: string;
  [TxTableColumns.TxId]: string;
  [TxTableColumns.TxType]:string;
  [TxTableColumns.From]: string;
  [TxTableColumns.To]: string;
  [TxTableColumns.Fee]: string;
  [TxTableColumns.BlockTime]: number;
  [TxTableColumns.Amount]: number;
}

const defaultCellRenderer: CellRenderer<TxTableData, string | number> = (
  value: string | number | undefined
) => {
  return (
    <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
      {String(value)}
    </Text>
  );
};

function getToAddress(tx: Transaction): string {
  if (tx.tx_type === 'token_transfer') {
    return tx.token_transfer?.recipient_address;
  }
  if (tx.tx_type === 'smart_contract') {
    return tx.smart_contract?.contract_id;
  }
  if (tx.tx_type === 'contract_call') {
    return tx.contract_call?.contract_id;
  }
  if (tx.tx_type === 'coinbase') {
    return tx.coinbase_payload?.alt_recipient ?? '';
  }
  return '';
}

function getAmount(tx: Transaction): number {
  if (tx.tx_type === 'token_transfer') {
    return Number(tx.token_transfer?.amount);
  }
  return 0;
}

export function TxsTable() {
  const response = useConfirmedTransactionsInfinite();
  const txs = useInfiniteQueryResult<Transaction>(response, 100);
  console.log({ txs });

  const rowData: TxTableData[] = useMemo(
    () =>
      txs.map(tx => {
        const to = getToAddress(tx);
        const amount = getAmount(tx);
        return {
          [TxTableColumns.Transaction]: 'N/A',
          [TxTableColumns.TxId]: tx.tx_id,
          [TxTableColumns.TxType]: tx.tx_type,
          [TxTableColumns.From]: tx.sender_address,
          [TxTableColumns.To]: to,
          [TxTableColumns.Fee]: tx.fee_rate,
          [TxTableColumns.Amount]: amount,
          [TxTableColumns.BlockTime]: tx.block_time,
        };
      }),
    [txs]
  );

  const columnDefinitions: ColumnDefinition<TxTableData, TxTableColumns>[] = useMemo(
    () => [
      {
        id: TxTableColumns.Transaction,
        header: 'Transaction',
        accessor: (row: TxTableData) => row[TxTableColumns.Transaction],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: TxTableColumns.TxId,
        header: 'ID',
        accessor: (row: TxTableData) => truncateMiddle(row[TxTableColumns.TxId]),
        cellRenderer: LinkCellRenderer,
      },
      {
        id: TxTableColumns.TxType,
        header: 'Tx Type',
        accessor: (row: TxTableData) => row[TxTableColumns.TxType],
        cellRenderer: value => <TxTypeCellRenderer txType={value} />,
      },
      {
        id: TxTableColumns.From,
        header: 'From',
        accessor: (row: TxTableData) => truncateMiddle(row[TxTableColumns.From]),
        cellRenderer: defaultCellRenderer,
      },
      {
        id: TxTableColumns.To,
        header: 'To',
        accessor: (row: TxTableData) => truncateMiddle(row[TxTableColumns.To]),
        cellRenderer: defaultCellRenderer,
      },
      {
        id: TxTableColumns.Fee,
        header: 'Fee',
        accessor: (row: TxTableData) => row[TxTableColumns.Fee],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: TxTableColumns.BlockTime,
        header: 'Block Time',
        accessor: (row: TxTableData) => row[TxTableColumns.BlockTime],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: TxTableColumns.Amount,
        header: 'Amount',
        accessor: (row: TxTableData) => row[TxTableColumns.Amount],
        cellRenderer: defaultCellRenderer,
      },
    ],
    []
  );

  return (
    <Table
      rowData={rowData}
      columnDefinitions={columnDefinitions}
      hasScrollIndicator
      tableContainerWrapper={table => (
        <TableContainer title={'Transactions'}>{table}</TableContainer>
      )}
    />
  );
}
