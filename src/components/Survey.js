import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './survey.css';

const Survey = () =>{
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const getInitialState = () => {
    const value = " ";
    return value;
  };

  const [goal, setGoal] = useState(getInitialState);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const [muscle, setMuscle] = useState(getInitialState);

  const handleMuscleChange = (e) => {
    setMuscle(e.target.value);
  };

  return (
    <body> 
        <p class="quote">
            Everyday is a<br />
            good day to go<br />
            beast mode
        </p>
        <div class="surveyRect"></div>
        <div class = "sexBox">
        <form>
            <input
            type="text" 
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            />
        </form>
        </div>
        <div class = "weightBox">
        <form>
            <input
            type="text" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
            lbs
        </form>
        </div>
        <div class = "heightBox">
        <form>
            
            <input
            type="text" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            />
           in
        </form>
        </div>
        <div class = "goalBox">
        <div className = "select">
        <select value={goal} onChange={handleGoalChange}>
            <option value=""> </option>
            <option value="Maintain">Maintain</option>
            <option value="Cut">Cut</option>
            <option value="Bulk">Bulk</option>
        </select>
        </div>
        </div>
        <div class = "muscleBox">
        <div className = "select">
        <select value={muscle} onChange={handleMuscleChange}>
            <option value=""> </option>
            <option value="Arms">Arms</option>
            <option value="Back">Back</option>
            <option value="Legs">Legs</option>
            <option value="Abs">Abs</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Chest">Chest</option>
            <option value="Cardio">Cardio</option>
        </select>
        </div>
        </div>
        <p class="sex">sex</p>
      <p class="weight2">weight</p>
      <p class="height">height</p>
      <p class="goal">goal</p>
      <p class="muscle">muscle group</p>
       
    <div class="button">
      
      <Link to ={{ pathname : "/workouts", state : {muscle, height, weight}}} class = "getstart">workouts</Link>
     </div>
      
  </body>
  );
}

export default Survey;