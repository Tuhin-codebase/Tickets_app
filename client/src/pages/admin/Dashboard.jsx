/**
 * title: Dashboard.jsx  component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import Loading from "../../component/Loading";
import AdminTitle from "./../../component/admin/AdminTitle";
import BlurClear from "../../component/BlurClear";
import DateFormate from "../../lib/DateFormate";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);
  const dashboardCard = [
    {
      title: "ToTal Booking",
      value: dashboardData.totalBookings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "ToTal Revenue",
      value: currency + String(dashboardData.totalRevenue) || "0",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active show",
      value: dashboardData.activeShows.length || "0",
      icon: PlayCircleIcon,
    },
    {
      title: "ToTal User",
      value: dashboardData.totalUser || "0",
      icon: UserIcon,
    },
  ];

  const [activeShows, setActiveShow] = useState([]);

  const FeatchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setActiveShow(dummyDashboardData.activeShows);
    setLoading(false);
  };

  useEffect(() => {
    FeatchDashboardData();
  }, []);

  return !loading ? (
    <>
      <div className="">
        <AdminTitle text={"Admin"} text2={"Dashboard"} />
        <div className="relative flex flex-wrap gap-4 mt-6 ">
          <BlurClear top="-100px" left="0px" />
          <div className="flex flex-wrap gap-4 w-full ">
            {dashboardCard.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 bg-[#ff4d6d] border border-amber-800 rounded-md max-w-50 w-full "
                >
                  <div>
                    <h1 className="text-sm ">{card.title}</h1>
                    <p className="text-xl font-medium mt-1">{card.value}</p>
                  </div>
                  <card.icon className="w-6 h-6" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-10 text-lg font-medium "> ActiveS Shows</p>
      <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl ">
        <BlurClear top="100px" left="10%" />

        {activeShows.map((show, index) => {
          show = show ? show : "show is not defiend";
          return (
            <div
              key={index}
              className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-[#00253e] border border-amber-300 hover:transition-y-1 transition duration-300"
            >
              <img
                src={show.movie.poster_path}
                alt="show Movie Poster_images"
                className="h-60 w-full object-cover"
              />

              <p className="font-medium p-2 truncate">{show.movie.title}</p>
              <div className="flex items-cneter justify-between px-2 ">
                <p className="text-lg font-medium">
                  {currency} {show.showPrice}
                </p>
                <p className="flex items-center gap-1 textsm text-gray-400 pr-1 ">
                  <StarIcon className="w-4 h-4 text-amber-300 fill-amber-400" />

                  {show.movie.vote_average.toFixed(1)}
                </p>
              </div>
              <p className="px-2 pt-2 text-sm text-gray-500 ">
                {DateFormate(show.showDateTime)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
};
export default Dashboard;

/**
 *
 */
