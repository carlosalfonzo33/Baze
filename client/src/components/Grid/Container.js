import React from "react";

export const Container = ({ fluid, children }) =>
  <div style={{ "paddingLeft": "0 !important", "paddingRight": "0 !important"}} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
