import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { appData } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = appData;
  const appDataLocal = JSON.parse(localStorage.getItem("appDataState"));

  const [state, dispatch] = useReducer(DataReducer, appDataLocal);

  useEffect(() => {
    localStorage.setItem(
      "appDataState",
      JSON.stringify({
        allProducts: Data,
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
