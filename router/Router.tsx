import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/test"
        element={
          <Suspense>
            <div>Test</div>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
