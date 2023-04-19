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
  
  // add item logic
  if (action.type === ACTIONS.ADD) {

    // check if the item already exist in a cart,if the item we already look at, has same id as the item we are adding to action
    const existingCartItemIndex = state.items.findIndex(item => 
      item.id === action.item.id
    );

    // store existing item in constant
    const existingCartItem = state.items[existingCartItemIndex];


    let updatedItems;

    if(existingCartItem){ // logic if the item is already part of the cart (if the value is truthy)
      
      // update cart item number value & total amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      
      updatedItems = [...state.items]; // store to variable
      updatedItems[existingCartItemIndex] = updatedItem; // CHECK THIS ONE AGAIN

    }else{
      // if chosen item doesn't exist, concatinate with existing list
      updatedItems = state.items.concat(action.item);
    }

    // update total amount when we add item
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
    };
  }

  // item removal logic
  if(action.type === ACTIONS.REMOVE){

    
    const existingCartItemIndex = state.items.findIndex(item => 
      item.id === action.id)

      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItemIndex;
      let updatedItems;


      if(existingItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== action.id);
      }else{
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    };

  return defaultCartState;
};

  // useReducer for handling adding and removing items from Cart
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // adding the item to list
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ACTIONS.ADD, item: item });
  };

  // remove item from cart list, we just need an id of item in question, its binded to '-' button
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: ACTIONS.REMOVE, id: id });
  };


  /** 
   *  OBJECT WE'LL RENDER
   * 
   *  items => state tracked to monitor how many items are stored inside the cartState.items
   *  totalAmount => state tracked to monitor what amount value will be shown
   *  addItem => method that will add the item to cartState ( addItemToCartHandler will update how many items will be shown on cart items list, if item already exists increase amount value, if not concatinate item to already existing list )
   *  removeItem => method to remove item from a list or decrease quantity ('x') and decrease total amount value
   * 
   */
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // render cart-context.js, need to store in a value since its NOT OUR component
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
