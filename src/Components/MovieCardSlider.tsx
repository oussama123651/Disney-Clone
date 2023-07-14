import { ReactNode } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";

const MovieCardSlider = ({
  direction,
  children,
}: {
  direction: boolean;
  children: ReactNode;
}) => {
  if (direction) {
    return (
      <Swiper
        modules={[]}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="w-full"
      >
        {children}
      </Swiper>
    );
  } else {
    return (
      <Swiper
        modules={[]}
        grabCursor={true}
        loop={true}
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
        className="w-full"
      >
        {children}
      </Swiper>
    );
  }
};

export default MovieCardSlider;
