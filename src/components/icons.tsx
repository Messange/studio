import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17.5 6.5C17.5 4.5 15.5 3 13.5 3S9.5 4.5 9.5 6.5c0 1.5 1 3 2.5 3.5" />
      <path d="M12 10v11" />
      <path d="M6.5 17.5C4.5 17.5 3 15.5 3 13.5S4.5 9.5 6.5 9.5c1.5 0 3 1 3.5 2.5" />
      <path d="M10 12H-1" />
      <path d="M14.5 17.5c2 0 3.5-1.5 3.5-3.5S16.5 10.5 14.5 10.5c-1.5 0-3 1-3.5 2.5" />
      <path d="M22 12h-8" />
    </svg>
  );
}
