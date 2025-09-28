/* eslint-disable no-unused-vars */
/**
 * title: DateSelect external Component
 * description: DateSelect external Component page of the application;
 * author: Tuhin Ali;
 * date: 2025-10-25;
 */

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import BlurClear from "./BlurClear";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DateSelect = ({ DateTime, id }) => {
  const extendData = (id) => {
    let value = [];
    for (let el in DateTime) {
      value.push(el);
    }
    return value;
  };
  const navigate = useNavigate();
  const newDateTimeData = extendData();
  const [selected, setSelected] = useState(null);
  const onBookHandler = () => {
    if (!selected) {
      return toast("Please Select a Date!");
    }
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex  flex-col md:flex-row items-center justify-between p-3 gap-10 relative bg-[#dbc24fa3] border border-amber-500/50 rounded-lg ">
        <BlurClear top="-50px" left="-90px" />
        <BlurClear top="-40px" right="0px" />
        <div>
          <p className="text-lg font-semibold ">Choose Date </p>
          <div className="flex items-center gap-6 textsm mt-5 ">
            <ChevronLeftIcon className="w-28" />
            <span className=" p-4 grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4 ">
              {newDateTimeData.map((date) => {
                return (
                  <button
                    key={date}
                    className={` ${
                      selected === date
                        ? "bg-green-700 text-black"
                        : "border  border-amber-400/60"
                    } flex flex-col items-center justify-center h-14 w-14 p-9  aspect-square rounded cursor-pointer`}
                    onClick={() => setSelected(date)}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>
                      {new Date(date).toLocaleTimeString("en-US", {
                        manth: "short",
                      })}
                    </span>

                    <ChevronRightIcon width={28} />
                  </button>
                );
              })}
            </span>
            <ChevronRightIcon className="w-28" />
          </div>
        </div>
        <button
          onClick={onBookHandler}
          className="bg-amber-400 text-white px-8 py-2 mt-6 rounded hover:bg-amber-500 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
export default DateSelect;
