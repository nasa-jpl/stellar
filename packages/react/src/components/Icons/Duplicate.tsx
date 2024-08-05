import * as React from 'react';
import { SVGProps } from 'react';
const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.525 10.475c.618.618 1.37.843 2.08.938.646.087 1.44.087 2.305.087h.073c-.04.936-.165 1.51-.569 1.914C8.828 14 7.886 14 6 14c-1.886 0-2.828 0-3.414-.586C2 12.828 2 11.886 2 10c0-1.886 0-2.828.586-3.414.404-.404.978-.53 1.914-.569v.072c0 .866 0 1.66.087 2.305.095.711.32 1.463.938 2.08ZM10 10c-1.886 0-2.828 0-3.414-.586C6 8.828 6 7.886 6 6c1.886 0 2.828 0 3.414.586C10 7.172 10 8.114 10 10Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M6 6c0-1.886 0-2.828.586-3.414C7.172 2 8.114 2 10 2c1.886 0 2.828 0 3.414.586C14 3.172 14 4.114 14 6c0 1.886 0 2.828-.586 3.414C12.828 10 11.886 10 10 10c-1.886 0-2.828 0-3.414-.586C6 8.828 6 7.886 6 6Z"
    />
  </svg>
);
export default SvgDuplicate;
