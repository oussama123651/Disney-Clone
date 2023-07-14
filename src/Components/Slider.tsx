import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Autoplay,
  Keyboard,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import { type Movies } from "../types";

const Slider = () => {
  const [movieList, setMovieList] = useState<Movies[]>([]);

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((res) => setMovieList(res.data.results));
  };

  return (
    <Swiper
      effect={"coverflow"}
      modules={[Autoplay, Keyboard, EffectCoverflow, Pagination]}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      style={{
        // @ts-ignore
        "--swiper-pagination-color": "#fff",
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        0: {
          spaceBetween: 80,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="w-full px-16 py-4"
    >
      {movieList.map((item, index) => (
        <SwiperSlide key={index}>
          <Link to={"/details/" + item.id}>
            <img
              src={import.meta.env.VITE_IMG_BASE_URL + item.backdrop_path}
              loading="lazy"
              className="min-w-full  max-h-[550px] object-cover my-2 rounded-md hover:border-4 border-gray-400 transition-all duration-100 ease-in select-none"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
