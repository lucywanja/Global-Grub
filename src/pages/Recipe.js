import React, { useEffect, useState } from 'react';
import { Link, useParams,useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  let { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((r) => r.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        console.log(location.state?.mealData)
      });
  }, [id]);

  return (
    <div>
      <Navbar category={location?.state?.mealData}/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {recipe ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-72 object-cover object-center"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{recipe.strMeal}</h2>
              <p className="text-lg font-normal text-gray-700">{recipe.strInstructions}</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Ingredients:</h3>
                <ul className="list-disc list-inside">
                  {Object.keys(recipe).map(key => {
                    if (key.startsWith('strIngredient') && recipe[key]) {
                      const measureKey = `strMeasure${key.slice(13)}`;
                      return (
                        <li key={key}>
                          {recipe[key]} - {recipe[measureKey]}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Recipe;
