import React from "react";
import type { SVGProps } from "react";

export function UikitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m17.697 3.292l-4.109 2.489l4.738 2.696v7.077l-6.365 3.538l-6.258-3.538v-5.485L1.596 7.956V18l10.219 6l10.589-6V6.002zm-1.904-.989L11.813 0L7.665 2.568l4.032 2.218z"
      ></path>
    </svg>
  );
}
