import {
  ArrowRight,
  Play,
  Film,
  Video,
} from "lucide-react";

import heroVideo from "../assets/videos/hero-video.mp4";
import flashVideo from "../assets/videos/flash.mp4";

import ServicesSlider from "../components/ServicesSlider ";
import ProcessSection from "../components/ProcessSection";
import Clients from "../components/Clients";
import WhyChooseUs from "../components/WhyChooseUs";


function Home() {

  return (
    <main className="overflow-hidden bg-[#FFFDF8] text-[#142B4A]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#081C31]">
        <video
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

          <h1 className="font-description max-w-5xl text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">

            Bringing Your

            <span className="block text-[#D6A63C]">
              Story to Life
            </span>

            Through Video.

          </h1>

        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            Scroll to Explore
          </span>

          <div className="h-12 w-px bg-gradient-to-b from-[#D6A63C] to-transparent" />

        </div>

      </section>


      {/* =====================================================
          INTRO SECTION
      ====================================================== */}

      <section className="py-20 md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="font-subtitle mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
                Who We Are
              </p>

              <h2 className="font-title max-w-3xl text-4xl font-semibold leading-tight text-[#142B4A] md:text-6xl">

                Stories that connect.

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

      <section className="relative overflow-hidden py-12 sm:py-20 md:py-40">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={flashVideo}
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20 sm:bg-white/10" />

        {/* Content */}
        <div className="relative z-10 mx-auto px-5 sm:px-6 lg:px-12">

          <div className="max-w-4xl">

            <p className="font-subtitle mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D6A63C] sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
              Ready to Tell Your Story?
            </p>

            <h2 className="font-title text-xl font-semibold leading-[1.1] text-[#081C31] sm:text-4xl md:text-6xl lg:text-7xl">
              Let's Create
              <br />
              Something Amazing.
            </h2>

            <a
              href="/contact-us"
              className="font-description mt-7 inline-flex items-center gap-2 rounded-full bg-[#D6A63C] px-6 py-3.5 text-sm font-bold text-[#142B4A] transition-all duration-300 hover:gap-4 hover:bg-[#142B4A] hover:text-white sm:mt-9 sm:px-8 sm:py-4 sm:text-base"
            >
              Start Your Project
              <ArrowRight size={18} className="sm:h-5 sm:w-5" />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;