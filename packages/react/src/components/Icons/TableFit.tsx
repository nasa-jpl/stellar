import * as React from 'react';
import { SVGProps } from 'react';
const SvgTableFit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.172 10.828 9.343 8l2.829-2.828v5.656Z"
    />
    <rect width={7} height={13} x={0.5} y={1.5} stroke="currentColor" rx={0.5} />
    <rect width={5} height={2} x={11} y={7} fill="currentColor" rx={1} />
    <path stroke="currentColor" strokeWidth={2} d="M2 5h4M2 9h3" />
  </svg>
);
export default SvgTableFit;
