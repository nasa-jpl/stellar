import * as React from 'react';
import { SVGProps } from 'react';
const SvgOpacity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.673 1.209a.71.71 0 0 0-1.006 0L3.894 4.981a6.044 6.044 0 1 0 8.545 0zM4.9 5.987A4.6 4.6 0 0 0 3.719 8h8.896a4.6 4.6 0 0 0-1.18-2.013L8.17 2.717z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOpacity;
