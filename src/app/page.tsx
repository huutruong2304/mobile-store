import CategoryItem from '@/components/category-item';
import {
  AirpodIcon,
  IphoneIcon,
  LaptopIcon,
  PhoneCableIcon,
  PrinterIcon,
  SimIcon,
  SmartWatchIcon,
  UsedDeviceIcon,
} from '@/components/icon/Icons';
import NewsCard from '@/components/news-card';
import ProductCard from '@/components/product-card';
import {
  MOCK_HEADSET,
  MOCK_IPHONE,
  MOCK_LAPTOP,
  MOCK_SMARTWATCH,
  MOCK_TECH_NEWS,
} from '@/db/mock-api';
import {
  AspectRatio,
  Box,
  Grid,
  Heading,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type TitleProps = {
  value: string;
  extraClassName?: string;
};

const Title = ({ value, extraClassName }: TitleProps) => {
  return (
    <Heading
      size={'xl'}
      className={
        'py-2 text-black font-bold  uppercase ' +
        (extraClassName ? extraClassName : '')
      }
    >
      {value}
    </Heading>
  );
};

type SectionHeaderProps = {
  title: string;
  href: string;
};

const SectionHeader = ({ title, href }: SectionHeaderProps) => {
  return (
    <HStack justifyContent={'space-between'} alignItems={'baseline'}>
      <Title value={title} />
      <Link href={href}>
        <ChakraLink variant={'underline'}>View all</ChakraLink>
      </Link>
    </HStack>
  );
};

export default function Home() {
  const categories: {
    title: string;
    href: string;
    icon: ReactNode;
  }[] = [
    { title: 'Smartphone', href: '/smartphone', icon: <IphoneIcon /> },
    { title: 'Laptop', href: '/laptop', icon: <LaptopIcon /> },
    { title: 'Headphone', href: '/headphone', icon: <AirpodIcon /> },
    { title: 'Smartwatch', href: '/smartwatch', icon: <SmartWatchIcon /> },
    { title: 'Accessories', href: '/accessories', icon: <PhoneCableIcon /> },
    { title: 'Printer', href: '/printer', icon: <PrinterIcon /> },
    { title: 'Sim', href: '/sim', icon: <SimIcon /> },
    { title: 'Used', href: '/used', icon: <UsedDeviceIcon /> },
  ];

  return (
    <Box className="w-full">
      <Box className="py-2">
        <AspectRatio ratio={3 / 1}>
          <Image
            src={'/banners/banner-1.jpg'}
            alt="banner"
            layout="fill"
            quality={100}
          />
        </AspectRatio>
      </Box>
      <Box className="px-2">
        <Title value="Categories" extraClassName="text-center" />
        <Grid templateColumns="repeat(4, 1fr)" gap="2" className="py-2">
          {categories.map(cate => (
            <CategoryItem
              key={cate.href}
              title={cate.title}
              icon={cate.icon}
              href={cate.href}
            />
          ))}
        </Grid>
      </Box>
      <Box className="py-4 px-2">
        <SectionHeader title="Smartphone" href="#" />
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} className="py-2">
          {MOCK_IPHONE.slice(0, 4).map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.price}
              thumb={item.thumb}
              tags={item.tags}
              href={`/smartphone/${item.id}`}
            />
          ))}
        </Grid>
      </Box>

      <Box className="py-4 px-2">
        <SectionHeader title="Laptop" href="#" />
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} className="py-2">
          {MOCK_LAPTOP.slice(0, 4).map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.price}
              thumb={item.thumb}
              tags={item.tags}
              href={`/smartphone/${item.id}`}
            />
          ))}
        </Grid>
      </Box>

      <Box className="py-4 px-2">
        <SectionHeader title="Headphone" href="#" />
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} className="py-2">
          {MOCK_HEADSET.slice(0, 4).map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.price}
              thumb={item.thumb}
              tags={item.tags}
              href={`/smartphone/${item.id}`}
            />
          ))}
        </Grid>
      </Box>
      <Box className="py-4 px-2">
        <SectionHeader title="Smartwatch" href="#" />
        <Grid templateColumns={'repeat(2, 1fr)'} gap={4} className="py-2">
          {MOCK_SMARTWATCH.slice(0, 4).map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              oldPrice={item.price}
              thumb={item.thumb}
              tags={item.tags}
              href={`/smartphone/${item.id}`}
            />
          ))}
        </Grid>
      </Box>

      <Box className="py-4 px-2">
        <SectionHeader title="Tech News" href="#" />
        <Box className="py-2 flex overflow-auto gap-4 hide-scrollbar">
          {MOCK_TECH_NEWS.slice(0, 4).map(item => (
            <NewsCard
              key={item.id}
              title={item.title}
              thumb={item.thumb}
              href={`/${item.id}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
