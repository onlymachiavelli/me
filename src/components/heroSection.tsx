import * as React from "react"

const HeroSection = ({ ...props }) => {
  const bruh: string[] = ["B", "R", "U", "U", "H"]
  return (
    <>
      <main className="w-full h-auto lg:h-[87vh]  relative flex items-center justify-center">
        <h1 className="text-white text-xl">What's up There!, This is </h1>

        <div className="absolute right-0 flex rotate-90">
          {bruh.map((letter: string, index: number) => {
            return (
              <b
                className="text-[#ffffff5d]  block cursor-default text-9xl hover:text-[9rem] duration-500"
                key={index}
              >
                {letter}
              </b>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default HeroSection
