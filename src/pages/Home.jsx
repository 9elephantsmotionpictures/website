import {
  ArrowRight,
  Play,
  Film,
  Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/videos/hero-video.mp4";


import ServicesSlider from "../components/ServicesSlider ";
import ProcessSection from "../components/ProcessSection";
import Clients from "../components/Clients";
import WhyChooseUs from "../components/WhyChooseUs";


function Home() {
    const heroVideoRef = useRef(null);
  const [showHeroText, setShowHeroText] = useState(true);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const time = video.currentTime;

      if (time >= 7 && time < 18) {
        setShowHeroText(false);
      } else {
        setShowHeroText(true);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  return (
    <main className="overflow-hidden bg-[#FFFDF8] text-[#142B4A]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#081C31]">
        <video
        ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-[#081C31]/50" />

        {/* Cinematic Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#081C31]/70 via-transparent to-[#081C31]/30" />

        {/* Hero Content */}

        <div className="relative z-10 px-6 text-center">

          <h1
            className={`
              font-description max-w-5xl text-3xl font-semibold
              leading-[1.05] tracking-tight text-white
              sm:text-3xl md:text-4xl lg:text-5xl
              transition-all duration-3000 ease-in-out
              ${
                showHeroText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            Bringing Your

            <span className="block text-[#D6A63C]">
              Story to Life
            </span>

            Through Video.
          </h1>

        </div>

        {/* Scroll Indicator */}

        {/* <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            Scroll to Explore
          </span>

          <div className="h-12 w-px bg-gradient-to-b from-[#D6A63C] to-transparent" />

        </div> */}

      </section>


      {/* =====================================================
          INTRO SECTION
      ====================================================== */}

      <section className="py-20 md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="font-subtitle mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19] ml-2">
                Who We Are
              </p>

              <h2 className="font-title max-w-3xl text-4xl font-semibold leading-tight text-[#142B4A] md:text-6xl">

                <b>Stories that connect.</b>

                <span className="block text-[#C58A19]">
                  Visuals that inspire.
                </span>

              </h2>

            </div>


            <div>

              <p className="font-description text-lg leading-8 text-[#142B4A]/65">

                9 Elephants MediaWorks is a creative video production house
                focused on high-impact visual storytelling. We combine
                creative artistry, technology, and professional filmmaking
                to bring ideas to life.

              </p>

              <a
                href="/about-us"
                className="font-description group mt-7 inline-flex items-center gap-3 font-semibold text-[#142B4A]"
              >

                Discover Our Story

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />

              </a>

            </div>

          </div>

        </div>

      </section>

      <ServicesSlider />

      <ProcessSection />

      <Clients />

      <WhyChooseUs />


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      {/* =====================================================
    FINAL CTA
====================================================== */}
        <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-[#081C31] py-20 sm:min-h-[600px] md:min-h-[700px]">

  {/* Cinematic Top-to-Text Flash */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

    <div className="cta-light-beam" />

    <div className="cta-light-core" />

  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-6 lg:px-12">

    <p className="cta-content font-subtitle mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#D6A63C] sm:text-sm">
      Ready to Tell Your Story?
    </p>

    <h2 className="cta-content font-title text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Let's Create
      <br />
      <span className="text-[#D6A63C]">
        Something Amazing.
      </span>
    </h2>

    <a
      href="/contact-us"
      className="cta-button font-description mt-9 inline-flex items-center gap-3 rounded-full border border-[#D6A63C]/40 bg-[#D6A63C] px-7 py-4 text-sm font-bold text-[#081C31] shadow-[0_10px_40px_rgba(214,166,60,0.25)] transition-all duration-500 hover:gap-5 hover:bg-white hover:shadow-[0_15px_50px_rgba(255,255,255,0.15)] sm:px-9 sm:py-4 sm:text-base"
    >
      Start Your Project

      <ArrowRight
        size={19}
        className="transition-transform duration-500"
      />
    </a>

  </div>

</section>

    </main>
  );
}

export default Home;