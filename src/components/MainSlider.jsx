import { useState, useEffect } from 'react';
import { mainSlider } from './../data';
const MainSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const lastIndex = mainSlider.length - 1;
    if (sliderIndex < 0) {
      setSliderIndex(lastIndex);
    }
    if (sliderIndex > lastIndex) {
      setSliderIndex(0);
    }
  }, [sliderIndex]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setSliderIndex(sliderIndex + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [sliderIndex]);

  const dots = [];
  for (let i = 0; i < mainSlider.length; i++) {
    dots.push(i);
  }

  const handleSlide = (d) => {
    if (d === 'left') {
      setSliderIndex(sliderIndex - 1);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const handleClick = (event) => {
    setSliderIndex(Number(event.target.id));
  };
  return (
    <div>
      <div className="container">
        <div className="arrow left" onClick={() => handleSlide('left')}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="wrapper"
          style={{ transform: `translateX(${sliderIndex * -100}vw)` }}
        >
          {mainSlider.map((item) => (
            <div className="slider" key={item.id}>
              <div className="imageContainer">
                <img src={item.image} alt="" />
              </div>
              <div className="infoContainer">
                <div className="infoTitle">
                  <span>The Best Look</span>
                  <h2>Anytime Anywhere</h2>
                  <p>Starts from 10,000 MMK</p>
                  <a href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow right" onClick={() => handleSlide('right')}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
      <div className="dots">
        <ul>
          {dots.map((dot) => (
            <li
              id={dot}
              onClick={handleClick}
              className={Number(sliderIndex) === dot ? 'active dot' : 'dot'}
              key={dot}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainSlider;
