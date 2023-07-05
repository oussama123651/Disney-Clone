import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="relative flex gap-8 items-center">
        <img
          src={logo}
          alt="logo"
          draggable="false"
          className="w-[80px] lg:w-[115px] object-cover"
        />
        <div className="hidden lg:flex gap-8">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex lg:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems key={item.name} name={""} Icon={item.icon} />
              )
          )}
        </div>
        <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItems name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 left-[50%] bg-[#121212] border border-gray-700 py-4 px-5 z-50">
              {menu.map(
                (item, index) =>
                  index >= 3 && (
                    <HeaderItems
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                    />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="https://whatsondisneyplus.com/wp-content/uploads/2021/06/luca-avatar-WODP.png"
        alt="avatar"
        draggable="false"
        className="w-[40px] rounded-full object-cover select-none"
      />
    </div>
  );
};

export default Header;
