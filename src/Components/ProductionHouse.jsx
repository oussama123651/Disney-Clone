import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalIG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalGeographicV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionsHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalIG,
      video: nationalGeographicV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 py-2 px-5 md:px-16">
      {productionsHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-2 border-gray-600 rounded-lg  hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer shadow-xl shadow-black"
        >
          <img src={item.image} className="w-full" />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute mix-blend-screen opacity-0 hover:opacity-100 inset-0 rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
