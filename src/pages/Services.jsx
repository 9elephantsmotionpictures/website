import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Tv,
  Rocket,
  Globe2,
  Mic2,
  Bot,
  GraduationCap,
  Smartphone,
  Wrench,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";


import service1 from "../assets/images/services/service-1.jfif";
import service2 from "../assets/images/services/service-2.jfif";
import service3 from "../assets/images/services/service-3.jfif";
import service4 from "../assets/images/services/service-4.jfif";
import service5 from "../assets/images/services/service-5.jfif";
import service6 from "../assets/images/services/service-6.jfif";
import service7 from "../assets/images/services/service-7.jfif";
import service8 from "../assets/images/services/service-8.jfif";
import service9 from "../assets/images/services/service-9.jfif";


/* =====================================================
   HERO SLIDES
===================================================== */

const heroSlides = [
  {
    image: service1,
    title: "Corporate Films",
    subtitle: "Powerful stories that define your brand.",
  },
  {
    image: service2,
    title: "Ad Films",
    subtitle: "Creative visuals that capture attention instantly.",
  },
  {
    image: service3,
    title: "Promotional Videos",
    subtitle: "Dynamic content designed to launch your brand.",
  },
  {
    image: service4,
    title: "Documentaries",
    subtitle: "Real stories. Powerful emotions. Lasting impact.",
  },
  {
    image: service5,
    title: "Podcasts",
    subtitle: "Professional audio and video storytelling.",
  },
  {
    image: service6,
    title: "AI Videos",
    subtitle: "Next-generation visuals powered by innovation.",
  },
  {
    image: service7, 
    title: "Educational Videos",
    subtitle: "Complex ideas transformed into engaging visuals.",
  },
  {
    image: service8,
    title: "Influencer Videos",
    subtitle: "Authentic content built for the digital generation.",
  },
  {
    image: service9,
    title: "Tutorial Videos",
    subtitle: "Simple, clear and effective visual guidance.",
  },
];


/* =====================================================
   SERVICES DATA
===================================================== */

const services = [
  {
    number: "01",
    title: "Corporate Films",
    icon: Building2,
    description:
      "Crafting high-end, prestige-driven films that beautifully capture your infrastructure, culture and corporate vision.",
    points: [
      "Cinematic Brand Legacy",
      "Powerful Authority Builder",
      "Professional Corporate Storytelling",
    ],
  },

  {
    number: "02",
    title: "Ad Films",
    icon: Tv,
    description:
      "High-energy and visually spectacular commercials designed to hook viewers instantly and turn attention into action.",
    points: [
      "Scroll-Stopping Hooks",
      "Concept-Driven Storytelling",
      "Sales-Skyrocketing Impact",
    ],
  },

  {
    number: "03",
    title: "Promotional Videos",
    icon: Rocket,
    description:
      "Dynamic, high-velocity videos custom-crafted to introduce your products and services with maximum impact.",
    points: [
      "Trend-Setting Launches",
      "Hype & Buzz Creation",
      "High-Impact Visuals",
    ],
  },

  {
    number: "04",
    title: "Documentaries",
    icon: Globe2,
    description:
      "Deeply moving and authentic storytelling built on research to capture the heart of real-life people, events and stories.",
    points: [
      "Research-Backed Narratives",
      "Authentic Storytelling",
      "Stunning Cinematic Depth",
    ],
  },

  {
    number: "05",
    title: "Podcasts",
    icon: Mic2,
    description:
      "Crystal-clear audio paired with professional multi-camera production to give your podcast a premium broadcast look.",
    points: [
      "Studio-Grade Audio & Video",
      "Professional Multi-Camera Setup",
      "Thought Leader Blueprint",
    ],
  },

  {
    number: "06",
    title: "AI Videos",
    icon: Bot,
    description:
      "Futuristic visual content powered by advanced artificial intelligence to help your brand stand apart from the competition.",
    points: [
      "Cutting-Edge Innovation",
      "AI-Powered Visuals",
      "Boundless Creativity",
    ],
  },

  {
    number: "07",
    title: "Educational Videos",
    icon: GraduationCap,
    description:
      "Transforming complex concepts into engaging, easy-to-understand visual lessons that improve learning and retention.",
    points: [
      "Simplified Visual Learning",
      "Next-Gen E-Learning",
      "Better Student Engagement",
    ],
  },

  {
    number: "08",
    title: "Influencer Videos",
    icon: Smartphone,
    description:
      "Relatable, trend-focused content combining authentic influencer energy with premium production quality.",
    points: [
      "Viral-Ready Content",
      "Social Media Focused",
      "Premium Aesthetic Appeal",
    ],
  },

  {
    number: "09",
    title: "Tutorial Videos",
    icon: Wrench,
    description:
      "Crystal-clear instructional videos that simplify product features, demonstrate functionality and build customer trust.",
    points: [
      "Step-by-Step Clarity",
      "Trust-Building Demonstrations",
      "Customer-Focused Content",
    ],
  },
];


