/**
 * title: FeatureSection component
 * description: FeatureSection component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-21;
 */

import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurClear from "./BlurClear";
import MovieCard from "./MoviesCard";
import { dummyShowsData } from "../assets/assets";

const FeatureSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
        <div className="relative flex items-center justify-between pt-20 pb-10 ">
          <p className="text-gray-300 font-medium text-lg ">Now Showing</p>
          <BlurClear top="0" right="-80px" />
          <button
            onClick={() => navigate("/movies")}
            className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
          >
            View All{" "}
            <ArrowRightIcon className="group-hover:transition-x-0.5 w-4.5 h-4.5 " />{" "}
          </button>
        </div>
        <div className="flex flex-wrap max-sm sm:justify-center gap-8 mt-8 ">
          {dummyShowsData.splice(0, 4).map((show) => {
            return <MovieCard key={show._id} movie={show} />;
          })}
        </div>
        <div
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="flex justify-center mt-20"
        >
          <button className="px-10 py-3 text-sm bg-amber-500 hover:bg-amber-400 transition rounded-full font-medium cursor-pointer">
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
