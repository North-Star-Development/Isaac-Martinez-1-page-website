import { useState, useEffect } from 'react';




const Carousel : () => JSX.Element = () => {
    // images
    const images : string[] = [
        '/assets/pngs/merchant1.png',
        '/assets/pngs/merchant2.png',
        '/assets/pngs/merchant3.png',
        '/assets/pngs/merchant4.png',
        '/assets/pngs/merchant5.png'
    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleClickPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="carousel-buttons">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="carousel-arrows">
        <button onClick={handleClickPrev}>&lt;</button>
        <button onClick={handleClickNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
