import * as React from "react"
import bck from "./../../public/assets/bck.jpg"
const Hero = ({ ...props }) => {
  return (
    <main className="w-full h-auto">
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${bck.src}')`,
        }}
      >
        <div className="w-full h-full bg-[#0000005d]  bg-opacity-50 backdrop-filter backdrop-blur-3xl"></div>
      </div>
    </main>
  )
}

export default Hero
