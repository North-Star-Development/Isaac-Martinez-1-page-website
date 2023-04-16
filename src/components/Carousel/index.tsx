import { useState, useEffect } from 'react';
import { CarouselContainer } from './index.styles';
import { useWindowSize } from '@react-hook/window-size';



const Carousel : () => JSX.Element = () => {
  const [width]  = useWindowSize();

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
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleClickPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <CarouselContainer>
      <div className="carousel-images">
       <img alt='prev' onClick={handleClickPrev} className='btn' src="/assets/pngs/arrowleft.png"/>
       {[...images, ...images, ...images].slice(currentIndex, width > 999 ? currentIndex + 3 : width > 485 ?  currentIndex + 2 :  currentIndex + 1).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className={`imgs`} />
        ))}
       <img className='btn' alt='prev' onClick={handleClickNext} src="/assets/pngs/arrow-right.png"/>
      </div>
  
      <div className="carousel-buttons">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? 'active' : ''}
          >
          </button>
        ))}
      </div>
    
    </CarouselContainer>
  );
};

export default Carousel;
