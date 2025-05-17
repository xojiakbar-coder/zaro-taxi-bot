import { forwardRef, Ref, SVGProps } from 'react';
import { uid } from 'radash';

const SvgRuFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const uniqueId = uid(10);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none" ref={ref} {...props}>
      <g clipPath={`url(#clip${uniqueId})`}>
        <rect width="21" height="15" rx="3" fill="#1A47B8" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 10H21V15H0V10Z" fill="#F93939" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H21V5H0V0Z" fill="white" />
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
