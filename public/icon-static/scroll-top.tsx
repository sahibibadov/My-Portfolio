import React from "react";
import type { SVGProps } from "react";

export function ScrollTopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="m6 11l6-6l6 6M6 19l6-6l6 6"
      ></path>
    </svg>
  );
}
