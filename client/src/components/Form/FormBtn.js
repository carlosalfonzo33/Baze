import React from "react";

export const FormBtn = props =>
  <button {...props} className="btn">
    {props.children}
  </button>;
