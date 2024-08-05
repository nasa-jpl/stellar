import * as React from 'react';
import { SVGProps } from 'react';
const SvgLineHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M4.003 6.397a.7.7 0 0 0 1.147-.228.7.7 0 0 0-.153-.766l-1.4-1.4a.7.7 0 0 0-.23-.147.7.7 0 0 0-.533 0 .7.7 0 0 0-.23.147l-1.4 1.4a.703.703 0 1 0 .993.994l.203-.21v3.626l-.203-.21a.703.703 0 1 0-.994.994l1.4 1.4a.7.7 0 0 0 .231.147.659.659 0 0 0 .532 0 .7.7 0 0 0 .231-.147l1.4-1.4a.702.702 0 1 0-.994-.994l-.203.21V6.187l.203.21ZM7.3 5.2h7a.7.7 0 1 0 0-1.4h-7a.7.7 0 1 0 0 1.4Zm7 2.1h-7a.7.7 0 1 0 0 1.4h7a.7.7 0 1 0 0-1.4Zm0 3.5h-7a.7.7 0 0 0 0 1.4h7a.7.7 0 1 0 0-1.4Z"
    />
  </svg>
);
export default SvgLineHeight;
