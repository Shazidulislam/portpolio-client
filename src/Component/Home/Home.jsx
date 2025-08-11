import React from "react";
import homebg from "../../assets/home-animation.jpeg";
import { Link } from "react-router";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className=" relative text-center pt-32 ">
        <p className="text-xl font-semibold italic">Hi,I'm </p>
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl  py-2 font-semibold font_bedas">
          SHADISUL ISLAM
        </h2>
        <p className="text-sm text-gray-100 font-medium shine-text">MERN Stack Developer!</p>
      </div>
      <div>
        <img src={homebg} className="-pt-2 md:h-96 2xl:h-auto rounded-full" alt="" />
        {/* social link */}
        <div className="flex py-6 justify-center items-center gap-2">
            <Link target="_blank" to={"https://github.com/Shazidulislam"} className="px-6 md:px-8   md:py-4 py-3  flex items-center justify-center rounded transition duration-300 transform hover:-translate-y-3 hover:bg-black/20 shadow hover:shadow-lime-400">
              <span className="z-20"><FaGithub size={32} /></span>
            </Link>
          <Link target="_blank" to={"https://www.linkedin.com/in/shazidulislam/"} className=" px-6 md:px-8   md:py-4 py-3 flex justify-center items-center rounded transition duration-300 transform hover:-translate-y-3 hover:bg-black/20 shadow hover:shadow-lime-400">
              <span><FaLinkedin size={32} /></span>
          </Link>
          <Link target="_blank" to={"https://x.com/AhasanShazid910"} className="px-6 md:px-8 py-3 md:py-4 flex justify-center items-center rounded transition transform duration-300  hover:-translate-y-4 shadow hover:shadow-lime-400" >
             <span>
                 <FaTwitter size={32} />
             </span>
          </Link>
          <Link target="_blank" to={"https://www.facebook.com/shazidul.islam.208585"} className="px-6 md:px-8 py-3 md:py-4 flex justify-center items-center rounded transition transform duration-300 hover:-translate-y-4 shadow hover:shadow-lime-300  " >
              <span>
                <FaFacebookSquare size={32} />
              </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
