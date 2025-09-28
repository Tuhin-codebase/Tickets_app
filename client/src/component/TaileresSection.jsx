/**
 * title: TaileresSection component
 * description: TaileresSection component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-22;
 */

import { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurClear from "./BlurClear";
import ReactPlayer from "react-player";
import { PlayCircleIcon } from "lucide-react";

const TaileresSection = () => {
  const [currentTailer, setCurrentTailer] = useState(dummyTrailers[0]);
  return (
    <>
      <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden ">
        <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
          Traliers
        </p>
        <div className="relative mt-6">
          <BlurClear top="-100px" right="-100px" />
          <ReactPlayer
            src={currentTailer.videoUrl}
            controls={true}
            playing={true}
            width="960px"
            height="540px"
            config={{
              youtube: {
                playerVars: { modestbranding: 1 },
              },
            }}
          />
        </div>
        <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
          {dummyTrailers.map((trailer) => {
            return (
              <div
                key={trailer.image}
                onClick={() => setCurrentTailer(trailer)}
                className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-60 cursor-pointer"
              >
                <img
                  src={trailer.image}
                  alt="trailer"
                  className="rounded-2xl h-full object-cover brightness-75"
                />
                <PlayCircleIcon
                  strokeWidth={1.6}
                  className="absolute top-1/2 left-1/2 w-5 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default TaileresSection;
