"use client"

import * as React from "react"
import bck from "./../../public/assets/bck.jpg"
import Link from "next/link"
//GiTriangleTarget import that from react-icon
import { GiTriangleTarget } from "react-icons/gi"
import { PiHamburgerLight } from "react-icons/pi"
const Hero = ({ ...props }) => {
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
        </div>
      </div>
    </main>
  )
}

export default Hero
