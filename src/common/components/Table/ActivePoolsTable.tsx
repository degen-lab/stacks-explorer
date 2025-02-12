import { Text } from '@/ui/Text';
import { Table as ChakraTable, Flex, Icon } from '@chakra-ui/react';
import { ArrowsClockwise } from '@phosphor-icons/react';
import { useMemo } from 'react';

import { CellRenderer, ColumnDefinition, Table } from './Table';
import { TableContainer } from './TableContainer';

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

const defaultCellRenderer: CellRenderer<ActivePoolsData, string | number> = (
  value: string | number | undefined
) => {
  return (
    <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
      {String(value)}
    </Text>
  );
};

export function UpdateTableBannerRow() {
  const numColumns = Object.keys(ActivePoolsColumns).length;

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
    >
      <ChakraTable.Cell colSpan={numColumns} py={2} px={1}>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap={1.5}
          boxShadow="0px 4px 12px 0px color(display-p3 0.9882 0.3922 0.1961 / 0.25), 0px 4px 12px 0px rgba(255, 85, 18, 0.25)"
          border="1px dashed var(--stacks-colors-accent-stacks-500)"
          borderRadius="redesign.lg"
          h={12}
        >
          <Text fontSize="sm" fontWeight="medium" color="textSecondary">
            New transactions have come in. Update list
          </Text>
          <Icon h={3.5} w={3.5} color="iconTertiary">
            <ArrowsClockwise />
          </Icon>
        </Flex>
      </ChakraTable.Cell>
    </ChakraTable.Row>
  );
}

export function ActivePoolsTable() {
  const rowData: ActivePoolsData[] = useMemo(() => {
    const data: ActivePoolsData[] = Array.from({ length: 10 }, (_, index) => ({
      [ActivePoolsColumns.Provider]: 'Xverse' + index,
      [ActivePoolsColumns.PoxAddress]: 'bc1q9hquna0...h5edvpgxfjp6d5g',
      [ActivePoolsColumns.Contract]: 'xverse-pool-btc-v-1-2',
      [ActivePoolsColumns.RewardsIn]: '10,426',
      [ActivePoolsColumns.StackersDelegating]: 118432860,
      [ActivePoolsColumns.AmountStacked]: 12300000,
      [ActivePoolsColumns.Rewards]: 2325,
    }));
    return data;
  }, []);

  const columnDefinitions: ColumnDefinition<ActivePoolsData, ActivePoolsColumns>[] = useMemo(
    () => [
      {
        id: ActivePoolsColumns.Provider,
        header: 'Provider',
        onSort: (a, b) => a.provider.localeCompare(b.provider),
        accessor: row => row[ActivePoolsColumns.Provider],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: ActivePoolsColumns.PoxAddress,
        header: 'PoX Address',
        accessor: row => row[ActivePoolsColumns.PoxAddress],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: ActivePoolsColumns.Contract,
        header: 'Contract',
        accessor: row => row[ActivePoolsColumns.Contract],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: ActivePoolsColumns.RewardsIn,
        header: 'Rewards in',
        accessor: row => row[ActivePoolsColumns.RewardsIn],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: ActivePoolsColumns.StackersDelegating,
        header: 'Stackers delegating',
        accessor: row => row[ActivePoolsColumns.StackersDelegating],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: ActivePoolsColumns.AmountStacked,
        header: 'Amount stacked',
        accessor: row => row[ActivePoolsColumns.AmountStacked],
        cellRenderer: defaultCellRenderer,
      },
      {
        id: ActivePoolsColumns.Rewards,
        header: 'Rewards',
        accessor: row => row[ActivePoolsColumns.Rewards],
        cellRenderer: defaultCellRenderer,
      },
    ],
    []
  );

  return (
    <Table<ActivePoolsData>
      rowData={rowData}
      columnDefinitions={columnDefinitions}
      hasScrollIndicator
      hasFixedFirstColumn
      tableContainerWrapper={table => (
        <TableContainer title={'Active Pools'}>{table}</TableContainer>
      )}
      bannerRow={<UpdateTableBannerRow />}
    />
  );
}
