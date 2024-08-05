import * as React from 'react';
import { SVGProps } from 'react';
const SvgPath = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path stroke="currentColor" strokeWidth={1.25} d="m12 4-8 8" opacity={0.6} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.5 12.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10.5 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPath;
