/**
 * title: setlayoute.jsx  page
 * description: setLayoute.jsx page of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import React, { useCallback, useEffect, useState } from "react"; // import react library from node modules;
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyDateTimeData, dummyShowsData } from "../assets/assets";
import Loading from "./../component/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFormate from "./../lib/isoTImeFormate";
import BlurClear from "../component/BlurClear";
import toast from "react-hot-toast";
const SetLayout = () => {
  const groupRows = [
    ["A", "b"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];
  const { id, date } = useParams();
  const [selectedState, setSelectedState] = useState([]);
  const [selectedTimeState, setSelectedTimeState] = useState(null);
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  const getShow = useCallback(async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id]);
  useEffect(() => {
    getShow();
  }, [getShow]);

  const handleSeatClick = (seatId) => {
    if (!selectedTimeState) {
      return toast("please Select Time Frist");
    }

    if (selectedState.length > 4) {
      return toast("You Can Only Select 5 Seats");
    }
    setSelectedState((pre) => {
      return pre.includes(seatId)
        ? pre.filter((seat) => {
            return seat !== seatId;
          })
        : [...pre, seatId];
    });
  };

  const renderSetas = (row, count = 9) => {
    return (
      <div className="flex gap-2 mt-2 " key={row}>
        <div className="flex flex-wrap items-center justify-center gap-2 ">
          {Array.from({ length: count }, (_, i) => {
            const seatId = `${row}${i + 1}`;
            return (
              <button
                key={seatId}
                onClick={() => handleSeatClick(seatId)}
                className={`h-8 w-8 rounded border border-amber-300 cursor-pointer ${
                  selectedState.includes(seatId) &&
                  "bg-amber-300/80 font-bold text-white "
                }`}
              >
                {seatId}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/**Availbale Timings */}
      <div className="w-70 border-b-green-950 border-2 border-amber-500/90 rounded-lg py-10 h-max md:sticky md:top-30 ">
        <p className="text-lg font-semibold px-6 "> Availbale Timings </p>
        <div className="mt-5 space-y-1">
          {show.dateTime[date].map((items) => {
            return (
              <div
                key={items.time}
                onClick={() => setSelectedTimeState(items)}
                className={`flex items-center gap-2 px-6 w-max rounded-md curosr-pointer transition ${
                  selectedTimeState?.time === items.time
                    ? "bg-pink-300 text-white"
                    : "hover:bg-orange-300/70 "
                } `}
              >
                <ClockIcon className="h-4 w4 " />
                <p className="text-sm ">{isoTimeFormate(items.time)}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/**setas Layout */}
      <div className="relative flex-1 flex-col text-center items-center max-md:mt-16 ">
        <BlurClear top="-180px" left="30px" />
        <BlurClear top="170px" right="0" />
        <p className="text-2xl font-semibold mb-4 ">Select Your Seat</p>
        <div className="ml-[9.4rem]">
          <img src={assets.screenImage} alt="screenImage " className="" />
        </div>
        <p className="text-gray-400 text-sm mb-6 ">SCREEN SIDE</p>
        <div className="flex flex-col items-center mt-10 text-xs text-gray-300 ">
          <div className="grid grid-col-2 md:grid-cols-1 gap-8 md:gap-2 mb-6 ">
            {groupRows[0].map((row) => {
              return renderSetas(row);
            })}
          </div>
          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, index) => {
              return (
                <div key={index} className="">
                  {group.map((row) => {
                    return renderSetas(row);
                  })}
                </div>
              );
            })}
          </div>
          <button
            onClick={() => navigate("/my-bookings")}
            className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-blue-400 hover:bg-amber-300 font-medium rounded-xl hover:text-black cursor-pointer active:scale-95"
          >
            Proceed to checkout
            <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SetLayout;
