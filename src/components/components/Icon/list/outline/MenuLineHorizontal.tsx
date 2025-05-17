import { forwardRef, Ref, SVGProps } from 'react';

const SvgMenuLineHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M7 7.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 2.5a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-8h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Zm0 4h10v-1.5H7v1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuLineHorizontal);

export default ForwardRef;
