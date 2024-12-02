import { useState } from "react";
import logo from "../assets/kings.png";
import { Link } from "react-router-dom";
function Menu() {
  const [open, setOpen] = useState(true);
  console.log(open);

  return (
    <div className="flex h-16 w-full justify-between px-2 bg-slate-800 rounded-t-lg">
      <div className="flex justify-start items-center gap-2 font-bold text-red-800 lg:flex text-xl">
        <img
          src={logo}
          alt="logo"
          className="h-14 w-14 rounded-full ring-2 ring-black"
        />
        <p className="font-serif">KINGS HOTELS</p>
      </div>
      {open ? (
        <div
          className="px-4 md:w-full w-32 flex-1 flex gap-4 p-4 items-end justify-end flex-col absolute
         z-10 top-16 md:top-0 right-0 md:flex-row bg-blue-300 md:bg-transparent"
        >
          <span className="menu">
            <Link to="/" className="menu_a">
              Home
            </Link>
          </span>
          <span className="menu">
            <Link to="/services" className="menu_a">
              Services
            </Link>
          </span>
          <span className="menu">
            <Link to="/offers" className="menu_a">
              Offers
            </Link>
          </span>
          <span className="menu">
            <Link to="/booknow" className="menu_a ">
              Booking
            </Link>
          </span>
          <span>
            <Link to="/register" className="menu_a">
              Register
            </Link>
          </span>
        </div>
      ) : null}
      <div className="md:hidden flex ">
        <span
          className="icon-ellipsis-vert self-center p-3 text-white"
          onClick={() => setOpen(!open)}
        ></span>
      </div>
    </div>
  );
}
export default Menu;
