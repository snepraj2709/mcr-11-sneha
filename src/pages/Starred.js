import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Feed from "../components/Feed";
import MovieFilters from "../components/MovieFilters";
import { useData } from "../context/DataContext";

function Starred() {
  const { state } = useData();
  const filteredMovies = state?.allMovies.filter((movie) => movie.starred);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="overflow-hidden flex flex-col lg:max-w-6xl grow mx-auto">
        <MovieFilters page="Starred" />
        <Feed list={filteredMovies} />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default Starred;
