import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MoviePage from "../components/MoviePage/MoviePage";
import TvSeriesPage from "../components/TvSeriesPage/TvSeriesPage";

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
        path="/movie/:id"
        element={
          <Suspense>
            <MoviePage />
          </Suspense>
        }
      />

      <Route
        path="/tv-serie/:id"
        element={
          <Suspense>
            <TvSeriesPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
