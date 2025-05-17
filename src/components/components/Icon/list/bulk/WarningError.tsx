import { forwardRef, Ref, SVGProps } from 'react';

const SvgWarningError = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M9.968 4.166c.886-1.555 3.178-1.555 4.064 0l7.672 13.466c.86 1.511-.26 3.368-2.032 3.368H4.328c-1.773 0-2.893-1.857-2.032-3.368L9.968 4.166Z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 8.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningError);
export default ForwardRef;
