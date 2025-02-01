'use client';

import {
  Box,
  AspectRatio,
  Text,
  HStack,
  Grid,
  GridItem,
  List,
  Heading,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { StarIcon } from './icon/Icons';

type Props = {
  images: string[];
  features: string[];
};

const ProductImageViewer = ({ images, features }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <Box>
      <Box className="h-60 w-full border shadow rounded-2xl relative overflow-hidden">
        {selectedIndex === -1 ? (
          <Grid
            templateColumns="repeat(5, 1fr)"
            className="h-full px-2 bg-custom-gradient"
          >
            <GridItem colSpan={1}>
              <Stack className="w-full h-full justify-center items-center">
                <Box className="bg-white h-24 w-24 rounded-xl relative">
                  <Image
                    src={images[0]}
                    alt="iphone-16"
                    className="object-contain"
                    fill
                  />
                </Box>
              </Stack>
            </GridItem>
            <GridItem colSpan={4} className="py-4">
              <Heading
                size={'lg'}
                className="mb-2 text-center uppercase font-bold text-white"
              >
                Tính năng nổi bật
              </Heading>
              <List.Root className="h-3/4 px-6 text-white overflow-auto hide-scrollbar">
                {features.map((desc, index) => (
                  <List.Item
                    key={index}
                    textStyle={'xs'}
                    _marker={{ color: 'inherit' }}
                  >
                    {desc}
                  </List.Item>
                ))}
              </List.Root>
            </GridItem>
          </Grid>
        ) : (
          <Image
            src={images[selectedIndex] ?? images[0]}
            alt="iphone-16"
            className="object-contain"
            fill
          />
        )}
      </Box>
      <Box className="w-full py-2 flex overflow-auto gap-1">
        <Box
          className={
            'my-2 p-2 w-20 h-20 flex-none shadow border rounded-xl flex flex-col justify-center items-center cursor-pointer relative ' +
            (selectedIndex === -1 ? 'border-red-500' : '')
          }
          onClick={() => setSelectedIndex(-1)}
        >
          <StarIcon />
          <Text className="text-center" textStyle={'xs'}>
            Tính năng nổi bật
          </Text>
        </Box>
        {images.map((link, index: number) => (
          <Box
            key={link}
            className={
              'my-2 p-2 w-20 h-20 flex-none shadow border rounded-xl flex flex-col justify-center items-center cursor-pointer relative ' +
              (selectedIndex === index ? 'border-red-500' : '')
            }
            onClick={() => setSelectedIndex(index)}
          >
            <Image src={link} alt="iphone-16" className="object-contain" fill />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductImageViewer;
