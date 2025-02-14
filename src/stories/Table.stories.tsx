import { TableContainer } from '@/common/components/table/TableContainer';
import {
  UpdateTableBannerRow,
  columnDefinitions as txTableColumnDefinitions,
} from '@/common/components/table/TxsTable';
import type { Meta, StoryObj } from '@storybook/react';

import { Table, TableProps } from '../common/components/table/Table';
import { simpleTableRowData } from './table-utils/simple-table-data';
import { getSimpleTableColumnDefinitions } from './table-utils/simple-table-utils';
import { txTableRowData } from './table-utils/tx-table-data';

interface TableStoryArgs extends TableProps<unknown> {
  isEmpty?: boolean;
  hasSorting?: boolean;
  hasTableContainerWrapper?: boolean;
}

const meta: Meta<TableStoryArgs> = {
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
    // Fake props to add controls to the table
    hasTableContainerWrapper: {
      control: 'boolean',
      description: 'Toggle table container wrapper visibility',
    },
    hasSorting: {
      control: 'boolean',
      description: 'Add sorting to the table',
    },
    isEmpty: {
      control: 'boolean',
      description: 'Toggle empty table visibility',
    },
  },
};

export default meta;
type Story = StoryObj<TableStoryArgs>;

export const SimpleTableWithTableContainer: Story = {
  render: args => (
    <Table
      tableContainerWrapper={
        args.hasTableContainerWrapper
          ? table => <TableContainer>{table}</TableContainer>
          : undefined
      }
      columnDefinitions={getSimpleTableColumnDefinitions(args.hasSorting)}
      rowData={args.isEmpty ? [] : simpleTableRowData}
    />
  ),
};

export const TxTable: Story = {
  render: args => (
    <Table
      tableContainerWrapper={table => (
        <TableContainer title={'Transactions'}>{table}</TableContainer>
      )}
      columnDefinitions={txTableColumnDefinitions}
      rowData={txTableRowData}
      bannerRow={args.bannerRow ? <UpdateTableBannerRow /> : undefined}
    />
  ),
};
