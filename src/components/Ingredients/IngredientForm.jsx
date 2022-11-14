import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
  });
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const inputData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
    };
    
    console.log(inputData);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" onChange={titleChangeHandler} />
          </div>

          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={amountChangeHandler} />
          </div>

          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>

        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
