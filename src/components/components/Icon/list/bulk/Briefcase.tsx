import { forwardRef, Ref, SVGProps } from 'react';

const SvgBriefcase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" ref={ref} {...props}>
    <path
      opacity="0.4"
      d="M0 9C0 6.79086 1.79086 5 4 5H16C18.2091 5 20 6.79086 20 9V17C20 19.2091 18.2091 21 16 21H4C1.79086 21 0 19.2091 0 17V9Z"
      fill="currentColor"
    />
    <path
      opacity="0.4"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1.75C7.75736 1.75 6.75 2.75736 6.75 4V6C6.75 6.41421 6.41421 6.75 6 6.75C5.58579 6.75 5.25 6.41421 5.25 6V4C5.25 1.92893 6.92893 0.25 9 0.25H11C13.0711 0.25 14.75 1.92893 14.75 4V6C14.75 6.41421 14.4142 6.75 14 6.75C13.5858 6.75 13.25 6.41421 13.25 6V4C13.25 2.75736 12.2426 1.75 11 1.75H9Z"
      fill="currentColor"
    />
    <path d="M16 5H4C1.79086 5 0 6.79086 0 9V12H20V9C20 6.79086 18.2091 5 16 5Z" fill="currentColor" />
    <path
      d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;
