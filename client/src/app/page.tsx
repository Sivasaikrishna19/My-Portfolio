"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { about } from "@/data/about";
import Tilt from "react-parallax-tilt";

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    setShouldAnimate(true);
    return () => {
      setShouldAnimate(false);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        shouldAnimate
          ? "page-enter page-enter-active"
          : "page-exit page-exit-active"
      }`}
    >
      <div className="w-[80%] m-auto flex ">
        <div className="w-[50%] m-auto flex justify-center profile-pic p-8 max-md:hidden">
          {/* <Tilt scale={1} transitionSpeed={2500}> */}
          <Image
            alt="Avatar Image"
            src={about.img}
            width={500}
            height={500}
            loading={"lazy"}
            className="rounded-full shadow-[#e0b47e] shadow-xl"
            layout="responsive"
          />
          {/* </Tilt> */}
        </div>

        <div className="w-[50%] flex max-md:w-full">
          <div className="m-auto">
            <div className="mb-4 sm:hidden w-full flex justify-center">
              <div className=" w-[250px] h-[250px]">
                <Image
                  alt="Avatar Image"
                  src={about.img}
                  width={50}
                  height={50}
                  loading={"lazy"}
                  className="rounded-full w-[50px]"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="text-[48px] typed mb-4 font-thin max-md:text-[24px]">
              Hey there, I&apos;m Siva.
            </div>
            <div className="text-[18px] text-gray-600 max-md:text-[14px]">
              SWE Intern, NBCUniversal (June 2024 - Present)
            </div>
            <div className="text-[24px] mb-3 font-semibold max-md:text-[16px]">
              A Bit About Me
            </div>
            <p className="font-light mb-8 text-[18px] max-md:text-[14px] text-justify">
              {about?.about}
            </p>
            <div className=" flex items-center w-full justify-evenly py-6">
              <div
                className="resume-b font-semibold rounded-full border-[1px] border-black border-solid w-[120px] h-[120px] max-md:w-[80px] max-md:h-[80px] flex items-center justify-center bg-blue-400 text-white cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-indigo-500 duration-500"
                onClick={() => {
                  handleNavigation("/Resume");
                }}
              >
                Resume
              </div>

              <div
                className="projects-b font-semibold rounded-full border-[1px] border-black border-solid w-[120px] h-[120px] max-md:w-[80px] max-md:h-[80px] flex items-center justify-center bg-[#FF3B24] text-white cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-pink-500 duration-500"
                onClick={() => {
                  handleNavigation("/Projects");
                }}
              >
                Projects
              </div>
              <div
                className="contact-b font-semibold rounded-full border-[1px] border-black border-solid w-[120px] h-[120px] max-md:w-[80px] max-md:h-[80px] flex items-center justify-center bg-[#80D8DA] text-white cursor-pointer hover:shadow-lg transition ease-in-out delay-150 hover:bg-green-500 duration-500"
                onClick={() => {
                  handleNavigation("/About");
                }}
              >
                About
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[8vh] max-md:hidden"></div>
      <Footer />
    </div>
  );
}
