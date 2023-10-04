import * as React from "react"

const SoftCard = ({ ...props }) => {
  interface softSkills {
    title: string
    animation: any
    description: string
    colors: string[]
  }
  const mySoftSkills: softSkills[] = [
    {
      title: "Communication Skills",
      animation: "",
      description:
        "Clear and persuasive communication is the cornerstone of effective interactions.",
      colors: ["#FFCC70", "#C850C0"],
    },
  ]
  return (
    <>
      <div
        className="w-1/3 h-48 rounded"
        style={{
          backgroundImage:
            `linear-gradient(45deg, ${props.From}, ${props.To})` as string,
        }}
      ></div>
    </>
  )
}
const SoftSkills = ({ ...props }) => {
  return (
    <>
      <div className="w-full h-auto lg:px-36">
        <p className="text-white text-xl ">Learn some of my Soft-Skills</p>

        <div className="w-full h-auto flex items-center justify-center gap-10 py-10"></div>
      </div>
    </>
  )
}

export default SoftSkills
