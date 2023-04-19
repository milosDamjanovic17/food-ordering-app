import React, { useReducer } from "react";

import CartContext from "./cart-context";

// instead of hard writing type in a String, store them in object
const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE' 
}

// defining default state object for a Cart component
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// state refers to the current state, action represents a function to be performed on the state
const cartReducer = (state, action) => {
  
  if (action.type === ACTIONS.ADD) {
    
    const updatedItems = state.items.concat(action.item);

    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
    };
  }
  
  return defaultCartState;
};


const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ACTIONS.ADD, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: ACTIONS.REMOVE, id: id });
  };


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
