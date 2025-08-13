import React, { useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ data }) => {
  const [showtext, setShowtext] = useState(false);

  const { projectName, description, links, projectImages, id , technologies } = data;

  const frist50Words = description.split(" ").slice(0, 50).join(" ");
  if (!data) return <Loading />;
  return (
    <div className=" shadow shadow-lime-100 rounded-2xl mb-10   px-4 py-6 grid grid-cols-12 gap-4">
      <figure className=" col-span-12 md:col-span-5 ">
        <img
          src={projectImages}
          className="w-full md:h-72 rounded-xl transition transform duration-300 hover:scale-105 overflow-hidden"
          alt=""
        />
      </figure>
      <div className=" col-span-12 md:col-span-7">
        <h1 className="text-3xl font-semibold text-lime-300">{projectName}</h1>
        <p className="text-sm">
          {showtext ? description : frist50Words + "....."}
        </p>
        {/* used tecnology */}
        <div className="pt-6 grid grid-cols-2 text-center   md:flex   justify-start items-center gap-4" >
          <p className="text-xs px-3 md:px-4 py-1.5 rounded-full shadow shadow-lime-100">{technologies[0]}</p> 
          <p className="text-xs px-3 md:px-4 py-1.5 rounded-full shadow shadow-lime-100">{technologies[1]}</p> 
          <p className="text-xs px-3 md:px-4 py-1.5 rounded-full shadow shadow-lime-100">{technologies[2]}</p> 
          <p className="text-xs px-3 md:px-4 py-1.5 rounded-full shadow shadow-lime-100">{technologies[8]}</p> 
          <p className="text-xs px-3 md:px-4 py-1.5 rounded-full shadow shadow-lime-100">{technologies[9]}</p> 
        </div>
        <div className="pt-5 grid grid-cols-2 md:flex justify-start items-center gap-4">
          <Link
            target="_blank"
            className="px-8 py-3 shadow shadow-lime-400  flex justify-center items-center rounded  transition transform duration-300 hover:-translate-y-4"
            to={links?.live}
          >
            Live Site
          </Link>
          <Link
            target="_blank"
            className="px-8 py-3 shadow shadow-lime-400 flex justify-center items-center rounded  transition transform duration-300 hover:-translate-y-4"
            to={links?.client}
          >
            Client
          </Link>
          <Link
            target="_blank"
            className="px-8 py-3 shadow shadow-lime-400 flex justify-center items-center rounded  transition transform duration-300 hover:-translate-y-4"
            to={links?.server}
          >
            Server
          </Link>
        </div>
        <div className="pt-3">
          <Link
            to={ `/subRoot/project/${id}`}
            className={`px-6 py-3 shadow text-center shadow-lime-300 md:w-3/12 rounded cursor-pointer flex justify-start items-start gap-1 transition transform duration-500 `}
          >
            <span className="transition transform duration-300 flex gap-1"> <FaArrowRight size={24} />  Viwe Deatils</span>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
