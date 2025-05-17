import { forwardRef, Ref, SVGProps } from 'react';

const SvgArrowTransfer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 5 3 3m0 0-3 3m3-3H6m3 11-3-3m0 0 3-3m-3 3h12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowTransfer);
export default ForwardRef;
