"use client"
import * as React from "react"
import { Hero, Skills } from "./../components"
import AnimatedCursor from "react-animated-cursor"
import Waves from "./../../public/lottie/stars.json"
import Lottie from "lottie-react"
import bck from "./../../public/assets/bck.jpg"
//create wave animation ref
const Home = () => {
  const waveRef = React.createRef()
  return (
    <main
      //className="w-full h-auto block overflow-x-hidden overflow-y-hidden"
      onScroll={(e) => {
        console.log(e)
      }}
      className="w-full h-auto bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('${bck.src}')`,
      }}
    >
      <div className="w-full h-full bg-[#0000005d] bg-opacity-50 backdrop-filter backdrop-blur-3xl">
        <div className="w-full h-full block overflow-y-scroll">
          <Hero />

          <Skills />
        </div>
      </div>
    </main>
  )
}

export default Home
