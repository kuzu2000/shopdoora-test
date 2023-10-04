import { useState, useEffect } from 'react';
import { tryNewSLider } from '../data';
const TryNewSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const lastIndex = tryNewSLider.length - 1;
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
    <div className="try-container">
      {sliderIndex > 0 && 
      (
        <div className="arrow left" onClick={() => handleSlide('left')}>
        <i className="fa fa-arrow-left"></i>
      </div>
      )}
      
      <div
        className="try-wrapper"
        style={{ transform: `translateX(${sliderIndex * -86}vw)` }}
      >
        {tryNewSLider.map((item) => (
          <div className="try-slider" style={{backgroundColor:item.color}} key={item.id}>
            <div className="tryImageContainer">
              <img src={item.image} alt="" />
            </div>
            <div className="tryImageInfo">
              <h1>Try New Flavor</h1>
              <p>Circus Monster</p>
              <a href="#">View</a>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleSlide('right')}>
      <i className="fa fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default TryNewSlider