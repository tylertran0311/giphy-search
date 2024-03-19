import { GET_SEARCH, GET_TRENDING } from "../utils/globalActions";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        searchTerm: "",
      };
    case GET_SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      break;
  }
  return state;
};
