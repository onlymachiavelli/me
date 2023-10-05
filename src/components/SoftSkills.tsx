import * as React from "react"
import Communication from "./../../public/lottie/communication.json"
//lottifie json imports

import Team from "./../../public/lottie/teamwork.json"
import Lottie from "lottie-react"
import softSkills from "@/constants/interfaces/softskills"
import { SoftSkillCard } from "./"
const SoftSkills = ({ ...props }) => {
  const mySoftSkills: softSkills[] = [
    {
      title: "Communication Skills",
      animation: (
        <Lottie
          animationData={Communication}
          ref={React.useRef(null)}
          loop
          autoplay
          className="w-1/2"
        />
      ),
      description:
        "Clear and persuasive communication is the cornerstone of effective interactions.",
      colors: ["#FFCC70", "#C850C0"],
    },
    {
      title: "Team Work",
      animation: (
        <Lottie
          animationData={Team}
          ref={React.useRef(null)}
          loop
          autoplay
          className="w-full"
        />
      ),
      description:
        "Clear and persuasive communication is the cornerstone of effective interactions.",
      colors: ["#0093E9", "#C850C0"],
    },
    {
      title: "Leadership",
      animation: (
        <Lottie
          animationData={Team}
          ref={React.useRef(null)}
          loop
          autoplay
          className="w-1/2"
        />
      ),
      description:
        "Clear and persuasive communication is the cornerstone of effective interactions.",
      colors: ["#00DBDE", "#FC00FF"],
    },
    {
      title: "Problem Solving",
      animation: (
        <Lottie
          animationData={Communication}
          ref={React.useRef(null)}
          loop
          autoplay
          className="w-1/2"
        />
      ),
      description:
        "Clear and persuasive communication is the cornerstone of effective interactions.",
      colors: ["#DEAD00", "#FC00FF"],
    },
  ]
  return (
    <>
      <div className="w-full h-auto lg:px-36">
        <p className="text-white text-xl ">Learn some of my Soft-Skills</p>

        <div className="w-full h-auto flex items-center justify-center gap-10 py-10 flex-wrap ">
          {mySoftSkills.map((skill: softSkills, index: number) => {
            return (
              <>
                <SoftSkillCard
                  From={skill.colors[0]}
                  To={skill.colors[1]}
                  key={index}
                  Animation={skill.animation}
                  Title={skill.title}
                  Description={skill.description}
                />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SoftSkills
