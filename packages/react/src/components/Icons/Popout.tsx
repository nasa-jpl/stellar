import * as React from 'react';
import { SVGProps } from 'react';
const SvgPopout = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 13 9-9m0 0H5.571M12 4v6.429"
    />
  </svg>
);
export default SvgPopout;
