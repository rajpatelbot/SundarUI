import React, { createContext } from "react";

/**
 * * Context creation ✅
 */
const DataContext = createContext(null);

/**
 * * Provider ✅
 */
const DataProvider = ({ children }) => {
    return (
      <DataContext.Provider value={"Raj Patel"}>
        {children}
      </DataContext.Provider>  
    );
}

export { DataContext, DataProvider };
