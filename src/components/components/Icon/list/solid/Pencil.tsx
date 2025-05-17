import { forwardRef, Ref, SVGProps } from 'react';

const SvgPencilIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8188 1.18022C13.9119 0.273259 12.4414 0.273261 11.5344 1.18022L10.4519 2.26276L13.7363 5.54716L14.8188 4.46461C15.7258 3.55765 15.7258 2.08718 14.8188 1.18022ZM12.6756 6.60782L9.39124 3.32342L1.98819 10.7265C1.52107 11.1936 1.20523 11.7904 1.08169 12.4394L0.773999 14.0557C0.642042 14.7489 1.25018 15.357 1.94336 15.2251L3.55971 14.9174C4.20866 14.7938 4.80547 14.478 5.27259 14.0109L12.6756 6.60782Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPencilIcon);
export default ForwardRef;
