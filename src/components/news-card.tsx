import { AspectRatio, Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  thumb: string;
  href: string;
};

const NewsCard: React.FC<Props> = ({ title, thumb, href }) => {
  return (
    <Link
      href={href}
      className="shadow border rounded-xl w-52 flex-none overflow-hidden"
    >
      <AspectRatio className="py-2" ratio={2 / 1}>
        <Image
          src={thumb}
          alt="iphone-16"
          className="object-contain"
          width={1000}
          height={500}
        />
      </AspectRatio>
      <Box className="py-2">
        <Heading className="px-1 line-clamp-2" size="sm">
          {title}
        </Heading>
      </Box>
    </Link>
  );
};

export default NewsCard;
