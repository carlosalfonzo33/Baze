import React from "react";
import { Link } from "react-router-dom";
import "./LikeIt.css";



const LikeBtn = props => (
    <i className="fa fa-thumbs-up like-btn" {...props}></i>
	);

export default LikeBtn;
