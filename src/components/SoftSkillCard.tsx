import * as React from "react"

const SoftSkillCard = ({ ...props }) => {
  return (
    <>
      <div
        className="w-1/3 h-48 rounded flex items-center justify-center "
        style={{
          backgroundImage:
            `linear-gradient(45deg, ${props.From}, ${props.To})` as string,
        }}
      >
        <div className="w-2/3 bg-black m-auto h-48">{props.Animation}</div>
      </div>
    </>
  )
}

export default SoftSkillCard
