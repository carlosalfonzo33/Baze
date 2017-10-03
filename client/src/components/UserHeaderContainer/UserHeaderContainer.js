import React from "react";
import "./userHeader.css";

const UserHeaderContainer = ({ fluid, children }, {...props}) =>
  <div style={{ "paddingLeft": "0 !important", "paddingRight": "0 !important"}} className={"userHeaderContainer"}>

    {children}
  </div>;

export default UserHeaderContainer;
