import * as React from 'react';
import { SVGProps } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.53 12.884a1 1 0 0 0-1.06 0l-2.19 1.37c-.75.47-1.696-.196-1.507-1.06l.598-2.75a1 1 0 0 0-.302-.95L2.004 7.601c-.64-.586-.282-1.651.581-1.733l2.645-.25A1 1 0 0 0 6.062 5l1.012-2.48c.339-.83 1.513-.83 1.852 0L9.938 5a1 1 0 0 0 .832.618l2.645.25c.863.082 1.22 1.147.581 1.733l-2.065 1.891a1 1 0 0 0-.302.95l.598 2.75c.188.865-.757 1.53-1.507 1.06l-2.19-1.37Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;
