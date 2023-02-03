import React from "react"
import { Link } from "gatsby"
import { links } from "./Menu"
import useScrollPosition from "@utils/useScrollPosition"
import { useGlobal } from "@contexts/GlobalContext"

const Header = () => {
    const { setMobileMenuActive, mobileMenuActive } = useGlobal()
    const scrollPosition = useScrollPosition()
    return (
        <header className={`${scrollPosition >= 40 ? "shadow-sm backdrop-blur-lg !bg-white/50" : ""}  sticky w-full bg-white z-50 top-0 left-0`}>
            <nav className={`flex max-w-[1024px] w-full mx-auto justify-between px-4 h-[55px] items-center`}>
                <Link to="/">Logo...</Link>
                <ul className="hidden md:flex [&>*+*]:ml-5">
                    {links.map((val: any, index: any) => (
                        <li key={val.name + index}>
                            <Link className="nav-item" to={val.url}>{val.name}</Link>
                        </li>
                    ))}
                </ul>
                <button className="flex md:hidden flex-col" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                    <span className={`transition-300 w-5 h-[2px] bg-black ${mobileMenuActive ? "rotate-45 translate-y-[4px]" : ""}`}></span>
                    <span className={`transition-300 w-5 h-[2px] bg-black mt-1 ${mobileMenuActive ? "-rotate-45 -translate-y-[2px]" : ""}`}></span>
                </button>

            </nav>
        </header>
    )
}


export default Header
