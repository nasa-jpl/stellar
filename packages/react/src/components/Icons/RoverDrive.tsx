import * as React from 'react';
import { SVGProps } from 'react';
const SvgRoverDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <g fill="currentColor" clipPath="url(#a)">
      <circle cx={2} cy={14} r={2} />
      <circle cx={8} cy={14} r={2} />
      <circle cx={14} cy={14} r={2} />
      <path d="M1 10.526C1 9.683 1.683 9 2.526 9h10.948C14.317 9 15 9.683 15 10.526c0 .36-.251.67-.603.746l-2.42.519a4 4 0 0 1-1.937-.065l-.941-.27a4 4 0 0 0-2.198 0l-.94.27a4 4 0 0 1-1.938.065l-2.42-.519A.763.763 0 0 1 1 10.526Z" />
      <path
        fillRule="evenodd"
        d="M3.414 3.95a1 1 0 0 1 1-1h7.071a1 1 0 1 1 0 2h-7.07a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.95 7.485a1 1 0 0 1 0-1.414L10.07 3.95 7.95 1.828A1 1 0 1 1 9.364.414l2.828 2.829a1 1 0 0 1 0 1.414L9.364 7.485a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgRoverDrive;
