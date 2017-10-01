import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CreatePost from '../CreatePost';
import LogoutBtn from "../LogoutBtn";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="nav navbar navbar-default" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
       <button className="navbar-toggle collapsed"
                      type="button" data-toggle="collapse"
                data-target="#feedNav">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
               </button>
        <Link className="navbar-brand" to="/feed">
          Bart Feed
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="feedNav">
        <ul className="nav navbar-nav">
          <li
            className={
              window.location.pathname === "/feed" ? "active" : ""}>
            <Link to="/feed">All</Link>
          </li>
          <li className={window.location.pathname === "/feed/delayfeed" ? "active" : ""}>
            <Link to="/feed/delayfeed">Delay Posts</Link>
          </li>
          <li className={window.location.pathname === "/feed/station" ? "active" : ""}>
            <Link to="/feed/station">Station Posts</Link>
          </li>
          <li className={window.location.pathname === "/feed/train" ? "active" : ""}>
            <Link to="/feed/train">Train Posts</Link>
          </li>
          <li className={window.location.pathname === "/feed/myfeed" ? "active" : ""}>
            <Link to="/feed/myfeed">My Posts</Link>
          </li>
        </ul>
      </div>
      <LogoutBtn />
      <CreatePost />
    </div>
  </nav>;

export default Navbar;
