// src/components/BirdsPage.js (similar structure for other category pages)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Style.css"
import Navbar from './Navbar';
import FoundPage from './FoundPage';

function BirdsPage() {
  const [birdsImages, setBirdsImages] = useState([]);

  useEffect(() => {
    // Fetch birds images from Flickr API
    const fetchBirdsImages = async () => {
      try {
        const response = await axios.get(
          // Use the Flickr API endpoint to fetch images for the 'Birds' category
          // You may need to sign up for a Flickr API key and replace 'YOUR_API_KEY' with your actual key
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=42ec2cf4ebd1a793161fcb05e36d9d84&tags=Birds&format=json&nojsoncallback=1`
        );

        setBirdsImages(response.data.photos.photo);
      } catch (error) {
        console.error('Error fetching birds images', error);
      }
    };

    fetchBirdsImages();
  }, []);

  return (
    
    <div>
     <div className="container">
    <FoundPage />
    </div>
    <div className='nav-in'>  <Navbar /></div>
      <h1 className='btn-heading'>Birds</h1>
      <div className="image-grid">
        {birdsImages.map((photo) => (
          <div className="card" key={photo.id}>
          <img
            key={photo.id}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
          </div>
        ))}
      </div>
    </div>
  );
}




export default BirdsPage;
