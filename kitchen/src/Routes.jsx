import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";

export default function Routedpath() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
