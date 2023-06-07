import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Add from "./components/RecipeAdd/Add";
import Login from "./views/Login/Login";
import Explore from "./views/Explore/Explore";
import Recipe from "./views/Recipe/Recipe";
import Search from "./views/Search/Search";
import Ingredients from "./views/Search/Ingredients";
import Register from "./views/Login/Register";
import Tag from "./views/Search/Tag";
import Edit from "./components/Profile/Edit";
import Profile from "./views/Profile/Profile";
import Update from "./components/RecipeAdd/Update";

export default function Routedpath() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Register />} />

        <Route path='profile'>
          <Route path=':id' element={<Profile />} />
          <Route path=':id/edit' element={<Edit />} />
        </Route>

        <Route path='recipes'>
          <Route index element={<Search />} />
          <Route path='add' element={<Add />} />
          <Route path=':tag' element={<Tag />} />
        </Route>

        <Route path='explore'>
          <Route index element={<Explore />} />
          <Route path='ingredients' element={<Ingredients />} />
          <Route path=':recipeID' element={<Recipe />} />
          <Route path=':recipeID/update' element={<Update />} />
        </Route>
      </Route>
    </Routes>
  );
}
