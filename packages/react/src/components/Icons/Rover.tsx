import * as React from 'react';
import { SVGProps } from 'react';
const SvgRover = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M1 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v.334a1 1 0 0 1-.79.978l-2.714.582c-.33.07-.649.182-.95.333l-.757.379a4 4 0 0 1-3.578 0l-.757-.379a3.998 3.998 0 0 0-.95-.333l-2.714-.582A1 1 0 0 1 1 9.334V9Z" />
      <rect width={4} height={5} x={6} y={4} rx={1} />
      <path d="M5 13.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM10 13.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1ZM0 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2ZM12 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z" />
      <path
        fillRule="evenodd"
        d="M5 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5Zm5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgRover;
