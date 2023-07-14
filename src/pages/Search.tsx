import { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "../Components/MovieCard";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { type Movies } from "../types";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState<Movies[]>([]);

  useEffect(() => {
    GlobalApi.getSearchMovie(search).then((res) =>
      setSearchedData(res.data.results)
    );
  }, [search]);

  return (
    <div className="px-8">
      <div className="p-4">
        <div className="relative w-4/5 mx-auto">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-12 py-4 rounded-lg block text-xl"
          />
          <HiMagnifyingGlass className="text-3xl absolute left-2 top-[50%] -translate-y-2/4" />
        </div>
      </div>
      <h3 className="text-red-500 font-semibold text-lg">Results for</h3>
      <h2 className="text-xl md:text-5xl font-semibold">{search}</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 p-10">
        {searchedData.map((item) => (
          <MovieCard
            key={item.id}
            movie={item}
            classes={
              "w-[260px] md:w-[200px] 2xl:w-[250px] m-1 rounded-lg hover:border-4 border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in overflow-hidden"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
