import * as React from 'react';
import { SVGProps } from 'react';
const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.525 10.475c.618.618 1.37.843 2.08.938.646.087 1.44.087 2.305.087h.073c-.04.936-.165 1.51-.569 1.914C8.828 14 7.886 14 6 14s-2.828 0-3.414-.586S2 11.886 2 10s0-2.828.586-3.414c.404-.404.978-.53 1.914-.569v.072c0 .866 0 1.66.087 2.305.095.711.32 1.463.938 2.08M10 10c-1.886 0-2.828 0-3.414-.586S6 7.886 6 6c1.886 0 2.828 0 3.414.586S10 8.114 10 10"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 6c0-1.886 0-2.828.586-3.414S8.114 2 10 2s2.828 0 3.414.586S14 4.114 14 6s0 2.828-.586 3.414S11.886 10 10 10s-2.828 0-3.414-.586S6 7.886 6 6"
    />
  </svg>
);
export default SvgDuplicate;
