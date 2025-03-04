import StxIcon from '@/ui/icons/StxIcon';
import { Box, Flex, HStack, Icon, Stack } from '@chakra-ui/react';
import { Circle } from '@phosphor-icons/react';
import React from 'react';

import { SkeletonText } from '../../../../components/ui/skeleton';
import { Caption } from '../../../../ui/typography';
import { BlockListGridHeaderRowSkeleton } from '../Grouped/skeleton';
import { LineAndNode } from '../LineAndNode';
import { BtcBlockRowLayout, StxBlocksGridLayout } from './BlockListUngrouped';

export function BlockListRowSkeleton({
  minimized,
  isLast,
  isFirst,
}: {
  minimized?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
}) {
  const icon = isFirst ? (
    <Icon h={2.5} w={2.5} color="white">
      <StxIcon />
    </Icon>
  ) : null;
  return minimized ? (
    <>
      <Flex alignItems="center" gridColumn="1 / 2" gap={2}>
        <LineAndNode rowHeight={14} width={6} icon={icon} isLast={isLast} />
        <SkeletonText noOfLines={1} width={20} />
      </Flex>

      <HStack
        separator={<Caption border="none">&nbsp;∙&nbsp;</Caption>}
        gap={1}
        whiteSpace="nowrap"
        color="textSubdued"
        gridColumn="3 / 4"
      >
        <SkeletonText noOfLines={1} width={10} />
        <SkeletonText noOfLines={1} width={10} />
        <SkeletonText noOfLines={1} width={10} />
      </HStack>
    </>
  ) : (
    <>
      <Flex alignItems="center">
        <LineAndNode rowHeight={14} width={6} icon={icon} isLast={isLast} />
        <SkeletonText noOfLines={1} width={20} />
      </Flex>

      <Flex alignItems="center">
        <SkeletonText noOfLines={1} width={20} />
      </Flex>

      <Flex alignItems="center">
        <SkeletonText noOfLines={1} width={20} />
      </Flex>

      <Flex alignItems="center">
        <SkeletonText noOfLines={1} width={20} />
      </Flex>
    </>
  );
}

export function StxBlocksGridSkeleton({
  numBlocks,
  minimized,
}: {
  numBlocks: number;
  minimized?: boolean;
}) {
  return (
    <Box mt={4}>
      <StxBlocksGridLayout minimized={minimized}>
        {minimized ? null : <BlockListGridHeaderRowSkeleton />}
        {Array.from({ length: numBlocks }).map((_, i) => (
          <React.Fragment key={`stx-blocks-grid-row-skeleton-${i}`}>
            <BlockListRowSkeleton
              minimized={minimized}
              isLast={i === numBlocks - 1}
              isFirst={i === 0}
            />
            {i < numBlocks - 1 && (
              <Box
                gridColumn={'1/5'}
                borderBottom={`1px solid var(--stacks-colors-border-secondary)`}
              ></Box>
            )}
          </React.Fragment>
        ))}
      </StxBlocksGridLayout>
    </Box>
  );
}

function BtcBlockRowContentSkeleton() {
  return (
    <>
      <SkeletonText noOfLines={1} width={20} />
      <SkeletonText noOfLines={1} width={20} />
    </>
  );
}

function BtcBlockRowSkeleton({ minimized }: { minimized?: boolean }) {
  return (
    <BtcBlockRowLayout mx={minimized ? 'unset' : -12}>
      <BtcBlockRowContentSkeleton />
    </BtcBlockRowLayout>
  );
}

export function BlocksPageBlockListUngroupedSkeleton() {
  return (
    <Stack px={6} gap={0} width={'full'}>
      <StxBlocksGridSkeleton numBlocks={10} />
      <BtcBlockRowSkeleton />
      <StxBlocksGridSkeleton numBlocks={30} />
      <BtcBlockRowSkeleton />
    </Stack>
  );
}

export function HomePageBlockListUngroupedSkeleton() {
  return (
    <Stack px={6} gap={0} width={'full'}>
      <StxBlocksGridSkeleton numBlocks={5} minimized={true} />
      <BtcBlockRowSkeleton minimized={true} />
      <StxBlocksGridSkeleton numBlocks={5} minimized={true} />
      <BtcBlockRowSkeleton minimized={true} />
      <StxBlocksGridSkeleton numBlocks={5} minimized={true} />
      <BtcBlockRowSkeleton minimized={true} />
    </Stack>
  );
}