function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* =====================================================
     AUTO CAROUSEL
  ====================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);


  /* =====================================================
     PREVIOUS SLIDE
  ====================================================== */

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };


  /* =====================================================
     NEXT SLIDE
  ====================================================== */

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <main className="overflow-hidden bg-white">

      <section className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-[#142B4A]">

        {/* SLIDES */}

        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
              index === currentSlide
                ? "visible scale-100 opacity-100"
                : "invisible scale-110 opacity-0"
            }`}
          >

            {/* IMAGE */}

            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#081629]/90 via-[#142B4A]/60 to-black/20" />

            {/* BOTTOM OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          </div>
        ))}


        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

          <div className="max-w-3xl text-white">

            {/* LABEL */}

            <div className="mb-6 flex items-center gap-3">

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D6A63C]">
                9 Elephants MediaWorks
              </span>

            </div>


            {/* TITLE */}

            <h1
              key={currentSlide}
              className="animate-[fadeUp_0.8s_ease-out] text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl"
            >
              Our
              <span className="block text-[#D6A63C]">
                Services
              </span>
            </h1>


            {/* SLIDE TITLE */}

            <div
              key={`title-${currentSlide}`}
              className="mt-8 animate-[fadeUp_1s_ease-out]"
            >

              <h2 className="text-2xl font-semibold md:text-3xl">
                {heroSlides[currentSlide].title}
              </h2>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                {heroSlides[currentSlide].subtitle}
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            CAROUSEL ARROWS
        ================================================== */}

        <div className="absolute bottom-10 right-6 z-20 flex items-center gap-3 lg:right-10">

          <button
            onClick={previousSlide}
            aria-label="Previous Slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-[#D6A63C] hover:bg-[#D6A63C] hover:text-[#142B4A]"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-[#D6A63C] hover:bg-[#D6A63C] hover:text-[#142B4A]"
          >
            <ChevronRight size={22} />
          </button>

        </div>


        {/* =================================================
            CAROUSEL INDICATORS
        ================================================== */}

        <div className="absolute bottom-12 left-6 z-20 flex items-center gap-2 lg:left-20">

          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-8 lg:w-12 bg-[#D6A63C]"
                  : "w-3 lg:w-5 bg-white/40 hover:bg-white"
              }`}
            />
          ))}

        </div>


        {/* =================================================
            SLIDE NUMBER
        ================================================== */}

        <div className="absolute bottom-24 right-6 z-10 hidden text-sm font-semibold tracking-widest text-white/60 md:block lg:right-10">

          <span className="text-[#D6A63C]">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <span className="mx-2">
            /
          </span>

          09

        </div>

      </section>


      {/* =====================================================
          INTRO SECTION
      ====================================================== */}

      <section className="relative bg-[#F7F5F0] py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
              What We Do
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#142B4A] md:text-5xl">
              Creative Visual Solutions
              <span className="block text-[#C58A19]">
                Built Around Your Story
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
              From corporate films and advertisements to documentaries,
              podcasts and AI-powered content, we create powerful visual
              experiences that connect your brand with your audience.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* SECTION HEADING */}

          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
                Our Expertise
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#142B4A] md:text-5xl">
                Services We Offer
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Every project is crafted with a perfect combination of
              storytelling, technology and cinematic creativity.
            </p>

          </div>


          {/* SERVICES GRID */}

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D6A63C]/40 hover:shadow-[0_20px_50px_rgba(20,43,74,0.12)]"
                >

                  {/* NUMBER */}

                  <span className="absolute right-7 top-6 text-5xl font-bold text-gray-100 transition-all duration-500 group-hover:text-[#D6A63C]/20">
                    {service.number}
                  </span>


                  {/* ICON */}

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#142B4A] text-[#D6A63C] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">

                    <Icon size={30} strokeWidth={1.5} />

                  </div>


                  {/* TITLE */}

                  <h3 className="mt-7 text-2xl font-bold text-[#142B4A]">
                    {service.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>


                  {/* POINTS */}

                  <div className="mt-6 space-y-3">

                    {service.points.map((point) => (

                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-[#142B4A]"
                      >

                        <span className="h-1.5 w-1.5 rounded-full bg-[#D6A63C]" />

                        {point}

                      </div>

                    ))}

                  </div>


                  {/* ENQUIRY */}

                  <a
                    href="/contact-us"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#C58A19] transition-all duration-300 hover:gap-4"
                  >
                    Enquiry
                    <ArrowRight size={18} />
                  </a>


                  {/* HOVER LINE */}

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D6A63C] transition-all duration-500 group-hover:w-full" />

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#142B4A] py-24">

        {/* DECORATION */}

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D6A63C]/20" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#D6A63C]/10" />


        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#D6A63C]">
            Let's Create Together
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Have a Story
            <span className="block text-[#D6A63C]">
              Worth Telling?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">
            Let's transform your ideas into powerful cinematic experiences
            that inspire, engage and create a lasting impact.
          </p>

          <a
            href="/contact-us"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D6A63C] px-8 py-4 font-bold text-[#142B4A] transition-all duration-300 hover:gap-5 hover:bg-white"
          >
            Start Your Project
            <ArrowRight size={20} />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Services;