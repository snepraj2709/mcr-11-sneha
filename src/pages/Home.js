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
    const input = state?.searchInput;

    const searchedMovies =
      input === ""
        ? [...state?.allMovies]
        : state?.allMovies?.filter((movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase())
          );

    const genreFiltered =
      genre === "all"
        ? [...searchedMovies]
        : searchedMovies?.filter((movie) => {
            return movie.genre.includes(genre) ? movie : null;
          });

    const yearFiltered =
      year !== "all"
        ? genreFiltered?.filter((movie) => movie.year === parseInt(year))
        : genreFiltered;

    const ratingFiltered =
      rating !== "all"
        ? yearFiltered?.filter((movie) => movie.rating === parseInt(rating))
        : yearFiltered;

    filteredArray.push(...ratingFiltered);
    setFilteredMovies(filteredArray);
  };
  useEffect(() => {
    filteredMovieArray();
  }, [
    state?.allMovies,
    state?.searchInput,
    state.selectedGenre,
    state.selectedYear,
    state.selectedRating,
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="overflow-hidden flex flex-col lg:max-w-6xl grow mx-auto">
        <MovieFilters page="All Movies" />
        <Feed list={filteredMovies} />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
