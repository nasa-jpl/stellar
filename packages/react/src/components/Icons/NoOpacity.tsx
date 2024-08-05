import * as React from 'react';
import { SVGProps } from 'react';
const SvgNoOpacity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.667 1.208a.711.711 0 0 1 1.006 0l3.766 3.773a6.044 6.044 0 0 1 1.517 6.015l-1.19-1.288a4.622 4.622 0 0 0-1.332-3.72v-.001L8.17 2.717l-.966.965-.965-1.045 1.428-1.429ZM3.435 5.496l.98 1.061a4.622 4.622 0 0 0 6.143 6.656l.98 1.061-.013.008a6.044 6.044 0 0 1-8.09-8.786Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.422}
      d="M2.96 2.216 13.995 14.17"
    />
  </svg>
);
export default SvgNoOpacity;
