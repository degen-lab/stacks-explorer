import { Flex, Icon, Stack } from '@chakra-ui/react';
import { CaretDown } from '@phosphor-icons/react';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { Badge } from '../../../common/components/Badge';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../../../components/ui/popover';
import { Button } from '../../../ui/Button';
import { Text } from '../../../ui/Text';
import { DatePickerInput, DatePickerValues } from './DatePickerInput';
import { DatePickerRangeInput, DatePickerRangeInputState } from './DatePickerRangeInput';
import { TimeInput, TimeInputState } from './TimeInput';
import { TimeRangeInput, TimeRangeInputState } from './TimeRangeInput';

const cyclefilterToFormattedValueMap: Record<string, (value: string) => string> = {
  endTime: (value: string) => value,
  startTime: (value: string) => value,
};

type TimeFilterType = 'range' | 'before' | 'after' | 'on' | null;

function FilterTypeButton({
  // TODO: move to separate file
  isSelected,
  setSelected,
  children,
}: {
  isSelected?: boolean;
  setSelected?: () => void;
  children: ReactNode;
}) {
  return (
    <Badge
      color={isSelected ? 'timeFilter.text' : 'textSubdued'}
      bg={isSelected ? 'timeFilter.background' : undefined}
      borderColor={isSelected ? 'timeFilter.border' : undefined}
      px={2}
      py={1}
      fontSize={'xs'}
      rounded={'full'}
      border={'1px'}
      fontWeight={'medium'}
      cursor={'pointer'}
      onClick={setSelected}
    >
      {children}
    </Badge>
  );
}

interface DateFilterProps {
  defaultStartTime?: string;
  defaultEndTime?: string;
  defaultOnTime?: string;
  hasRange?: boolean;
  hasBefore?: boolean;
  hasAfter?: boolean;
  hasOn?: boolean;
  formatOn?: (value: string) => string;
  formatBefore?: (value: string) => string;
  formatAfter?: (value: string) => string;
  datePickerRangeOnSubmit?: (values: DatePickerRangeInputState) => void;
  dateInputRangeOnSubmit?: (values: TimeRangeInputState) => void;
  datePickerOnSubmit?: (values: DatePickerValues) => void;
  timeInputOnSubmitHandler?: (values: TimeInputState) => void;
  beforeOnSubmit?: (values: TimeInputState) => void;
  afterOnSubmit?: (values: TimeInputState) => void;
  onOnSubmit?: (values: TimeInputState) => void;
  rangeOnSubmit?: (values: TimeRangeInputState) => void;
  formType: TimeFilterFormType;
  defaultButtonText?: string;
}

type TimeFilterFormType = 'date-picker' | 'input';

