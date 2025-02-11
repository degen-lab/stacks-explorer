import { useCallback, useMemo, useState } from 'react';

import { ColumnDefinition, Table } from './Table';
import { useConfirmedTransactionsInfinite } from '@/common/queries/useConfirmedTransactionsInfinite';
import { Transaction } from '@stacks/stacks-blockchain-api-types';
import { useInfiniteQueryResult } from '@/common/hooks/useInfiniteQueryResult';

type TransactionData = [string, string, string, string, string, string, string];

export function TxsTable() {
    const response = useConfirmedTransactionsInfinite();
    const txs = useInfiniteQueryResult<Transaction>(response, 100); 

  const rowData: TransactionData[] = useMemo(
    () =>
      txs.map(tx => [
        tx.tx_id,
        tx.sender,
        tx.recipient,
        tx.amount,
        tx.fee,
        tx.block_time,
        tx.block_time_iso,
      ]),
    []
  );
  
  const columnDefinitions: ColumnDefinition<ActivePoolsData>[] = useMemo(
    () => [
      { id: 'Provider', header: 'Provider', sortable: true },
      { id: 'PoX Address', header: 'PoX Address', sortable: false },
      { id: 'Contract', header: 'Contract', sortable: false },
      { id: 'Rewards in', header: 'Rewards in', sortable: false },
      {
        id: 'Stackers delegating',
        header: 'Stackers delegating',
        sortable: true,
      },
      {
        id: 'Amount stacked',
        header: 'Amount stacked',
        sortable: true,
      },
      { id: 'Rewards', header: 'Rewards', accessor: (val: ActivePoolsData) => val[4], sortable: true },
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