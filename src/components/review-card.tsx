'use client';
import { timeDifferenceToString } from '@/utils/helper';
import { Box, HStack, Heading, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCircleCheck, FaHeart } from 'react-icons/fa6';
import { Rating } from './ui/rating';

type Props = {
  id: string;
  user: string;
  rate: number;
  content: string;
  likeNumber: number;
  boughtAt: string;
};

const ReviewCard = ({
  id,
  user,
  content,
  likeNumber,
  boughtAt,
  rate,
}: Props) => {
  const onClickUseful = () => {
    alert('on click button:' + id);
  };

  return (
    <Box className="w-full p-2">
      <HStack className="items-center">
        <Heading size={'md'} className="font-bold w-max max-w-48">
          {user}
        </Heading>
        {!!boughtAt && (
          <HStack className="ml-2">
            <FaRegCircleCheck size={14} className="text-green-600" />
            <Text textStyle={'xs'} className="text-green-600">
              Đã mua tại MOSE
            </Text>
          </HStack>
        )}
      </HStack>
      <HStack className="py-1 items-center">
        <Rating size={'sm'} allowHalf value={rate} colorPalette={'orange'} />
        <HStack className="w-full ml-2">
          <FaHeart size={14} className="text-red-600" />
          <Text textStyle={'xs'} className="text-black">
            Sẽ giới thiệu cho bạn bè, người thân
          </Text>
        </HStack>
      </HStack>
      <Box className="mt-2">
        <Text textStyle={'sm'}>{content}</Text>
      </Box>
      <HStack className="items-center">
        <Button
          variant="ghost"
          textStyle={'sm'}
          className="p-0"
          onClick={onClickUseful}
        >
          <AiOutlineLike size={14} /> Hữu ích {likeNumber && `(${likeNumber})`}
        </Button>
        <Text textStyle={'sm'} className="ml-2 text-neutral-500 ">
          {/* {timeDifferenceToString(boughtAt)} */}
        </Text>
      </HStack>
    </Box>
  );
};

export default ReviewCard;
