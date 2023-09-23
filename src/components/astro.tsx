import React, { forwardRef } from "react"
import Lottie from "lottie-react"
import Astro from "./../../public/lottie/animation_lmtd0834.json"

const LottieAnimation = forwardRef((props, ref: any) => (
  <Lottie
    animationData={Astro}
    loop
    autoplay
    style={{ width: "75%", margin: "auto" }}
    ref={ref}
  />
))

export default LottieAnimation
