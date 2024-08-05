import * as React from 'react';
import { SVGProps } from 'react';
const SvgPinPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 16s5.539-7.721 5.539-10.667C13.539 2.388 11.059 0 8 0 4.941 0 2.462 2.388 2.462 5.333 2.462 8.28 8 16 8 16ZM7.385 3H5.154v5.615h2.23V3Zm3.461 0h-2.23v5.615h2.23V3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPinPause;
