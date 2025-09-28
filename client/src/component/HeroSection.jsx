/**
 * title: HeroSection component
 * description: HeroSection component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url(./../assets/backgroundImage.png)] bg-cover bg-center h-screen">
      <img
        src={assets.marvelLogo}
        alt="marvelogo"
        className="max-h-11 lg:h-11 mt-20"
      />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Welcome to Movies <br /> Web Application
      </h1>
      <div className="flex flex-col gap-4 text-gray-300 ">
        <div className="flex gap-2">
          <span>Action | Adverture | Sci-Fi</span>
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4.5 h-4.5" /> 2018
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4.5 h-4.5" /> 2h 6 min
          </div>
        </div>
        <div>
          <p className="max-w-md text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste e esse
            amet!
          </p>
          <button
            onClick={() => navigate("/movies")}
            className="flex items-center gap-1 px-6 py-3 text-sm bg-amber-600 hover:bg-amber-500 transition rounded-full font-medium cursor-pointer mt-3"
          >
            Expore Movies
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
