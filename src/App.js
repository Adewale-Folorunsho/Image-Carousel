import './App.css';
import { useState } from 'react';

function App() {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://www.gamespot.com/a/uploads/screen_kubrick/1603/16030002/4111613-mha-01.png",
    "https://i.pinimg.com/564x/a2/98/16/a29816cd63e5d731cc70cfd3f88c2ce8.jpg"
  ];

  const [imageNumber, setImageNumber] = useState(0);
  const prevSlide = () => {
    if (imageNumber === 0){
      setImageNumber(images.length-1)
    }else{
      setImageNumber(imageNumber-1)
    }
  }

  const nextSlide = () => {
    if (imageNumber === images.length-1){
      setImageNumber(0)
    }else{
      setImageNumber(imageNumber+1)
    }
  }

  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        {images.map(
          (image, index) =>
            imageNumber === index && (
              <div key={image} className="slide">
                <img src={image} width={250} height={250} alt="images" />
              </div>
            )
        )}
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
      </div>
    </div>
  );
}

export default App;
