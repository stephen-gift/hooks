import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    fetch(
      "https://stephen-hooks-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        header: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredient) => [
          ...prevIngredient,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const onRemoveIngredient = (ingredientId) => {
    setUserIngredients((prevIngredient) =>
      prevIngredient.filter((ingredient) => ingredientId !== ingredient.id)
    );
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={onRemoveIngredient}
        />
      </section>
    </div>
  );
};

export default Ingredients;
