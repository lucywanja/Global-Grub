import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import RecipeForm from './RecipeForm';
import FeedbackForm from './FeedbackForm';
import Home from './Home'; 
import '../App.css'; 

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals || []))
      .catch(error => console.error('Error fetching recipes:', error));
  }, [searchTerm]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const addFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="grid-container">
      <Router>
        <div className="title-grid">
          <h1>Find My Recipe</h1>
        </div>
        <div className="navbar-grid">
          <NavBar handleSearch={handleSearch} />
        </div>
        <div className="main-grid">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList recipes={recipes} addFavorite={addFavorite} favorites={favorites} />} />
            <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
            <Route path="/add-recipe" element={<RecipeForm addRecipe={addRecipe} />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<RecipeList recipes={favorites} addFavorite={addFavorite} favorites={favorites} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;