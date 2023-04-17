import React from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <main>
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
};

export default Meals;
