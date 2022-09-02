import React, { useState, useEffect } from 'react';
import beef from '../assets/img/beef.webp';
import cheesecake from '../assets/img/cheesecake.webp';
import newBeverage from '../assets/img/tropic.webp';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
const Slider = () => {
  let images = [newBeverage, cheesecake, beef];
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = images.length;

  function getNextSlide() {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  }
  function getPrevSlide() {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  }
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <MdOutlineArrowBackIosNew className="slider__arrow--left" onClick={() => getPrevSlide()} />
      <MdOutlineArrowForwardIos className="slider__arrow--right" onClick={() => getNextSlide()} />
      {images.map((image, index) => (
        <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
          {index === currentSlide && (
            <img
              key={index}
              className={index === currentSlide ? 'slider__item active' : 'slider__item'}
              src={image}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
