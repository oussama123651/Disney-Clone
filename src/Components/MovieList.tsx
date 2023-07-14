import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi.jsx";
import MovieCardSlider from "./MovieCardSlider.jsx";
import MovieCard from "./MovieCard.jsx";
import HrMovieCard from "./HrMovieCard.jsx";

import { SwiperSlide } from "swiper/react";

import "swiper/css";

import { type Movies } from "../types";

const MovieList = ({
  genreId,
  index_,
}: {
  genreId: number;
  index_: number;
}) => {
  const [MovieList, setMovieList] = useState<Movies[]>([]);
  const direction = index_ % 6 == 0;

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) =>
      setMovieList(res.data.results)
    );
  };

  return (
    <MovieCardSlider direction={direction}>
      {MovieList.map((item, index) => (
        <SwiperSlide
          key={index}
          className={`${
            direction
              ? "md:p-1 p-4"
              : "p-1 rounded-xl cursor-pointer hover:scale-105 transition-all duration-150 ease-in overflow-hidden"
          }`}
        >
          {direction ? (
            <HrMovieCard movie={item} />
          ) : (
            <>
              <MovieCard movie={item} />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </>
          )}
        </SwiperSlide>
      ))}
    </MovieCardSlider>
  );
};

export default MovieList;
