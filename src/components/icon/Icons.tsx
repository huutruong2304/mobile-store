import React from 'react';
import BaseIcon, { IconProps } from './BaseIcon';

type CustomIconProps = Omit<IconProps, 'children'>;

export const MenuIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" />
    </BaseIcon>
  );
};

export const UserIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path>
    </BaseIcon>
  );
};

export const CartIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"></path>
    </BaseIcon>
  );
};

export const SearchIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path>
    </BaseIcon>
  );
};

export const FacebookIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path>
    </BaseIcon>
  );
};

export const InstagramIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
    </BaseIcon>
  );
};

export const ShopeeIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <g
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2-1.857L20.01 7h-16zm4.5 0c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4"></path>
        <path d="M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2s-1-1.5-2.5-2s-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1"></path>
      </g>
    </BaseIcon>
  );
};

export const TikTokIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
    </BaseIcon>
  );
};

export const IphoneIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        fill="none"
        stroke={props.color || '#000000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2m-4 0h4m-4 0v1m4-1v1m0 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v0m4 0h-4m2 10.008"
      ></path>
    </BaseIcon>
  );
};

export const LaptopIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"></path>
    </BaseIcon>
  );
};

export const AirpodIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <g fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path d="M6.5 4a4.5 4.5 0 0 0-.5 8.973V17.5a2.5 2.5 0 1 0 5 0v-9A4.5 4.5 0 0 0 6.5 4M4 8.5a2.5 2.5 0 0 1 5 0v9a.5.5 0 1 1-1 0v-5.535a1 1 0 0 0-1.142-.99A2.5 2.5 0 0 1 4 8.5M17.5 4A4.5 4.5 0 0 0 13 8.5v9a2.5 2.5 0 1 0 5 0v-4.527A4.5 4.5 0 0 0 17.5 4M15 8.5a2.5 2.5 0 1 1 2.142 2.475a1 1 0 0 0-1.142.99V17.5a.5.5 0 1 1-1 0z"></path>
      </g>
    </BaseIcon>
  );
};

export const SmartWatchIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        fillRule="evenodd"
        d="M16.498 5.03q0 .072-.005.143A3 3 0 0 1 18.5 8.005v1h1v4h-1v3a3 3 0 0 1-2.005 2.83q.005.085.005.17a3 3 0 0 1-3 3h-4a3 3 0 0 1-2.995-3.17a3 3 0 0 1-2.005-2.83v-8a3 3 0 0 1 2.003-2.83a3 3 0 0 1 3.01-3.18l4 .02a3 3 0 0 1 2.984 3.015m-8-.025h6a1 1 0 0 0-.995-.99l-4-.02a1 1 0 0 0-1.005.995zm7.207 2.021l-4.22-.021H7.5a1 1 0 0 0-1 1v8a1 1 0 0 0 .999 1H15.5a1 1 0 0 0 .999-1v-8a1 1 0 0 0-.795-.979M8.5 19.005a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"
        clipRule="evenodd"
      ></path>
    </BaseIcon>
  );
};

export const PhoneCableIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M7.05 3.5a3.52 3.52 0 0 0 0 4.97l8.49 8.48c.58.59.58 1.55 0 2.12c-.59.59-1.54.59-2.13 0l-4.24-4.24l1.06-1.06l-3.53-3.54l-.36.36l-1.41-1.42a1.02 1.02 0 0 0-1.43 0l-1.4 1.42c-.39.41-.39 1.02 0 1.41l1.4 1.41l-.34.36L6.7 17.3l1.06-1.06L12 20.5a3.53 3.53 0 0 0 4.95 0c1.37-1.38 1.37-3.6 0-4.96L8.46 7.05c-.58-.59-.58-1.55 0-2.12c.59-.59 1.54-.59 2.13 0l4.24 4.24l-1.06 1.06l3.53 3.54l.36-.36l1.41 1.42c.39.39 1.03.39 1.43 0l1.4-1.42c.39-.41.39-1.02 0-1.41l-1.4-1.41l.34-.36L17.3 6.7l-1.06 1.06L12 3.5a3.53 3.53 0 0 0-4.95 0m-4.24 7.79l1.41-1.41l1.42 1.41l-1.42 1.42m14.14 0l1.42-1.42l1.41 1.42l-1.41 1.41Z"></path>
    </BaseIcon>
  );
};

export const PrinterIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3M8 4h8v3H8zm8 16H8v-4h8zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1z"></path>
      <path d="M14 10h4v2h-4z"></path>
    </BaseIcon>
  );
};

export const UsedDeviceIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        fill="none"
        stroke={props.color || '#000000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.5 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7m-7-8h2m-1 13v.01M19 16v6m3-3l-3 3l-3-3"
      ></path>
    </BaseIcon>
  );
};

export const SimIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="M18 4v16H6V8.8L10.8 4zm0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9.5 19h-2v-2h2zm7 0h-2v-2h2zm-7-4h-2v-4h2zm3.5 4h-2v-4h2zm0-6h-2v-2h2zm3.5 2h-2v-4h2z"></path>
    </BaseIcon>
  );
};

export const StarIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <path d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025" />
    </BaseIcon>
  );
};

export const BoxIcon = (props: CustomIconProps) => {
  return (
    <BaseIcon {...props}>
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M16.434 3a2 2 0 0 1 1.626.836l.089.135l2.424 4.04a3 3 0 0 1 .418 1.31l.009.233V19a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V9.554a3 3 0 0 1 .316-1.34l.112-.204L5.85 3.971a2 2 0 0 1 1.554-.965L7.566 3zM19 10H5v9h14zm-8-5H7.566l-1.8 3H11zm5.434 0H13v3h5.234z"
        />
      </g>
    </BaseIcon>
  );
};
