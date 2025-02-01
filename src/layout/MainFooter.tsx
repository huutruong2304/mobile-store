import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  ShopeeIcon,
  TikTokIcon,
} from '@/components/icon/Icons';
import { Field } from '@/components/ui/field';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

interface LinkItem {
  label: string;
  path: string;
}

const MainFooter = () => {
  const informationList: LinkItem[] = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Careers', path: '/careers' },
    { label: 'Partnerships', path: '/partnerships' },
  ];

  const policyList: LinkItem[] = [
    { label: 'User Guide', path: '/user-guide' },
    { label: 'Shipping & Payment', path: '/shipping-payment' },
    { label: 'Returns & Warranty', path: '/returns-warranty' },
  ];

  return (
    <footer className="px-2 md:px-10 py-2 bg-black">
      <VStack className="py-5" gap={8}>
        <Box className="px-2 w-full">
          <HStack className="py-2" gap={5} justifyContent="center">
            <IconButton rounded="full" variant={'subtle'}>
              <FacebookIcon />
            </IconButton>

            <IconButton rounded="full" variant={'subtle'}>
              <InstagramIcon />
            </IconButton>

            <IconButton rounded="full" variant={'subtle'}>
              <ShopeeIcon />
            </IconButton>

            <IconButton rounded="full" variant={'subtle'}>
              <TikTokIcon />
            </IconButton>
          </HStack>
        </Box>
        <Box className="px-2  w-full">
          <Stack direction={{ base: 'column', md: 'row' }} className="py-2">
            <Heading size={'lg'} className="text-white font-bold w-full">
              Sign up to receive the hottest promotions
            </Heading>
            <Field>
              <Input
                className="bg-white"
                placeholder="Enter your email here..."
              />
            </Field>
          </Stack>
        </Box>
        {/* <Box className="px-2 w-full">
          <Stack direction={{ base: 'column', md: 'row' }} className="py-2">
            <Heading size={'lg'} className="text-white font-bold w-full">
              We always appreciate and look forward to receiving all feedback
              from customers to improve our services and products even further.
            </Heading>
            <Field>
              <Input className="bg-white" />
            </Field>
          </Stack>
        </Box> */}
        <Box className="px-2 w-full">
          <HStack>
            <Box className="w-1/2">
              <Heading
                size={'lg'}
                className="text-white font-bold w-full uppercase"
              >
                Information
              </Heading>
              <VStack className="w-full mt-4" alignItems={'start'}>
                {informationList.map(item => (
                  <ChakraLink key={item.path} asChild className="text-white">
                    <NextLink href={item.path}>{item.label}</NextLink>
                  </ChakraLink>
                ))}
              </VStack>
            </Box>
            <Box className="w-1/2">
              <Heading
                size={'lg'}
                className="text-white font-bold w-full uppercase"
              >
                Policy
              </Heading>
              <VStack className="w-full mt-4" alignItems={'start'}>
                {policyList.map(item => (
                  <ChakraLink key={item.path} asChild className="text-white">
                    <NextLink href={item.path}>{item.label}</NextLink>
                  </ChakraLink>
                ))}
              </VStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
      <Box className="p-2 pb-10 w-full">
        <Heading size={'md'} className="text-white">
          © {new Date().getFullYear()} Truong Nguyen. All rights reserved.
        </Heading>
      </Box>
    </footer>
  );
};

export default MainFooter;
