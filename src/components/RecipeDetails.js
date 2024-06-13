import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.idMeal === id);
  
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      name: reviewerName,
    };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setReviewerName('');
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <p><strong>{review.name}:</strong> {review.text}</p>
        </div>
      ))}
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default RecipeDetail;