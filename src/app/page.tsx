import * as React from "react"
import { Hero } from "./../components"
const Home = () => {
  return (
    <main className="w-full h-screen block overflow-x-hidden overflow-y-hidden">
      <div className="w-full h-full block overflow-y-scroll">
        <Hero />
      </div>
    </main>
  )
}

export default Home
