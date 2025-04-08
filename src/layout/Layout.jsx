import { Outlet, useLocation } from "react-router-dom";
import Starfield from "../components/Starfield";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      <Starfield key={location.pathname} />
      <Header />
      <div className="relative z-10 flex-1 pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
