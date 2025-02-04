'use client';
import React from 'react';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { SMARTPHONE_BRANDS } from '@/db/some-brands';
import {
  Button,
  Separator,
  Box,
  Heading,
  HStack,
  Status,
} from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';
import FilterItem from './filter-item';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Option {
  label: string;
  value: string;
}

interface Filter {
  [key: string]: {
    label: string;
    type: string;
    data: Option[];
  };
}

type Props = {
  filter: Filter;
  trendingFilter?: (Option & {
    type: string;
  })[];
};

const CategoryFilter = ({ filter, trendingFilter }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const onClickBadge = (type: string, value: string) => {
    console.log('🚀 ~ onClickBadge ~ type:', type, value);
    if (!type) return;
    const params = new URLSearchParams(searchParams);
    // delete pagination after changing filter
    params.delete('page');

    let paramArr = searchParams
      .get(type)
      ?.toString()
      .split(',')
      .filter(val => val); // only receive valid item, remove empty item

    if (paramArr?.includes(value)) {
      paramArr = paramArr.filter(val => value !== val);
    } else {
      paramArr = (paramArr || []).concat([value]);
    }

    // there is no params remove this type from query
    if (paramArr.length) {
      params.set(type, paramArr.join(','));
    } else {
      params.delete(type);
    }

    push(`${pathname}?${params.toString()}`);
  };

  return (
    <HStack className="overflow-x-auto hide-scrollbar">
      <DrawerRoot size={'full'}>
        <DrawerBackdrop />
        <DrawerTrigger>
          <Button
            variant={'outline'}
            size={'sm'}
            className={`h-9 rounded-xl py-2 ${
              !!searchParams.size ? 'text-red-500 border-red-500 ' : ''
            }`}
          >
            <Status.Root className="relative">
              <FiFilter />
              {!!searchParams.size && (
                <Status.Indicator className="absolute -right-1 -top-1 bg-red-500" />
              )}
            </Status.Root>
            Filter
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">Filter</DrawerTitle>
            <Separator />
          </DrawerHeader>
          <DrawerBody>
            {/* brands */}
            <Box as={'section'} className="py-2">
              <Heading size={'md'} className="font-bold mb-1">
                Hãng
              </Heading>
              <HStack className="flex-wrap">
                {SMARTPHONE_BRANDS.map(brand => (
                  <FilterItem
                    key={brand.name}
                    label={brand.name}
                    onClick={() => onClickBadge('brand', brand.id)}
                    isSelected={searchParams
                      .get('brand')
                      ?.toString()
                      .includes(brand.id)}
                  />
                ))}
              </HStack>
            </Box>
            {/* price ranges */}
            <Box as={'section'} className="py-2">
              <Heading size={'md'} className="font-bold mb-1">
                {filter.demand.label}
              </Heading>
              <HStack className="flex-wrap">
                {filter.priceRange.data.map(item => (
                  <FilterItem
                    key={item.label}
                    label={item.label}
                    onClick={() =>
                      onClickBadge(filter.priceRange.type, item.value)
                    }
                    isSelected={searchParams
                      .get(filter.priceRange.type)
                      ?.toString()
                      .includes(item.value)}
                  />
                ))}
              </HStack>
            </Box>
            {/* price ranges */}
            <Box as={'section'} className="py-2">
              <Heading size={'md'} className="font-bold mb-1">
                {filter.demand.label}
              </Heading>
              <HStack className="flex-wrap">
                {filter.demand.data.map(item => (
                  <FilterItem
                    key={item.label}
                    label={item.label}
                    onClick={() => onClickBadge(filter.demand.type, item.value)}
                    isSelected={searchParams
                      .get(filter.demand.type)
                      ?.toString()
                      .includes(item.value)}
                  />
                ))}
              </HStack>
            </Box>
          </DrawerBody>
          <DrawerFooter className="flex justify-center">
            <DrawerActionTrigger asChild>
              <Button variant="outline" className="rounded-xl">
                Cancel
              </Button>
            </DrawerActionTrigger>
            <Button className="rounded-xl bg-red-500">View result</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
      {trendingFilter?.map(item => (
        <FilterItem
          key={item.value}
          label={item.label}
          onClick={() => onClickBadge(item.type, item.value)}
          isSelected={
            !!item.type &&
            searchParams.get(item.type)?.toString().includes(item.value)
          }
        />
      ))}
    </HStack>
  );
};

export default CategoryFilter;
