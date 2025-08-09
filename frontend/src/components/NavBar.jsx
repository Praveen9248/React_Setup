import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth, useTheme } from "../contexts";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiGooglekeep } from "react-icons/si";
import { LogoutBtn } from "../components";
const NavBar = () => {
  const { toggleTheme } = useTheme();
  const { status } = useAuth();

  const navElements = [
    { name: "Home", path: "/", isActive: true },
    { name: "Contact", path: "/contact", isActive: true },
    { name: "Login", path: "/login", isActive: !status },
    { name: "Register", path: "/signup", isActive: !status },
  ];

  return (
    <div className="flex justify-between items-center px-6">
      <div className="w-10 text-xl text-center">
        <span>
          <SiGooglekeep />
        </span>
      </div>
      <div className="flex gap-x-4 md:w-8/10 justify-center items-center">
        {navElements.map((ele) =>
          ele.isActive ? (
            <NavLink to={ele.path} key={ele.name}>
              {ele.name}
            </NavLink>
          ) : null
        )}
        {status && <LogoutBtn />}
      </div>
      <div className="text-2xl w-10 text-center">
        <button onClick={() => toggleTheme()}>
          <MdOutlineDarkMode />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
