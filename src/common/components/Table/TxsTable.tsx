import { useCallback, useMemo, useState } from 'react';

import { ColumnDefinition, Table } from './Table';

type TransactionData = [string, string, string, string, string, string, string];

export function TxsTable() {
    const 

  const rowData: TransactionData[] = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => index + 1).map(row => [
        'Xverse',
        'bc1q9hquna0...h5edvpgxfjp6d5g',
        'xverse-pool-btc-v-1-2',
        '10,426',
        '118,432,860 STX ($12.3M)',
        '7.2%',
        '2,325 BTC',
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