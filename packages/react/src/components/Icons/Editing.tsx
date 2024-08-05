import * as React from 'react';
import { SVGProps } from 'react';
const SvgEditing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M9.42 2.307a1.108 1.108 0 0 1 1.531 0c.423.424.423 1.11 0 1.533l-.575.575a.27.27 0 0 1-.383 0l-1.148-1.15a.271.271 0 0 1 0-.383l.575-.575ZM7.753 4.071a.261.261 0 0 1 .358 0l1.076 1.077c.1.099.1.26 0 .359l-3.373 3.35a4.68 4.68 0 0 1-1.555 1.022l-.911.366a.263.263 0 0 1-.274-.056.254.254 0 0 1-.056-.274l.365-.912a4.68 4.68 0 0 1 1.022-1.556l3.348-3.376Z"
    />
    <circle cx={8} cy={13} r={1} fill="currentColor" transform="rotate(90 8 13)" />
    <circle cx={5} cy={13} r={1} fill="currentColor" transform="rotate(90 5 13)" />
    <circle cx={11} cy={13} r={1} fill="currentColor" transform="rotate(90 11 13)" />
  </svg>
);
export default SvgEditing;
