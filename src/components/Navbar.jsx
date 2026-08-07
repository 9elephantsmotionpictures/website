import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Users,
  Film,
  Workflow,
  Clapperboard,
  Camera,
  Trophy,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "About Us",
      path: "/about-us",
      icon: Users,
    },
    {
      name: "Services",
      path: "/services",
      icon: Film,
    },
    {
      name: "Processes",
      path: "/processes",
      icon: Workflow,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: Clapperboard,
    },
    {
      name: "BTS",
      path: "/bts",
      icon: Camera,
    },
    {
      name: "News & Awards",
      path: "/news-awards",
      icon: Trophy,
    },
  ];

  /* =====================================================
     SCROLL DETECTION
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MENU
  ====================================================== */

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 top-0 z-[100] w-full">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between">

          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="/"
            onClick={closeMenu}
            className={`relative z-[120] flex items-center transition-all duration-500 ${
              isScrolled
                ? "-translate-x-20 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <img
              src={logo}
              alt="9 Elephants"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* =================================================
              MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className={`z-[120] flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 ${
              isScrolled
                ? "fixed right-6 top-6 shadow-[0_0_35px_rgba(214,166,60,0.45)]"
                : "relative"
            } ${
              isOpen
                ? "rotate-90 bg-[#142B4A] text-white"
                : "bg-[#C58A19] text-white hover:bg-[#D6A63C]"
            }`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* =====================================================
          CAMERA MENU OUTSIDE CLICK AREA
          Circle च्या बाहेर click केल्यावर menu close होईल
      ====================================================== */}

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[80] transition-all duration-700 ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* =====================================================
          CAMERA LENS MENU WRAPPER
          या wrapper च्या बाहेर click = CLOSE
      ====================================================== */}

      <div
        onClick={closeMenu}
        className={`fixed right-0 top-0 z-[110] h-screen w-[620px] max-w-[95vw] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible pointer-events-none translate-x-full opacity-0"
        }`}
      >

        {/* =================================================
            REAL CAMERA LENS
            Lens च्या आत click केल्यावर close होणार नाही
        ================================================== */}

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute -right-[220px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#111]/80 shadow-2xl backdrop-blur-[2  px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-[-35deg] scale-[0.35] opacity-0"
          }`}
        >

          {/* =================================================
              OUTER CAMERA BODY
          ================================================== */}

          <div className="absolute inset-0 rounded-full border-[5px] border-[#343434] shadow-[inset_0_0_15px_rgba(255,255,255,0.15),0_0_20px_rgba(0,0,0,0.8)]" />

          {/* =================================================
              OUTER METAL RING
          ================================================== */}

          <div className="absolute inset-[8px] rounded-full border-[3px] border-[#777] opacity-70" />

          {/* =================================================
              CAMERA GROOVE
          ================================================== */}

          <div className="absolute inset-[15px] rounded-full border-[8px] border-[#222] shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]" />

          {/* =================================================
              GOLD ACCENT RING
          ================================================== */}

          <div className="absolute inset-[27px] rounded-full border border-[#D6A63C]/10" />

          {/* =================================================
              LENS TEXT RING
          ================================================== */}

          <div className="absolute inset-[35px] rounded-full border-[5px] border-[#151515]">

            <span className="absolute left-[18%] top-[8%] rotate-[-25deg] text-[8px] font-bold tracking-[0.15em] text-white/50">
              9 ELEPHANTS
            </span>

            <span className="absolute right-[12%] top-[48%] rotate-90 text-[7px] font-semibold tracking-widest text-white/40">
              CINEMA
            </span>

            <span className="absolute bottom-[8%] left-[15%] rotate-[210deg] text-[7px] tracking-widest text-white/40">
              FILM • STORY • VISION
            </span>

          </div>

          {/* =================================================
              INNER LENS RING
          ================================================== */}

          <div className="absolute inset-[65px] rounded-full border-[7px] border-[#292929] shadow-[inset_0_0_12px_rgba(255,255,255,0.12)]" />

          {/* =================================================
              LENS GLASS
          ================================================== */}

          <div className="absolute inset-[80px] overflow-hidden rounded-full border-2 border-white/20 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),transparent_12%,rgba(10,20,25,0.9)_45%,rgba(0,0,0,0.95)_75%)]">

            {/* APERTURE OUTER */}

            <div className="absolute inset-[20px] rounded-full border-[8px] border-[#101010]" />

            {/* APERTURE CENTER RING */}

            <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px] border-[#1b1b1b] shadow-[inset_0_0_15px_black]" />

            {/* APERTURE CENTER */}

            <div className="absolute left-1/2 top-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_25px_rgba(0,0,0,0.9)]">

              <div className="absolute left-[20%] top-[18%] h-3 w-3 rounded-full bg-white/40 blur-[2px]" />

            </div>

            {/* GLASS REFLECTION */}

            <div className="absolute -left-10 top-12 h-32 w-12 rotate-[35deg] rounded-full bg-white/10 blur-xl" />

            <div className="absolute bottom-14 right-10 h-20 w-8 rotate-[-35deg] rounded-full bg-[#D6A63C]/10 blur-lg" />

          </div>

          {/* =================================================
              INNER GOLD RING
          ================================================== */}

          <div className="absolute inset-[145px] rounded-full border border-[#D6A63C]/50" />

          {/* =================================================
              INNER BLACK RING
          ================================================== */}

          <div className="absolute inset-[155px] rounded-full border-[4px] border-[#111]" />

          {/* =================================================
              APERTURE STYLE RING
          ================================================== */}

          <div className="absolute left-1/2 top-1/2 h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

          {/* =================================================
              CAMERA MEASUREMENT MARKINGS
          ================================================== */}

          <div className="absolute inset-[23px] rounded-full">

            <span className="absolute left-1/2 top-[-10px] h-4 w-[1px] -translate-x-1/2 bg-white/60" />

            <span className="absolute left-[25%] top-[15px] h-3 w-[1px] rotate-[-35deg] bg-white/40" />

            <span className="absolute left-[5%] top-[95px] h-3 w-[1px] rotate-[-55deg] bg-white/50" />

            <span className="absolute left-[-5px] top-1/2 h-3 w-[1px] rotate-[-90deg] bg-white/60" />

            <span className="absolute bottom-[95px] left-[5%] h-3 w-[1px] rotate-[-115deg] bg-white/40" />

            <span className="absolute bottom-[15px] left-[25%] h-3 w-[1px] rotate-[-145deg] bg-white/50" />

            <span className="absolute bottom-[-10px] left-1/2 h-4 w-[1px] -translate-x-1/2 bg-white/60" />

          </div>

          {/* =================================================
              MENU ICONS
          ================================================== */}

          <LensMenuItem
            link={navLinks[0]}
            position="left-[120px] top-[-10px]"
            active={location.pathname === "/"}
            closeMenu={closeMenu}
            delay="delay-[150ms]"
            isOpen={isOpen}
          />

          <LensMenuItem
            link={navLinks[1]}
            position="left-[50px] top-[20px]"
            active={location.pathname === "/about-us"}
            closeMenu={closeMenu}
            delay="delay-[200ms]"
            isOpen={isOpen}
          />

          <LensMenuItem
            link={navLinks[2]}
            position="left-[-10px] top-[80px]"
            active={location.pathname === "/services"}
            closeMenu={closeMenu}
            delay="delay-[250ms]"
            isOpen={isOpen}
          />

          <LensMenuItem
            link={navLinks[3]}
            position="left-[-40px] top-[160px]"
            active={location.pathname === "/processes"}
            closeMenu={closeMenu}
            delay="delay-[300ms]"
            isOpen={isOpen}
          />

          <LensMenuItem
            link={navLinks[4]}
            position="left-[-40px] top-[250px]"
            active={location.pathname === "/portfolio"}
            closeMenu={closeMenu}
            delay="delay-[350ms]"
            isOpen={isOpen}
          />

          <LensMenuItem
            link={navLinks[5]}
            position="left-[0px] top-[325px]"
            active={location.pathname === "/bts"}
            closeMenu={closeMenu}
            delay="delay-[400ms]"
            isOpen={isOpen}
          />

          <LensMenuItem
            link={navLinks[6]}
            position="left-[60px] top-[380px]"
            active={location.pathname === "/news-awards"}
            closeMenu={closeMenu}
            delay="delay-[450ms]"
            isOpen={isOpen}
          />

          {/* =================================================
              CONTACT US
          ================================================== */}

          <a
            href="/contact-us"
            onClick={closeMenu}
            className={`absolute left-[150px] top-[410px] flex flex-col items-center gap-2 text-center transition-all 
              duration-500 ease-out ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100 delay-[500ms]"
                : "translate-y-8 scale-50 opacity-0"
            }`}
          >

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6A63C] bg-black/70 text-[#D6A63C] shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#D6A63C] hover:text-[#142B4A]">
              <Mail size={25} strokeWidth={1.5} />
            </span>

            <span className="whitespace-nowrap text-sm font-semibold text-white">
              Contact Us
            </span>

          </a>

        </div>
      </div>
    </>
  );
}


