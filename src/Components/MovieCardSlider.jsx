import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const MovieCardSlider = ({ direction, children }) => {
  if (direction) {
    return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        className="w-full py-5 px-3"
      >
        {children}
      </Swiper>
    );
  } else {
    return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          412: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 35,
          },
          1563: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
        className="w-full py-5 px-3"
      >
        {children}
      </Swiper>
    );
  }
};

export default MovieCardSlider;
