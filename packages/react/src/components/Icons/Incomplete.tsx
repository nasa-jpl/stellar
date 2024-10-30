import * as React from 'react';
import { SVGProps } from 'react';
const SvgIncomplete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M15.41 4.1 11.9.59C11.52.21 11.02 0 10.49 0H5.52c-.53 0-1.04.21-1.41.59L.59 4.1C.21 4.48 0 4.98 0 5.51v4.97c0 .54.21 1.04.59 1.42l3.51 3.51c.38.38.88.59 1.41.59h4.97c.53 0 1.04-.21 1.41-.59l3.51-3.51c.38-.38.59-.88.59-1.41V5.52c0-.53-.21-1.04-.59-1.41ZM12 8.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgIncomplete;
