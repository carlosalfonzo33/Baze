import React from "react";
import "./LogoutBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LogoutBtn = props => (
  <button className="logout-btn" {...props}>
  <i className="fa fa-logout-o" aria-hidden="true"></i>

  </button>
);

export default LogoutBtn;
