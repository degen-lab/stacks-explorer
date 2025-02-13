import type { Meta, StoryObj } from '@storybook/react';

import { ColumnDefinition, Table } from '../common/components/TableTemp/Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table<DataRow>>;

// Sample data type
type DataRow = [string, number, string];

// Sample data
const sampleData: DataRow[] = [
  ['John Doe', 28, 'New York'],
  ['Jane Smith', 32, 'London'],
  ['Bob Johnson', 45, 'Paris'],
];

export const Default: Story = {
  args: {
    title: 'Sample Table',
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: DataRow) => row[0],
        sortable: true,
        onSort: (a: DataRow, b: DataRow) => a[0].localeCompare(b[0]),
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: DataRow) => row[1],
        tooltip: 'Age in years',
        sortable: true,
        onSort: (a: DataRow, b: DataRow) => a[1] - b[1],
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: DataRow) => row[2],
      },
    ] as ColumnDefinition<DataRow>[],
    rowData: sampleData,
  },
};

export const WithCustomRenderer: Story = {
  args: {
    ...Default.args,
    columnDefinitions: [
      {
        id: 'name',
        header: 'Name',
        accessor: (row: DataRow) => row[0],
        cellRenderer: (value: string) => <strong>{value}</strong>,
      },
      {
        id: 'age',
        header: 'Age',
        accessor: (row: DataRow) => row[1],
        cellRenderer: (value: number) => `${value} years`,
      },
      {
        id: 'city',
        header: 'City',
        accessor: (row: DataRow) => row[2],
      },
    ] as ColumnDefinition<DataRow>[],
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    rowData: [],
  },
};
