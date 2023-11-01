import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function foundPage() {
    const navigate = useNavigate();
    const { searchResults, setSearchResults } = useAppContext();
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = async () => {
        navigate('/');
        try {
          const response = await axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=42ec2cf4ebd1a793161fcb05e36d9d84&text=${searchQuery}&format=json&nojsoncallback=1`
          );
    
          setSearchResults(response.data.photos.photo);
        } catch (error) {
          console.error('Error searching for images', error);
        }
      };
  return (
    <div>

<div className='search-btn'>
          <input
            type="text"
            placeholder="Search for photos"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      
    </div>
  )
}
