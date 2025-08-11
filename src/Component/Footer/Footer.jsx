import React from "react";
import bgBlack from "../../assets/nav-logo3.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter, FaWhatsappSquare } from "react-icons/fa";
import NavMenu from "../NavMenu/NavMenu";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="min-h-[400px] px-4 grid  md:grid-cols-2 lg:grid-cols-4 pt-20 md:px-12 lg:px-16 xl:px-24  border-t-2 border-lime-200">
      {/* logo */}
      <div >
        <figure className="w-32">
          <img
            src={bgBlack}
            alt=""
            className="rounded-3xl"
            style={{
              clipPath: "polygon(50% 10%, 0% 100%, 100% 100%)",
            }}
          />
        </figure>
      </div>
      {/*  */}
      <div className="flex flex-col space-y-3 pt-10 md:pt-0">
        <h2 className="text-2xl font-semibold text-lime-300">Shazidul Islam</h2>
        <ul className="space-y-4 text-gray-300">
          <span className="flex justify-start  gap-2">
            <IoLocationOutline size={24} />
            <p>Dhaka ,Bangladesh</p>
          </span>
          <span className="flex justify-start  gap-2">
            <MdOutlineMail size={24} />
            <p>shazidulislam910@gmail.com</p>
          </span>
          <span className="flex justify-start gap-2">
            <FaWhatsappSquare size={24} />
            <p>+8801605199098</p>
          </span>
        </ul>
      </div>
      {/* usefull link */}
      <div className="pt-10 md:pt-0" >
        <h1 className="text-lime-300 text-2xl font-semibold">Main</h1>
        <ul className="flex flex-col gap-2">
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
      {/* contact link */}
      <div className="pt-10 md:pt-0">
        <h2 className="text-lime-300 text-2xl font-medium">Contact</h2>
        <div className="grid grid-cols-2  py-6 justify-start items-start gap-4">
          <Link
            target="_blank"
            to={"https://github.com/Shazidulislam"}
            className="px-6 md:px-8   md:py-4 py-3  flex items-center justify-center rounded transition duration-300 transform hover:translate-x-3 hover:bg-black/20 shadow hover:shadow-lime-400"
          >
            <span className="z-20">
              <FaGithub size={32} />
            </span>
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/shazidulislam/"}
            className=" px-6 md:px-8   md:py-4 py-3 flex justify-center items-center rounded transition duration-300 transform hover:translate-x-3 hover:bg-black/20 shadow hover:shadow-lime-400"
          >
            <span>
              <FaLinkedin size={32} />
            </span>
          </Link>
          <Link
            target="_blank"
            to={"https://x.com/AhasanShazid910"}
            className="px-6 md:px-8 py-3 md:py-4 flex justify-center items-center rounded transition transform duration-300  hover:translate-x-4 shadow hover:shadow-lime-400"
          >
            <span>
              <FaTwitter size={32} />
            </span>
          </Link>
          <Link
            target="_blank"
            to={"https://www.facebook.com/shazidul.islam.208585"}
            className="px-6 md:px-8 py-3 md:py-4 flex justify-center items-center rounded transition transform duration-300 hover:translate-x-4 shadow hover:shadow-lime-300  "
          >
            <span>
              <FaFacebookSquare size={32} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
