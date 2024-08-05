import * as React from 'react';
import { SVGProps } from 'react';
const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      d="M6.934 9.727v-.17c0-.39.03-.702.092-.934.062-.232.153-.418.274-.558.12-.142.268-.27.443-.383.152-.1.287-.195.405-.288.121-.092.216-.19.284-.295a.616.616 0 0 0 .107-.355.573.573 0 0 0-.316-.522.698.698 0 0 0-.323-.074.714.714 0 0 0-.614.334.679.679 0 0 0-.097.362H5.371c.005-.521.123-.944.355-1.268.232-.327.54-.566.924-.717.383-.154.805-.231 1.264-.231.507 0 .959.074 1.356.224.398.146.712.369.941.667.23.296.345.667.345 1.112 0 .286-.05.538-.15.756a1.797 1.797 0 0 1-.408.572 3.279 3.279 0 0 1-.607.447c-.17.1-.314.203-.43.31a1.041 1.041 0 0 0-.262.358c-.06.132-.09.293-.09.483v.17H6.935Zm.866 2.387a.976.976 0 0 1-.706-.288.95.95 0 0 1-.288-.707.926.926 0 0 1 .288-.692.976.976 0 0 1 .706-.288c.26 0 .49.096.69.288a.934.934 0 0 1 .305.692.956.956 0 0 1-.146.505 1.07 1.07 0 0 1-.362.358.944.944 0 0 1-.487.132Z"
    />
  </svg>
);
export default SvgQuestion;
