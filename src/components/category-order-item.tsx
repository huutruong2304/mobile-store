'use client';
import React from 'react';
import { Button } from './ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  label: string;
  value?: string;
};

const CategoryOrderItem = ({ label, value }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const onClick = () => {
    const params = new URLSearchParams();

    if (value) params.set('order', value);

    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      variant={'plain'}
      className={
        searchParams.get('order')?.toString() === value ? 'text-red-600' : ''
      }
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CategoryOrderItem;
