import React from "react";

import styles from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Always fresh from Tims bakery!</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>

      <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </section>
  );
};

export default MealsSummary;
