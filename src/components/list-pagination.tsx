'use client';
import React from 'react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from './ui/pagination';
import { HStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

type Props = {
  count: number;
  pageSize: number;
  page?: number;
};

const ListPagination = ({ count, pageSize }: Props) => {
  const searchParams = useSearchParams();

  return (
    <PaginationRoot
      count={count}
      pageSize={pageSize}
      defaultPage={1}
      page={parseInt(searchParams.get('page')?.toString() || '1')}
      getHref={page => `?page=${page}`}
    >
      <HStack className="justify-center">
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default ListPagination;
