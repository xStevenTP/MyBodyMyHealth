import React from 'react';
import './Navbar.css'
import {  Link } from "react-router-dom";

const Navbar = () => {
return (
	<div>
        <li  class = "title" >
            My Body, My Health 
        </li> 
        <li>
            <Link to = "/" class = "home">home</Link>
        </li>
        <li>
            <Link to = "/survey" class = "survey">survey</Link>
        </li>
        <li>
            <Link to = "/workouts"class = "workouts">workouts</Link>
        </li>
        <li>
            <Link to = "/meals" class = "meals">meals</Link>
        </li>
    </div>
  );
};

export default Navbar;


