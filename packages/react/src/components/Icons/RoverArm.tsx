import * as React from 'react';
import { SVGProps } from 'react';
const SvgRoverArm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <rect width={10} height={2} x={3} y={13} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.124 6.19a1 1 0 0 1 1.341-.448l1.55.775 1.891-.946-.294-1.768-1.542-.77a1 1 0 1 1 .894-1.79l1.998 1a1 1 0 0 1 .54.73L8 5.97A1 1 0 0 1 7.46 7.03l-2.998 1.5a1 1 0 0 1-.894.001L1.57 7.531a1 1 0 0 1-.447-1.341Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.89 7.364 8.738 8.66l.373-.467c.686-.914 1.466-1.407 2.319-1.604L7.133 4.634 5.89 7.364Zm7.57.772a1.499 1.499 0 0 0-.29-.58 4.505 4.505 0 0 0-1.113-.055c-.77.068-1.482.405-2.15 1.297l-.005.007-.634.794-1.143 1.487a1.5 1.5 0 0 0-.241.464l-.142.45h3.464l1.988-2.587a1.5 1.5 0 0 0 .265-1.277ZM10.572 13H9l1.43.45.142-.45Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRoverArm;
