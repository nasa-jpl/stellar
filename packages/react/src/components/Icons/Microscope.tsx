import * as React from 'react';
import { SVGProps } from 'react';
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={12} height={3} x={2} y={13} fill="currentColor" rx={1} />
    <rect width={4} height={9} x={5.329} fill="currentColor" rx={0.5} transform="rotate(15 5.33 0)" />
    <path fill="currentColor" d="M10.141 3.56A6.5 6.5 0 0 1 7.586 16l-.04-3a3.5 3.5 0 0 0 1.376-6.698l1.22-2.741Z" />
  </svg>
);
export default SvgMicroscope;
