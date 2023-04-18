import React from "react";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon /> {/* svgs can be used as React components */}
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>4</span>
    </button>
  );
};

export default HeaderCartButton;
