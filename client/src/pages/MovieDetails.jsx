/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * title: movieDetails page
 * description: movieDetails page of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { useEffect, useState } from "react"; // import react library from node modules;
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurClear from "../component/BlurClear";
import { Heart, PlayCircle, StarIcon } from "lucide-react";
import timeFormeate from "../lib/timeFormate";
import DateSelect from "../component/DateSelect";
import MovieCard from "./../component/MoviesCard";
import Loading from "./../component/Loading";
const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState();
  const navigate = useNavigate();
  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  const showData = () => {
    let newArray;
    const value = dummyShowsData.forEach((array) => (newArray = array.casts));
    const value2 = newArray.slice(0, 12).map((el) => el);
    return value2;
  };
  let showDeteles = showData();

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show.movie.poster_path}
          alt="movie_path"
          className="max-md:auto rounded-xl h-104 max-w-70 object-cover"
        />
        <div className="relative flex flex-col gap-3">
          <BlurClear top="-100px" left="-100px" />
          <p className="text-amber-300/100">English</p>
          <h1 className="text-4xl font-semibold max-w-96 text-balance ">
            {show.movie.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-amber-400/90 fill-amber-500" />
            {show.movie.vote_average.toFixed(2)} User Rating
          </div>
          <p>{show.movie.overview}</p>

          <p>
            {timeFormeate(show.movie.runtime)} *{" "}
            {show.movie.genres
              .map((genre) => {
                return genre.name;
              })
              .join(", ")}{" "}
            * {show.movie.release_date.split(" ")[0]}
          </p>
          <div className="flex  items-center flex-wrap gap-4 mt-4 ">
            <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-700 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircle className="w-5 h-5 " />
              Watch Trailer
            </button>
            <a
              className="px-10 py-3 text-sm bg-amber-400 hover:bg-amber-500 transition rounded-md font-medium cursor-pointer active:scale-95 "
              href="#dateSelect"
            >
              Buy Tickets
            </a>
            <button className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95">
              <Heart className={`w-5 h-5`} />
            </button>
          </div>
        </div>
      </div>
      <p className="text-lg font-medium">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4 ">
          {showDeteles.slice(0, 12).map((child, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
            >
              <img
                className="rounded-full h-20 md:h-20 aspect-square object-cover  "
                src={child.profile_path}
                alt="cast-profile_path img "
              />
              <p className="font-medium text-xs mt-3">{child.name}</p>
            </div>
          ))}
        </div>
        <DateSelect DateTime={dummyDateTimeData} id={id} />
        <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
        <div className="flex flex-wrap max-sm:justify-center gap-8">
          {dummyShowsData.slice(0, 4).map((show, index) => {
            return <MovieCard key={index} movie={show} />;
          })}
        </div>
        <div className="flex justify-center mt-20 ">
          <button
            onClick={() => {
              navigate("/movies");
              scrollTo(0, 0);
            }}
            className="px-10 py-3 text-sm bg-amber-300 hover:bg-amber-500 transition rounded-md font-medium cursor-pointer "
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
