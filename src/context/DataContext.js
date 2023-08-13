import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { movies } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = movies;
  const movieDataLocal = JSON.parse(localStorage.getItem("movideDataState"));

  const [state, dispatch] = useReducer(DataReducer, movieDataLocal);

  const addToWatchlist = (video) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: video });
  };
  const removeFromWatchlist = (video) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: video });
  };

  const removeStar = (video) => {
    dispatch({ type: "REMOVE_STAR", payload: video });
  };

  const addStar = (video) => {
    dispatch({ type: "ADD_STAR", payload: video });
  };

  useEffect(() => {
    localStorage.setItem(
      "movideDataState",
      JSON.stringify({
        allMovies: Data,
      })
    );
  }, [Data]);

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
