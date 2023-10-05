import { bestDeals } from '../data';
import React, { useState, useEffect } from 'react';

const ProductTypes = React.memo((props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [slider, setSlider] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect will only run on mount and unmount

  useEffect(() => {
    if (windowWidth >= 380 && windowWidth <= 410) {
      setSlider(60);
      console.log('true');
    }

    if (windowWidth >= 410) {
      setSlider(55);
      console.log('55');
    }

    if(windowWidth < 864 && windowWidth > 764) {
      setSlider(25)
    }

    if (windowWidth > 1280) {
      setSlider(15)
      console.log('15')
    }
  }, [windowWidth]);

  useEffect(() => {
    let lastIndex = 2
    if (sliderIndex < 0) {
      setSliderIndex(lastIndex);
    }
    if (sliderIndex > lastIndex) {
      setSliderIndex(0);
    }
  }, [sliderIndex, windowWidth]);

  console.log(windowWidth);
  console.log(slider)

  const handleSlide = (d) => {
    if (d === 'left') {
      setSliderIndex(sliderIndex - 1);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  return (
    <div className="product-types-container">
      <div className="product-type">
        {sliderIndex > 0 && (
          <div
            className="product-arrow left"
            onClick={() => handleSlide('left')}
          >
            <i className="fa fa-arrow-left"></i>
          </div>
        )}
        <div className="product-type-image">
          <img src="./shopdoora/vape-dark.jpg" alt="Vape Dark" />
          <div className="product-type-image-info">
            <h1>{props.title}</h1>
            <p>{props.info}</p>
          </div>
        </div>
        <div
          className="product-types-posts"
          style={{ transform: `translateX(${sliderIndex * -slider}vw)` }}
        >
          {bestDeals.map((item) => (
            <div className="product-types-post" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="product-types-info">
                <div className="product-types-name">{item.name}</div>
                <div className="product-types-price">
                  {item.currentPrice.toLocaleString()} MMK
                </div>
                <div className="product-types-points">
                  <i className="fa fa-star"></i> {item.points} points
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="product-arrow right"
          onClick={() => handleSlide('right')}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
});

ProductTypes.displayName = 'ProductTypes';

export default ProductTypes;
