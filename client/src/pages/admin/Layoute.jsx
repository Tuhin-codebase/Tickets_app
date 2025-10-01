/**
 * title: Dashboard.jsx  component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { Outlet } from "react-router-dom";
import AdminNavbar from "../../component/admin/AdminNavbar";
import AdminSideBar from "../../component/admin/AdminSideBar";

const Layoute = () => {
  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSideBar />
        <div className="flex-1 px-4 py-10 md:px-10 h-[cale(100vh-64ox)] overflow-auto ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layoute;
