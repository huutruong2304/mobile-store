import { Badge, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const FilterItem = ({ label, onClick, isSelected }: Props) => {
  return (
    <Badge
      variant={'plain'}
      className={`h-9 border rounded-xl w-max py-2 px-4 cursor-pointer ${
        isSelected ? 'border-red-500' : ''
      }`}
      onClick={onClick}
    >
      <Text textStyle={'xs'}>{label}</Text>
    </Badge>
  );
};

export default FilterItem;
