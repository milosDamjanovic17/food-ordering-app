import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import foodImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Tim Hortons</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* background image */}
      <div className={styles["main-image"]}>
        <img src={foodImage} alt="A table full of Tim Hortons food" />
      </div>
    </Fragment>
  );
};

export default Header;
