import * as React from 'react';
import { SVGProps } from 'react';
const SvgFontSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="m2.977 12 .648-1.99h3.15L7.421 12h1.977L6.391 3.273H4.013L1 12zm1.117-3.43 1.074-3.303h.068L6.31 8.57zM10.96 12l.431-1.327h2.1L13.923 12h1.318l-2.006-5.818H11.65L9.64 12zm.744-2.287.716-2.202h.045l.716 2.202z"
    />
  </svg>
);
export default SvgFontSize;
