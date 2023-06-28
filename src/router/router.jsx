import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { CssBaseline } from "@nextui-org/react";

export default function Router() {
  return (
    <CssBaseline>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<MainPage />} path="/home" />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}
