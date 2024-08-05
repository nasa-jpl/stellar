import * as React from 'react';
import { SVGProps } from 'react';
const SvgHelicopter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M5 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8ZM2 3h12.25a.75.75 0 0 0 0-1.5H8.106a1 1 0 0 1-.21-.022L2.21.259A1 1 0 0 0 1 1.237V2a1 1 0 0 0 1 1ZM14 4H1.75a.75.75 0 0 0 0 1.5h6.144a1 1 0 0 1 .21.022l5.687 1.219A1 1 0 0 0 15 5.763V5a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.8 8.6a.5.5 0 0 1 .1.7l-4.5 6a.5.5 0 0 1-.8-.6l4.5-6a.5.5 0 0 1 .7-.1Zm4.4 0a.5.5 0 0 1 .7.1l4.5 6a.5.5 0 0 1-.8.6l-4.5-6a.5.5 0 0 1 .1-.7Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.203 8.543a.5.5 0 0 0-.66.254l-2 4.5a.5.5 0 0 0 .914.406l2-4.5a.5.5 0 0 0-.254-.66ZM8.797 8.543a.5.5 0 0 1 .66.254l2 4.5a.5.5 0 1 1-.914.406l-2-4.5a.5.5 0 0 1 .254-.66Z"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path fill="currentColor" fillRule="evenodd" d="M8.5 2.5V8h-1V2.5h1Z" clipRule="evenodd" />
  </svg>
);
export default SvgHelicopter;
