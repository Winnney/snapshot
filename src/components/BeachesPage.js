// src/components/BeachesPage.js (similar structure for other category pages)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Style.css"
import Navbar from './Navbar';
import FoundPage from './FoundPage';
function BeachesPage() {
  const [beachesImages, setBeachesImages] = useState([]);

  useEffect(() => {
    // Fetch beach images from Flickr API
    const fetchBeachesImages = async () => {
      try {
        const response = await axios.get(
          // Use the Flickr API endpoint to fetch images for the 'Beaches' category
          // You may need to sign up for a Flickr API key and replace 'YOUR_API_KEY' with your actual key
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=42ec2cf4ebd1a793161fcb05e36d9d84&tags=Beaches&format=json&nojsoncallback=1`
        );

        setBeachesImages(response.data.photos.photo);
      } catch (error) {
        console.error('Error fetching beach images', error);
      }
    };

    fetchBeachesImages();
  }, []);

  return (
    <div>
     <div className="container">
    <FoundPage />
    </div>
    <div className='nav-in'>  <Navbar /></div>
    <h1 className='btn-heading'>Beaches</h1>
    <div className="image-grid">
      {beachesImages.map((photo) => (
        <div className="card" key={photo.id}>
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
        </div>
      ))}
    </div>
  </div>
  
  
  );
}

export default BeachesPage;