/* =====================================================
   LENS MENU ITEM
   ICON + NAME BELOW
====================================================== */

function LensMenuItem({
  link,
  position,
  active,
  closeMenu,
  delay,
  isOpen,
}) {
  const Icon = link.icon;

  return (
    <a
      href={link.path}
      onClick={closeMenu}
      className={`absolute ${position} group flex w-[105px] flex-col items-center text-center transition-all duration-500 ease-out ${delay} ${
        isOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-50 opacity-0"
      }`}
    >

      {/* ICON */}

      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
          active
            ? "border-[#D6A63C] bg-[#D6A63C] text-[#142B4A] shadow-[0_0_25px_rgba(214,166,60,0.5)]"
            : "border-[#D6A63C]/70 bg-black/50 text-[#D6A63C] group-hover:bg-[#D6A63C] group-hover:text-[#142B4A] group-hover:shadow-[0_0_25px_rgba(214,166,60,0.5)]"
        }`}
      >
        <Icon size={25} strokeWidth={1.5} />
      </span>

      {/* NAME BELOW ICON */}

      <span
        className={`mt-2 whitespace-nowrap text-xs font-semibold transition-all duration-300 ${
          active
            ? "text-[#D6A63C]"
            : "text-white group-hover:text-[#D6A63C]"
        }`}
      >
        {link.name}
      </span>

    </a>
  );
}

export default Navbar;