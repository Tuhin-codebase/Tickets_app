/**
 * title: ListShow.jsx  component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../component/Loading";
import AdminTitle from "../../component/admin/AdminTitle";
import DateFormate from "../../lib/DateFormate";

const ListShow = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDataTime: "2025-06-30T03:30:00.000Z",
          showPrice: 59,
          occupiedSeates: {
            A1: "user_1",
            B1: "user_2",
            C1: "user_3",
          },
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <div>
      <AdminTitle text={"List"} text2={"Shows"} />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap ">
          <thead>
            <tr className="bg-[#003a61] textleft text-white">
              <th className="p-2 font-medium pl-5 ">Movie Name</th>
              <th className="p-2 font-medium ">Show Time</th>
              <th className="p-2 font-medium ">Total Bookings</th>
              <th className="p-2 font-medium ">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-amber-300 even:bg-cyan-900"
                >
                  <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                  <td className="p2">{DateFormate(show.showDataTime)}</td>
                  <td className="p2">
                    {Object.keys(show.occupiedSeates).length}
                  </td>
                  <td className="p2">
                    {currency}{" "}
                    {Object.keys(show.occupiedSeates).length * show.showPrice}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default ListShow;
