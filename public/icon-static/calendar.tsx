import React from "react";
import type { SVGProps } from "react";

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512" {...props}>
      <rect
        width={416}
        height={384}
        x={48}
        y={80}
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={24.75}
        rx={48}
      ></rect>
      <circle cx={296} cy={232} r={24} fill="currentColor"></circle>
      <circle cx={376} cy={232} r={24} fill="currentColor"></circle>
      <circle cx={296} cy={312} r={24} fill="currentColor"></circle>
      <circle cx={376} cy={312} r={24} fill="currentColor"></circle>
      <circle cx={136} cy={312} r={24} fill="currentColor"></circle>
      <circle cx={216} cy={312} r={24} fill="currentColor"></circle>
      <circle cx={136} cy={392} r={24} fill="currentColor"></circle>
      <circle cx={216} cy={392} r={24} fill="currentColor"></circle>
      <circle cx={296} cy={392} r={24} fill="currentColor"></circle>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24.75}
        d="M128 48v32m256-32v32"
      ></path>
      <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={24.75} d="M464 160H48"></path>
    </svg>
  );
}
