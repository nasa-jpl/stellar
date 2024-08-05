import * as React from 'react';
import { SVGProps } from 'react';
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 18 18" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.536 1.222a1 1 0 0 0-1.415 0l-.707.707 1.414 1.414a1 1 0 0 1-1.414 1.414L9 3.343 6.879 5.464 8.293 6.88a1 1 0 1 1-1.414 1.414L5.464 6.879 3.344 9l1.413 1.414a1 1 0 1 1-1.414 1.414L1.93 10.414l-.707.707a1 1 0 0 0 0 1.415l3.535 3.535a1 1 0 0 0 1.415 0l9.9-9.9a1 1 0 0 0 0-1.414l-3.536-3.535Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRuler;
