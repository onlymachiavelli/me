import * as React from "react"
import astro from "./../../public/lottie/animation_lmsgpifg.json"
import Lottie from "lottie-react"
const Description = () => {
  const astroRef = React.useRef(null)
  return (
    <>
      <div className="w-full h-auto lg:h-screen flex items-center justify-center py-10 lg:py-0 flex-col lg:flex-row">
        <aside className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <Lottie
            className="w-2/3"
            animationData={astro}
            loop
            autoplay
            ref={astroRef}
          />
        </aside>
        <aside className="w-full lg:w-1/2 h-full grid content-center  ">
          <p className="text-white text-sm w-4/5 m-auto lg:m-0 pb-5">
            Hello there! My name is Alaa Barka, and I am a Full Stack Web
            Developer and Cross Platform Developer.
            <br />
            <br />I am interested in exploring the fields of Blockchain,
            Cybersecurity, AI, and Machine Learning. <br />
            <br />
            With my experience and passion for technology, I am committed to
            staying up-to-date with the latest developments and applying my
            skills to create innovative solutions.
          </p>

          <button className="w-48 m-auto  lg:m-0 border block m-left  border-white text-white px-6 py-3 hover:bg-white hover:text-gray-900 hover:border-transparent transition duration-300 ease-in-out text-sm font-thin">
            Say My name
          </button>
        </aside>
      </div>
    </>
  )
}

export default Description
