import React, { createContext, useContext, useReducer } from "react";

// Prepares el data layer:
export const StateContext = createContext();

// Provee el data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Saca la información del data layer:
export const useStateValue = () => useContext(StateContext);
