// Credit 아이콘

import React from 'react';
import { palette } from '../styles/Palette';

const IconCredit = ({ width, height, color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 78 112"
      fill={color || palette.white}
      {...props}
    >
      <path
        d="M24.7188 56.5L38.8438 35.3125L52.9688 56.5L38.8438 77.6875L24.7188 56.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.8437 7.62939e-06L77.6875 55.6111L38.8437 111.026L0 55.6111L38.8437 7.62939e-06ZM8.50221 55.6038L38.8437 98.8892L69.1853 55.6038L38.8437 12.165L8.50221 55.6038Z"
        fill={color || '#F96D69'}
      />
    </svg>
  );
};

export default IconCredit;
