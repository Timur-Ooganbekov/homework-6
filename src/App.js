import React, {useState} from "react"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://via.placeholder.com/401x400",
    "https://via.placeholder.com/400x400"
  ] 

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <button onClick={prevSlide}>Назад</button>
      <img src={images[currentSlide]} alt="Фото" />
      <button onClick={nextSlide}>Вперед</button>
    </div>
  );
};

export default Slider;