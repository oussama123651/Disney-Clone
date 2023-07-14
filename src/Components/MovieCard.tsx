import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

import { type Movies } from "../types";

const MovieCard = ({ movie, classes }: { movie: Movies; classes?: string }) => {
  return (
    <>
      <Link key={movie.id} to={"/details/" + movie.id} className={classes}>
        <img
          src={import.meta.env.VITE_IMG_BASE_URL + movie.poster_path}
          alt={movie.title}
          loading="lazy"
          className="select-none aspect-[2/3] rounded-lg object-cover"
        />
        <div>
          <h4 className="font-semibold truncate">{movie.title}</h4>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1">
              <AiFillStar color="yellow" />
              <span>{movie.vote_average.toFixed(1)}</span>
            </p>
            <p className="bg-white/30 p-[2px] rounded-md">
              {movie.release_date.substring(0, 4)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
