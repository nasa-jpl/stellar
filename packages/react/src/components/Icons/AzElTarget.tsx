import * as React from 'react';
import { SVGProps } from 'react';
const SvgAzElTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <ellipse cx={8} cy={6} fill="currentColor" opacity={0.8} rx={4} ry={1.6} />
    <path fill="currentColor" d="M8 2a4 4 0 0 0-4 4l.138.055a10.4 10.4 0 0 0 7.725 0L12 6a4 4 0 0 0-4-4Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m6.538 8.49.968 6.1c.09.563.899.563.988 0l.968-6.1A9.47 9.47 0 0 1 8 8.6a9.47 9.47 0 0 1-1.462-.11Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </svg>
);
export default SvgAzElTarget;
