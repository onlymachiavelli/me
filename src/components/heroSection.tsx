import React, { useState, useEffect, useRef } from "react"
import bck from "./../../public/assets/bck.jpg"
import Link from "next/link"
import { GiTriangleTarget } from "react-icons/gi"
import { PiHamburgerLight } from "react-icons/pi"
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi"
import { RiTwitterXFill } from "react-icons/ri"
import Astro from "./../../public/lottie/animation_lmtd0834.json"
import { Parallax } from "@react-spring/parallax"
import LottieAnimation from "./astro"
import Lottie from "lottie-react"

const Hero = () => {
  const [bannerTxt, setBannerTxt] = useState("")
  const [index, setIndex] = useState(0)
  const animationRef = useRef(null)

  useEffect(() => {
    const msg =
      "Software Developer and Computer Scientist, Scroll down and learn some about me.|"
    const speed = 50 // Adjust the typing speed (characters per second)

    if (index < msg.length) {
      setTimeout(() => {
        setBannerTxt((prev) => prev + msg[index])
        setIndex((prev) => prev + 1)
      }, 1000 / speed)
    } else {
      // Remove the last character
      setTimeout(() => {
        setBannerTxt((prev) => prev.slice(0, -1))
        setIndex((prev) => prev - 1)
      }, 1000 / speed)
    }
  }, [index])

  return (
    <main className="w-full h-auto">
      <div
        className="w-full h-auto bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${bck.src}')`,
        }}
      >
        <div className="w-full h-full bg-[#0000005d] bg-opacity-50 backdrop-filter backdrop-blur-3xl">
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

          <div className="w-full h-auto lg:screen flex items-center justify-center flex-col  ">
            <aside className="w-11/12 lg:w-1/2 p-10 ">
              <p className="text-xl font-thin text-white ">Hi There, This is</p>
              <h1 className="font-extrabold py-5 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#009FFF] to-[#ec2F4B] flex items-center ">
                <GiTriangleTarget color="#009FFF" size={95} />
                laa
              </h1>
              <p className="text-white text-xl lg:h-20">{bannerTxt}</p>

              <div className="py-5 w-full h-auto flex items-center gap-3">
                <Link
                  href="/"
                  className="flex duration-500 hover:bg-[#ffffff4a] items-center justify-center w-12 h-12 pb-1 border border-white rounded-full"
                >
                  <FiLinkedin
                    color="#fff"
                    size={20}
                    className="cursor-pointer"
                  />
                </Link>

                <Link
                  href="/"
                  className="flex items-center justify-center w-12 h-12 duration-500 hover:bg-[#ffffff4a] border border-white rounded-full"
                >
                  <RiTwitterXFill
                    color="#fff"
                    size={20}
                    className="cursor-pointer"
                  />
                </Link>

                <Link
                  href="/"
                  className="flex items-center justify-center w-12 h-12 border border-white rounded-full duration-500 hover:bg-[#ffffff4a]"
                >
                  <FiGithub color="#fff" size={20} className="cursor-pointer" />
                </Link>

                <Link
                  href="/"
                  className="flex items-center justify-center w-12 h-12 border border-white rounded-full duration-500 hover:bg-[#ffffff4a]"
                >
                  <FiInstagram
                    color="#fff"
                    size={20}
                    className="cursor-pointer"
                  />
                </Link>
              </div>

              <button className="rounded-lg border border-white text-white px-6 py-2 hover:bg-white hover:text-gray-900 hover:border-transparent transition duration-300 ease-in-out text-sm font-thin">
                Say Hello
              </button>
            </aside>

            <aside className="h-auto w-11/12 lg:w-1/2 m-auto ">
              <LottieAnimation ref={animationRef} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
