import * as React from "react"
import { GiTriangleTarget } from "react-icons/gi"
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi"
import { RiTwitterXFill } from "react-icons/ri"
import Link from "next/link"
const HeroSection = ({ ...props }) => {
  const bruh: string[] = ["B", "R", "U", "U", "H"]
  return (
    <>
      <main className="w-full  h-[87vh]  relative flex items-center justify-center overflow-x-hidden">
        <div className="flex flex-col   justify-center  w-full p-3 lg:pl-[10%] ">
          <h1 className="text-white lg:text-3xl text-xl">
            What&apos;s up There!, This is{" "}
          </h1>
          <h1 className="font-extrabold py-5 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#009FFF] to-[#ec2F4B] flex items-center ">
            <GiTriangleTarget color="#009FFF" size={90} />
            laa
          </h1>

          <p className="text-white w-3/5 text-xs md:text-base">
            My name is Alaa Barka, CS Student @ UIK. I am a Full-Stack Web
            Developer. Scroll down to learn more about me.
          </p>

          <div className="py-5 w-full h-auto flex items-center gap-3">
            <Link
              href="/"
              className="flex duration-500 hover:bg-[#ffffff4a] items-center justify-center w-12 h-12 pb-1 border border-white rounded-full"
            >
              <FiLinkedin color="#fff" size={20} className="cursor-pointer" />
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
              <FiInstagram color="#fff" size={20} className="cursor-pointer" />
            </Link>
          </div>

          <button className=" border block w-48 border-white text-white px-6 py-3 hover:bg-white hover:text-gray-900 hover:border-transparent transition duration-300 ease-in-out text-sm font-thin">
            Say My name
          </button>
        </div>
        <div className="w-1/2 h-auto  flex justify-end absolute right-[-8rem]">
          <div className="  flex rotate-90 ">
            {bruh.map((letter: string, index: number) => {
              return (
                <b
                  className="text-[#ffffff1b]  block cursor-default text-[9rem] hover:text-[10rem] duration-500"
                  key={index}
                >
                  {letter}
                </b>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default HeroSection
