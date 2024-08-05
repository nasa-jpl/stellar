import * as React from 'react';
import { SVGProps } from 'react';
const SvgBeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.962 2h-4v5.8a2 2 0 0 1-.383 1.176L1.926 14h12.072l-3.653-5.024A2 2 0 0 1 9.962 7.8V2Zm0-1a1 1 0 0 1 1 1v5.8a1 1 0 0 0 .191.588l3.654 5.024A1 1 0 0 1 13.998 15H1.926a1 1 0 0 1-.809-1.588l3.654-5.024a1 1 0 0 0 .191-.588V2a1 1 0 0 1 1-1h4Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6.862 9.133a.5.5 0 0 0 .1-.3V5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 0 .1.3l2.3 3.067a.5.5 0 0 1-.4.8h-6a.5.5 0 0 1-.4-.8l2.3-3.067Z"
      opacity={0.8}
    />
  </svg>
);
export default SvgBeaker;
