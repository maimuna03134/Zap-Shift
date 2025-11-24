import React from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import amazon from '../../assets/brands/amazon.png'
import amazon_vector from '../../assets/brands/amazon_vector.png'
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from '../../assets/brands/star.png'
import start_people from "../../assets/brands/start_people.png";

const Brands = () => {
    const brandsLogo = [
      amazon,
      amazon_vector,
      casio,
      moonstar,
        randstad,
      star,
      start_people,
    ];
    return (
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        autoPlay={true}
        className="my-20"
      >
        {brandsLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default Brands;