import GenersList from "../Constant/GenersList.jsx";
import MovieList from "./MovieList.jsx";
const GenreMovieList = () => {
  return (
    <div>
      {GenersList.genere.map((item, index) => (
        <div key={item.id} className="p-8 md:px-16">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
