import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Add from "./components/RecipeAdd/Add";
import Login from "./views/Login/Login";
import Explore from "./views/Explore/Explore";
import Recipe from "./views/Recipe/Recipe";
import Search from "./views/Search/Search";
import Ingredients from "./views/Search/Ingredients";

export default function Routedpath() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        {/* 
        <Route path='profile'>
          <Route index element={<Profile />} />
          <Route index='edit' element={<Edit />} />
        </Route> */}

        <Route path='recipes'>
          <Route index element={<Add />} />
        </Route>

        <Route path='explore'>
          <Route index element={<Search />} />
          <Route path='all' element={<Explore />} />
          <Route path='ingredients' element={<Ingredients />} />
          <Route path=':recipeID' element={<Recipe />} />
        </Route>
      </Route>
    </Routes>
  );
}
