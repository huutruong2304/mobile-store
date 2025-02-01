import {
  Box,
  Badge,
  AspectRatio,
  Heading,
  HStack,
  Text,
  Group,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { CartIcon } from './icon/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, getDiscountPercent } from '@/utils/helper';

type Props = {
  name: string;
  thumb: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  tags?: string[];
  href: string;
};

const ProductCard: React.FC<Props> = ({
  name,
  thumb,
  price,
  oldPrice,
  rating,
  tags,
  href,
}) => {
  return (
    <Link
      href={href}
      className="border shadow rounded-xl p-2 flex flex-col relative max-w-60 justify-between"
    >
      {!!oldPrice && (
        <Badge
          variant={'subtle'}
          className="bg-red-500 rounded-xl w-max text-white absolute z-10 px-2"
        >
          -{getDiscountPercent(price, oldPrice)}%
        </Badge>
      )}

      <Box className="py-2">
        <Box>
          <Image
            src={thumb}
            alt="iphone-16"
            className="object-contain"
            width={500}
            height={500}
          />
        </Box>
      </Box>

      <Heading className="py-2 px-1" size="xs" fontWeight="bold">
        {name}
      </Heading>
      <HStack className="py-2">
        {tags?.map(tag => (
          <Badge key={tag} variant={'subtle'} className="rounded-md w-max">
            {tag}
          </Badge>
        ))}
      </HStack>
      <HStack className="justify-between shadow rounded-lg p-2 bg-red-500 text-white">
        <Box>
          <Heading size={'sm'}>{price && formatCurrency(price)}</Heading>
          <Text textStyle={'xs'} className="line-through">
            {oldPrice && formatCurrency(oldPrice)}
          </Text>
        </Box>
        <Box>
          <CartIcon color="#FFFFFF" />
        </Box>
      </HStack>
    </Link>
  );
};

export default ProductCard;
