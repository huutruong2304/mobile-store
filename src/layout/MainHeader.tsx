import React from 'react';
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerCloseTrigger,
} from '@/components/ui/drawer';
import {
  IconButton,
  HStack,
  Group,
  Tabs,
  VStack,
  Badge,
} from '@chakra-ui/react';
import {
  AirpodIcon,
  CartIcon,
  IphoneIcon,
  LaptopIcon,
  MenuIcon,
  SearchIcon,
  SmartWatchIcon,
  UserIcon,
} from '@/components/icon/Icons';
import Link from 'next/link';
import {
  HEADSET_BRANDS,
  LAPTOP_BRANDS,
  SMARTPHONE_BRANDS,
  SMARTWATCH_BRANDS,
} from '@/db/some-brands';

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 md:px-10 px-2 py-3 bg-white shadow">
      <HStack justifyContent="space-between">
        <p className="text-2xl font-extrabold uppercase">
          <Link href={'/'}>MOSE</Link>
        </p>

        <Group gap={3}>
          <IconButton rounded="full" variant={'subtle'}>
            <SearchIcon />
          </IconButton>

          <IconButton rounded="full" variant={'subtle'}>
            <CartIcon />
          </IconButton>

          <IconButton rounded="full" variant={'subtle'}>
            <UserIcon />
          </IconButton>

          <DrawerRoot size={'full'}>
            <DrawerBackdrop />
            <DrawerTrigger>
              <IconButton rounded="full" variant={'subtle'}>
                <MenuIcon />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Categories</DrawerTitle>
              </DrawerHeader>
              <DrawerBody className="p-0">
                {/* tab here */}
                <Tabs.Root
                  defaultValue="smartphone  "
                  orientation="vertical"
                  className="h-full w-full p-0"
                  variant={'enclosed'}
                >
                  <Tabs.List className="w-24">
                    <Tabs.Trigger className="flex h-20" value="smartphone">
                      <VStack>
                        <IphoneIcon />
                        Smartphone
                      </VStack>
                    </Tabs.Trigger>
                    <Tabs.Trigger className="flex  h-20" value="laptop">
                      <VStack>
                        <LaptopIcon />
                        Laptop
                      </VStack>
                    </Tabs.Trigger>
                    <Tabs.Trigger className="flex  h-20" value="headset">
                      <VStack>
                        <AirpodIcon />
                        Sound
                      </VStack>
                    </Tabs.Trigger>
                    <Tabs.Trigger className="flex  h-20" value="smartwatch">
                      <VStack>
                        <SmartWatchIcon />
                        Smartwatch
                      </VStack>
                    </Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="smartphone">
                    {SMARTPHONE_BRANDS.map(brand => (
                      <Badge
                        key={brand.id}
                        variant={'subtle'}
                        className="shadow border rounded-xl w-max py-2 px-4 mr-2 my-1"
                      >
                        {brand.name}
                      </Badge>
                    ))}
                  </Tabs.Content>
                  <Tabs.Content value="laptop">
                    {LAPTOP_BRANDS.map(brand => (
                      <Badge
                        key={brand.id}
                        variant={'subtle'}
                        className="shadow border rounded-xl w-max py-2 px-4 mr-2 my-1"
                      >
                        {brand.name}
                      </Badge>
                    ))}
                  </Tabs.Content>
                  <Tabs.Content value="headset">
                    {HEADSET_BRANDS.map(brand => (
                      <Badge
                        key={brand.id}
                        variant={'subtle'}
                        className="shadow border rounded-xl w-max py-2 px-4 mr-2 my-1"
                      >
                        {brand.name}
                      </Badge>
                    ))}
                  </Tabs.Content>
                  <Tabs.Content value="smartwatch">
                    {SMARTWATCH_BRANDS.map(brand => (
                      <Badge
                        key={brand.id}
                        variant={'subtle'}
                        className="shadow border rounded-xl w-max py-2 px-4 mr-2 my-1"
                      >
                        {brand.name}
                      </Badge>
                    ))}
                  </Tabs.Content>
                </Tabs.Root>
              </DrawerBody>

              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        </Group>
      </HStack>
    </header>
  );
};

export default MainHeader;
