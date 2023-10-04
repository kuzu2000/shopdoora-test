import { bestDeals } from '../data';
import { useState, useEffect } from 'react';

const ProductTypes = (props) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const lastIndex = 2;
    if (sliderIndex < 0) {
      setSliderIndex(lastIndex);
    }
    if (sliderIndex > lastIndex) {
      setSliderIndex(0);
    }
  }, [sliderIndex]);

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
          style={{ transform: `translateX(${sliderIndex * -23}vw)` }}
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
};

export default ProductTypes;
