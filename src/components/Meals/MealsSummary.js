import React from "react";

import styles from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Always fresh from Tims bakery!</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
      </p>

      <p>All our meals are cooked with high-quality ingredients, just in-time and of course by experienced chiefs!</p>
    </section>
  );
};

export default MealsSummary;
