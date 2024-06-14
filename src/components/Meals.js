import { React,useEffect,useState } from 'react';
import {  Link, useParams } from 'react-router-dom';


function Meals() {

    const [meallist, setMeallist ] = useState([]);

let {categories}  = useParams();
// console.log(cat)

useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+categories)
    .then((r) => r.json())
    .then((data) => setMeallist(data.meals));
    
}, []);

  return (
    <div>
         <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meallist.map((item) => (
            <Link to={'/recipe/'+item.idMeal}>
            <div
              key={item.idCategory}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={item.strMealThumb}
                  alt={item.strMeal}
                />
              </a>

              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {item.strMeal}
                  </h5>
                </a>


              </div>
            </div>
            </Link>
          ))}
        </div> 
    </div>
  )
}

export default Meals;