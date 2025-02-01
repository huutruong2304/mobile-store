import * as React from 'react';

export type IconProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  children: React.ReactNode;
};

const BaseIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  children,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
  >
    {children}
  </svg>
);

export default BaseIcon;
