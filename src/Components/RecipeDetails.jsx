import React, { useState, useEffect, useRef } from 'react';
import './RecipeDetails.css';

// Helper function to check cache for recipe data
const getCachedRecipe = async (recipeId) => {
  const cache = await caches.open('recipes-api-cache');
  const cachedResponse = await cache.match(`https://dummyjson.com/recipes/${recipeId}`);
  if (cachedResponse) {
    const cachedData = await cachedResponse.json();
    console.log(`Serving recipe ${recipeId} from cache`);
    return cachedData;
  }
  return null;
};

const RecipeDetails = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const fetchInProgress = useRef(false); // Prevent multiple fetches

  useEffect(() => {
    if (fetchInProgress.current) return; // Prevent multiple fetches

    const fetchRecipe = async () => {
      // Set flag to true to prevent multiple fetches
      fetchInProgress.current = true;

      // Check if the recipe is cached first
      const cachedRecipe = await getCachedRecipe(recipeId);
      if (cachedRecipe) {
        setRecipe(cachedRecipe);
        fetchInProgress.current = false; // Reset fetch flag after fetching
        return;
      }

      // Fetch from network if not cached
      console.log(`Fetching recipe ${recipeId} from network`);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        const data = await response.json();
        setRecipe(data); // Update state with the fetched recipe
        fetchInProgress.current = false; // Reset fetch flag after fetching
      } catch (err) {
        console.error('Error fetching recipe details:', err);
        setError('Failed to load recipe details.');
        fetchInProgress.current = false; // Reset fetch flag on error
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (error) {
    return <div className="recipe-details error">{error}</div>;
  }

  if (!recipe) {
    return <div className="recipe-details loading">Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <h2>{recipe.name}</h2>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
      </p>
      <p className="instructions">
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <p className="difficulty">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
    </div>
  );
};

export default RecipeDetails