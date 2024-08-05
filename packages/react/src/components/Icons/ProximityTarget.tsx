import * as React from 'react';
import { SVGProps } from 'react';
const SvgProximityTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2H4v5c0 .552 1.79 1 4 1s4-.448 4-1V2Z"
      clipRule="evenodd"
      opacity={0.8}
    />
    <ellipse cx={8} cy={2} fill="currentColor" rx={4} ry={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.61 8.938C7.043 8.978 7.51 9 8 9c.489 0 .957-.022 1.39-.062l-.896 5.653c-.09.562-.899.562-.988 0L6.61 8.938Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </svg>
);
export default SvgProximityTarget;
