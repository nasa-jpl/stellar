import * as React from 'react';
import { SVGProps } from 'react';
const SvgDrillDark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="#BEC0C2"
      fillRule="evenodd"
      d="m5 10 2 4.5c0 .276.448.5 1 .5s1-.224 1-.5l2-4.5H5Z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path fill="#BEC0C2" d="M5 3h6v6.8H5z" />
    <ellipse cx={8} cy={9.8} fill="#BEC0C2" rx={3} ry={1.7} />
    <path
      fill="#EBECEC"
      fillRule="evenodd"
      d="M13 5h2v9.5c0 .276-.448.5-1 .5s-1-.224-1-.5V5ZM1 5h2v9.5c0 .276-.448.5-1 .5s-1-.224-1-.5V5Z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <ellipse cx={8} cy={5} fill="#EBECEC" rx={7} ry={2} />
    <path fill="#EBECEC" d="M1 3h14v2H1z" />
    <ellipse cx={8} cy={3} fill="#F8F8F8" rx={7} ry={2} />
  </svg>
);
export default SvgDrillDark;
