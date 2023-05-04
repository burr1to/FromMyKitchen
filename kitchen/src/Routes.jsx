import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Add from "./components/RecipeAdd/Add";
import Login from "./views/Login/Login";
import Explore from "./views/Explore/Explore";
import Recipe from "./views/Recipe/Recipe";
import Search from "./views/Search/Search";
import Ingredients from "./views/Search/Ingredients";
import Test from "./components/RecipeAdd/Test";
import Register from "./views/Login/Register";
import Tag from "./views/Search/Tag";
import Edit from "./components/Profile/Edit";
import Profile from "./views/Profile/Profile";

export default function Routedpath() {
  return (
    <Routes>
      <Route path='/'>
        <Route path='test' element={<Test />} />
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Register />} />

        <Route path='profile'>
          <Route path=':id' element={<Profile />} />
          <Route path='edit' element={<Edit />} />
        </Route>

        <Route path='recipes'>
          <Route index element={<Search />} />
          <Route path='ingredients' element={<Ingredients />} />
          <Route path='add' element={<Add />} />
        </Route>

        <Route path='explore'>
          <Route index element={<Explore />} />
          <Route path=':recipeID' element={<Recipe />} />
        </Route>

        <Route path=':tag' element={<Tag />} />
      </Route>
    </Routes>
  );
}
