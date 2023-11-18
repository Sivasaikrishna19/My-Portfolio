"use client";
import { Divider } from "antd";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="bg-[#F3F3F3] py-6 px-12 flex justify-between pr-24">
      <div className="flex items-center">
        <div className="rounded-[999px] text-[#b5651d] bg-[#b5651d] w-fit px-[7px] py-[2px]">
          {" "}
          0{" "}
        </div>
        <div className="ml-2 flex items-center cursor-pointer">
          <span
            onClick={() => handleNavigation("/")}
            className="flex items-center"
          >
            {<div className="text-[20px] mr-[2px]">{"<"}</div>}
            <span className="text-[20px] font-mono">
              Siva Sai Krishna Nekkalapu
              {<span className="text-[20px]">{" />"}</span>}
            </span>
          </span>{" "}
          <div className="flex items-center ">
            <div className="text-gray-400 ml-2 mr-[2px] text-[18px] ">
              {"//"}
            </div>
            <div className="font-sm text-gray-400 text-[18px]">
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[200px]">
        <span
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100${
            pathName === "/Resume"
              ? "transition ease-in-out delay-500 text-[#b5651d] "
              : ""
          }`}
          onClick={() => handleNavigation("/Resume")}
        >
          Resume
        </span>
        {/* <Divider type="vertical" /> */}
        <div
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100 ${
            pathName === "/Projects" ? "text-[#b5651d]" : ""
          }`}
          onClick={() => handleNavigation("/Projects")}
        >
          Projects
        </div>
        {/* <Divider type="vertical" /> */}
        <span
          className={`cursor-pointer py-2 px-3 rounded-full hover:text-[#b5651d] hover:bg-[#e2b888] transition-background ease-in duration-300 delay-100${
            pathName === "/Contact" ? "text-[#b5651d]" : ""
          }`}
          onClick={() => handleNavigation("/About")}
        >
          About
        </span>
      </div>
    </div>
  );
};

export default Header;
