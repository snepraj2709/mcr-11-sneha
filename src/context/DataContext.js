import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { movies } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = movies;
  const movieDataLocal = JSON.parse(localStorage.getItem("movideDataState"));

  const [state, dispatch] = useReducer(DataReducer, movieDataLocal);

  useEffect(() => {
    localStorage.setItem(
      "movideDataState",
      JSON.stringify({
        allMovies: Data,
      })
    );
  }, [Data]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
