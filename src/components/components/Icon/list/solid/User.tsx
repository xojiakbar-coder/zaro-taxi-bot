import { forwardRef, Ref, SVGProps } from 'react';

const SvgUserIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9997 18.3333C23.6816 18.3333 26.6663 15.3486 26.6663 11.6667C26.6663 7.98477 23.6816 5 19.9997 5C16.3178 5 13.333 7.98477 13.333 11.6667C13.333 15.3486 16.3178 18.3333 19.9997 18.3333ZM19.9997 35C26.443 35 31.6663 32.0152 31.6663 28.3333C31.6663 24.6514 26.443 21.6667 19.9997 21.6667C13.5564 21.6667 8.33301 24.6514 8.33301 28.3333C8.33301 32.0152 13.5564 35 19.9997 35Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUserIcon);
export default ForwardRef;
