import * as React from 'react';
import { SVGProps } from 'react';
const SvgUtilityWrench = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.118.501c.7-.039.966.77.527 1.319l-1.392 1.74a1 1 0 0 0 .074 1.332l.305.305.005.005a.226.226 0 0 1 .005.005l.305.305a1 1 0 0 0 1.332.074l1.74-1.393c.548-.438 1.358-.173 1.319.528a3.999 3.999 0 0 1-5.03 3.638l-3.18 3.18c-.403.403-.58.967-.715 1.52A3 3 0 1 1 2.78 9.426c.552-.136 1.117-.312 1.52-.715l3.18-3.18A3.998 3.998 0 0 1 11.118.5ZM4.914 13.753a2 2 0 1 1-2.828-2.829 2 2 0 0 1 2.828 2.83Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUtilityWrench;
