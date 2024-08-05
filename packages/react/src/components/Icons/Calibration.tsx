import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalibration = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 .5a.5.5 0 0 1 .5.5v2.025A5.002 5.002 0 0 1 12.974 7.5L13 7.5h2a.5.5 0 0 1 0 1h-2.025A5.002 5.002 0 0 1 8.5 12.974L8.5 13v2a.5.5 0 0 1-1 0v-2.025A5.002 5.002 0 0 1 3.026 8.5L3 8.5H1a.5.5 0 0 1 0-1h2.025A5.002 5.002 0 0 1 7.5 3.026L7.5 3V1A.5.5 0 0 1 8 .5ZM4 8a4 4 0 0 1 4-4v4H4Zm8 0H8v4a4 4 0 0 0 4-4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalibration;
