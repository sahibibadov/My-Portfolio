import React from "react";
import type { SVGProps } from "react";

export function SimpleIconsFramer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"></path>
    </svg>
  );
}
