// src/context/AppContext.js

import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [category, setCategory] = useState('Mountain');
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <AppContext.Provider value={{ category, setCategory, searchResults, setSearchResults }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
