import React, {useEffect, useState} from 'react';
import "./workouts.css";
import { Link, useLocation } from 'react-router-dom';
import * as Realm from 'realm-web'


const wplans = [
     ["Arms","Tricep Pulldown", "Dips", "Skull Crusher", "Tricep Extension", "Bicep Curls", "Preacher Curls", "Chin-ups", "Hammer Curl"]
  ,
  ["Legs","Bulgarian Split Squats", "Hip Thrusts", "Stair Master", "Romanian Deadlift", "Leg Press", "Leg Extension", "Calf Raises", "Lunges"]
  ,
     ["Back","Deadlift", "Pull-Ups", "Bent-Over Roll", "Lat Pulldown"]
  ,
    ["Abs","Crunches", "Russian Twists", "Plank", "Sit-Ups"]
    ,
["Shoulders","Dumbbell Shrugs", "Dumbbell Flys", "Shoulder Press", "Arnold Press"]
  ,
["Chest","Incline Dumbbell Press", "Bench Press", "Chest Fly", "Push-Ups"]
  ,
["Cardio","Jump Rope", "Treadmill", "Rowing", "Elliptical", "Biking", "Burpees"]
  
  ]

const Workouts = () =>{
  const location = useLocation()
  const { muscle, height, weight } = location.state
  const app = new Realm.App({id: process.env.REACT_APP_REALM_APP_ID})
  useEffect(() => {
    async function getData () {
        const user = await app.logIn(Realm.Credentials.anonymous())
      }
      getData();
  }, [])
  //const credentials = Realm.Credentials.anonymous();
  //app.logIn(credentials);
  //const client = app.currentUser.mongoClient('mongodb-atlas')
  const [wk, setWk] = useState([])
  const [loading, setLoading] = useState(true)
  /*
  useEffect(() => {
	  async function getData () {
    	//...
        const wks = client.db('MyBodyMyHealth').collection('Workouts')
        setWk(await wks.find({muscle}))
        
        setLoading(false)
    }
    
    if (loading) {
        getData();
    }
  }, [loading])
  */
  var wplan = 0
  for(let i = 0; i < wplans.length; i++){
    if (wplans[i][0] === muscle){
      wplan = i
    }
  }
  return (
    <body>
    <div class="container">
      <div class="workoutRect"></div>
      <div class="quoteRect2"></div>
      <p class="quote2">Consistency is key </p>
      <ul>
        <li><a class = "a" href="#workoutRes">workout results</a></li>
      </ul>
      <section id="home">
      <div >
            {wplans[wplan].slice(1).map((w) => (
              <li> {w} </li>
            ))}
        </div>
        <div class="section button">
            <Link to = {{ pathname : "/meals", state : {height, weight}}} class = "getstart">meals</Link>
        </div>
      </section>
    </div>
  </body>
  );
}

export default Workouts;