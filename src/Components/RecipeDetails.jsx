import React, { useState, useEffect } from 'react';
import './RecipeDetails.css'

const RecipeDetails = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (recipeId) {
      fetch(`https://dummyjson.com/recipes/${recipeId}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
        .catch(error => console.error('Error fetching recipe details:', error));
    }
  }, [recipeId]);

  if (!recipe) {
    return null; 
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{recipe.name}</h2>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <p>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
    </div>
  );
};

export default RecipeDetails