import { HStack, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { HiStar } from 'react-icons/hi';
import { ProgressBar, ProgressRoot } from './ui/progress';

type Props = {
  title: string;
  value: number;
};

const RatingProgress = ({ title, value }: Props) => {
  return (
    <HStack className="mt-1">
      <Box className="w-1/6">
        <Box className="flex  items-center">
          <Text textStyle={'sm'}>{title}</Text>
          <HiStar size={20} className="text-yellow-400" />
        </Box>
      </Box>
      <Box className="flex-1">
        <ProgressRoot size={'sm'} variant="outline" value={value}>
          <ProgressBar colorPalette={'red'} className="rounded-xl" />
        </ProgressRoot>
      </Box>
      <Box className="w-10">
        <Text textStyle={'xs'}>{value}%</Text>
      </Box>
    </HStack>
  );
};

export default RatingProgress;
