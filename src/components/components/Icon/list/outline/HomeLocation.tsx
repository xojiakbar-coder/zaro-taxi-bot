import { forwardRef, Ref, SVGProps } from 'react';

const SvgHomeLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" ref={ref} {...props}>
    <path
      d="M17.5 15.4722V8.95845C17.5 7.94931 17.0503 6.99358 16.2751 6.35527L12.1084 2.92429C10.8814 1.91391 9.11859 1.91391 7.89155 2.92429L3.72488 6.35527C2.9497 6.99359 2.5 7.94931 2.5 8.95845V15.4722C2.5 17.3284 3.99238 18.8332 5.83333 18.8332H14.1667C16.0076 18.8332 17.5 17.3284 17.5 15.4722Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12.9167 10.9998C12.9167 13.0709 10 15.4998 10 15.4998C10 15.4998 7.08333 13.0709 7.08333 10.9998C7.08333 8.92877 8.61929 7.99984 10 7.99984C11.3807 7.99984 12.9167 8.92877 12.9167 10.9998Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="9.99935" cy="10.4998" r="0.833333" fill="currentColor" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeLocation);
export default ForwardRef;
