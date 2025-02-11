import { Checkbox } from '@/components/ui/checkbox';
import { MOCK_IPHONE } from '@/db/mock-api';
import { formatCurrency } from '@/utils/helper';
import {
  Badge,
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
type Props = {
  title: string;
  imageSrc: string;
  variants?: string[];
  price: number;
  oldPrice?: number;
};

const CartItem = ({ title, imageSrc, variants, price, oldPrice }: Props) => {
  const [qty, setQty] = useState<number>(1);

  const changeQty = (value: number) => {
    setQty(prev => prev + value);
  };

  return (
    <HStack className="p-2 shadow rounded-xl border-gray-500">
      <HStack className="w-1/3">
        <Box>
          <Checkbox className="cursor-pointer" />
        </Box>
        <Box className="p-2 shadow-sm rounded w-max h-max">
          <Image
            src={imageSrc}
            alt={imageSrc}
            width={90}
            height={90}
            className="object-contain"
          />
        </Box>
      </HStack>

      <Box className="w-2/3">
        <Heading textStyle={'md'} className="font-bold">
          {title}
        </Heading>
        <Box className="py-1">
          <HStack className="gap-1">
            {variants?.map(variant => (
              <Badge
                key={variant}
                variant={'subtle'}
                className="px-2 py-1 rounded-md w-max "
              >
                {variant}
              </Badge>
            ))}
          </HStack>
        </Box>
        <HStack className="justify-between">
          <HStack>
            <Text textStyle={'sm'} className="font-bold">
              {formatCurrency(price)}
            </Text>
            {!!oldPrice && (
              <Text textStyle={'xs'} className="line-through text-gray-500">
                {formatCurrency(oldPrice)}
              </Text>
            )}
          </HStack>
          <HStack>
            <IconButton
              variant={'subtle'}
              size={'xs'}
              textStyle={'lg'}
              onClick={() => changeQty(-1)}
            >
              -
            </IconButton>
            <Text textStyle={'xs'} className="font-bold">
              {qty}
            </Text>
            <IconButton
              variant={'subtle'}
              size={'xs'}
              textStyle={'lg'}
              onClick={() => changeQty(1)}
            >
              +
            </IconButton>
          </HStack>
        </HStack>
      </Box>
    </HStack>
  );
};

export default CartItem;
