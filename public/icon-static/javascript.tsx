import React from "react";
import type { SVGProps } from "react";

export function Javascripticon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 15 15" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5z"
      ></path>
    </svg>
  );
}
