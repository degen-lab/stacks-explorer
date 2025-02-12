import { useCallback, useMemo, useState } from 'react';

import { ColumnDefinition, Table } from './Table';

// Define your enum and data type
enum ActivePoolsColumns {
  Provider = 'provider',
  PoxAddress = 'poxAddress',
  Contract = 'contract',
  RewardsIn = 'rewardsIn',
  StackersDelegating = 'stackersDelegating',
  AmountStacked = 'amountStacked',
  Rewards = 'rewards',
}

interface ActivePoolsData {
  [ActivePoolsColumns.Provider]: string;
  [ActivePoolsColumns.PoxAddress]: string;
  [ActivePoolsColumns.Contract]: string;
  [ActivePoolsColumns.RewardsIn]: string;
  [ActivePoolsColumns.StackersDelegating]: number;
  [ActivePoolsColumns.AmountStacked]: number;
  [ActivePoolsColumns.Rewards]: number;
}

// type ActivePoolsData = [string, string, string, string, string, string, string];

export function ActivePoolsTable() {
  const rowData: ActivePoolsData[] = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        [ActivePoolsColumns.Provider]: 'Xverse' + index,
        [ActivePoolsColumns.PoxAddress]: 'bc1q9hquna0...h5edvpgxfjp6d5g',
        [ActivePoolsColumns.Contract]: 'xverse-pool-btc-v-1-2',
        [ActivePoolsColumns.RewardsIn]: '10,426',
        [ActivePoolsColumns.StackersDelegating]: 118432860,
        [ActivePoolsColumns.AmountStacked]: 12300000,
        [ActivePoolsColumns.Rewards]: 2325,
      })),
    []
  );
  const columnDefinitions: ColumnDefinition<ActivePoolsData, ActivePoolsColumns>[] = useMemo(
    () => [
      { id: ActivePoolsColumns.Provider, header: 'Provider', sortable: true, onSort: (a, b) => a.provider.localeCompare(b.provider) },
      { id: ActivePoolsColumns.PoxAddress, header: 'PoX Address', sortable: false },
      { id: ActivePoolsColumns.Contract, header: 'Contract', sortable: false },
      { id: ActivePoolsColumns.RewardsIn, header: 'Rewards in', sortable: false },
      {
        id: ActivePoolsColumns.StackersDelegating,
        header: 'Stackers delegating',
        sortable: true,
      },
      {
        id: ActivePoolsColumns.AmountStacked,
        header: 'Amount stacked',
        sortable: true,
      },
      { id: ActivePoolsColumns.Rewards, header: 'Rewards', sortable: true },
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
