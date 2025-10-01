/**
 * title: Dashboard.jsx  component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between p-6  md:px-10 border-b border-gray-300/30">
      <Link to={"/"}>
        <img className="w-auto h-auto" src={assets.logo} alt="Navbar_logo" />
      </Link>
    </div>
  );
};
export default AdminNavbar;
