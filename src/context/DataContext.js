import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { movies } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = movies;
  const dataInitialState = {
    allMovies: [],
    selectedGenre: "all",
    selectedYear: "all",
    selectedRating: "all",
    searchInput: "",
  };
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);

  useEffect(() => {
    const LocalMovieData = localStorage.getItem("movieDataState");
    console.log("LocalMovieData", JSON.parse(LocalMovieData));
    if (LocalMovieData) {
      dispatch({
        type: "FETCH_INITIAL_DATA",
        payload: JSON.parse(LocalMovieData),
      });
    } else {
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
    }
  }, [Data]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
