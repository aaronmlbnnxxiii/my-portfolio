import React from "react";
import { Link } from "gatsby";
import { links } from "./Menu";
import useScrollPosition from "@utils/useScrollPosition";
import { useGlobal } from "@contexts/GlobalContext";
import { LanguageSwitcher } from "./LanguageSwitches";

const Header = ({ activeDocMeta }) => {
  const { setMobileMenuActive, mobileMenuActive } = useGlobal();
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`${
        scrollPosition >= 40
          ? "shadow-md backdrop-blur-lg !bg-white/50"
          : "border-b-[1px] border-slate-300"
      }  sticky w-full bg-white z-50 top-0 left-0`}
    >
      <nav
        className={`flex max-w-[1024px] w-full mx-auto justify-between px-4 h-[55px] items-center`}
      >
        <Link to="/">Logo...</Link>
        <ul className="hidden md:flex [&>*+*]:ml-5">
          {links.map((val: any, index: any) => (
            <li key={val.name + index}>
              <Link className="nav-item" to={val.url}>
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
        <button
          className="flex md:hidden flex-col"
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          <span
            className={`transition-300 w-5 h-[2px]  ${
              mobileMenuActive
                ? "rotate-45 translate-y-[4px] bg-orange-600 h-[3px]"
                : "bg-black"
            }`}
          ></span>
          <span
            className={`transition-300 w-5 h-[2px]  mt-1 ${
              mobileMenuActive
                ? "-rotate-45 -translate-y-[3px] bg-orange-600 h-[3px]"
                : "bg-black"
            }`}
          ></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
