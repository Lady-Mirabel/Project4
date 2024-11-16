import { useState } from "react";
import logo from "../assets/Play.jpg";
import { Link } from "react-router-dom";
function Menu() {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="flex h-16 w-full justify-between px-2 bg-slate-800">
      <div className="flex justify-start items-center gap-2 font-bold text-red-800 lg:flex">
        <img
          src={logo}
          alt="logo"
          className="h-14 w-14 rounded-full ring-2 ring-black"
        />
        <p>KINGS ENT</p>
      </div>
      <div
        className={`px-4  w-full flex-1 gap-4 p-4 md:flex justify-end hidden`}
      >
        <span className="menu">
          <Link to="/home" className="menu_a">
            Home
          </Link>
        </span>
        <span className="menu">
          <Link to="/services" className="menu_a">
            Services
          </Link>
        </span>
        <span className="menu">
          <Link to="/products" className="menu_a">
            Products
          </Link>
        </span>
        <span className="menu">
          <Link to="/login" className="menu_a">
            Log in
          </Link>
        </span>
        <span>
          <Link to="/register" className="menu_a">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Menu;
