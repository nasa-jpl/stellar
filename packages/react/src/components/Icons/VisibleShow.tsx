import * as React from 'react';
import { SVGProps } from 'react';
const SvgVisibleShow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 3c2.935-.041 5.86 2.037 7.624 4.003.501.566.502 1.424.002 1.991C13.882 10.94 10.998 13 8.098 13h-.205c-2.89 0-5.775-2.06-7.517-4.005-.501-.567-.501-1.425 0-1.992C2.14 5.038 5.066 2.958 8 3.001ZM8 4.893C6.304 4.892 4.93 6.284 4.93 8c0 1.717 1.373 3.108 3.068 3.108 1.694 0 3.068-1.391 3.068-3.108 0-1.716-1.374-3.108-3.068-3.108Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7.998 9.352c.737 0 1.334-.605 1.334-1.352 0-.746-.597-1.351-1.334-1.351-.736 0-1.333.605-1.333 1.351 0 .747.597 1.352 1.333 1.352Z"
    />
  </svg>
);
export default SvgVisibleShow;
