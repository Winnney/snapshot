// src/components/SearchPage.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import "./SearchPage.css"
import "./Style.css"
import Navbar from './Navbar';
import FoundPage from './FoundPage';
function SearchPage() {

  const { searchResults, setSearchResults } = useAppContext();

  

  return (
    <>
      <div className="container">
        {/* <h1>Search</h1> */}
       <FoundPage />
        <div className='nav-in'>  <Navbar /></div>
      </div>
      <div className="image-grid">
        {searchResults.map((photo) => (
          <div className="card" key={photo.id}>
            <img
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={photo.title}
            />
          </div>
        ))}
      </div>

    </>

  );
}

export default SearchPage;
