"use client"

import * as React from "react"
import bck from "./../../public/assets/bck.jpg"
import Link from "next/link"
import { GiTriangleTarget } from "react-icons/gi"
import { PiHamburgerLight } from "react-icons/pi"
import Astro from "./../../public/lottie/animation_lmsgpifg.json"
import Lottie from "lottie-react"
const Hero = ({ ...props }) => {
  //create an animation ref
  const animationRef = React.useRef(null)
  return (
    <main className="w-full h-auto">
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${bck.src}')`,
        }}
      >
        <div className="w-full h-full bg-[#0000005d]  bg-opacity-50 backdrop-filter backdrop-blur-3xl">
          <header className="w-full h-auto flex items-center justify-between p-7">
            <Link href={"/"} title="Alaa Barka">
              <GiTriangleTarget
                //change color
                color="#fff"
                //size
                size={40}
              />
            </Link>

            <button
              className="w-12 h-12 rounded-full bg-[#ffffff1d] flex items-center justify-center border border-white"
              type="button"
              onClick={() => {}}
            >
              <PiHamburgerLight
                //change color
                color="#fff"
                //size
                size={30}
              />
            </button>
          </header>

          <div className="w-full h-auto">
            <aside></aside>
            <aside className="h-auto">
              <h1 className="text-center text-xl">
                Hi there this is <b className="bg-[#000]">Alaa Barka</b>,
                Software Developer, Coffee Addict, and an enterpreneur
              </h1>
              <Lottie
                animationData={Astro}
                loop
                autoplay
                ref={animationRef}
                //width is 75%
                style={{ width: "75%", margin: "auto" }}
              />
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
