import { TableContainer } from '@/common/components/TableTemp/TableContainer';
import {
  LinkCellRenderer,
  TxTypeCellRenderer,
  defaultCellRenderer,
} from '@/common/components/TableTemp/TxTableCellRenderers';
import { TxTableData, TxTableColumns } from '@/common/components/TableTemp/TxsTable';
import { truncateMiddle } from '@/common/utils/utils';
import type { Meta, StoryObj } from '@storybook/react';

import { ColumnDefinition, Table } from '../common/components/TableTemp/Table';
import { sampleTxTableRowData, txTableSampleData } from './txTableSampleData';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table<any>>;

// Sample data type
type DataRow = [string, number, string];

// Sample data
const sampleData: DataRow[] = [
  ['John Doe', 28, 'New York'],
  ['Jane Smith', 32, 'London'],
  ['Bob Johnson', 45, 'Paris'],
];

export const SimpleTableWithNoTableContainer: Story = {
  args: {
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: DataRow) => row[0],
        sortable: true,
        onSort: (a: DataRow, b: DataRow) => a[0].localeCompare(b[0]),
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: DataRow) => row[1],
        tooltip: 'Age in years',
        sortable: true,
        onSort: (a: DataRow, b: DataRow) => a[1] - b[1],
        cellRenderer: (value: number) => `${value} years`,
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: DataRow) => row[2],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
    ] as ColumnDefinition<DataRow>[],
    rowData: sampleData,
  },
};

export const SimpleTableWithTableContainer: Story = {
  args: {
    tableContainerWrapper: table => <TableContainer>{table}</TableContainer>,
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: DataRow) => row[0],
        sortable: true,
        onSort: (a: DataRow, b: DataRow) => a[0].localeCompare(b[0]),
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: DataRow) => row[1],
        tooltip: 'Age in years',
        sortable: true,
        onSort: (a: DataRow, b: DataRow) => a[1] - b[1],
        cellRenderer: (value: number) => `${value} years`,
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: DataRow) => row[2],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
    ] as ColumnDefinition<DataRow>[],
    rowData: sampleData,
  },
};

export const TxTable: Story = {
  args: {
    tableContainerWrapper: table => <TableContainer title={'Transactions'}>{table}</TableContainer>,
    columnDefinitions: [
      {
        id: TxTableColumns.Transaction,
        header: 'Transaction',
        accessor: (row: TxTableData) => row[TxTableColumns.Transaction],
        cellRenderer: defaultCellRenderer,
      } as ColumnDefinition<TxTableData, string>,
      {
        id: TxTableColumns.TxId,
        header: 'ID',
        accessor: (row: TxTableData) => truncateMiddle(row[TxTableColumns.TxId]),
        cellRenderer: LinkCellRenderer,
      } as ColumnDefinition<TxTableData, string>,
      {
        id: TxTableColumns.TxType,
        header: 'Tx Type',
        accessor: (row: TxTableData) => row[TxTableColumns.TxType],
        cellRenderer: value => <TxTypeCellRenderer txType={value} />,
      } as ColumnDefinition<TxTableData, string>,
    ],
    rowData: sampleTxTableRowData,
  },
};

export const Empty: Story = {
  args: {
    rowData: [],
  },
};
