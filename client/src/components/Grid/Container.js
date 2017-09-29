import React from "react";
import "./grid.css";

export const Container = ({ fluid, children }, {...props}) =>
  <div style={{ "paddingLeft": "0 !important", "paddingRight": "0 !important"}} className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
