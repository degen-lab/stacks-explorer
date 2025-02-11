import { ScrollableBox } from '@/app/_components/BlockList/ScrollableDiv';
import { Text } from '@/ui/Text';
import { Tooltip } from '@/ui/Tooltip';
import { Table as ChakraTable, Flex, Icon } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ArrowDown, ArrowUp, ArrowsDownUp, Info } from '@phosphor-icons/react';
import React, { Suspense, useCallback, useMemo, useState } from 'react';

import { ExplorerErrorBoundary } from '../../../app/_components/ErrorBoundary';
import { TableContainer } from './TableContainer';
import { TableSkeleton } from './TableSkeleton';

export const mobileBorderCss = {
  '.has-horizontal-scroll &:before': {
    // Adds a border to the left of the first column
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '2px',
    height: 'var(--stacks-sizes-14)', // full
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
  onSort: ((columnId: string, direction: SortOrder | undefined) => void) | undefined;
}

function SortIcon({ sortable, sortColumn, columnId, sortOrder, onSort }: SortIconProps) {
  if (!sortable) return null;
  return (
    <Icon
      onClick={() => {
        onSort?.(columnId, sortOrder ? (sortOrder === 'asc' ? 'desc' : 'asc') : undefined);
      }}
      h={4}
      w={4}
    >
      {sortColumn !== columnId || !sortOrder ? (
        <ArrowsDownUp />
      ) : sortOrder === 'asc' ? (
        <ArrowUp />
      ) : (
        <ArrowDown />
      )}
    </Icon>
  );
}

export const TableHeader = <T extends unknown[]>({
  columnDefinition,
  sortColumn,
  sortOrder,
  headerTitle,
  isFirst,
  onSort,
}: {
  sortColumn?: string | null;
  sortOrder?: SortOrder;
  columnDefinition: ColumnDefinition<T>;
  headerTitle: string | React.ReactNode;
  isFirst: boolean;
  onSort?: (columnId: string, direction: SortOrder) => void;
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
      borderBottom="1px solid var(--stacks-colors-borderSecondary)"
      role="columnheader"
      aria-sort={sortOrder ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      {typeof headerTitle === 'string' ? ( // TODO: why not also use a custom renderer
        <Flex gap={1.5} alignItems="center" py={4}>
          <Text
            fontWeight="normal"
            whiteSpace="nowrap"
            fontSize="sm"
            color={{
              _light: 'slate.700',
              _dark: 'slate.250',
            }}
            textTransform="none"
            letterSpacing="normal"
            fontFamily="instrument"
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
            onSort={onSort}
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
  columns: ColumnDefinition<T, keyof T>[];
  rowIndex: number;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ChakraTable.Row
      _hover={{
        bg: isHovered ? 'sand.150' : 'inherit',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      css={{
        '& > td:first-of-type': {
          borderTopLeftRadius: 'xl',
          borderBottomLeftRadius: 'xl',
        },
        '& > td:last-of-type': {
          borderTopRightRadius: 'xl',
          borderBottomRightRadius: 'xl',
        },
      }}
    >
      {columns.map((col, colIndex) => (
        <ChakraTable.Cell
          key={`table-row-${rowIndex}-col-${colIndex}`}
          py={4}
          px={6}
          css={{
            ...(colIndex === 0
              ? { ...mobileBorderCss, bg: isHovered ? 'inherit' : 'surface' }
              : {}),
          }}
          position={colIndex === 0 ? 'sticky' : 'unset'}
          left={colIndex === 0 ? 0 : undefined}
          zIndex={colIndex === 0 ? 'docked' : undefined}
        >
          {col.cellRenderer && col.accessor ? (
            col.cellRenderer(col.accessor(rowData), rowData)
          ) : col.cellRenderer ? (
            col.cellRenderer('', rowData)
          ) : col.accessor ? (
            <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" fontSize="sm">
              {col.accessor(rowData)}
            </Text>
          ) : null}
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
export interface ColumnDefinition<T, K extends keyof T, R = T[K]> {
  id: string;
  columnId?: number;
  dataKey?: K; // The enum key to access the data
  header: string | React.ReactNode;
  tooltip?: string;
  accessor?: (row: T) => R;
  sortable?: boolean;
  onSort?: (a: T, b: T, sortOrder: SortOrder | undefined) => number;
  cellRenderer?: (value: R, row: T) => React.ReactNode;
}

export interface TableProps<T extends unknown[]> {
  title?: string;
  topRight?: React.ReactNode;
  topLeft?: React.ReactNode;
  rowData: T[];
  columnDefinitions: ColumnDefinition<T, keyof T>[];
}

export function Table<T extends unknown[]>({
  title,
  topRight,
  topLeft,
  rowData,
  columnDefinitions: rawColumnDefinitions,
}: TableProps<T>) {
  const [sortColumnId, setSortColumnId] = useState<string | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<SortOrder | undefined>(undefined);

  const [sortedRowData, setSortedRowData] = useState(rowData);

  // Enhance column definitions with auto-assigned columnIds and default accessors
  const columnDefinitions = useMemo(
    () =>
      rawColumnDefinitions.map((col, index) => ({
        ...col,
        columnId: col.columnId ?? index,
      })),
    [rawColumnDefinitions]
  );

  const onSort = useCallback(
    (columnId: string, sortOrder: SortOrder | undefined) => {
      const columnDefinition = columnDefinitions.find(col => col.id === columnId);
      if (!columnDefinition) {
        throw new Error(`Column definition not found for columnId: ${columnId}`);
      }
      if (!columnDefinition.sortable) {
        throw new Error(`Column ${columnId} is not sortable`);
      }
      if (!columnDefinition.onSort) {
        throw new Error(`Column ${columnId} does not have an onSort function`);
      }
      setSortColumnId(columnId);
      const newSortDirection = !sortOrder ? 'desc' : sortOrder === 'desc' ? 'asc' : undefined;
      setSortDirection(newSortDirection);
      setSortedRowData(rowData.sort((a, b) => columnDefinition.onSort!(a, b, newSortDirection)));
    },
    [columnDefinitions, rowData]
  );

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
            <StyledTable width="full">
              <ChakraTable.Header>
                <ChakraTable.Row>
                  {columnDefinitions?.map((col, colIndex) => (
                    <TableHeader
                      key={col.id}
                      columnDefinition={col}
                      headerTitle={col.header}
                      sortColumn={sortColumnId}
                      sortOrder={sortDirection}
                      isFirst={colIndex === 0}
                      onSort={onSort}
                    />
                  ))}
                </ChakraTable.Row>
              </ChakraTable.Header>
              <ChakraTable.Body>
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
          </ScrollableBox>
        </TableContainer>
        {/* </TableProvider> */}
      </Suspense>
    </ExplorerErrorBoundary>
  );
}
