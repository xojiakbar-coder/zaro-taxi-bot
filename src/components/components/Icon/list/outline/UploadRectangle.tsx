import { forwardRef, Ref, SVGProps } from 'react';

const SvgUploadRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 6 3-3m0 0 3 3m-3-3v12M7.5 9H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUploadRectangle);
export default ForwardRef;
