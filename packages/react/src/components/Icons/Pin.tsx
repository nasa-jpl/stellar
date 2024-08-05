import * as React from 'react';
import { SVGProps } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.037 14.313s5.037-3.358 5.037-7.276A5.037 5.037 0 0 0 3 7.037c0 3.918 5.037 7.276 5.037 7.276Zm1.68-7.276a1.679 1.679 0 1 1-3.359 0 1.679 1.679 0 0 1 3.358 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
