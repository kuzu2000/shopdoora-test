import { bestDeals } from '../data';
import React, { useState, useEffect, useRef } from 'react';

const ProductTypes = React.memo((props) => {
  const windowWidth = useRef(window.innerWidth);
  const [sliderIndex, setSliderIndex] = useState(0);

  let slider;
  if (windowWidth.current > 480) {
    slider = 15;
  }
  else if (windowWidth.current >= 410 && windowWidth.current < 460) {
    slider = 60;
  } else if (windowWidth.current >= 375 && windowWidth.current <= 410) {
    slider = 65;
  }  else if (windowWidth.current > 1410) {
    slider = 15
  }

  console.log(slider)

  useEffect(() => {
    let lastIndex;
    if (slider === 65 || slider === 60) {
      lastIndex = 2;
    } else {
      lastIndex = bestDeals.length - 1
    }
    if (sliderIndex < 0) {
      setSliderIndex(lastIndex);
    }
    if (sliderIndex > lastIndex) {
      setSliderIndex(0);
    }
  }, [slider, sliderIndex]);

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
