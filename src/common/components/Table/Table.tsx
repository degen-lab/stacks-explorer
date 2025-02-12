import { ScrollableBox } from '@/app/_components/BlockList/ScrollableDiv';
import { Text } from '@/ui/Text';
import { Tooltip } from '@/ui/Tooltip';
import { Table as ChakraTable, Flex, Icon } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ArrowDown, ArrowUp, ArrowsDownUp, Info } from '@phosphor-icons/react';
import React, { Suspense, useEffect, useMemo, useState } from 'react';

import { ExplorerErrorBoundary } from '../../../app/_components/ErrorBoundary';
import { TableContainer } from './TableContainer';
import { TableScrollIndicatorWrapper } from './TableScrollIndicatorWrapper';
import { TableSkeleton } from './TableSkeleton';

export const mobileBorderCss = {
  '.has-horizontal-scroll &:before': {
    // Adds a border to the left of the first column
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '2px',
    height: 'var(--stacks-sizes-14)', // full // TODO: not good to use a fixed height
    backgroundColor: 'borderPrimary', // bg: 'surface'
  },
};

const StyledTable = styled(ChakraTable.Root)`
  tr td {
    border-bottom: none;
  }
`;

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

export const TableHeader = <T extends unknown[]>({
  columnDefinition,
  sortColumn,
  sortOrder,
  headerTitle,
  isFirst,
  setSortColumnId,
  setSortOrder,
}: {
  sortColumn?: string | null;
  sortOrder?: SortOrder;
  columnDefinition: EnhancedColumnDefinition<T>;
  headerTitle: string | React.ReactNode;
  isFirst: boolean;
  setSortColumnId: (columnId: string) => void;
  setSortOrder: (sortOrder: SortOrder | undefined) => void;
}) => {
  return (
    <ChakraTable.ColumnHeader
      py={3}
      px={6}
      border="none"
      css={isFirst ? mobileBorderCss : {}}
      width="fit-content"
      position={isFirst ? 'sticky' : 'unset'}
      left={isFirst ? 0 : undefined}
      zIndex={isFirst ? 'docked' : undefined}
      bg="surface"
      borderBottom="1px solid var(--stacks-colors-surface-secondary)"
      role="columnheader"
      aria-sort={sortOrder ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      {typeof headerTitle === 'string' ? ( // TODO: why not also use a custom renderer
        <Flex
          gap={1.5}
          alignItems="center"
          py={1}
          pl={1}
          pr={1.5}
          _hover={{
            bg: 'surfaceSecondary',
          }}
          borderRadius="redesign.md"
          className="group"
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
            _groupHover={{
              color: 'textPrimary',
            }}
          >
            {headerTitle}
          </Text>
          {columnDefinition.tooltip && (
            <Tooltip content={columnDefinition.tooltip}>
              <Icon h={4} w={4}>
                <Info />
              </Icon>
            </Tooltip>
          )}
          <SortIcon
            sortable={columnDefinition.sortable}
            sortColumn={sortColumn}
            columnId={columnDefinition.id}
            sortOrder={sortOrder}
            setSortColumnId={setSortColumnId}
            setSortOrder={setSortOrder}
          />
        </Flex>
      ) : (
        headerTitle
      )}
    </ChakraTable.ColumnHeader>
  );
};

export function TableRow<T extends unknown[]>({
  rowData,
  columns,
  rowIndex,
  isFirst,
  isLast,
}: {
  rowData: T;
  columns: EnhancedColumnDefinition<T>[];
  rowIndex: number;
  isFirst: boolean;
  isLast: boolean;
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
      _hover={{
        bg: 'surfacePrimary',
      }}
      className="group"
    >
      {columns.map((col, colIndex) => (
        <ChakraTable.Cell
          key={`table-row-${rowIndex}-col-${colIndex}`}
          py={4}
          px={6}
          css={{
            ...(colIndex === 0
              ? {
                  ...mobileBorderCss,
                  '&:hover': {
                    backgroundColor: 'inherit',
                  },
                  backgroundColor: 'surface',
                }
              : {}),
          }}
          position={colIndex === 0 ? 'sticky' : 'unset'}
          left={colIndex === 0 ? 0 : undefined}
          zIndex={colIndex === 0 ? 'docked' : undefined}
          _groupHover={{
            bg: 'surfacePrimary',
          }}
        >
          {col.cellRenderer ? (
            col.cellRenderer(col.accessor(rowData), rowData)
          ) : (
            <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
              {String(col.accessor(rowData))} {/* TODO: fix type */}
            </Text>
          )}
        </ChakraTable.Cell>
      ))}
    </ChakraTable.Row>
  );
}

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
 */
export interface ColumnDefinition<T, K extends keyof T, R = T[K]> {
  id: string;
  columnId?: number;
  dataKey?: K; // The enum key to access the data
  header: string | React.ReactNode;
  tooltip?: string;
  accessor?: (row: T) => R;
  sortable?: boolean;
  onSort?: (a: T, b: T) => number;
  cellRenderer?: (value: R | undefined, row: T) => React.ReactNode;
}

/**
 * Enhanced version of ColumnDefinition that ensures required properties are present
 * @template T - The type of a row in the table data (e.g., { id: number, name: string })
 *
 * Type parameters in the extended ColumnDefinition:
 * - T: The row data type (same as above)
 * - keyof T: Union type of all property names in T (e.g., "id" | "name")
 * - T[keyof T]: Union type of all possible value types in T (e.g., number | string)
 *
 * This interface ensures:
 * - columnId is required (not optional like in base ColumnDefinition)
 * - accessor is required and properly typed to return a value from the row
 */
export interface EnhancedColumnDefinition<T> extends ColumnDefinition<T, keyof T, T[keyof T]> {
  columnId: number;
  accessor: (row: T) => T[keyof T];
}

export interface TableProps<T extends unknown[]> {
  title?: string;
  topRight?: React.ReactNode;
  topLeft?: React.ReactNode;
  rowData: T[];
  columnDefinitions: ColumnDefinition<T, keyof T>[];
  bannerRow?: React.ReactNode;
}

export function Table<T extends unknown[]>({
  title,
  topRight,
  topLeft,
  rowData,
  columnDefinitions: rawColumnDefinitions,
  bannerRow,
}: TableProps<T>) {
  const [sortColumnId, setSortColumnId] = useState<string | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<SortOrder | undefined>(undefined);
  const [sortedRowData, setSortedRowData] = useState(rowData);

  // Enhance column definitions. Auto-assigning columnIds and default accessors
  const columnDefinitions: EnhancedColumnDefinition<T>[] = useMemo(
    () =>
      rawColumnDefinitions.map((colDef, index) => ({
        ...colDef,
        columnId: index,
        accessor: colDef.accessor
          ? colDef.accessor
          : colDef.dataKey
            ? (row: T) => row[colDef.dataKey as keyof T]
            : (row: T) => row[colDef.id as keyof T],
      })),
    [rawColumnDefinitions]
  );

  // Handles table sorting when sort column or order changes.
  useEffect(() => {
    if (!sortColumnId || !sortOrder) {
      return;
    }
    const columnDefinition = columnDefinitions.find(col => col.id === sortColumnId);
    if (!columnDefinition) {
      throw new Error(`Column definition not found for columnId: ${sortColumnId}`);
    }
    if (!columnDefinition.sortable) {
      throw new Error(`Column ${sortColumnId} is not sortable`);
    }
    if (!columnDefinition.onSort) {
      throw new Error(`Column ${sortColumnId} does not have an onSort function`);
    }
    setSortedRowData(
      sortOrder
        ? rowData.sort((a, b) => {
            const result = columnDefinition.onSort!(a, b);
            return sortOrder === 'asc' ? result : -result;
          })
        : rowData
    );
  }, [sortColumnId, sortOrder, rowData, columnDefinitions]);

  return (
    <ExplorerErrorBoundary Wrapper={TableContainer} tryAgainButton>
      <Suspense
        fallback={
          <TableSkeleton numColumns={columnDefinitions.length} numRows={rowData.length ?? null} />
        }
      >
        {/* <TableProvider initialData={data}> */}
        <TableContainer topRight={topRight} topLeft={topLeft} title={title}>
          <ScrollableBox>
            <TableScrollIndicatorWrapper>
              <StyledTable width="full">
                <ChakraTable.Header>
                  <ChakraTable.Row>
                    {columnDefinitions?.map((col, colIndex) => (
                      <TableHeader
                        key={col.id}
                        columnDefinition={col}
                        headerTitle={col.header}
                        sortColumn={sortColumnId}
                        sortOrder={sortOrder}
                        isFirst={colIndex === 0}
                        setSortColumnId={setSortColumnId}
                        setSortOrder={setSortOrder}
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
                      columns={columnDefinitions}
                      isFirst={rowIndex === 0}
                      isLast={rowIndex === sortedRowData.length - 1}
                    />
                  ))}
                </ChakraTable.Body>
              </StyledTable>
            </TableScrollIndicatorWrapper>
          </ScrollableBox>
        </TableContainer>
        {/* </TableProvider> */}
      </Suspense>
    </ExplorerErrorBoundary>
  );
}
