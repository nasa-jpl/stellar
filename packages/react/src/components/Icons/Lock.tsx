import * as React from 'react';
import { SVGProps } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 6.05v-.824C4 2.962 5.724 1 8 1s4 1.962 4 4.226v.825c.65.064 1.088.208 1.414.535C14 7.172 14 8.114 14 10v1c0 1.886 0 2.828-.586 3.414C12.828 15 11.886 15 10 15H6c-1.886 0-2.828 0-3.414-.586C2 13.828 2 12.886 2 11v-1c0-1.886 0-2.828.586-3.414.326-.327.764-.471 1.414-.535Zm2-.824C6 3.926 6.963 3 8 3s2 .927 2 2.226V6H6v-.774Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLock;
