import { forwardRef, Ref, SVGProps } from 'react';

const SvgClockCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.4} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.716 7.272a.75.75 0 0 1 .75.75v4.46l2.488.828a.75.75 0 0 1-.475 1.423l-3-1a.75.75 0 0 1-.513-.711v-5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClockCircle);
export default ForwardRef;
