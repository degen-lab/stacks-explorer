import { Flex, FlexProps, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Text } from '../../../ui/Text';
import { Card } from '../Card';

function Toolbar({
  topLeft,
  topRight,
  title,
}: {
  topLeft?: string | ReactNode;
  topRight?: ReactNode;
  title?: string | ReactNode;
}) {
  if (!title && !topLeft && !topRight) {
    return null;
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        flexShrink={0}
        direction={['column', 'row']}
        gap={4}
      >
        {title ? (
          <Text
            color={{ _light: 'slate.900', _dark: 'white' }}
            fontWeight="normal"
            fontSize="3.5xl"
          >
            {title}
          </Text>
        ) : topLeft ? (
          topLeft
        ) : null}
      </Flex>
      {topRight && (
        <Flex justifyContent="flex-end" alignItems="center">
          {topRight}
        </Flex>
      )}
    </Flex>
  );
}

interface TableContainerProps extends FlexProps {
  topLeft?: ReactNode;
  topRight?: ReactNode;
  title?: string;
}

export function TableContainer({
  topLeft,
  topRight,
  title,
  children,
  ...rest
}: TableContainerProps) {
  return (
    <Stack gap={7} w="full" className="table-container">
      <Toolbar topLeft={topLeft} topRight={topRight} title={title} />
      <Card
        h="fit-content"
        w="full"
        p={[3, 3, 3, 4]}
        borderColor="red"
        className="table-container-card"
        overflow="auto"
        {...rest}
      >
        {children}
      </Card>
    </Stack>
  );
}
