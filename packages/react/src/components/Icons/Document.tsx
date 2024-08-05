import * as React from 'react';
import { SVGProps } from 'react';
const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M13 7H3V6h10v1ZM13 10H3V9h10v1ZM1 4h15V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h1ZM3 13h5v-1H3v1Z"
    />
    <path fill="currentColor" d="M1 14V4H0v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4h-1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z" />
  </svg>
);
export default SvgDocument;
