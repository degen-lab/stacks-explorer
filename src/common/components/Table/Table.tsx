import { ScrollableBox } from '@/app/_components/BlockList/ScrollableDiv';
import { Text } from '@/ui/Text';
import { Tooltip } from '@/ui/Tooltip';
import { Table as ChakraTable, Flex, Icon } from '@chakra-ui/react';
import { ArrowDown, ArrowUp, ArrowsDownUp, Info } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';

import { ExplorerErrorBoundary } from '../../../app/_components/ErrorBoundary';
import { TableContainer } from './TableContainer';
import { ScrollIndicatorWrapper } from './TableScrollIndicatorWrapper';

const fixedFirstColumnCss = {
  '.has-horizontal-scroll &:before': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '2px',
    height: 'full',
    backgroundColor: 'newBorderPrimary',
  },
  '&': {
    position: 'sticky',
    left: 0,
    zIndex: 'docked',
    bg: 'surface',
  },
};

type SortOrder = 'asc' | 'desc';

interface SortIconProps {
  sortable: boolean | undefined;
  sortColumn: string | undefined | null;
  columnId: string;
  sortOrder: SortOrder | undefined;
  setSortColumnId: (columnId: string) => void;
  setSortOrder: (sortOrder: SortOrder | undefined) => void;
}

function SortIcon({
  sortable,
  columnId,
  sortColumn,
  sortOrder,
  setSortColumnId,
  setSortOrder,
}: SortIconProps) {
  if (!sortable) return null;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="surfacePrimary"
      borderRadius="redesign.xs"
      p={1}
      className="group"
    >
      <Icon
        onClick={() => {
          setSortColumnId(columnId);
          setSortOrder(sortOrder ? (sortOrder === 'asc' ? undefined : 'asc') : 'desc');
        }}
        h={3}
        w={3}
        cursor="pointer"
        color="iconSecondary"
        _groupHover={{
          color: 'iconPrimary',
        }}
      >
        {sortColumn !== columnId || !sortOrder ? (
          <ArrowsDownUp />
        ) : sortOrder === 'asc' ? (
          <ArrowUp />
        ) : (
          <ArrowDown />
        )}
      </Icon>
    </Flex>
  );
}

export function TableHeader<T>({
  columnDefinition,
  sortColumn,
  sortOrder,
  headerTitle,
  columnIndex,
  setSortColumnId,
  setSortOrder,
}: {
  sortColumn?: string | null;
  sortOrder?: SortOrder;
  columnDefinition: ColumnDefinition<T, keyof T>;
  headerTitle: string;
  columnIndex: number;
  setSortColumnId: (columnId: string) => void;
  setSortOrder: (sortOrder: SortOrder | undefined) => void;
}) {
  const isFirstColumn = columnIndex === 0;
  return (
    <ChakraTable.ColumnHeader
      py={3}
      px={6}
      border="none"
      borderBottom="1px solid var(--stacks-colors-surface-secondary)"
      css={isFirstColumn ? fixedFirstColumnCss : {}}
      width="fit-content"
      role="columnheader"
      aria-sort={sortOrder ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      <Flex
        w="fit-content"
        gap={1.5}
        alignItems="center"
        py={1}
        pl={1}
        pr={1.5}
        _hover={{
          bg: 'surfaceSecondary',
        }}
        borderRadius="redesign.md"
        className="column-header-content"
      >
        <Text
          fontWeight="medium"
          whiteSpace="nowrap"
          fontSize="sm"
          color={{
            _light: 'slate.700',
            _dark: 'slate.250',
          }}
          textTransform="none"
          letterSpacing="normal"
          fontFamily="instrument"
          css={{
            '& .column-header-content:hover': {
              color: 'textPrimary',
            },
          }}
        >
          {headerTitle}
        </Text>
        {columnDefinition.tooltip && (
          <Tooltip content={columnDefinition.tooltip}>
            <Icon h={4} w={4} color="iconSecondary">
              <Info />
            </Icon>
          </Tooltip>
        )}
        <SortIcon
          sortable={!!columnDefinition.onSort}
          sortColumn={sortColumn}
          columnId={columnDefinition.id}
          sortOrder={sortOrder}
          setSortColumnId={setSortColumnId}
          setSortOrder={setSortOrder}
        />
      </Flex>
    </ChakraTable.ColumnHeader>
  );
}

export function TableRow<T>({
  rowData,
  columnDefinitions,
  rowIndex,
}: {
  rowData: T;
  columnDefinitions: ColumnDefinition<T, keyof T>[];
  rowIndex: number;
}) {
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
      className="group"
    >
      {columnDefinitions.map((colDef, colIndex) => {
        const isFirstColumn = colIndex === 0;
        return (
          <ChakraTable.Cell
            key={`table-row-${rowIndex}-col-${colIndex}`}
            py={4}
            px={6}
            css={{
              ...(isFirstColumn
                ? {
                    ...fixedFirstColumnCss,
                    '&:hover': {
                      backgroundColor: 'inherit',
                    },
                    backgroundColor: 'surface',
                  }
                : {}),
            }}
            _groupHover={{
              bg: 'surfacePrimary',
            }}
          >
            {colDef.cellRenderer(colDef.accessor(rowData), rowData)}
          </ChakraTable.Cell>
        );
      })}
    </ChakraTable.Row>
  );
}

