import React from 'react';
import './home.css';
import utensils from '../utensils.png';
import weight from '../weight.png';
import {  Link } from "react-router-dom";
const home = () =>{
  return (
    
  <body>
    <p class="welcome">welcome</p>
    <p class="quote">
      Get fit,<br />
      Stay healthy
    </p>
    <p class="description">
      Introducing My Body, My Health,<br />
      a website designed for gym workouts and<br />
      meal planning specifically for those <br />targetting specific goals.
    </p>

    <div class="bottomRect"></div>
    <div class="welcomeRect"></div>
    <div class="middleRect"></div>
    <div class="button">
        <Link to = "/survey" class = "getstart">get started</Link>
    </div>
    <div class="weight">
      <img
        src={weight}
        class = "weightpic"
        alt="weight"
        width="100px"
        height="100px"
      />
    </div>
    <div class="utensil">
      <img
        src={utensils}
        alt="utensils"
        width="100px"
        height="100px"
      />
    </div>
  </body>


  );
}

export default home;