import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  href: string;
};

const CategoryItem = ({ icon, title, href }: Props) => {
  return (
    <Link
      href={href}
      className="border py-3 px-1 shadow rounded-lg flex flex-col justify-center items-center gap-2"
    >
      {icon}
      <Text textStyle={'xs'} className="font-bold">
        {title}
      </Text>
    </Link>
  );
};

export default CategoryItem;
