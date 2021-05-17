import { useEffect, useState } from "react";
import { Link as LinkScroll, animateScroll, Events } from "react-scroll";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      setOpenMenu(false);
    });

    return () => Events.scrollEvent.remove("begin");
  }, []);

  return (
    <nav className="bg-purple-50 border border-gray-200 shadow-sm sticky inset-x-0 top-0">
      <div className="contenedor flex justify-between items-center text-gray-700 my-4 md:my-0 ">
        <div onClick={() => animateScroll.scrollToTop()}>
          <span className="text-2xl font-bold cursor-pointer">
            esteban-master
          </span>
        </div>
        <div className="md:flex md:space-x-3 hidden">
          <LinkScroll
            to="acerca"
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            offset={-350}
            className="text-lg px-3 block py-4 font-light hover:bg-purple-500 hover:text-white transition duration-200 ease-out"
          >
            Acerca de
          </LinkScroll>
          <LinkScroll
            to="proyectos"
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            isDynamic={true}
            offset={-350}
            className="text-lg px-3 block py-4 font-light hover:bg-purple-500 hover:text-white transition duration-200 ease-out"
          >
            Proyectos
          </LinkScroll>
        </div>
        <div
          onClick={() => setOpenMenu(true)}
          className={`${openMenu ? "hidden" : "block"} md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          onClick={() => setOpenMenu(false)}
          className={`${openMenu ? "block" : "hidden"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } shadow-lg transition duration-200 ease-out`}
      >
        <LinkScroll
          to="acerca"
          activeClass="active"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={700}
          isDynamic={true}
          offset={-350}
          className="text-lg px-3 block py-4 font-light hover:bg-purple-500 hover:text-white transition duration-200 ease-out"
        >
          Acerca de
        </LinkScroll>
        <LinkScroll
          to="proyectos"
          activeClass="active"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={700}
          isDynamic={true}
          offset={-350}
          className="text-lg px-3 block py-4 font-light hover:bg-purple-500 hover:text-white transition duration-200 ease-out"
        >
          Proyectos
        </LinkScroll>
      </div>
    </nav>
  );
};
