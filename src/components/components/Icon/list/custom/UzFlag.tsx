import { forwardRef, Ref, SVGProps } from 'react';
import { uid } from 'radash';

const SvgUzFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const uniqueId = uid(10);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none" ref={ref} {...props}>
      <g clipPath={`url(#clip${uniqueId})`}>
        <rect y="0.5" width="21" height="15" rx="3" fill="#F93939" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 11.5H21V15.5H0V11.5Z" fill="#00B731" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H21V4.5H0V0.5Z" fill="#03BCDB" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 5.5H21V10.5H0V5.5ZM5 4.415C4.844 4.47 4.675 4.5 4.5 4.5C3.672 4.5 3 3.828 3 3C3 2.172 3.672 1.5 4.5 1.5C4.675 1.5 4.844 1.53 5 1.585C4.417 1.791 4 2.347 4 3C4 3.653 4.417 4.21 5 4.415Z"
          fill="white"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 2.5H7V3.5H6V2.5ZM7 1.5H8V2.5H7V1.5ZM8 2.5H9V3.5H8V2.5ZM9 1.5H10V2.5H9V1.5ZM10 2.5H11V3.5H10V2.5ZM9 3.5H10V4.5H9V3.5ZM7 3.5H8V4.5H7V3.5Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`clip${uniqueId}`}>
          <rect y="0.5" width="21" height="15" rx="3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUzFlag);
export default ForwardRef;
