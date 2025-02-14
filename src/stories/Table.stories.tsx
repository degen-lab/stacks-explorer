import { TableContainer } from '@/common/components/TableTemp/TableContainer';
import {
  UpdateTableBannerRow,
  columnDefinitions as txTableColumnDefinitions,
} from '@/common/components/TableTemp/TxsTable';
import type { Meta, StoryObj } from '@storybook/react';

import { ColumnDefinition, Table } from '../common/components/TableTemp/Table';
import {
  SimpleTableColumns,
  SimpleTableData,
  simpleTableRowData,
} from './table-data/simple-table-data';
import { txTableRowData } from './table-data/tx-table-data';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    // Add height and width controls
    chromatic: {
      viewports: [320, 1200], // Optional: control viewport sizes for Chromatic
    },
  },
  argTypes: {
    hasScrollIndicator: {
      control: 'boolean',
    },
    hasFixedFirstColumn: {
      control: 'boolean',
    },
    bannerRow: {
      control: 'boolean',
      description: 'Toggle banner row visibility',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table<any>>;

export const SimpleTable: Story = {
  args: {
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.Name],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.Age],
        tooltip: 'Age in years',
        cellRenderer: (value: number) => `${value} years`,
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.City],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
    ] as ColumnDefinition<SimpleTableData>[],
    rowData: simpleTableRowData,
  },
};

export const TableWithTableContainer: Story = {
  args: {
    tableContainerWrapper: table => <TableContainer>{table}</TableContainer>,
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.Name],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.Age],
        tooltip: 'Age in years',
        cellRenderer: (value: number) => `${value} years`,
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.City],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
    ] as ColumnDefinition<SimpleTableData>[],
    rowData: simpleTableRowData,
  },
};

export const TableWithSorting: Story = {
  args: {
    tableContainerWrapper: table => <TableContainer>{table}</TableContainer>,
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.Name],
        cellRenderer: (value: string) => <strong>{value}</strong>,
        onSort: (a: SimpleTableData, b: SimpleTableData) =>
          a[SimpleTableColumns.Name].localeCompare(b[SimpleTableColumns.Name]),
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.Age],
        tooltip: 'Age in years',
        cellRenderer: (value: number) => `${value} years`,
        onSort: (a: SimpleTableData, b: SimpleTableData) =>
          a[SimpleTableColumns.Age] - b[SimpleTableColumns.Age],
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: SimpleTableData) => row[SimpleTableColumns.City],
        cellRenderer: (value: string) => <strong>{value}</strong>,
        onSort: (a: SimpleTableData, b: SimpleTableData) =>
          a[SimpleTableColumns.City].localeCompare(b[SimpleTableColumns.City]),
      },
    ] as ColumnDefinition<SimpleTableData>[],
    rowData: simpleTableRowData,
    onSort: undefined,
  },
};

export const TxTable: Story = {
  render: args => (
    <Table
      {...args}
      tableContainerWrapper={table => (
        <TableContainer title={'Transactions'}>{table}</TableContainer>
      )}
      columnDefinitions={txTableColumnDefinitions}
      rowData={txTableRowData}
      bannerRow={args.bannerRow ? <UpdateTableBannerRow /> : undefined}
    />
  ),
};

export const Empty: Story = {
  args: {
    rowData: [],
  },
};
