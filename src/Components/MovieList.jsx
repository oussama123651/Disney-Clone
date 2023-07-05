import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi.jsx";
import MovieCardSlider from "./MovieCardSlider.jsx";
import MovieCard from "./MovieCard.jsx";
import HrMovieCard from "./HrMovieCard.jsx";

import { SwiperSlide } from "swiper/react";

import "swiper/css";

const MovieList = ({ genreId, index_ }) => {
  const [MovieList, setMovieList] = useState([]);
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
        <SwiperSlide key={index} className={`${direction ? "p-8" : null}`}>
          {direction ? (
            <HrMovieCard movie={item} />
          ) : (
            <MovieCard movie={item} />
          )}
        </SwiperSlide>
      ))}
    </MovieCardSlider>
  );
};

export default MovieList;
