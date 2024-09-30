import React, { useState } from 'react';
import "./App.css";
import RecipeDropdown from "./Components/RecipeDropdown";
import RecipeDetails from './Components/RecipeDetails';


function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectRecipe = (recipeId) => {
    setSelectedRecipeId(recipeId);
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
