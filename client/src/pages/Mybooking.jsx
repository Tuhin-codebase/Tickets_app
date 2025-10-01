/**
 * title: booking page
 * description: booking page of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import React, { useEffect, useState } from "react"; // import react library from node modules;
import { dummyBookingData } from "../assets/assets";
import Loading from "../component/Loading";
import BlurClear from "../component/BlurClear";
import timeFormeate from "../lib/timeFormate";
import DateFormate from "./../lib/DateFormate";
const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMYBooking = async () => {
    setBooking(dummyBookingData);
    setLoading(false);
  };

  useEffect(() => {
    getMYBooking();
  }, []);

  return !loading ? (
    <>
      <div className="relative px-6 md:px-16 lg:px-40 mg:pt-40  min-h-[80vh] ">
        <BlurClear top="-20px" left="100px" />
        <div>
          <BlurClear left="50rem" top="400px" bottom="200px" />
        </div>
        <h1 className=" relative text-lg font-semibold mb-4 mt-[6.5rem] ">
          My Bookings
        </h1>
        {bookings.map((item, index) => {
          return (
            <div
              key={index}
              className="flex f md:flex-row justify-between  bg-amber-900 border  border-amber-800 rounded-lg mt-4 p-2 max-w-3xl "
            >
              <div className="flex ">
                <div className="flex flex-col  md:flex-row ">
                  <img
                    className="md:max-w-45 aspect-video h-auto object-cover object-bottom rounded "
                    src={item.show.movie.poster_path}
                    alt="movie information deteles "
                  />
                </div>
                <div className="flex flex-col p-4">
                  <p className="text-lg font-semibold">
                    {item.show.movie.title}
                  </p>
                  <p className="text-gray-400 text-sm ">
                    {timeFormeate(item.show.movie.runtime)}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {DateFormate(item.show.showDateTime)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-end md:text-right justify-between p-4 ">
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-semibold mb-3 ">
                    {currency}
                    {item.amount}
                    {!item.isPaid && (
                      <button className="bg-amber-500 text-black ml-2 rounded-full font-medium px-4 py-1.5 mb-3 text-sm cursor-pointer">
                        Pay now
                      </button>
                    )}
                  </p>
                </div>
                <div className="text-sm">
                  <p className="">
                    <span className="text-gray-400">
                      Total Tickts {item.bookedSeats.length}
                    </span>
                  </p>
                  <p className="">
                    <span className="text-gray-400">
                      Seate Number {item.bookedSeats.join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default MyBooking;
