import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Keyboard, Mousewheel } from "swiper/modules"
import { Devops } from "./icons"
const HardSwiper = ({ ...props }) => {
  return (
    <>
      <div
        className="w-full py-5 lg:py-0 h-[45rem]  rounded flex items-center justify-center lg:flex-row flex-col-reverse"
        style={{
          backgroundImage: `linear-gradient(45deg,#00DBDE, #FC00FF)` as string,
        }}
      >
        <aside className="w-full lg:w-2/3 flex items-center p-10 flex-col">
          <h1 className="text-white text-4xl font-bold ">
            I do DevOps & cloud engineering
          </h1>

          <p className="text-white pl-4 py-5">
            In my role as a DevOps and cloud engineering professional, I
            recognize that clear and persuasive communication is pivotal for
            fostering effective collaboration and achieving our objectives
            within the intricate domains of software development, system
            operations, and cloud infrastructure management.
          </p>
        </aside>
        <aside className="w-full lg:w-1/3 flex items-center justify-center">
          <Devops Width={300} />
        </aside>
      </div>
    </>
  )
}
const HardSkills: React.FC = ({ ...props }) => {
  return (
    <>
      <section className="w-full h-auto lg:px-36">
        <p className="text-white text-xl pl-10 lg:pl-0">
          Learn some of my Hard Skills
        </p>

        <Swiper
          spaceBetween={1}
          //space
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[
            Pagination,
            //if scroll then swipe
            Navigation,
            Keyboard,
            Mousewheel,
          ]}
          mousewheel={{
            sensitivity: 0.5,
            invert: false,
          }}
          keyboard
          className="mySwiper !w-full !py-10  "
        >
          <SwiperSlide className=" !w-full !h-auto !mx-3 ">
            <HardSwiper />
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto !mx-3">
            <HardSwiper />
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto !mx-3">
            <HardSwiper />
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto  !mx-3">
            <HardSwiper />
          </SwiperSlide>
          <SwiperSlide className=" !w-full !h-auto !mx-3">
            <HardSwiper />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default HardSkills
