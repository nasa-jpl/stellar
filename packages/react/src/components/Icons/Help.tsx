import * as React from 'react';
import { SVGProps } from 'react';
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 1.333A6.67 6.67 0 0 0 1.333 8 6.67 6.67 0 0 0 8 14.667 6.67 6.67 0 0 0 14.667 8 6.67 6.67 0 0 0 8 1.333Zm.667 11.334H7.333v-1.333h1.334v1.333Zm.78-4.553.6-.614c.68-.68.913-1.846.126-2.933-.6-.833-1.566-1.36-2.58-1.2A2.672 2.672 0 0 0 5.44 5.254.577.577 0 0 0 5.987 6h.2c.26 0 .466-.186.546-.433A1.344 1.344 0 0 1 8.38 4.72c.467.134.84.54.927 1.02.086.467-.06.907-.367 1.2l-.827.84a2.665 2.665 0 0 0-.78 1.887V10h1.334c0-.306.033-.546.086-.76.12-.48.36-.786.694-1.126Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHelp;
