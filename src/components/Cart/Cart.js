import React, {useContext} from "react";

import Modal from "../UI/Modal";
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  

  const cartCtx = useContext(CartContext);
  
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  // remove item from cart list
  const cartItemRemoveHandler = id => {};

  // increase quantity of an item inside cart list
  const cartItemAddHandler = item => {};
  
  
  // function for displaying each meal item we select from Meal list
  const cartItems = (
    
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}>
        </CartItem>
      ))}
    </ul>
  
  );// .bind predefines paramateres

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span> {/* total price */}
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
