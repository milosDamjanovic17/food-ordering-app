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

    // check if the item already exist in a cart, check if the item we already look at, has same id as the item we are adding to action
    const existingCartItemIndex = state.items.findIndex(item => 
      item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];


    let updatedItems;

    if(existingCartItem){ // logic if the item is already part of the cart
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

    }else{
      // if chosen item doesn't exist, concatinate with existing list
      updatedItems = state.items.concat(action.item);
    }

    // 
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
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
