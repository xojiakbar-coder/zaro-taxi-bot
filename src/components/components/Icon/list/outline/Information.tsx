import { forwardRef, Ref, SVGProps } from 'react';

const SvgInformation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <circle cx={12} cy={7} r={1} fill="currentColor" />
    <path
      fill="currentColor"
      d="M11 9.25a.75.75 0 0 0 0 1.5v-1.5Zm1 .75h.75a.75.75 0 0 0-.75-.75V10Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm10-5A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm-1 8h1v-1.5h-1v1.5Zm.25-.75v7h1.5v-7h-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInformation);
export default ForwardRef;