export function TimeFilter({
  defaultStartTime,
  defaultEndTime,
  defaultOnTime,
  hasRange = true,
  hasBefore = true,
  hasAfter = true,
  hasOn = true,
  formatOn,
  formatBefore,
  formatAfter,
  datePickerRangeOnSubmit,
  dateInputRangeOnSubmit,
  datePickerOnSubmit,
  timeInputOnSubmitHandler,
  beforeOnSubmit,
  afterOnSubmit,
  onOnSubmit,
  rangeOnSubmit,
  formType,
  defaultButtonText = 'Date',
}: DateFilterProps) {
  const [open, setOpen] = useState(false);
  const defaultStartTimeNumber = isNaN(Number(defaultStartTime))
    ? undefined
    : Number(defaultStartTime);
  const defaultEndTimeNumber = isNaN(Number(defaultEndTime)) ? undefined : Number(defaultEndTime);
  const defaultOnTimeNumber = isNaN(Number(defaultEndTime)) ? undefined : Number(defaultEndTime);

  const populatedFilter: TimeFilterType = // TODO: these props arent changin anymore. i need a new way to determine which filter is populated and waht theat value is so I can display it in the button
    defaultStartTime && defaultEndTime
      ? 'range'
      : defaultStartTime
        ? 'after'
        : defaultEndTime
          ? 'before'
          : defaultOnTime
            ? 'on'
            : null;

  const buttonText = !populatedFilter
    ? defaultButtonText
    : populatedFilter === 'range'
      ? 'Range:'
      : populatedFilter === 'before'
        ? 'Before:'
        : populatedFilter === 'after'
          ? 'After:'
          : 'Date';

  const firstFilterType = hasRange
    ? 'range'
    : hasBefore
      ? 'before'
      : hasAfter
        ? 'after'
        : hasOn
          ? 'on'
          : null;

  if (!firstFilterType) {
    // Should never be thrown
    throw new Error('No filter type found');
  }

  const [selectedFilterType, setSelectedFilterType] = useState<TimeFilterType>(
    populatedFilter || firstFilterType
  );

  useEffect(() => {
    setSelectedFilterType(populatedFilter || firstFilterType);
  }, [populatedFilter, firstFilterType]);

  const datePickerRangeOnSubmitHandler = useMemo(
    () => (values: DatePickerRangeInputState) => {
      datePickerRangeOnSubmit?.(values);
      setOpen(false);
    },
    [datePickerRangeOnSubmit, setOpen]
  );

  const dateInputRangeOnSubmitHandler = useMemo(
    () => (values: TimeRangeInputState) => {
      dateInputRangeOnSubmit?.(values);
      setOpen(false);
    },
    [dateInputRangeOnSubmit, setOpen]
  );

  const datePickerOnSubmitHandler = useMemo(
    () => (values: DatePickerValues) => {
      datePickerOnSubmit?.(values);
      setOpen(false);
    },
    [datePickerOnSubmit, setOpen]
  );

  const timeInputOnSubmit = useMemo(
    () => (values: TimeInputState) => {
      timeInputOnSubmitHandler?.(values);
      setOpen(false);
    },
    [timeInputOnSubmitHandler, setOpen]
  );

  return (
    <PopoverRoot
      id={'time-filter-popover'}
      positioning={{ placement: 'bottom-start' }}
      open={open}
      onOpenChange={e => setOpen(e.open)}
    >
      <PopoverTrigger>
        <Button
          variant={'secondary'}
          fontSize={'sm'}
          rightIcon={
            <Icon style={{ strokeWidth: '2px' }}>
              <CaretDown />
            </Icon>
          }
          height={9}
          color={'textSubdued'}
        >
          <Flex gap={0.5}>
            <Text display={!populatedFilter ? 'inline' : ['none', 'none', 'inline']}>
              {buttonText}
            </Text>
            {!!populatedFilter && (
              <Text color={'text'} fontSize={'sm'}>
                {!!defaultOnTime
                  ? formatOn?.(defaultOnTime)
                  : !!defaultStartTime
                    ? formatAfter?.(defaultStartTime)
                    : !!defaultEndTime
                      ? formatBefore?.(defaultEndTime)
                      : !!defaultStartTime && !!defaultEndTime
                        ? `${formatAfter?.(defaultStartTime)} - ${formatBefore?.(defaultEndTime)}`
                        : null}
              </Text>
            )}
          </Flex>
        </Button>
      </PopoverTrigger>
      <PopoverContent maxWidth={64} bgColor={'surface'}>
        <Stack gap={4} p={4}>
          <Flex gap={2} flexWrap={'wrap'}>
            {[
              { type: 'range', label: 'Range', condition: hasRange },
              { type: 'before', label: 'Before', condition: hasBefore },
              { type: 'after', label: 'After', condition: hasAfter },
              { type: 'on', label: 'On', condition: hasOn },
            ].map(
              ({ type, label, condition }) =>
                condition && (
                  <FilterTypeButton
                    key={type}
                    isSelected={selectedFilterType === type}
                    setSelected={() => setSelectedFilterType(type as TimeFilterType)}
                  >
                    {label}
                  </FilterTypeButton>
                )
            )}
          </Flex>
          {selectedFilterType === 'range' ? (
            formType === 'date-picker' ? (
              <DatePickerRangeInput
                initialStartDate={defaultStartTimeNumber}
                initialEndDate={defaultEndTimeNumber}
                onSubmit={datePickerRangeOnSubmitHandler}
              />
            ) : (
              <TimeRangeInput
                initialStartTime={defaultStartTimeNumber}
                initialEndTime={defaultEndTimeNumber}
                onSubmit={dateInputRangeOnSubmitHandler}
                type="number" // TODO: make this dynamic
              />
            )
          ) : selectedFilterType === 'before' ? (
            formType === 'date-picker' ? (
              <DatePickerInput
                label="Before:"
                initialDate={defaultEndTimeNumber}
                onSubmit={datePickerOnSubmitHandler}
              />
            ) : (
              <TimeInput
                label="Before:"
                initialTime={defaultEndTimeNumber?.toString()}
                onSubmit={timeInputOnSubmit}
                type="number" // TODO: make this dynamic
                key="before"
              />
            )
          ) : selectedFilterType === 'after' ? (
            formType === 'date-picker' ? (
              <DatePickerInput
                label="After:"
                initialDate={defaultStartTimeNumber}
                onSubmit={datePickerOnSubmitHandler}
              />
            ) : (
              <TimeInput
                label="After:"
                initialTime={defaultStartTimeNumber?.toString()}
                onSubmit={timeInputOnSubmit}
                type="number" // TODO: make this dynamic
                key="after"
              />
            )
          ) : selectedFilterType === 'on' ? (
            formType === 'date-picker' ? (
              <DatePickerInput
                label="On:"
                initialDate={defaultOnTimeNumber}
                onSubmit={datePickerOnSubmitHandler}
              />
            ) : (
              <TimeInput
                label="On:"
                initialTime={defaultOnTimeNumber?.toString()}
                onSubmit={timeInputOnSubmit}
                type="number" // TODO: make this dynamic
                key="on"
              />
            )
          ) : null}
        </Stack>
      </PopoverContent>
    </PopoverRoot>
  );
}

// function getFormType(
//   formType: TimeFilterFormType,
//   initialDate: number,
//   onSubmitHandler: (values: any) => void
// ) {
//   return formType === 'date-picker' ? (
//     <DatePickerForm
//       label="On:"
//       initialDate={initialDate}
//       onSubmitHandler={onSubmitHandler}
//     />
//   ) : (
//     <DateInputForm
//       label="On:"
//       initialDate={initialDate?.toString()}
//       onSubmitHandler={onSubmitHandler}
//       type="number" // TODO: make this dynamic
//       name="on"
//     />
//   );
// }
