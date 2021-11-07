import React from 'react';
import "./meals.css"
import { useLocation } from 'react-router-dom';
const Meals = () =>{
  const location = useLocation()
  const { height, weight } = location.state
  var calorie = parseInt(703 * (parseInt(height) / (parseInt(weight) * parseInt(weight)) * 1000))
  return (
    <body class="style">
    <div class="container">
      <p class="mealRes">meal results</p>
      <p class= "calorieyes">Caloric Intake : {calorie}</p>
      <div class="mealRect"></div>
      <div class="quoteRect"></div>
      <p class="quote">Healthy body, healthy life</p>
      <p class="protein">
        <em>Protein</em> (per oz)<br />Egg (boiled) - 78 cal - 3g protein<br />Chicken
        Breast - 47 cal - 9g protein<br />Beef - 49 cal - 7g protein<br />Lamb -
        83 cal - 7g protein<br />Salmon (cooked) - 50 cal - 6g protein<br />Shrimp
        - 28 cal - 7g protein<br />Tuna - 37 cal - 8g protein
      </p>
      <p class="fruits">
        <em>Fruits</em> (per oz)<br />Avocado - 45 cal<br />Banana - 25 cal<br />Apple
        - 15 cal<br />Orange -13 cal<br />Blueberry - 15 cal<br />Tomato - 5 cal
      </p>
      <p class="vegetables">
        <em>Vegetables</em> (per oz)<br />Broccoli - 10 cal<br />Asparagus - 5
        cal<br />Bell Peppers - 6 cal <br />Carrots - 12 cal<br />Cucumbers - 4
        cal<br />Kale - 14 cal<br />Green Beans - 9 cal
      </p>
      <p class="snacks">
        <em>Snacks</em> (per oz)<br />Almonds - 170 cal<br />Chia Seeds - 138
        cal<br />Coconut - 100 cal<br />Walnuts - 185 cal
      </p>
      <p class="grains">
        <em>Snacks</em> (per oz)<br />Brown Rice - 31 cal<br />Oats - 110 cal<br />Quinoa
        - 106 cal
      </p>
    </div>
  </body>
  );
}

export default Meals;