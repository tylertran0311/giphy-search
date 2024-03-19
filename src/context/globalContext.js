import React, { useContext, useEffect, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";
import { GET_SEARCH, GET_TRENDING } from "../utils/globalActions";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    searchTerm: "",
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  //Get trening Gifs
  const getTrending = () => {
    dispatch({ type: GET_TRENDING });
  };

  //Get search Gifs
  const getSearch = (query) => {
    dispatch({ type: GET_SEARCH, payload: query });
  };

  //Get trending on initial render
  useEffect(() => {
    getTrending();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, getSearch, getTrending }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
