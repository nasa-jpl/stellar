import * as React from 'react';
import { SVGProps } from 'react';
const SvgSox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <circle cx={8} cy={8} r={4.5} stroke="currentColor" />
    <path fill="currentColor" d="M12 8a4 4 0 0 0-4-4v4h4ZM4 8a4 4 0 0 0 4 4V8H4Z" />
    <path stroke="currentColor" strokeLinecap="round" d="M8 1v2M8 13v2M15 8h-2M3 8H1" />
  </svg>
);
export default SvgSox;
