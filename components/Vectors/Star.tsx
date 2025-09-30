import React from "react";



export const Vector = ({size = 48, strokeClassName, fillClassName = "fill-white"}: { size?: number; strokeClassName?: string; fillClassName?: string; }) => {
return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.828125 6.38757C3.625 5.89477 5.89691 3.8519 6.68304 1.12292L6.92187 0.293824L7.16071 1.12292C7.94684 3.8519 10.2188 5.89477 13.0156 6.38757C10.2188 6.88038 7.94684 8.92325 7.16071 11.6522L6.92187 12.4813L6.68304 11.6522C5.89691 8.92325 3.625 6.88038 0.828125 6.38757Z"
        className={strokeClassName}
     />
      <path
        d="M4.32812 6.38757C5.52113 6.17737 6.49021 5.30598 6.82553 4.14194L6.92741 3.78829L7.02928 4.14194C7.3646 5.30598 8.33369 6.17737 9.52669 6.38757C8.33369 6.59778 7.3646 7.46916 7.02928 8.63321L6.92741 8.98685L6.82553 8.63321C6.49021 7.46916 5.52113 6.59778 4.32812 6.38757Z"
        className={fillClassName}
      />
    </svg>
    )
}




export default {
    title: "Vectors/Star",
    component: Vector
}