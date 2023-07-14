import logo from "../assets/logo.png";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome, path: "/" },
    { name: "SEARCH", icon: HiMagnifyingGlass, path: "/search" },
    { name: "WATCH LIST", icon: HiPlus, path: null },
    { name: "MOVIES", icon: HiPlayCircle, path: null },
    { name: "SERIES", icon: HiTv, path: null },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="relative flex items-center gap-8">
        <img src={logo} alt="logo" draggable="false" className="w-[115px]" />
        <div className="hidden gap-8 lg:flex">
          {menu.map((item) => (
            <HeaderItems
              key={item.name}
              name={item.name}
              Icon={item.icon}
              path={item.path}
            />
          ))}
        </div>
        <div className="flex gap-5 lg:hidden">
          {menu.map(
            (item, index) =>
              index < 2 && (
                <HeaderItems
                  key={item.name}
                  name={""}
                  Icon={item.icon}
                  path={item.path}
                />
              )
          )}
          <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} Icon={HiDotsVertical} path={null} />
            {toggle ? (
              <div className="absolute mt-3 left-[50%] bg-[#121212] border border-gray-700 py-4 px-5 z-50">
                {menu.map(
                  (item, index) =>
                    index >= 2 && (
                      <HeaderItems
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                        path={item.path}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <span className="hidden md:block text-2xl font-medium">User</span>
        <img
          src="https://www.vhv.rs/dpng/d/506-5062168_miles-morales-spider-man-logo-hd-png-download.png"
          alt="avatar"
          draggable="false"
          className="w-[40px] rounded-full object-cover select-none"
        />
      </div>
    </div>
  );
};

export default Header;
