import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Home />} path='/home'/>
      </Routes>
    </BrowserRouter>
  );
}
