import * as React from 'react';
import { SVGProps } from 'react';
const SvgCameraVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.586 4.586C1 5.172 1 6.114 1 8s0 2.828.586 3.414S3.114 12 5 12h2c1.886 0 2.828 0 3.414-.586S11 9.886 11 8s0-2.828-.586-3.414S8.886 4 7 4H5c-1.886 0-2.828 0-3.414.586M3.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11.714 7.925c0-.591 0-.887.08-1.162q.062-.208.166-.399c.137-.25.346-.46.764-.878l1.353-1.352a.457.457 0 0 1 .78.323v6.936a.457.457 0 0 1-.78.323l-1.353-1.352c-.418-.418-.626-.627-.764-.878a2 2 0 0 1-.165-.4c-.08-.275-.08-.57-.08-1.161"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraVideo;
