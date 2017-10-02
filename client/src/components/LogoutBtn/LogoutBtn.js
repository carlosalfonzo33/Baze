import React from "react";
import { Link } from "react-router-dom";
import "./LogoutBtn.css";

const LogoutBtn = props => (
  <button className="logout-btn" {...props}>
  <Link to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i></Link>
  </button>

);

export default LogoutBtn;
