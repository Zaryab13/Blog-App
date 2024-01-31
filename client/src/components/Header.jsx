import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import navlinks from "../lib/data";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const closeMobileNav = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // this will Close the mobile navigation when the screen size is increased to desktop size
      if (window.innerWidth >= 1024 && menuIsOpen) {
        setMenuIsOpen(false);
      }
    };

    // Attached the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanuped the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuIsOpen]);

  const mobileNav = (
    <AnimatePresence>
      {menuIsOpen && (
        <motion.ul
          key="mobileNav"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="absolute top-16 bg-slate-200 left-0 w-full flex flex-col"
        >
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.id}
              className={({ isActive }) => {
                return `font-semibold py-2 text-black/75 hover:text-black transition-all border-b border-black/10 text-center hover:bg-slate-300  ${
                  isActive ? "text-slate-800 bg-cyan-500" : ""
                }`;
              }}
              onClick={closeMobileNav}
            >
              {link.name}
            </NavLink>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
  

  const desktopNav = (
    <div className="hidden lg:inline order-1">
      {navlinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.id}
          className={({ isActive }) => {
            return `font-semibold me-4 text-black/60 hover:text-black transition-all ${
              isActive ? "text-purple-500" : ""
            }`;
          }}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <nav className="border-b-2 flex justify-between items-center h-16 px-8 relative">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-xs sm:text-xl font-semibold"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white me-1">
          ISD&apos;s
        </span>{" "}
        Blog
      </Link>
      {/* Search Form */}
      <form>
        <div className="relative hidden lg:inline">
          <input
            type="text"
            placeholder="Search"
            className="outline-none border border-slate-400 focus:bg-slate-100 rounded-xl px-4 py-1 transition-all"
          />
          <AiOutlineSearch className="absolute top-2/4 -translate-y-[50%] right-1 text-3xl text-slate-500 cursor-pointer" />
        </div>
      </form>
      {/* Button for Search of small screen devices */}
      <button className="w-12 h-10 border-2 rounded-full border-black/60  flex items-center justify-center lg:hidden">
        <AiOutlineSearch className="text-black/60 " />
      </button>
      {/* Theme Toggler, Sign In and Menu toggler */}
      <div className="flex gap-2 items-center md:order-2">
        <button className="group w-12 h-10 hidden sm:flex items-center justify-center rounded-full bg-transparent border-2 border-cyan-400 hover:bg-gray-100 transition-all">
          <FaMoon className="group-hover:text-cyan-400 transition-all" />
        </button>
        <Link to={"/sign-in"}>
          <button className="px-4 py-2 hidden sm:flex items-center justify-center rounded-xl bg-transparent bg-gradient-to-br from-purple-500 to-blue-500  transition-all text-white font-semibold">
            Sign In
          </button>
        </Link>
        <div
          className="text-2xl cursor-pointer lg:hidden border-2 p-1  rounded-md hover:bg-slate-100 "
          onClick={menuToggleHandler}
        >
          {menuIsOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {/* Navlink to be displayed in large and on greater screen sizes */}
      {desktopNav}
      {mobileNav}
    </nav>
  );
};

export default Header;
