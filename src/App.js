// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import MountainPage from './components/MountainPage';
import BeachesPage from './components/BeachesPage';
import FoodPage from "./components/FoodPage";
import BirdsPage from "./components/BirdsPage"
import SearchPage from "./components/SearchPage"
import "./App.css"



function App() {
  return (
    <AppProvider>
     
      <Router>
      <h1 className='heading'>Snapshot</h1>

         
        <Routes>
          <Route path="/mountain" element={<MountainPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/beaches" element={<BeachesPage />} />
          <Route path="/birds" element={<BirdsPage />} />
          <Route path="/" element={<SearchPage />} />
         </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
