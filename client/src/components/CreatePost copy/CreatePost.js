import React from "react";
import { Link } from "react-router-dom";
import "./createPost.css";



const CreatePost = props => (
	<button className="create-btn" {...props}>
       <Link to="/post"><i className="fa fa-pencil"></i></Link>
	</button>
	);

export default CreatePost;