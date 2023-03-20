import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const sortedExperience = experiences.sort(
    (a, b) =>
      new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative  flex-col text-left md:px-10 h-screen space-y-4 overflow-hidden mx-auto items-center"
    >
      <h3 className="mt-16 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>
      <div className="flex snap-x w-full  snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff5800]/80 flex-col overflow-x-scroll  justify-between overflow-hidden mx-auto items-center">
        <div className="w-full flex space-x-5 px-5 py-5 ">
          {sortedExperience?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
        <div className="h-screen"></div>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
