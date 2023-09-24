import * as React from "react"

const skills: string[] = [
  "Communication Skills",
  "Team Work",
  "Leadership",
  "Problem Solving",
  "Time Management",
  "Creativity",
]

const Skills = ({ ...props }) => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="w-1/2 p-2 m-2 lg:w-1/4 h-36  bg-[#ffffff00] shadow-lg text-white   bg-opacity-80 backdrop-filter backdrop-blur-lg  rounded flex items-center justify-center"
        >
          {skill}
        </div>
      ))}
    </div>
  )
}

export default Skills
