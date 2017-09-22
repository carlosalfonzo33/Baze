import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/feed">
          Bart Feed
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/feed" ? "active" : ""}
        >
          <Link to="/feed">All</Link>
        </li>
        <li className={window.location.pathname === "/feed/myfeed" ? "active" : ""}>
          <Link to="feed/myfeed">My Posts</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
