import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredient) => [
      ...prevIngredient,
      { id: Math.random().toString(), ...ingredient },
    ]);
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