export type CellRenderer<T, R> = (value: R | undefined, row: T) => React.ReactNode;

/**
 * Defines the structure of a table column
 * @template T - The type of the row data object
 * @template K - The keys/properties available in T (must be valid keys of T)
 * @template R - The type of the value at T[K], defaults to T[K]
 */
/**
 * dataKey is a type-safe way to directly access a property from your data object (like row.name)
 * accessor is more flexible, allowing complex transformations (like row => ${row.firstName} ${row.lastName})
 * Having both gives you the choice between simple property access and complex data transformations2.
 * id is a unique string identifier for the column
 * columnId is a numeric index, useful for maintaining column order and optimizing rendering - This separation allows for both human-readable identifiers and efficient internal operations.
 * cellRenderer handles the visual presentation of the data - Decouples data transformation (accessor) from presentation logic - Enables custom components, formatting, or interactive elements within cells
 * Why have an accessor vs just using the cellrender?
 * Accessor:
 * Handles data transformation/extraction
 * Returns the raw data value
 * Used for sorting operations
 * Can be reused across different cell renderers
 * Keeps business logic separate from presentation
 * CellRenderer:
 * Handles only the presentation/UI
 * Takes the processed data from accessor and renders it
 * Can include formatting, styling, and interactive elements
 * Focuses purely on how to display the data
 */
export interface ColumnDefinition<T, K extends keyof T, R = T[K]> {
  id: string;
  header: string;
  tooltip?: string;
  accessor: (row: T) => R;
  onSort?: (a: T, b: T) => number;
  cellRenderer: CellRenderer<T, R>;
}

export interface TableProps<T> {
  rowData: T[];
  columnDefinitions: ColumnDefinition<T, keyof T>[];
  onSort?: (columnId: string, sortOrder: SortOrder | undefined) => Promise<T[]>;
  isLoading?: boolean;
  suspenseWrapper?: (table: React.ReactNode) => React.ReactNode;
  tableContainerWrapper?: (table: React.ReactNode) => React.ReactNode;
  hasFixedFirstColumn?: boolean;
  hasScrollIndicator?: boolean;
  bannerRow?: React.ReactElement<typeof ChakraTable.Row>;
}

export function Table<T>({
  rowData,
  columnDefinitions,
  bannerRow,
  hasScrollIndicator,
  hasFixedFirstColumn,
  tableContainerWrapper,
  suspenseWrapper,
  onSort, // For server-side sorting
  isLoading,
}: TableProps<T>) {
  const [sortColumnId, setSortColumnId] = useState<string | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(undefined);
  const [sortedRowData, setSortedRowData] = useState(rowData);

  // Handles table sorting when sort column or order changes.
  useEffect(() => {
    if (!sortColumnId || !sortOrder) {
      return;
    }
    const columnDefinition = columnDefinitions.find(col => col.id === sortColumnId);
    if (!columnDefinition) {
      throw new Error(`Column definition not found for columnId: ${sortColumnId}`);
    }
    if (onSort) {
      // Let the parent component handle the loading state and data updates
      onSort(sortColumnId, sortOrder).then(setSortedRowData);
    } else {
      if (!columnDefinition.onSort) {
        throw new Error(`Column ${sortColumnId} does not have an onSort function`);
      }
      setSortedRowData(
        // TODO: how to handle server sorting and filtering
        sortOrder
          ? rowData.sort((a, b) => {
              const result = columnDefinition.onSort!(a, b);
              return sortOrder === 'asc' ? result : -result;
            })
          : rowData
      );
    }
  }, [sortColumnId, sortOrder, rowData, columnDefinitions, onSort]);

  let content: React.ReactNode = (
    <ChakraTable.Root
      width="full"
      css={{
        '& td': {
          borderBottom: 'none',
        },
      }}
    >
      <ChakraTable.Header>
        <ChakraTable.Row>
          {columnDefinitions?.map((col, colIndex) => (
            <TableHeader
              key={col.id}
              columnDefinition={col}
              headerTitle={col.header}
              sortColumn={sortColumnId}
              sortOrder={sortOrder}
              setSortColumnId={setSortColumnId}
              setSortOrder={setSortOrder}
              columnIndex={colIndex}
            />
          ))}
        </ChakraTable.Row>
      </ChakraTable.Header>
      <ChakraTable.Body>
        {bannerRow}
        {sortedRowData?.map((rowData, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={rowData}
            columnDefinitions={columnDefinitions}
          />
        ))}
      </ChakraTable.Body>
    </ChakraTable.Root>
  );

  if (hasScrollIndicator) {
    content = <ScrollIndicatorWrapper>{content}</ScrollIndicatorWrapper>;
  }

  if (hasFixedFirstColumn) {
    content = <ScrollableBox>{content}</ScrollableBox>;
  }

  if (tableContainerWrapper) {
    content = tableContainerWrapper(content);
  }

  if (suspenseWrapper) {
    content = suspenseWrapper(content);
  }

  return (
    <ExplorerErrorBoundary Wrapper={TableContainer} tryAgainButton>
      {content}
    </ExplorerErrorBoundary>
  );
}
