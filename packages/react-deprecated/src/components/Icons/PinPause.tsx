import * as React from 'react';
import { SVGProps } from 'react';
const SvgPinPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 16s5.539-7.721 5.539-10.667S11.059 0 8 0 2.462 2.388 2.462 5.333 8 16 8 16M7.385 3H5.154v5.615h2.23zm3.461 0h-2.23v5.615h2.23z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPinPause;
