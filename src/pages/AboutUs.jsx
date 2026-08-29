import {
  Award,
  CheckCircle2,
  Clapperboard,
  Globe2,
  MapPin,
  Sparkles,
  Target,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

import founderImage from "../assets/images/founder.jpg";

function AboutUs() {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Affordable Packages",
      description:
        "Professional, high-end video production delivered through budget-friendly and scalable packages tailored to your needs.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "We deliver your projects quickly without compromising on quality, ensuring timely results with professional excellence.",
    },
    {
      icon: Clapperboard,
      title: "Cinematic Quality",
      description:
        "Every shot is engineered with a perfect blend of creativity and technology, delivering stunning visuals with a cinematic touch.",
    },
  ];

  const stats = [
    {
      value: "2016",
      label: "Established",
      icon: Award,
    },
    {
      value: "450+",
      label: "Projects Delivered",
      icon: Clapperboard,
    },
    {
      value: "97%",
      label: "Client Retention",
      icon: Users,
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#142B4A]">

      <section
        className="
        relative overflow-hidden
        bg-[#081C31]
        py-28 text-white
      "
      >

        {/* Top Blue Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

        {/* Bottom Blue Glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

        {/* Glossy Shine */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.06)_45%,transparent_70%)]" />

        <div className="relative mt-6 mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            About 9 Elephants Mediaworks
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Crafting Stories

            <span className="block text-[#D6A63C]">
              That Inspire & Connect
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70">
            We are a passionate film production company dedicated to creating
            impactful visual stories through corporate films, commercials,
            documentaries, digital content, and cinematic productions.
          </p>

        </div>

      </section>

      <section className="relative flex min-h-[75vh] items-center bg-[#F7F5F0]">

        {/* Background Decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6A63C]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#142B4A]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* LEFT CONTENT */}

          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6A63C]/30 bg-white px-5 py-2 text-sm font-semibold tracking-[0.2em] text-[#C58A19] shadow-sm">
              <Sparkles size={16} />
              ABOUT US
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#142B4A] sm:text-6xl lg:text-7xl">
              Where Stories
              <span className="block text-[#C58A19]">
                Come Alive.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              At 9 Elephants MediaWorks, we blend creative storytelling
              with professional filmmaking to craft stunning visuals that
              inspire, engage, and leave a lasting impression.
            </p>

            {/* Company Details */}

            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#142B4A] text-white">
                  <Award size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Established
                  </p>
                  <p className="font-bold text-[#142B4A]">
                    2016
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C58A19] text-white">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Based In
                  </p>
                  <p className="font-bold text-[#142B4A]">
                    Jaysingpur, Kolhapur
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="relative">

            {/* Main Image */}

            <div className="relative mx-auto max-w-md">

              <div className="absolute -inset-4 rounded-[2rem] border border-[#D6A63C]/30" />

              <div className="relative overflow-hidden rounded-[2rem] bg-slate-200 shadow-2xl">

                <img
                  src={founderImage}
                  alt="Founder of 9 Elephants MediaWorks"
                  className="h-auto w-full object-cover"
                />

              </div>

              {/* Floating Badge */}

              <div className="absolute -bottom-7 -left-7 flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-[#081C31] text-white shadow-2xl">
                <span className="text-4xl font-bold text-[#D6A63C]">
                  10+
                </span>

                <span className="text-center text-xs font-medium uppercase tracking-wider text-white/70">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="relative bg-white py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
                9 ELEPHANTS
              </p>

              <h2 className="text-4xl font-bold leading-tight text-[#142B4A] sm:text-5xl">
                Who We Are
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#D6A63C]" />

            </div>


            {/* RIGHT */}

            <div className="space-y-5 text-lg leading-8 text-slate-600">

              <p>
                Founded in 2016 by{" "}
                <strong className="text-[#142B4A]">
                  Mr. Paritosh Patil
                </strong>
                , a B.E. Mechanical Engineer, 9 Elephants MediaWorks is
                a premier creative video production house.
              </p>

              <p>
                While rooted in Jaysingpur, Kolhapur, we operate extensively
                across Maharashtra and Karnataka, while also handling select
                international assignments.
              </p>

              <p>
                With strategic service hubs in{" "}
                <strong className="text-[#142B4A]">
                  Pune and Bengaluru
                </strong>
                , we specialize in high-impact visual storytelling.
              </p>

              <p>
                Our team of in-house professionals and industry experts
                utilizes modern equipment and creative techniques to bridge
                the gap between technical engineering and creative artistry.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="bg-[#142B4A] py-20 text-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-3 lg:px-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
              >

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A63C]/50 text-[#D6A63C] transition-all duration-500 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">
                  <Icon size={25} />
                </div>

                <h3 className="text-4xl font-bold text-[#D6A63C]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                  {stat.label}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="bg-[#F7F5F0] py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* HEADING */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
              Why Choose Us?
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#142B4A] sm:text-5xl">
              Creativity Meets
              <span className="text-[#C58A19]">
                {" "}Professional Excellence
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine creativity, technology, and professional expertise
              to create visual experiences that connect with audiences.
            </p>

          </div>


          {/* CARDS */}

          <div className="mt-16 grid gap-7 md:grid-cols-3">

            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >

                  {/* Hover Decoration */}

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D6A63C]/10 transition-all duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#142B4A] text-[#D6A63C] transition-all duration-500 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#142B4A]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#C58A19]">
                      <CheckCircle2 size={18} />
                      Professional Excellence
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR REACH
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#142B4A] py-16 lg:py-24 text-white">

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#D6A63C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#D6A63C]">
                Our Reach
              </span>

              <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
                Stories Without
                <span className="block text-[#D6A63C]">
                  Boundaries.
                </span>
              </h2>

              <p className="lg:mt-14 mt-6 max-w-xl text-lg leading-8 text-white/70">
                From our roots in Jaysingpur and Kolhapur to our service
                hubs in Pune and Bengaluru, we bring professional visual
                storytelling to brands and businesses across regions.
              </p>

            </div>


            {/* MAP STYLE AREA */}

            <div className="relative min-h-[450px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">

              {/* GRID */}

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(214,166,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(214,166,60,0.3) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* CENTRAL LOCATION */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div className="relative">

                  <div className="absolute -inset-8 animate-ping rounded-full border border-[#D6A63C]/30" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#D6A63C]/30 bg-[#D6A63C] text-[#142B4A] shadow-[0_0_50px_rgba(214,166,60,0.4)]">

                    <MapPin size={32} />

                  </div>

                </div>

                <div className="mt-5 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-center text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  Jaysingpur
                </div>

              </div>


              {/* PUNE */}

              <div className="absolute left-[20%] top-[25%]">

                <span className="flex items-center gap-2 text-xs font-semibold text-white/60">

                  <span className="h-2 w-2 rounded-full bg-[#D6A63C]" />

                  Pune

                </span>

              </div>


              {/* BENGALURU */}

              <div className="absolute bottom-[25%] right-[15%]">

                <span className="flex items-center gap-2 text-xs font-semibold text-white/60">

                  <span className="h-2 w-2 rounded-full bg-[#D6A63C]" />

                  Bengaluru

                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F5F0] text-[#C58A19]">
            <Clapperboard size={30} />
          </div>

          <h2 className="mt-7 text-4xl font-bold text-[#142B4A] sm:text-5xl">
            Let's Create Something
            <span className="text-[#C58A19]">
              {" "}Extraordinary.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Have a story to tell? Let's turn your vision into a powerful
            visual experience that your audience will remember.
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

export default AboutUs;