const HrMovieCard = ({ movie }) => {
  return (
    <div className="relative group w-full md:w-[290px] lg:w-[380px] xl:w-[330px] hover:scale-105 transition-all duration-150 ease-in-out">
      <img
        src={import.meta.env.VITE_IMG_BASE_URL + movie.backdrop_path}
        loading="lazy"
        className="w-full h-full rounded-lg group-hover:border-[3px] border-gray-400 transition-all duration-150 ease-in-out cursor-pointer  select-none"
        alt={movie.title}
      />
      <h2 className="absolute bottom-1 left-1 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out p-2 lg:text-2xl bg-black/50 text-white rounded-md">
        {movie.title}
      </h2>
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </div>
  );
};

export default HrMovieCard;
