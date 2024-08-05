import * as React from 'react';
import { SVGProps } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 1.333A6.67 6.67 0 0 0 1.333 8 6.67 6.67 0 0 0 8 14.667 6.67 6.67 0 0 0 14.666 8 6.67 6.67 0 0 0 8 1.333Zm0 10a.669.669 0 0 1-.667-.666V8c0-.367.3-.667.667-.667.367 0 .667.3.667.667v2.667c0 .366-.3.666-.667.666Zm-.667-6a.667.667 0 1 0 1.333 0 .667.667 0 0 0-1.333 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfo;
