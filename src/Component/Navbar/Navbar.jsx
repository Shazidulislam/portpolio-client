import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import navLogo from "../../assets/nav-logo3.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 shadow shadow-lime-50 px-8 sticky top-0   z-50">
      <div>
        <figure>
          <img
            src={navLogo}
            className="w-14 rounded-2xl"
            style={{
              clipPath: "polygon(50% 10%, 0% 100%, 100% 100%)",
            }}
            alt=""
          />
        </figure>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>
            <NavMenu level={"Home"} address={"/"}></NavMenu>
          </li>
          <li>
            <NavMenu level={"About"} address={"/#about"}></NavMenu>
          </li>
          <li>
            <NavMenu level={"Skills"} address={"/#skills"} />
          </li>
          <li>
            <NavMenu level={"Project"} address={"/#project"}></NavMenu>
          </li>
          <li>
            <NavMenu level={"Contact"} address={"/#contact"}></NavMenu>
          </li>
        </ul>
      </div>
      <div>
        <button className="px-6 py-2 shadow shadow-lime-50 bg-black/40 rounded cursor-pointer">Resumi</button>
      </div>
    </nav>
  );
};

export default Navbar;
