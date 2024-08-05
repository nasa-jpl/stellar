import * as React from 'react';
import { SVGProps } from 'react';
const SvgVisibleHide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M15.624 7.003c.501.566.502 1.424.002 1.991C13.882 10.94 10.998 13 8.098 13h-.205a7.149 7.149 0 0 1-2.213-.373l1.82-1.56c.162.027.329.041.499.041 1.694 0 3.068-1.391 3.068-3.108l2.949-2.528a14.41 14.41 0 0 1 1.608 1.531ZM.376 8.995c-.501-.567-.501-1.425 0-1.992C2.14 5.038 5.066 2.958 8 3.001c.781-.011 1.561.127 2.319.374L8.5 4.934a3.051 3.051 0 0 0-.501-.042C6.304 4.892 4.93 6.284 4.93 8l-2.952 2.524a14.43 14.43 0 0 1-1.603-1.53Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.384 2.68a.5.5 0 0 1-.064.704l-12 10a.5.5 0 0 1-.64-.768l12-10a.5.5 0 0 1 .704.064Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVisibleHide;
