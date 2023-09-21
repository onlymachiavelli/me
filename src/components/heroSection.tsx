"use client"

import * as React from "react"
import bck from "./../../public/assets/bck.jpg"
import Link from "next/link"
import { GiTriangleTarget } from "react-icons/gi"
import { PiHamburgerLight } from "react-icons/pi"
import Astro from "./../../public/lottie/animation_lmtd0834.json"
import Lottie from "lottie-react"
const Hero = ({ ...props }) => {
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
              <GiTriangleTarget color="#fff" size={40} />
            </Link>

            <button
              className="w-12 h-12 rounded-full bg-[#ffffff1d] flex items-center justify-center border border-white"
              type="button"
              onClick={() => {}}
            >
              <PiHamburgerLight color="#fff" size={30} />
            </button>
          </header>

          <div className="w-full h-auto flex items-center justify-center">
            <aside className="w-1/2 p-10">
              <p className="text-xl ">Hello there</p>
              <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Alaa Barka
              </h1>
            </aside>
            <aside className="h-auto w-1/2">
              <Lottie
                animationData={Astro}
                loop
                autoplay
                ref={animationRef}
                //width is 75%
                style={{ width: "75%", margin: "auto" }}
                onLoad={() => {
                  //add a page loader
                }}
              />
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
