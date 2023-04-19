import React from "react";

// ovaj context koristimo za regulisanje cart contexta, niz itema, totalAmount => ukupna cena, addItem metoda (+ button), removeItem(- button) unutar cart forme
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
