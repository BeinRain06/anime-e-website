import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

// pull information from data layer
export const useStateValue = useContext(StateContext);

//  fill our StateProvider with data
export const StateProvider = ({ initialState, reducer, children }) => {
  <StateContext.Provider value={useReducer(initialState, reducer)}>
    {children}
  </StateContext.Provider>;
};
