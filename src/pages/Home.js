import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useData } from "../context/DataContext";
import MovieFilters from "../components/MovieFilters";
import { useEffect, useState } from "react";

export default function Home() {
  const { state } = useData();
  const [filteredMovies, setFilteredMovies] = useState([...state?.allMovies]);

  const filteredMovieArray = () => {
    const filteredArray = [];
    const genre = state?.selectedGenre;
    const year = state?.selectedYear;
    const rating = state?.selectedRating;

    const genreFiltered =
      genre === "all"
        ? [...state?.allMovies]
        : state?.allMovies?.filter((movie) => {
            return movie.genre.includes(genre) ? movie : null;
          });

    const yearFiltered =
      year !== "all"
        ? genreFiltered?.filter((movie) => movie.year === parseInt(year))
        : genreFiltered;

    const ratingFiltered =
      rating !== "all"
        ? yearFiltered?.filter((movie) => movie.rating === rating)
        : yearFiltered;

    filteredArray.push(...ratingFiltered);
    setFilteredMovies(filteredArray);
  };
  useEffect(() => {
    filteredMovieArray();
  }, [state.selectedGenre, state.selectedYear, state.selectedRating]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="overflow-hidden flex flex-col lg:max-w-6xl grow mx-auto">
        <MovieFilters />
        <Feed list={filteredMovies} />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
