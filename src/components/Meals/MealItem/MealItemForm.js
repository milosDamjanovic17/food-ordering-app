import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  // listening to amount value on form, if user enteres value below 1 or greater than 5, prevent amount input submission
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumberConversion = +enteredAmount; // convert value from string to Number/Integer

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumberConversion < 1 ||
      enteredAmountNumberConversion > 5
    ) {
      setAmountIsValid(false);
      enteredAmount = 0;
      return;
    }

    props.onAddToCart(enteredAmountNumberConversion);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount__" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5)!</p>}
    </form>
  );
};

export default MealItemForm;
