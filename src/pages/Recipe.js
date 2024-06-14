import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom';

const Recipe = () => {
  
  const [recipes, setRecipes ] = useState([]);
  
  let {id}  = useParams();
  
  useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
      .then((r) => r.json())
      .then((data) => {
        setRecipes(data.meals[0])
      console.log(recipes);
      });
      
  }, []);
  return (
    <div>{recipes.strMeal}<br/>
    {recipes.strInstructions}
    </div>
  )
}

export default Recipe