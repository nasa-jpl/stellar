import * as React from 'react';
import { SVGProps } from 'react';
const SvgPinCrossed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M4.75 11.263c1.455 1.829 3.287 3.05 3.287 3.05s5.037-3.358 5.037-7.276c0-.271-.022-.54-.065-.806l-8.258 5.032ZM10.944 2.923A5.037 5.037 0 0 0 3 7.037c0 .234.018.465.052.694l7.892-4.808Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.24 10.87a.95.95 0 0 1 .407-1.112L13.364 2.62a.95.95 0 1 1 .989 1.622L2.636 11.38a.95.95 0 0 1-1.395-.51Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPinCrossed;
