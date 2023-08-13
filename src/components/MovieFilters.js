import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function MovieFilters() {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const allGenre = state?.allMovies.reduce(
    (acc, curr) =>
      curr.genre?.reduce(
        (acc, el) => (acc.includes(el) ? acc : [...acc, el]),
        acc
      ),
    []
  );

  const allReleaseYears = state?.allMovies?.reduce(
    (acc, curr) => (acc.includes(curr.year) ? acc : [...acc, curr.year]),
    []
  );

  const allRatings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const genreChangeHandler = (e) => {
    dispatch({ type: "SELECT_GENRE", payload: e.target.value });
  };

  const releaseYearChangeHandler = (e) => {
    dispatch({ type: "SELECT_RELEASE_YEAR", payload: e.target.value });
  };

  const ratingChangeHandler = (e) => {
    dispatch({ type: "SELECT_RATING", payload: e.target.value });
  };

  return (
    <div className="flex justify-between align-middle py-3">
      <p className="font-bold text-2xl">Movies</p>
      <select
        className="bg-inherit cursor-pointer w-auto"
        onChange={(e) => genreChangeHandler(e)}>
        <option className="dark:bg-slate-700 dark:text-white" value="all">
          All Genre
        </option>
        {allGenre?.map((genre, index) => (
          <option
            className="dark:bg-slate-700 dark:text-white"
            value={genre}
            key={index}>
            {genre}
          </option>
        ))}
      </select>

      <select
        className="bg-inherit cursor-pointer"
        onChange={(e) => releaseYearChangeHandler(e)}>
        <option className="dark:bg-slate-700 dark:text-white" value="all">
          Release Year
        </option>
        {allReleaseYears?.map((releaseYear, index) => (
          <option
            className="dark:bg-slate-700 dark:text-white"
            value={releaseYear}
            key={index}>
            {releaseYear}
          </option>
        ))}
      </select>

      <select
        className="bg-inherit cursor-pointer"
        onChange={(e) => ratingChangeHandler(e)}>
        <option className="dark:bg-slate-700 dark:text-white" value="all">
          Rating
        </option>
        {allRatings?.map((rating) => (
          <option
            className="dark:bg-slate-700 dark:text-white"
            value={rating}
            key={rating}>
            {rating}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-500 p-3 text-white rounded-md cursor-pointer"
        onClick={() => navigate("/movie/add")}>
        Add a Movie
      </button>
    </div>
  );
}

export default MovieFilters;