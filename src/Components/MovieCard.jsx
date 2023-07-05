const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={import.meta.env.VITE_IMG_BASE_URL + movie.poster_path}
        loading="lazy"
        className="w-[110px] md:w-[200px] xl:w-[260px] 2xl:w-[320px] m-1 rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-105 transition-all duration-150 ease-in select-none"
      />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </>
  );
};

export default MovieCard;
