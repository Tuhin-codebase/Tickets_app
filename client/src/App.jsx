/**
 * title: main app component
 * description: main app component of the application;
 * author: Tuhin Ali;
 * date: 2025-10-16;
 */

// link the all css file
import "./style/index.css";
import { Routes, Route, useLocation } from "react-router-dom"; // import react-router-dom library from node modules;
import Navbar from "./component/Navbar"; // import Navbar component from componnet folder;
import Footer from "./component/Footer"; // import favorite component from componnet folder;
import Home from "./pages/Home"; // import Home component from pages folder;
import Mybooking from "./pages/Mybooking"; // import MyBooking component from pages folder;
import SetLayout from "./pages/SetLayoute"; // import SetLayoute component from pages folder;
import MovieDetails from "./pages/MovieDetails";
import { Toaster } from "react-hot-toast"; // import Tostaer component from react-hot-toast library;
import Favorite from "./pages/Favorite";
import Movies from "./pages/Movies";
function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/my-bookings" element={<Mybooking />} />
        <Route path="/movies/:id/:date" element={<SetLayout />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
