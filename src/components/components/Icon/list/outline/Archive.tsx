import { forwardRef, Ref, SVGProps } from 'react';

const SvgArchive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" ref={ref} {...props}>
    <path
      d="M2.5 10.4998H17.5M8.33333 6.33317H11.6667M8.33333 14.6665H11.6667M14.1667 2.1665H5.83333C3.99238 2.1665 2.5 3.65889 2.5 5.49984V15.4998C2.5 17.3408 3.99238 18.8332 5.83333 18.8332H14.1667C16.0076 18.8332 17.5 17.3408 17.5 15.4998V5.49984C17.5 3.65889 16.0076 2.1665 14.1667 2.1665Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArchive);
export default ForwardRef;
