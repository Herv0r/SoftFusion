import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 transform hover:scale-110 transition-transform duration-300 ease-in-out'
          key={technology.name}>
            <img
              src={technology.icon}
              alt="technologies"
              className="border rounded-full p-4 border-fuchsia-500"
            />
        </div>
      ))}
    </div>
  );
};


export default SectionWrapper(Tech, "");
