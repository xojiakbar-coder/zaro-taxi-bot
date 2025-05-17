import { forwardRef, Ref, SVGProps } from 'react';

const SvgGrid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" ref={ref} {...props}>
    <path
      d="M1.66602 3.83317C1.66602 2.9127 2.41221 2.1665 3.33268 2.1665H6.66602C7.58649 2.1665 8.33268 2.9127 8.33268 3.83317V5.49984C8.33268 6.42031 7.58649 7.1665 6.66602 7.1665H3.33268C2.41221 7.1665 1.66602 6.42031 1.66602 5.49984V3.83317Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M1.66602 12.1665C1.66602 11.246 2.41221 10.4998 3.33268 10.4998H6.66602C7.58649 10.4998 8.33268 11.246 8.33268 12.1665V17.1665C8.33268 18.087 7.58649 18.8332 6.66602 18.8332H3.33268C2.41221 18.8332 1.66602 18.087 1.66602 17.1665V12.1665Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M11.666 3.83317C11.666 2.9127 12.4122 2.1665 13.3327 2.1665H16.666C17.5865 2.1665 18.3327 2.9127 18.3327 3.83317V8.83317C18.3327 9.75365 17.5865 10.4998 16.666 10.4998H13.3327C12.4122 10.4998 11.666 9.75365 11.666 8.83317V3.83317Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M11.666 15.4998C11.666 14.5794 12.4122 13.8332 13.3327 13.8332H16.666C17.5865 13.8332 18.3327 14.5794 18.3327 15.4998V17.1665C18.3327 18.087 17.5865 18.8332 16.666 18.8332H13.3327C12.4122 18.8332 11.666 18.087 11.666 17.1665V15.4998Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGrid);
export default ForwardRef;
