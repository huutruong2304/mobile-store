import CategoryFilter from '@/components/category-filter';
import ListPagination from '@/components/list-pagination';
import ProductCard from '@/components/product-card';
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

import {
  NativeSelectField,
  NativeSelectRoot,
} from '@/components/ui/native-select';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/components/ui/pagination';
import { MOCK_IPHONE } from '@/db/mock-api';
import { Box, Grid, HStack } from '@chakra-ui/react';
import { LuHouse } from 'react-icons/lu';

export default function Page() {
  const data = {
    sorting: {
      default: [
        { label: 'Popular', value: '1' },
        { label: 'Best seller', value: '2' },
        { label: 'Discount', value: '3' },
        { label: 'Newest', value: '4' },
      ],
      price: [
        { label: 'Price High to Low', value: '5' },
        { label: 'Price Low to High', value: '6' },
      ],
    },
    filter: {
      priceRange: {
        label: 'Giá',
        type: 'price',
        data: [
          { label: 'Dưới 2 triệu', value: '1' },
          { label: 'Từ 2 - 5 triệu', value: '2' },
          { label: 'Từ 5 - 10 triệu', value: '3' },
          { label: 'Từ 10 - 20 triệu', value: '4' },
          { label: 'Trên 20 triệu', value: '5' },
        ],
      },
      demand: {
        label: 'Nhu cầu',
        type: 'demand',
        data: [
          { label: 'Chơi game/Cấu hình cao', value: '1' },
          { label: 'Pin khủng', value: '2' },
          { label: 'Quay phim, chụp hình', value: '3' },
          { label: 'Mỏng nhẹ', value: '4' },
        ],
      },
    },
    trendingFilter: [
      {
        label: 'Iphone',
        value: '1',
        type: 'brand',
      },
      {
        label: 'Samsung',
        value: '2',
        type: 'brand',
      },
      {
        label: 'Mỏng nhẹ',
        value: '3',
        type: 'demand',
      },
      {
        label: 'Pin khủng',
        value: '4',
        type: 'demand',
      },
    ],
  };

  return (
    <Box className="w-full p-2">
      {/* breadcrumb */}
      <Box className="py-2">
        <BreadcrumbRoot>
          <BreadcrumbLink href="/">
            <LuHouse /> Home
          </BreadcrumbLink>
          <BreadcrumbCurrentLink className="w-40 md:w-max truncate">
            Smartphone
          </BreadcrumbCurrentLink>
        </BreadcrumbRoot>
      </Box>
      {/* filter */}
      {/* show as a drawer */}
      {/* display some popular brands */}
      <Box className="py-2">
        <CategoryFilter
          filter={data.filter}
          trendingFilter={data.trendingFilter}
        />
      </Box>
      {/* sorting */}
      {/* by name, best sellers, discounts, newest, ... */}
      <Box className="py-0">
        <HStack className="">
          {data.sorting.default.map(sorting => (
            <Box key={sorting.value} className="w-1/5">
              <Button variant={'plain'}>{sorting.label}</Button>
            </Box>
          ))}

          <Box className="w-1/5">
            <NativeSelectRoot variant={'plain'}>
              <NativeSelectField placeholder="Price">
                {data.sorting.price.map(sort => (
                  <option key={sort.value} value={sort.value}>
                    {sort.label}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>
          </Box>
        </HStack>
      </Box>
      {/* products  */}
      <Box className="py-2">
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} className="py-2">
          {MOCK_IPHONE.slice(0, 10).map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.price}
              thumb={item.thumb}
              tags={item.tags}
              href={`/smartphone/${item.id}`}
            />
          ))}
        </Grid>
      </Box>
      {/* view more or pagination */}
      <Box className="py-2">
        <ListPagination count={45} pageSize={10} />
      </Box>
    </Box>
  );
}
