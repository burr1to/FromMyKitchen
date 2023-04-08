import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Test from "./components/RecipeAdd/Test";
import Add from "./components/RecipeAdd/Add";
import Login from "./views/Login/Login";
import Explore from "./views/Explore/Explore";
import Recipe from "./views/Recipe/Recipe";

export default function Routedpath() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes/add' element={<Add />} />

      <Route path='/login' element={<Login />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/indi' element={<Recipe />} />
    </Routes>
  );
}
