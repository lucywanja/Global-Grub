import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, addFavorite, favorites }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className="recipe-card-content">
            <h3 className="recipe-card-title">{recipe.strMeal}</h3>
            <div className="recipe-card-buttons">
              <Link to={`/recipes/${recipe.idMeal}`}>View</Link>
              <button 
                onClick={() => addFavorite(recipe)} 
                disabled={favorites.some(fav => fav.idMeal === recipe.idMeal)}
                style={{ 
                  backgroundColor: favorites.some(fav => fav.idMeal === recipe.idMeal) ? 'gray' : '#007BFF',
                  cursor: favorites.some(fav => fav.idMeal === recipe.idMeal) ? 'not-allowed' : 'pointer'
                }}
              >
                {favorites.some(fav => fav.idMeal === recipe.idMeal) ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;




