import * as React from 'react';
import { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.976 10.31a3.333 3.333 0 0 1 2.357-.977h5.334A3.333 3.333 0 0 1 14 12.667V14a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 14v-1.333c0-.884.351-1.732.976-2.357ZM4.667 4.667a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPerson;
