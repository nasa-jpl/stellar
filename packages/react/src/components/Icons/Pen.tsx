import * as React from 'react';
import { SVGProps } from 'react';
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="m7.574 4.88-3.47 3.47a8 8 0 0 0-2.08 3.622l-.426 1.615c-.13.494.321.945.815.815l1.615-.425a8 8 0 0 0 3.621-2.08l3.47-3.47a.667.667 0 0 0 0-.943L8.517 4.88a.667.667 0 0 0-.942 0ZM11.04 1.414l-.396.396a.667.667 0 0 0 0 .943l2.604 2.603c.26.26.682.26.942 0l.396-.396a2 2 0 0 0 0-2.828l-.718-.718a2 2 0 0 0-2.828 0Z"
    />
  </svg>
);
export default SvgPen;
