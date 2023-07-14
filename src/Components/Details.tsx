import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import HrMovieCard from "./HrMovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Navigation, Pagination } from "swiper/modules";

import type { Movies, videoList, castList } from "../types";

const movieInitialState: Movies = {
  id: 0,
  backdrop_path: "",
  poster_path: "",
  title: "",
  vote_average: 0,
  runtime: 0,
  release_date: "",
  adult: false,
  genres: [{ id: 0, name: "" }],
  overview: "",
  videos: { results: [{ site: "", key: "", type: "", name: "" }] },
  casts: {
    cast: [{ name: "" }],
    crew: [{ job: "", name: "" }],
  },
};

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movies>(movieInitialState);
  const [recommendedMovies, setRecommendedMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getMovies();
  }, [id]);

  const getMovies = () => {
    GlobalApi.getMovieByID(+id!).then((res) => setMovie(res.data));

    GlobalApi.getRecommendationsMovie(+id!).then((res) =>
      setRecommendedMovies(res.data.results)
    );
  };

  const filterVideos = (videoList: videoList["results"]) => {
    return videoList.filter(
      ({ type, site }) =>
        (type === "Trailer" || type === "Teaser") && site === "YouTube"
    );
  };

  const getCastList = (castList: castList["cast"]) => {
    const newCastList: any[] = [];

    for (let i = 0, len = castList.length; i < len && i < 10; i++) {
      const { name } = castList[i];
      newCastList.push(name);
    }

    return newCastList.join(", ");
  };

  const getDirectors = (crewList: castList["crew"]) => {
    const directors = crewList.filter(({ job }) => job === "Director");

    const directorsList = [];
    for (const { name } of directors) directorsList.push(name);

    return directorsList.join(", ");
  };

  return (
    <div>
      <div
        key={id}
        className="relative md:flex gap-8 p-10 bg-center bg-cover isolate before:absolute before:inset-0 before:bg-black/80 before:-z-10"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_IMG_BASE_URL + movie.backdrop_path
          })`,
        }}
      >
        <div className="relative w-fit md:min-w-[240px] md:w-1/3 p-12 md:p-1">
          <img
            src={import.meta.env.VITE_IMG_BASE_URL + movie.poster_path}
            alt={movie.title}
            className="sticky top-0 rounded-xl aspect-[2/3]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-gray-300">
            <AiFillStar color="yellow" size={20} />
            <p>{movie.vote_average.toFixed(1)}</p>-
            <p>{movie.runtime} minutes</p>-<p>{movie.release_date}</p>-
            <p className="bg-white/40 font-semibold text-white p-[3px] rounded-md">
              {movie.adult ? "R" : "PG-13"}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {movie.genres.map((g) => (
              <p
                key={g.id}
                className="rounded-md outline-2 outline-white/50 outline outline-offset-2"
              >
                {g.name}
              </p>
            ))}
          </div>
          <p className="max-w-xl">{movie.overview}</p>
          <p className="flex max-w-lg gap-10 text-gray-400">
            Starring{" "}
            <span className="text-white">{getCastList(movie.casts.cast)}</span>
          </p>
          <p className="flex gap-4 text-gray-400">
            Directed by{" "}
            <span className="text-white">{getDirectors(movie.casts.crew)}</span>
          </p>
          <h2 className="text-3xl font-semibold mb-2">Trailers and Clips</h2>
          <div className="p-3 w-full">
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{ enabled: true }}
              modules={[Pagination, Navigation]}
              grabCursor={true}
              spaceBetween={15}
              slidesPerView={"auto"}
              style={{
                // @ts-ignore
                "--swiper-pagination-color": "#fff",
                "--swiper-navigation-color": "#fff",
              }}
            >
              {filterVideos(movie.videos.results).map((item) => (
                <SwiperSlide
                  className="aspect-video max-w-[500px] w-full rounded-lg p-1"
                  key={item.key}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${item.key}?theme=dark&color=white&rel=0`}
                    allowFullScreen
                    title={item.name}
                    loading="lazy"
                    draggable="false"
                    className="w-full h-full rounded-lg select-none"
                  ></iframe>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="p-12 mx-auto">
        <h2 className="text-3xl font-semibold mb-8">You May Also Like</h2>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Keyboard, Navigation, Pagination]}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          keyboard={{ enabled: true }}
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
          }}
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
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {recommendedMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HrMovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Details;
