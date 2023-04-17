import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import foodImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Tim Hortons Mobile Ordering App</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImage} alt="A table full of Tim Hortons food" />
      </div>
    </Fragment>
  );
};

export default Header;
