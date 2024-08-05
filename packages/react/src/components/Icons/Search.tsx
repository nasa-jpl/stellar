import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.83 11.053 1.8 1.802c.492.492.492 1.29 0 1.782a1.275 1.275 0 0 1-1.78 0l-1.801-1.8a6.456 6.456 0 0 1-8.582-1.272 6.466 6.466 0 0 1 .424-8.671 6.456 6.456 0 0 1 8.665-.427 6.466 6.466 0 0 1 1.274 8.586Zm-.8-3.586a4.567 4.567 0 0 0-4.566-4.569 4.572 4.572 0 0 0-4.566 4.57 4.567 4.567 0 0 0 4.566 4.568 4.567 4.567 0 0 0 4.566-4.569Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
