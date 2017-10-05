import React from "react";
import { Link } from "react-router-dom";
import "./createPost.css";



const CreatePost = props => (
	<Link to="/post"><button className="create-btn" {...props}>
			 create post
       <i className="fa fa-pencil"></i>
	</button></Link>
	);

export default CreatePost;
