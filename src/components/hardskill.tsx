import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Keyboard, Mousewheel } from "swiper/modules"

const HardSwiper = ({ ...props }) => {
  return (
    <>
      <div
        className="w-full h-[40rem]  rounded"
        style={{
          backgroundImage: `linear-gradient(45deg,#00DBDE, #FC00FF)` as string,
        }}
      ></div>
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
          className="mySwiper !w-full !py-10 !px-10 !gap-5"
        >
          <SwiperSlide className=" !w-full !h-auto">
            <HardSwiper />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default HardSkills
