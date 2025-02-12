import { useInfiniteQueryResult } from '@/common/hooks/useInfiniteQueryResult';
import { useConfirmedTransactionsInfinite } from '@/common/queries/useConfirmedTransactionsInfinite';
import { Text } from '@/ui/Text';
import { useMemo } from 'react';

import { Transaction } from '@stacks/stacks-blockchain-api-types';

import { CellRenderer, ColumnDefinition, Table } from './Table';

enum TxTableColumns {
  Transaction = 'transaction',
  TxId = 'txId',
  TxType = 'txType',
  From = 'from',
  To = 'to',
  Fee = 'fee',
  BlockTime = 'blockTime',
  Amount = 'blockTimeIso',
}

interface TxTableData {
  [TxTableColumns.Transaction]: string;
  [TxTableColumns.TxId]: string;
  [TxTableColumns.TxType]: string;
  [TxTableColumns.From]: string;
  [TxTableColumns.To]: string;
  [TxTableColumns.Fee]: string;
  [TxTableColumns.BlockTime]: string;
  [TxTableColumns.Amount]: string;
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

function getFromAddress(tx: Transaction): string {
  if (tx.tx_type === 'token_transfer') {
    return tx.token_transfer?.recipient_address;
  }
  return tx.sender_address;
}

export function TxsTable() {
  const response = useConfirmedTransactionsInfinite();
  const txs = useInfiniteQueryResult<Transaction>(response, 100);

  const rowData: TxTableData[] = useMemo(
    () =>
      txs.map(tx => {
        const from = getFromAddress(tx);
        return {
          [TxTableColumns.TxId]: tx.tx_id,
          [TxTableColumns.Transaction]: tx.tx_id,
          [TxTableColumns.From]: tx.sender_address,
          [TxTableColumns.To]: tx.token_transfer?.recipient_address,
          [TxTableColumns.TxType]: tx.tx_type,
          [TxTableColumns.Fee]: tx.fee_rate,
          [TxTableColumns.BlockTime]: tx.block_time,
          [TxTableColumns.Amount]: tx.amount,
        };
      }),
    []
  );

  const columnDefinitions: ColumnDefinition<TxTableData, TxTableColumns>[] = useMemo(
    () => [
      { id: TxTableColumns.Transaction, header: 'Transaction', cellRenderer: defaultCellRenderer },
      { id: TxTableColumns.TxId, header: 'Tx Id', cellRenderer: defaultCellRenderer },
      { id: TxTableColumns.TxType, header: 'Tx Type', cellRenderer: defaultCellRenderer },
      {
        id: TxTableColumns.From,
        header: 'From',
        cellRenderer: defaultCellRenderer,
      },
      {
        id: TxTableColumns.To,
        header: 'To',
        cellRenderer: defaultCellRenderer,
      },
      { id: TxTableColumns.Fee, header: 'Fee', cellRenderer: defaultCellRenderer },
      {
        id: TxTableColumns.BlockTime,
        header: 'Block Time',
        cellRenderer: defaultCellRenderer,
      },
      { id: TxTableColumns.Amount, header: 'Amount', cellRenderer: defaultCellRenderer },
    ],
    []
  );

  return <Table rowData={rowData} columnDefinitions={columnDefinitions} />;
}
