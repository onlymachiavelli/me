"use client"
import * as React from "react"
import { Header, HeroSection, Description } from "./../components"
import bck from "./../../public/assets/bck.jpg"

const Home = () => {
  //create ref

  return (
    <main
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
          <Header />
          <HeroSection />
          <Description />
        </div>
      </div>
    </main>
  )
}

export default Home
