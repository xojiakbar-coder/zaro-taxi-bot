import { forwardRef, Ref, SVGProps } from 'react';
import { uid } from 'radash';

const SvgRuFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const uniqueId = uid(10);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none" ref={ref} {...props}>
      <g clipPath="url(#clip0_5041_18547)">
        <rect width="21" height="15" rx="3" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H9V7H0V0Z" fill="#1A47B8" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z"
          fill="#F93939"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`clip${uniqueId}`}>
          <rect width="21" height="15" rx="3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRuFlag);
export default ForwardRef;
