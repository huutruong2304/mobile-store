'use client';
import CartItem from '@/components/cart-item';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  MOCK_HEADSET,
  MOCK_IPHONE,
  MOCK_LAPTOP,
  MOCK_SMARTWATCH,
} from '@/db/mock-api';
import { formatCurrency } from '@/utils/helper';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Separator,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

export default function Page() {
  const [cartList] = useState([
    MOCK_IPHONE[0],
    MOCK_LAPTOP[0],
    MOCK_HEADSET[0],
    MOCK_SMARTWATCH[1],
  ]);
  const [selected, setSelected] = useState<string[]>([]);

  //   const onClickAll = (v) => {
  //     setSelected()
  //   }

  return (
    <Box className="p-2">
      <Box className="py-2 relative">
        <IconButton
          variant={'plain'}
          className="absolute top-0 left-0 translate-y-0.5"
        >
          <Link href={'/'}>
            <IoMdArrowRoundBack />
          </Link>
        </IconButton>
        <Heading size={'xl'} className="font-bold text-center">
          Cart
        </Heading>
      </Box>
      {/* product list */}
      <Box className="py-2 px-2 mt-5">
        <HStack className="items-center justify-between px-2 py-1 mb-3 shadow border-gray-500 rounded-lg">
          <IconButton variant={'plain'} textStyle={'sm'} className="font-bold">
            <Checkbox className="cursor-pointer" />
            Select all
          </IconButton>
          <IconButton
            variant={'plain'}
            textStyle={'sm'}
            className="font-semibold"
          >
            <MdDeleteOutline /> Delete
          </IconButton>
        </HStack>
        <Stack className="space-y-2">
          {cartList.map((item, index) => (
            <CartItem
              key={item.id}
              title={item.name}
              imageSrc={item.thumb}
              variants={!index ? ['512GB', 'Purple'] : []}
              price={item.price}
              oldPrice={item.oldPrice ? item.oldPrice : undefined}
            />
          ))}
        </Stack>
      </Box>
      <Box className="py-2 px-2">
        <Box className="py-3 shadow border-gray-500 rounded-lg">
          <Box className="px-2">
            <Heading size={'2xl'} className="uppercase font-bold">
              Payment Information
            </Heading>
            <Separator className="my-3" />
            <HStack className="justify-between">
              <Heading size={'lg'} className="font-bold">
                Total amount:
              </Heading>
              <Heading size={'lg'} className="font-bold">
                {formatCurrency(10000000)}
              </Heading>
            </HStack>
            <HStack className="justify-between">
              <Heading size={'lg'} className="font-bold">
                Voucher:
              </Heading>
              <Heading size={'lg'} className="font-bold text-red-500">
                -{formatCurrency(50000)}
              </Heading>
            </HStack>

            <Separator className="my-3" />
            <HStack className="justify-between">
              <Heading size={'lg'} className="font-bold">
                Total Payment:
              </Heading>
              <Heading size={'lg'} className="font-bold">
                {formatCurrency(10000000 - 50000)}
              </Heading>
            </HStack>
          </Box>
          <Box className="mt-8 px-3">
            <Button
              textStyle={'md'}
              className="font-bold uppercase w-full rounded-xl"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
