import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import navLogo from "../../assets/nav-logo3.png";
import { FaDownload } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { toast } from "react-toastify";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 shadow shadow-lime-50  sticky top-0 px-4 md:px-12 lg:px-16 2xl:px-24   z-50">
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
        <ul className=" hidden md:flex gap-8">
          <li>
            <NavMenu level={"Home"} address={"/#home"}></NavMenu>
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
        <button onClick={()=>{
            toast.info("My resume is currently being prepared and will be available soon")
        }} className=" mt-6 px-6 py-2 shadow flex justify-start items-start transition duration-300 transform hover:-translate-y-3 shadow-lime-100 bg-black/40 rounded cursor-pointer gap-2">
          <AiOutlineDownload  /> <span>Resume </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
