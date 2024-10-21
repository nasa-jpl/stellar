import * as React from 'react';
import { SVGProps } from 'react';
const SvgWaterfall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.3 1.3c-.6 0-1 .4-1 1v3c0 .5.4 1 1 1h8c.5 0 1-.5 1-1v-3c0-.6-.5-1-1-1zm5.1 1.8h-5v1.3h5zM6 7.5c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1zm5.1 1.9h-5v1.2h5zM9.8 13.8c-.6 0-1 .4-1 1v3c0 .5.4 1 1 1h8c.5 0 1-.5 1-1v-3c0-.6-.5-1-1-1zm5.1 1.8h-5v1.3h5z"
    />
  </svg>
);
export default SvgWaterfall;
