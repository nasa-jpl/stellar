import * as React from 'react';
import { SVGProps } from 'react';
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M8.5 11.807V3.589c0-.193.083-.376.228-.503a5.345 5.345 0 0 1 7.044 0c.145.127.228.31.228.503v8.218a.541.541 0 0 1-.898.406 4.328 4.328 0 0 0-5.704 0 .541.541 0 0 1-.898-.406ZM0 11.807V3.589c0-.193.083-.376.228-.503a5.345 5.345 0 0 1 7.044 0c.145.127.228.31.228.503v8.218a.541.541 0 0 1-.898.406 4.328 4.328 0 0 0-5.704 0A.541.541 0 0 1 0 11.807Z"
    />
  </svg>
);
export default SvgBook;
