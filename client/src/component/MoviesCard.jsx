/**
 * title: MovieCard component
 * description: MovieCard component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { StarIcon } from "lucide-react";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import timeFormeate from "../lib/timeFormate";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center p-3 bg-gray-800 rounded-2xl hover:transition-y-1 transition duration-300 w-60 ">
        <img
          src={movie.backdrop_path}
          alt="moive-img"
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
        />
        <p className="font-semibold mt-2 truncate">{movie.title}</p>
        <p className="text-sm text-gray-400 mt-2">
          {new Date(movie.release_date).getFullYear()} .
          {movie.genres
            .slice(0, 2)
            .map((genre) => genre.name)
            .join(" |")}{" "}
          . {timeFormeate(movie.runtime)}
        </p>
        <div className="flex items-center justify-between mt-4 pb-3 ">
          <button
            onClick={() => {
              navigate(`/movies/${movie._id}`);
              scrollTo(0, 0);
            }}
            className="px-4 py-2 text-xs bg-amber-400 hover:bg-amber-500 transition rounded-full font-medium cursor-pointer "
          >
            Buy Tickets
          </button>
          <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1 ">
            <StarIcon className="w-4 h-4 text-amber-400 fill-amber-500" />
            {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
