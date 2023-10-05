import * as React from "react"

const SoftSkillCard = ({ ...props }) => {
  return (
    <>
      <div
        className="lg:w-1/3 md:w-1/2 w-10/12 h-96 rounded flex items-center justify-center flex-col gap-4"
        style={{
          backgroundImage:
            `linear-gradient(45deg, ${props.From}, ${props.To})` as string,
        }}
      >
        <div className="w-2/3 h-36     flex items-center justify-center  overflow-hidden">
          {props.Animation}
        </div>

        <h2 className="text-white text-xl">{props.Title}</h2>

        <p className="text-white w-4/5">{props.Description}</p>
      </div>
    </>
  )
}

export default SoftSkillCard
