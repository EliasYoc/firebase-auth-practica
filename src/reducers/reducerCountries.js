import { types } from "../types";

export const initialCountries = [];
export const reducerCountries = (state, action) => {
  switch (action.type) {
    case types.GET_COUNTRIES:
      return [...action.payload];
    case types.ADD_COUNTRY:
      return [...state, action.payload];
    case types.CLEAN_DATA:
      return initialCountries;
    case types.DELETE_COUNTRY:
      return state.filter((country) => country.id !== action.payload);
    default:
      return state;
  }
};
