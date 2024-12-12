import { useState } from "react";
import cameraImg from "../assets/images/camera.jpg";
import perfumeImg from "../assets/images/perfume.webp";
import watchImg from "../assets/images/watch.jpeg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [cameraImg, perfumeImg, watchImg];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ width: "90%" , height:'60', margin: "auto", position: "relative" }}>
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
