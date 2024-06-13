import logo from '../logo.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
        path: "/recipe",
        element: <Recipe />
      }
  ]);  


  return (
    <div>
        <RouterProvider router={router} />

    </div>
    
  );
}

export default App;
