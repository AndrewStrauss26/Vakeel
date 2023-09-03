import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Pages/Home/Home";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};