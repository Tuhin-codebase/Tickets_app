/**
 * title: ListBooking.jsx  component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import AdminTitle from "./../../component/admin/AdminTitle";
import DateFormate from "./../../lib/DateFormate";

const ListBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllBookigns = async () => {
    setBookings(dummyBookingData);
    setLoading(false);
  };

  useEffect(() => {
    getAllBookigns();
  }, []);

  return !loading ? (
    <>
      <AdminTitle text={"list"} text2={"Bookings"} />
      <div className="max-w-4xl mt-6 overflow-x-auto ">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-cyan-700 text-left text-white ">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium ">Movie Name</th>
              <th className="p-2 font-medium ">show Time</th>
              <th className="p-2 font-medium ">Seats</th>
              <th className="p-2 font-medium ">Amount</th>
            </tr>
          </thead>
          <tbody className="textsm font-medium">
            {bookings.map((item, index) => {
              return (
                <tr className="border-b border-amber-600 " key={index}>
                  <td className="p-2 min-w-45 pl-5">{item.user.name}</td>
                  <td className="p-2">{item.show.movie.title}</td>
                  <td className="p-2">{DateFormate(item.show.showDateTime)}</td>
                  <td className="p-2">
                    {Object.keys(item.bookedSeats)
                      .map((seat) => {
                        return item.bookedSeats[seat];
                      })
                      .join(", ")}
                  </td>
                  <td className="p-2">
                    {currency} {item.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <loading />
  );
};
export default ListBooking;
