import * as React from 'react';
import { SVGProps } from 'react';
const SvgTableFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={15} height={15} x={0.5} y={0.5} stroke="currentColor" rx={0.5} />
    <path fill="currentColor" d="M11.071 5.172 13.899 8l-2.828 2.828V5.172Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.828 8H13.9m0 0-2.828-2.828v5.656L13.899 8Z"
    />
    <path fill="currentColor" d="M4.929 10.828 2.101 8l2.828-2.828v5.656Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.172 8H2.1m0 0 2.828 2.828V5.172L2.101 8Z"
    />
    <path fill="currentColor" d="M4 7h8v2H4z" />
  </svg>
);
export default SvgTableFill;
