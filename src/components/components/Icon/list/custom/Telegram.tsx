import { forwardRef, Ref, SVGProps } from 'react';

const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" ref={ref} {...props}>
    <path
      d="M0.896699 7.29686L16.2854 0.646242C17.009 0.333489 17.7932 0.942073 17.6698 1.72072L15.5657 14.9967C15.4358 15.8167 14.4208 16.1304 13.8509 15.5266L10.398 11.8691C9.72083 11.1518 9.66776 10.048 10.273 9.26906L12.711 6.13132C12.8503 5.95195 12.6303 5.71597 12.4416 5.84253L7.5943 9.09435C6.77172 9.64618 5.77366 9.87317 4.79333 9.73139L1.15027 9.2045C0.152284 9.06016 -0.0289275 7.69689 0.896699 7.29686Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTelegram);
export default ForwardRef;
