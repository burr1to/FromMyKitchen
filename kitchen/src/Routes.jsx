import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Test from "./components/RecipeAdd/Test";
import Add from "./components/RecipeAdd/Add";
import Login from "./views/Login/Login";
import Explore from "./views/Explore/Explore";

export default function Routedpath() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes/add' element={<Add />} />
      {/* <Route path='/recipes/test' element={<Test />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/explore' element={<Explore />} />
    </Routes>
  );
}
