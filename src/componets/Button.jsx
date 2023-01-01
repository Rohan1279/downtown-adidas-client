import React from "react";
const Button = ({ classes, children, handler, data }) => {
  return (
    <button
      onClick={() => handler(data)}
      id="button"
      className={`p-2 border border-zinc-300 bg-inherit shadow-nm active:shadow-nm-inset transition-all ${classes}`}
    >
      {children}
    </button>
  );
};
export default Button;
// Transition from inset to outer box-shadow
// https://codepen.io/Probocop/pen/yyrqNG
