import * as React from 'react';
import { SVGProps } from 'react';
const SvgTextAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.25}
      d="M6.631 14.79h-1.01a.492.492 0 1 0 0 .985h4.701a.492.492 0 1 0 0-.985H9.311a.575.575 0 0 1-.575-.574V2.476c0-.317.258-.574.575-.574h2.84c.318 0 .575.257.575.574v1.336a.67.67 0 0 0 1.341 0V1.7a.825.825 0 0 0-.824-.825H2.7a.825.825 0 0 0-.825.825v2.112a.67.67 0 1 0 1.341 0V2.476c0-.317.258-.574.575-.574h2.84c.318 0 .575.257.575.574v11.74a.575.575 0 0 1-.575.574Z"
    />
  </svg>
);
export default SvgTextAlt;
