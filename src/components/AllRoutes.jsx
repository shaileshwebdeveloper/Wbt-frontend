import React from "react";
import { Route, Routes } from "react-router-dom";
import { Forms } from "./Forms";
import { Employees } from "./Employees";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/employees" element={<Employees />} />
      <Route path="/" element={<Forms />}></Route>
    </Routes>
  );
};
