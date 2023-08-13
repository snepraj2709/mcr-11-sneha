import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { movies } from "../data/data";
import { toast } from "react-hot-toast";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = movies;
  const movieDataLocal = JSON.parse(localStorage.getItem("movieDataState"));

  const [state, dispatch] = useReducer(DataReducer, movieDataLocal);

  const addToWatchlist = (video) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: video });
    toast.success("Added to Watchlist");
  };
  const removeFromWatchlist = (video) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: video });
    toast.success("Removed from Watchlist");
  };

  const removeStar = (video) => {
    dispatch({ type: "REMOVE_STAR", payload: video });
    toast.success("Added to Star");
  };

  const addStar = (video) => {
    dispatch({ type: "ADD_STAR", payload: video });
    toast.success("Removed from Starred");
  };

  useEffect(() => {
    localStorage.setItem(
      "movieDataState",
      JSON.stringify({
        allMovies: Data,
        selectedGenre: "all",
        selectedYear: "all",
        selectedRating: "all",
        searchInput: "",
      })
    );
  }, [state?.allMovies, Data]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        addToWatchlist,
        removeFromWatchlist,
        addStar,
        removeStar,
      }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
