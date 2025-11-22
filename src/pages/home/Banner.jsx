import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} className="my-10">
      <div className="relative w-full">
        <img src={banner1} className="w-full h-auto" />
      </div>

      <div className="relative w-full">
        <img src={banner2} className="w-full h-auto" />

        {/* Buttons - Fully Responsive */}
        <div className="absolute bottom-2 sm:bottom-2 md:bottom-6 lg:bottom-8 left-3 sm:left-4 md:left-8 lg:left-12 flex sm:flex-row gap-2 sm:gap-3">
          {/* Track Your Parcel Button */}
          <button className="bg-primary hover:bg-primary/90 btn btn-sm sm:btn-md md:btn-lg rounded-full text-xs sm:text-sm md:text-base px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 whitespace-nowrap transition-all duration-300 hover:shadow-lg">
            <span className="text-lg sm:text-xl">📦</span>
            <span className="hidden sm:inline">Track Your Parcel</span>
            <span className="sm:hidden">Track</span>
          </button>

          {/* Be A Rider Button */}
          <button className="bg-gray-200 hover:bg-gray-300 btn btn-sm sm:btn-md md:btn-lg rounded-full text-xs sm:text-sm md:text-base text-gray-800 px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 whitespace-nowrap transition-all duration-300 hover:shadow-lg">
            <span className="text-lg sm:text-xl">🚗</span>
            <span className="hidden sm:inline">Be A Rider</span>
            <span className="sm:hidden">Rider</span>
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <img src={banner3} className="w-full h-auto" />
      </div>
    </Carousel>
  );
};

export default Banner;
