import * as React from "react"
import Link from "next/link"
import { GiTriangleTarget } from "react-icons/gi"
import { PiHamburgerLight } from "react-icons/pi"

const Header = ({ ...props }) => {
  return (
    <>
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
    </>
  )
}

export default Header
