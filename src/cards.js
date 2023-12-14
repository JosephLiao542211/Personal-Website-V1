import React, { useState, useEffect } from 'react';
import './Card.css';

function Card() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Import all images from the "images" folder dynamically
    const importImages = async () => {
      const context = require.context('./images', false, /\.(png|jpe?g|svg)$/);
      const keys = context.keys();
      const images = await Promise.all(keys.map(key => import(`./images${key.slice(1)}`)));
      setImages(images);
    };

    importImages();
  }, []);

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <div className='card'>
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.default}
              alt={`image-${index}`}
              style={{ display: index === current ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Card;
