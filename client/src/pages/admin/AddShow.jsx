/* eslint-disable no-unused-vars */
/**
 * title: AddShow.jsx  component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "./../../component/Loading";
import AdminTitle from "./../../component/admin/AdminTitle";
import { CheckIcon, DeleteIcon, StarIcon } from "lucide-react";
import Kconvater from "./../../lib/Kconvater";

const AddShow = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [nowPalyingMovies, setNowPlayingMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [showPrice, setShowPrice] = useState([""]);
  const [dateSelectInput, setDateSelecInput] = useState([""]);

  const featchingNowPalyingMovies = async () => {
    setNowPlayingMovies(dummyShowsData);
  };

  useEffect(() => {
    featchingNowPalyingMovies();
  }, []);

  const handleDateTimeAdd = () => {
    if (!dateSelectInput) return;
    const [date, time] = dateSelectInput.split("T");
    if (!date || !time) return;
    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });
  };

  const handlRemoveTime = (date, time) => {
    // setDateTimeSelection([]);
    setDateTimeSelection((prev) => {
      const filterTimes = prev[date].filter((t) => t !== time);
      if (filterTimes.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [date]: filterTimes,
      };
    });
  };

  return nowPalyingMovies.length > 0 ? (
    <>
      <AdminTitle text={"Add"} text2={"Shows"} />
      <p className="mt-19 text-lg font-medium">Now Playing Movies </p>
      <div className="overflow-x-auto pb-4">
        <div className="group flex flex-wrap mt-4 w-max">
          {nowPalyingMovies.map((movie) => {
            return (
              <div
                onClick={() => setSelectMovie(movie.id)}
                key={movie.id}
                className="relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:-translate-y-1  transition duration-300"
              >
                <div className="realtive rounded-lg overflow-hidden scroll-">
                  <img
                    src={movie.poster_path}
                    alt="movie_poster_path image"
                    className="w-full  object-cover brightness-90"
                  />
                  <div className="text-sm flex  items-center justify-between p-2 bg-black/70 w-full absolute bottom-10 left-0">
                    <p className="flex items-center gap-1 text-gray-400">
                      <StarIcon className="w-4 h-5 text-amber-300 fill-amber-400" />
                      {movie.vote_average.toFixed(1)}
                    </p>
                    <p className="text-gray-300">
                      {Kconvater(movie.vote_count)} Votes
                    </p>
                  </div>
                </div>

                <div className="mt-7 ">
                  <p className="font-medium truncate">{movie.title}</p>
                  <p className="text-gray-400 text-sm ">{movie.release_date}</p>
                </div>

                {selectMovie === movie.id && (
                  <div className="absolute top-2 right-2 flex items-center justify-center bg-red-400 h-6 w-6 rounded ">
                    <CheckIcon
                      className="w-4 h-4 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* show price input */}
      <div className="mt-8">
        <label htmlFor="" className="block text-sm font-medium mb-2">
          Show Price
        </label>
        <div className="inline-flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md">
          <p className="text-gray-400 text-sm ">{currency}</p>
          <input
            type="number"
            min={0}
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter Show price"
            className="outline-none"
          />
        </div>
      </div>
      {/* Date and Time input */}
      <div className="mit-6">
        <label htmlFor="" className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>
        <div className="inline-flex gap-5 border border-gray-400 p-1 pl-4 rounded-lg ">
          <input
            type="datetime-local"
            value={dateSelectInput}
            onChange={(e) => setDateSelecInput(e.target.value)}
            className="outline-none rounded-md"
          />

          <button
            onClick={handleDateTimeAdd}
            className="bg-amber-500  px-3 py-2 text-sm rounded-lg hover:bg-amber-700 cursor-pointer "
          >
            Add Time
          </button>
        </div>
      </div>
      {/* display selected time  */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2">Selected Date-TIme</h2>
          <ul className="space-y-3">
            {Object.entries(dateTimeSelection).map((date) => {
              return (
                <li key={date}>
                  <div className="font-medium">{date[0]}</div>
                  <div className="flex flex-wrap gap-2 mt-1 text-sm ">
                    {date[1].map((time) => {
                      return (
                        <div
                          className="border border-amber-300 px-2 py-1 flex items-center rounded"
                          key={time}
                        >
                          <span>{time}</span>
                          <DeleteIcon
                            onClick={() => handlRemoveTime(date[0], time)}
                            className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                          />
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button className="bg-amber-300/50 text-white px-8 py-2 mt-6 rounded hover:bg-amber-500/50 transition-all cursor-pointer ">
        Add Show
      </button>
    </>
  ) : (
    <Loading />
  );
};
export default AddShow;

/**
 *
 */
