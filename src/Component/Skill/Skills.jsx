import React from "react";
import Marquee from "react-fast-marquee";
import { FaFigma, FaHtml5 } from "react-icons/fa";
import {
  SiCss3,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import SkillCard from "../Card/SkillCard";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { ImNpm } from "react-icons/im";

const Skills = () => {
  const myskills = [
    { id: 1, title: "HTML5", icon: FaHtml5 },
    { id: 2, title: "CSS3", icon: SiCss3 },
    { id: 3, title: "Tailwind CSS", icon: SiTailwindcss },
    { id: 4, title: "DaisyUI", icon: SiDaisyui },
    { id: 5, title: "React", icon: RiReactjsFill },
    { id: 6, title: "React Router", icon: SiReactrouter },
    { id: 7, title: "Node.js", icon: TbBrandNodejs },
    { id: 8, title: "Express.js", icon: SiExpress },
    { id: 9, title: "MongoDB", icon: SiMongodb },
    { id: 10, title: "VS Code", icon: VscVscode },
    { id: 11, title: "Figma", icon: FaFigma },
    { id: 12, title: "NPM", icon: ImNpm },
  ];

  console.log(myskills);

  return (
    <div>
      <h2 className='text-3xl font-semibold md:text-4xl text-center font_bedas shadow  py-1' >Skills <span className='text-lime-300 italic' >&&</span> Tools</h2>
     
      <div className="min-h-screen pt-24 space-y-12">
        <Marquee pauseOnHover={true} gradient={false}>
          {myskills?.map((skill) => {
            return <SkillCard skill={skill} key={skill?.id}></SkillCard>;
          })}
        </Marquee>
        <Marquee direction="right" pauseOnHover={true} gradient={false}>
          {myskills?.map((skill) => {
            return <SkillCard skill={skill} key={skill?.id}></SkillCard>;
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
