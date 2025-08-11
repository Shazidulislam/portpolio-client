import React from "react";

const SkillCard = ({ skill }) => {
  const { title, icon: Icon } = skill;
  return (
    <div className="grid grid-cols-1   p-4">
      <div className="flex flex-col w-40 py-8 shadow hover:shadow-md transition transform duration-500 rounded-2xl shadow-lime-400 justify-center items-center">
        <Icon size={64} />
        <h2 className="font-thin pt-3 text-sm shine-text">{title}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
