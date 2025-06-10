import { CSSProperties, useEffect, useRef, useState } from "react";
import { usePageContext, Sections } from "../contexts/PageContextProvider";

function NavBarIndicator({
  pos,
  width,
  isHidden,
}: {
  pos: number;
  width: number;
  isHidden: boolean;
}) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const indicatorStyle: CSSProperties = {
    left: pos,
    width: width,
    top: "50%",
    transform: "translateY(-50%)",
    transitionProperty: "left, top, transformm, opacity",
    transitionDuration: "350ms",
  };

  // Handle animation for navbar indicator (selected text bg)
  useEffect(() => {
    if (!indicatorRef.current) return;
    function transitionStart() {
      indicatorRef.current?.classList.add("animate-indicator_move");
    }
    function transitionEnd() {
      indicatorRef.current?.classList.remove("animate-indicator_move");
    }

    indicatorRef.current.addEventListener("transitionstart", transitionStart);
    indicatorRef.current.addEventListener("transitionend", transitionEnd);
  });

  return (
    <div
      className={`z-0 absolute h-9 translate-y-1/2 -top-1/2 bg-purple-900 rounded-full ${
        isHidden && "opacity-0"
      }`}
      style={indicatorStyle}
      ref={indicatorRef}
    />
  );
}

export default function NavBar() {
  const sectionRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const { SECTIONS, activeId, setActiveId } = usePageContext()!;
  const [scrolled, setScrolled] = useState(false);

  // function navbarNavigate(section: ActiveId) {
  //   setActiveId(section);
  // }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActiveId(Sections.home);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full flex justify-center fixed left-1/2 -translate-x-1/2 top-3 z-50 ">
      <ul
        className={`relative flex gap-3 py-3 px-2 rounded-full text-sm font-semibold border-blue-950 ${
          scrolled && "bg-blue-950/60 -mt-1 border-2 backdrop-blur-xl shadow-md"
        }  `}
      >
        {/*  */}
        {SECTIONS.map((section, idx) => {
          return (
            <li
              className={`z-10 ${activeId !== section && "text-gray-400"}`}
              key={`nav-${section}`}
            >
              <a
                className="px-4"
                href={`#${section}`}
                // onClick={() => navbarNavigate(section as ActiveId)}
                ref={(e) => (sectionRefs.current[idx] = e)}
                data-section-name={section}
              >
                <span className=" sm:inline-block">{section}</span>
                {/* <span className="sm:hidden">H</span> */}
              </a>
            </li>
          );
        })}

        {/* Indicator */}

        <NavBarIndicator
          pos={
            sectionRefs.current.find(
              (el) => el?.dataset["sectionName"] === activeId
            )?.offsetLeft || 0
          }
          width={
            sectionRefs.current.find(
              (el) => el?.dataset["sectionName"] === activeId
            )?.offsetWidth || 0
          }
          isHidden={!scrolled}
        />
      </ul>
    </nav>
  );
}
