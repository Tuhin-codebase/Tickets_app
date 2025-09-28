/**
 * title: favorite.jsx  page
 * description: favorite page of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import React from "react"; // import react library from node modules;
import { dummyShowsData } from "../assets/assets";
import BlurClear from "../component/BlurClear";
import MovieCard from "../component/MoviesCard";
const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-40 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurClear top="150px" left="0px" />
      <BlurClear right="50px" bottom="50px" />
      <h1 className="text-lg font-medium my-4 ">Favorite Movies !</h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8 ">
        {dummyShowsData.map((movie) => {
          return <MovieCard key={movie._id} movie={movie} />;
        })}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl  font-bold text-center">No MOvies availble</h1>
    </div>
  );
};

export default Favorite;
