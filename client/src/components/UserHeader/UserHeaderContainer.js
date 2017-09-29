import React from "react";
import "./userHeader.css";

const UserHeaderContainer = ({ fluid, children }, {...props}) =>
  <div className={"userHeaderContainer"}>
    {children}
  </div>;

export default UserHeaderContainer;
