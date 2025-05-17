import { forwardRef, Ref, SVGProps } from 'react';

const SvgDirectionRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.531506 12.0856C0.20806 11.8269 0.155619 11.3549 0.414376 11.0315L4.03956 6.49997L0.414376 1.96849C0.155618 1.64505 0.208059 1.17308 0.531506 0.91432C0.854952 0.655562 1.32692 0.708004 1.58568 1.03145L5.58568 6.03145C5.80481 6.30536 5.80481 6.69458 5.58568 6.96849L1.58568 11.9685C1.32692 12.2919 0.854953 12.3444 0.531506 12.0856Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDirectionRight);
export default ForwardRef;
