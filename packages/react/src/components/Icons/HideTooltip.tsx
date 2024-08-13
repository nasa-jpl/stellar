import * as React from 'react';
import { SVGProps } from 'react';
const SvgHideTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.001 10.942c1.06 0 1.918-.87 1.918-1.942S9.06 7.057 8 7.057 6.084 7.927 6.084 9 6.942 10.942 8 10.942M7.167 9a.84.84 0 0 1 .834-.845.84.84 0 0 1 .834.845.84.84 0 0 1-.834.844A.84.84 0 0 1 7.167 9"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.077 15h11.846c.286 0 .56-.123.762-.342.201-.218.315-.515.315-.825V4.5c0-.31-.114-.606-.315-.825a1.04 1.04 0 0 0-.762-.341l-4.005-.005-.995-1.762a1.1 1.1 0 0 0-.391-.415 1.01 1.01 0 0 0-1.06-.002c-.162.098-.297.24-.393.412l-1 1.772H2.078c-.286 0-.56.122-.762.341A1.22 1.22 0 0 0 1 4.5v9.333c0 .31.113.607.315.825.202.22.476.342.762.342M8 12.125c-1.834.026-3.663-1.273-4.765-2.502a.94.94 0 0 1-.001-1.244c1.09-1.216 2.893-2.504 4.705-2.504h.128c1.806 0 3.61 1.287 4.699 2.503a.94.94 0 0 1 0 1.245C11.663 10.852 9.834 12.151 8 12.125"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHideTooltip;
