import { forwardRef, Ref, SVGProps } from 'react';

const SvgClipboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M8 9.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM20.25 8v10h1.5V8h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V8h-1.5v10h1.5ZM16 4.75h1v-1.5h-1v1.5Zm-9 0h1v-1.5H7v1.5Zm0 16.5A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Zm1.5-10A4.75 4.75 0 0 0 17 3.25v1.5A3.25 3.25 0 0 1 20.25 8h1.5Zm-18 0A3.25 3.25 0 0 1 7 4.75v-1.5A4.75 4.75 0 0 0 2.25 8h1.5ZM8 10.75h8v-1.5H8v1.5Zm0 4h8v-1.5H8v1.5Zm0 4h4v-1.5H8v1.5Zm2-16h4v-1.5h-4v1.5Zm4 2.5h-4v1.5h4v-1.5Zm-4 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 6.75v-1.5ZM15.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 4h-1.5ZM14 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 14 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 7.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClipboard);
export default ForwardRef;
