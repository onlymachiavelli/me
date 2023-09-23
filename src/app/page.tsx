"use client"
import * as React from "react"
import { Hero, Skills } from "./../components"
import AnimatedCursor from "react-animated-cursor"

const Home = () => {
  return (
    <main
      className="w-full h-auto block overflow-x-hidden overflow-y-hidden"
      onScroll={(e) => {
        console.log(e)
      }}
    >
      <div className="w-full h-full block overflow-y-scroll">
        <Hero />
        <Skills />
      </div>
    </main>
  )
}

export default Home
