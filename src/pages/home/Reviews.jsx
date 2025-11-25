import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import customer_top from "../../assets/customer-top.png";
import ReviewCard from './ReviewCard';


const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews)
    return (
      <>
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={customer_top} alt="" className="w-40" />
            <h2 className="text-3xl text-secondary font-bold">
              What our customers are sayings
            </h2>
            <p className="text-center">
              Enhance posture, mobility, and well-being effortlessly with <br />
              Posture Pro. Achieve proper alignment, reduce pain, and strengthen
              your body with ease!
            </p>
          </div>
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              modifier: 1,
              scale: 0.75,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            className="mySwiper my-8"
          >
            {reviews.map((reView) => (
              <SwiperSlide key={reView.id}>
                <ReviewCard reView={reView} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
};

export default Reviews;