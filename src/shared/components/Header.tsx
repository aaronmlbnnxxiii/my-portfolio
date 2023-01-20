import React, { useState, forwardRef } from "react"
import { Link } from "gatsby"
import { useGlobal } from "../../contexts/GlobalContext"
import Announcement from "./Announcement"
import { links } from "./Menu"


const Header = forwardRef<HTMLElement>(({ siteTitle }: any, ref) => {

    const { setMobileMenuActive, mobileMenuActive } = useGlobal()

    return (
        <header className="w-full bg-slate-100 z-50" ref={ref}>
            <Announcement />
            <div className="flex max-w-[1024px] w-full mx-auto justify-between px-4 h-[50px] items-center">
                <Link to="/">Logo...</Link>
                <ul className="hidden md:flex [&>*+*]:ml-5">
                    {links.map((val: any, index: any) => (
                        <li key={val.name + index}>
                            <Link className="nav-item" to={val.url}>{val.name}</Link>
                        </li>
                    ))}
                </ul>

                <button className="flex md:hidden flex-col p-2" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                    <span className={`transition-300 w-5 h-[2px] bg-black ${mobileMenuActive ? "rotate-45 translate-y-[4px]" : ""}`}></span>
                    <span className={`transition-300 w-5 h-[2px] bg-black mt-1 ${mobileMenuActive ? "-rotate-45 -translate-y-[2px]" : ""}`}></span>
                </button>

            </div>
        </header>
    )
})


export default Header
