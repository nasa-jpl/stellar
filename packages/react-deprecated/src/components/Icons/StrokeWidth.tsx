import * as React from 'react';
import { SVGProps } from 'react';
const SvgStrokeWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M2 2h12v.742H2zM2 5.708h12v1.483H2zM2 10.158h12v2.967H2z" />
  </svg>
);
export default SvgStrokeWidth;
