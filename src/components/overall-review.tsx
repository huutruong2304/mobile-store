import { Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { HiStar } from 'react-icons/hi';
import RatingProgress from './rating-progress';
import { formatToK } from '@/utils/helper';

type Props = {
  rate: number;
  customerTotal: number;
  reviewTotal: number;
};

const OverallReview = ({ rate, customerTotal, reviewTotal }: Props) => {
  return (
    <Grid templateColumns={'repeat(2, 1fr)'}>
      <GridItem className="flex flex-col justify-center items-center">
        <HStack>
          <HiStar size={28} className="text-yellow-400" />
          <Text textStyle={'4xl'} className="py-1 font-bold">
            {Number(rate).toFixed(1)}
            <Text
              as={'span'}
              textStyle={'sm'}
              className="py-1 text-neutral-500"
            >
              / 5
            </Text>
          </Text>
        </HStack>
        <Text textStyle={'sm'}>{formatToK(customerTotal)} khách hài lòng</Text>
        <Text textStyle={'sm'} className="py-1 text-neutral-500">
          {formatToK(reviewTotal)} đánh giá
        </Text>
      </GridItem>
      <GridItem>
        <RatingProgress title="5" value={60} />
        <RatingProgress title="4" value={20} />
        <RatingProgress title="3" value={15} />
        <RatingProgress title="2" value={5} />
        <RatingProgress title="1" value={0} />
      </GridItem>
    </Grid>
  );
};

export default OverallReview;
