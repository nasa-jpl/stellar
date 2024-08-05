import * as React from 'react';
import { SVGProps } from 'react';
const SvgVerticalCollapseWithCenterLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M3.072 5.172 5.9 8l-2.828 2.828V5.172Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.792 8H5.9m0 0L3.072 5.172v5.656L5.9 8Z"
    />
    <path fill="currentColor" d="M12.929 5.172 10.1 8l2.829 2.828V5.172Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.318 8h-5.217m0 0 2.828-2.828v5.656L10.1 8Z"
    />
    <path stroke="currentColor" strokeWidth={2} d="M8 15.778V.153" />
  </svg>
);
export default SvgVerticalCollapseWithCenterLine;
