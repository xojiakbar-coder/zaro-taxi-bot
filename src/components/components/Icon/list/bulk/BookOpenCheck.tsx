import { forwardRef, Ref, SVGProps } from 'react';

const SvgBookOpenCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" ref={ref} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.317 5.424C9.193 3.936 6.213 3.262 3.994 3.011 2.896 2.887 2 3.804 2 4.935V16.2c0 1.131.896 2.048 1.994 2.172 2.219.251 5.2.925 7.323 2.413.204.143.444.215.683.215V5.639c-.24 0-.48-.072-.683-.215ZM4.259 8.14a.75.75 0 0 1 .856-.626c1.303.201 2.77.539 4.156 1.074a.75.75 0 0 1-.541 1.4c-1.26-.488-2.616-.802-3.845-.993a.75.75 0 0 1-.626-.856Zm.856 3.374a.75.75 0 1 0-.23 1.482c.62.096 1.273.224 1.932.39a.75.75 0 0 0 .367-1.455 22.692 22.692 0 0 0-2.07-.417Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.683 5.424c2.124-1.488 5.104-2.162 7.323-2.413C21.104 2.887 22 3.804 22 4.935V16.2c0 1.131-.896 2.048-1.994 2.172-2.219.251-5.2.925-7.323 2.413A1.19 1.19 0 0 1 12 21V5.639c.24 0 .48-.072.683-.215Z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.494 16.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBookOpenCheck);
export default ForwardRef;
