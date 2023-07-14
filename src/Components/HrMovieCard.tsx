import { Link } from "react-router-dom";

import type { Movies } from "../types";

const HrMovieCard = ({ movie }: { movie: Movies }) => {
  return (
    <Link
      to={"/details/" + movie.id}
      className="relative group w-full md:w-[320px] lg:w-[280px] xl:w-[420px] hover:scale-105 transition-all duration-150 ease-in-out"
    >
      <img
        src={import.meta.env.VITE_IMG_BASE_URL + movie.backdrop_path}
        loading="lazy"
        className="rounded-lg group-hover:border-[3px] border-gray-400 transition-all duration-150 ease-in-out cursor-pointer select-none"
        alt={movie.title}
      />
      <h2 className="absolute bottom-1 left-1 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out p-2 lg:text-2xl bg-black/50 text-white rounded-md">
        {movie.title}
      </h2>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </Link>
  );
};

export default HrMovieCard;
