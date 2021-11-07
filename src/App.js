import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Survey from "./components/Survey";
import meals from "./components/meals";
import workouts from "./components/workouts";
import home from "./components/home"

function App() {
  return (
    <div class = "App-header">
    <Router>
      <Navbar /> 
      <Switch>
        <Route path='/' exact component ={home} />
        <Route path='/survey' component={Survey} />
        <Route path='/workouts' component={workouts} />
        <Route path='/meals' component={meals} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
