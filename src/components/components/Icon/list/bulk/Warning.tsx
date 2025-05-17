import { forwardRef, Ref, SVGProps } from 'react';

const SvgWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.4} />
    <path fill="currentColor" d="M11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 14.75a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWarning);
export default ForwardRef;
