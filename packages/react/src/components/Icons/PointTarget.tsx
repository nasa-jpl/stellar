import * as React from 'react';
import { SVGProps } from 'react';
const SvgPointTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.254 9.8c-.395.13-.816.2-1.254.2-.438 0-.86-.07-1.254-.2l.76 4.79c.09.563.899.563.988 0l.76-4.79Z"
      clipRule="evenodd"
      opacity={0.6}
    />
    <path fill="currentColor" d="M12 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" opacity={0.8} />
    <path fill="currentColor" d="M12 5c0 2.21-3 2.682-4 2.682S4 7.21 4 5a4 4 0 1 1 8 0Z" />
  </svg>
);
export default SvgPointTarget;
