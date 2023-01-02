import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex w-full">
          <h1 className="w-1/2 text-3xl text-center font-extrabold my-auto">ULTRABOOST 21 SHOES</h1>
          <img src="https://www.transparentpng.com/thumb/adidas-shoes/3jwOZb-adidas-shoes-black-and-white-photo.png" className="w-1/2" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className="flex w-full">
          <h1 className="w-1/2 text-3xl text-center font-extrabold my-auto">ULTRABOOST 21 SHOES</h1>
          <img src="https://www.transparentpng.com/thumb/adidas-shoes/3jwOZb-adidas-shoes-black-and-white-photo.png" className="w-1/2" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="flex w-full">
          <h1 className="w-1/2 text-3xl text-center font-extrabold my-auto">ULTRABOOST 21 SHOES</h1>
          <img src="https://www.transparentpng.com/thumb/adidas-shoes/3jwOZb-adidas-shoes-black-and-white-photo.png" className="w-1/2" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div className="flex w-full">
          <h1 className="w-1/2 text-3xl text-center font-extrabold my-auto">ULTRABOOST 21 SHOES</h1>
          <img src="https://www.transparentpng.com/thumb/adidas-shoes/3jwOZb-adidas-shoes-black-and-white-photo.png" className="w-1/2" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
