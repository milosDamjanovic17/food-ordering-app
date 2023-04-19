import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const [btnIshighlighted, setBtnIsHighlighted] = useState(false);
  
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;
  
  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);


  const btnClasses = `${styles.button} ${btnIshighlighted ? styles.bump : ''}`

  // use effect to activate .bump animation whenever user adds item to cart
  useEffect(() => {
    if(cartCtx.items.length === 0){
      return
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    // cleanup method
    return () => {
      clearTimeout(timer);
    }
  }, [items]); 

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon /> {/* svgs can be used as React components */}
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
