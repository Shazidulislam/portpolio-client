import React from "react";
import { NavLink } from "react-router";

const NavMenu = ({level , address}) => {
  return (
    <div>
      <NavLink
        to={address}
        className={"hover:text-lime-300 text-xs transition-all transform duration-100 hover:underline hover:text-sm"}
      >
       {level}
      </NavLink>
    </div>
  );
};

export default NavMenu;
