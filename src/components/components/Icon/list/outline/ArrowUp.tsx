import { forwardRef, Ref, SVGProps } from 'react';

const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 10 4-4m0 0 4 4m-4-4v12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
