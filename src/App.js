import React, { useState } from 'react';
import "./App.css";
import RecipeDropdown from "./Components/RecipeDropdown";
import RecipeDetails from './Components/RecipeDetails';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectRecipe = (recipeId) => {
    if (recipeId !== selectedRecipeId) {
      setSelectedRecipeId(recipeId); // Only update if recipeId changes
    }
  };

  return (
    <div className="App">
      <h1>Recipe Selector</h1>
      <RecipeDropdown onSelectRecipe={handleSelectRecipe} />
      {selectedRecipeId && <RecipeDetails recipeId={selectedRecipeId} />}
    </div>
  );
}

export default App;