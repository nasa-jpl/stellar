import * as React from 'react';
import { SVGProps } from 'react';
const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m3.707 2.301.26.26-.258.258a.5.5 0 1 0 .707.707l.258-.258 1.355 1.357-.258.258a.5.5 0 0 0 .708.707l.257-.258 1.356 1.356-.258.259a.5.5 0 0 0 .707.706l.258-.257 1.355 1.356-.258.258a.5.5 0 1 0 .708.707l.257-.258 1.356 1.357-.258.258a.5.5 0 0 0 .707.707l.258-.258.776.777c.63.63.184 1.707-.707 1.707H3a1 1 0 0 1-1-1V3.008c0-.891 1.077-1.337 1.707-.707Zm.356 4.659v4.483a.5.5 0 0 0 .5.5h4.48a.5.5 0 0 0 .354-.853l-4.48-4.484a.5.5 0 0 0-.854.354Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgActivity;
