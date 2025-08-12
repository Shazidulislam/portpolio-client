import React from "react";
import profile from "../../assets/profile.jpg";
import profilrbg from "../../assets/image-bg-1.gif";
import { FaDownload } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { toast } from "react-toastify";

const About = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        About <span className="text-lime-300">ME</span>
      </h2>
      <div className="grid grid-cols-12 ">
        {/* left */}
        <div className="col-span-12 md:col-span-4 pl-6 py-10 pt-16 relative">
          <figure
            className="relative z-10"
            style={{
              backgroundImage: `url(${profilrbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "200px",
              height: "200px",
            }}
          >
            <img
              src={profile}
              className="rounded-full h-44 w-44 object-cover aspect-square shadow shadow-lime-300"
              alt="Profile"
            />
          </figure>
          <div className="pt-3 relative z-10">
            <h1 className="text-3xl font-semibold">Shazidul Islam</h1>
            <p className="text-sm shine-text pb-3">MERN Stack Developer!!</p>
            <p className="text-sm mr-16">
              Building powerful backend APIs with Node.js and Express to handle
              all your data needs smoothly, while crafting dynamic and
              responsive user interfaces with React on the frontend.
            </p>
            <button onClick={()=>{
                toast.info("My resume is currently being prepared and will be available soon")
            }} className=" mt-6 px-6 py-2 shadow flex justify-start items-start transition duration-300 transform hover:-translate-y-3 shadow-lime-100 bg-black/40 rounded gap-2 cursor-pointer">
              <AiOutlineDownload /> <span>Resume </span>
            </button>
          </div>

          {/* Optional overlay to darken background for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30 z-0 rounded-lg"></div>
        </div>

        {/* right */}
        <div className="col-span-12 md:col-span-8 pt-12">
          <div>
            <p className="bg-white/10 shadow-md shadow-lime-100 p-4 rounded-xl text-xl">
            <span className="shine-text "><span className="text-3xl ">H</span>ey, I'm Shazidul Islam, a web developer specializing in the MERN
              Stack! </span> 
               I’ve been turning ideas into high-performing web apps using
              React.js, React Router, Tailwind CSS, Firebase, Node.js,
              Express.js, and MongoDB — basically everything in between. I
              thrive on challenges, love writing clean, maintainable code, and
              constantly push to deliver polished, production-ready products
              that stand out. Building scalable backend systems with Node.js and
              Express.js while crafting beautiful UIs with React.js and styling
              them with Tailwind CSS is my daily grind.
            </p>
          </div>
          {/* skills */}
          <div className="pt-8">
            <h2 className="text-2xl">TECHNICAL SKILLS</h2>
            <li className="">Frontend: Js, React, Tailwind CSS</li>
            <li className="">Backend: Node.js, Express.js</li>
            <li className="">Database: MongoDB</li>
            <li className="">Tools: Git, GitHub, Vercel, Netlify, Surge</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
