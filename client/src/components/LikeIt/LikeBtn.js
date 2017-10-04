import React from "react";
import { Link } from "react-router-dom";
import "./LikeIt.css";



const LikeBtn = props => (
	<button className="like-btn" {...props}>
       <i className="fa fa-thumbs-up"></i>
	</button>
	);

export default LikeBtn;
