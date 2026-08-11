  import award1 from "../assets/images/image.png";
  import award2 from "../assets/images/image.png";
  import award3 from "../assets/images/image.png";
import { useEffect, useRef } from "react";

  function NewsAwards() {
    const news = [
      {
        title: "9 Elephants Wins Best Corporate Film Award",
        date: "15 July 2025",
        image: award1,
        description:
          "Recognized for delivering exceptional visual storytelling and impactful corporate films.",
      },
      {
        title: "Featured In Leading Media Publication",
        date: "02 June 2025",
        image: award2,
        description:
          "Our innovative production techniques and creative vision were highlighted by industry experts.",
      },
      {
        title: "Crossed 100+ Successful Productions",
        date: "10 May 2025",
        image: award3,
        description:
          "A major milestone showcasing our dedication to quality filmmaking and client success.",
      },
    ];

const newsRef = useRef(null);
const awardsRef = useRef(null);

const newsIntervalRef = useRef(null);
const awardsIntervalRef = useRef(null);

const startNewsScroll = () => {
  newsIntervalRef.current = setInterval(() => {
    const container = newsRef.current;
    if (!container) return;

    container.scrollTop += 1;

    if (
      container.scrollTop >=
      container.scrollHeight - container.clientHeight
    ) {
      container.scrollTop = 0;
    }
  }, 20);
};

const stopNewsScroll = () => {
  clearInterval(newsIntervalRef.current);
};

const startAwardsScroll = () => {
  awardsIntervalRef.current = setInterval(() => {
    const container = awardsRef.current;
    if (!container) return;

    container.scrollTop += 1;

    if (
      container.scrollTop >=
      container.scrollHeight - container.clientHeight
    ) {
      container.scrollTop = 0;
    }
  }, 20);
};

const stopAwardsScroll = () => {
  clearInterval(awardsIntervalRef.current);
};

useEffect(() => {
  startNewsScroll();
  startAwardsScroll();

  return () => {
    clearInterval(newsIntervalRef.current);
    clearInterval(awardsIntervalRef.current);
  };
}, []);


    return (
      <main className="bg-[#FFFDF8]">

        {/* HERO */}

        <section className="relative overflow-hidden bg-[#081C31] py-28 text-white">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,166,60,0.15),transparent_60%)]" />

          <div className="relative mt-5 mx-auto max-w-7xl px-6 text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6A63C]">
              Recognition & Achievements
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              News & Awards
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70">
              Celebrating milestones, media features, achievements and
              industry recognition earned through creativity and excellence.
            </p>

          </div>

        </section>

        {/* NEWS SECTION */}
       <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* NEWS */}
            <div className="bg-white p-8">
              <h2 className="mb-6 text-3xl font-bold text-[#142B4A]">
                Latest News
              </h2>

              <div className="relative h-[650px] overflow-hidden">

                {/* Top Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-3 w-full bg-gradient-to-b from-[#FFFDF8] to-transparent" />

                {/* Bottom Fade */}
                <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-3 w-full bg-gradient-to-t from-[#FFFDF8] to-transparent" />

                <div
                  ref={newsRef}
                  onMouseEnter={stopNewsScroll}
                  onMouseLeave={startNewsScroll}
                  className="h-[650px] overflow-y-auto scrollbar-hide space-y-6"
                >

                  {[...news, ...news, ...news].map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden border border-gray-100 bg-white shadow-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-cover"
                      />

                      <div className="p-5">
                        <span className="text-sm font-semibold text-[#D6A63C]">
                          {item.date}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-[#142B4A]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* AWARDS */}

            <div className="bg-white p-8">

              <h2 className="mb-6 text-3xl font-bold text-[#142B4A]">
                Awards & Recognition
              </h2>

              <div className="relative h-[650px] overflow-hidden">

                {/* Top Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-3 w-full bg-gradient-to-b from-[#FFFDF8] to-transparent" />

                {/* Bottom Fade */}
                <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-3 w-full bg-gradient-to-t from-[#FFFDF8] to-transparent" />


                <div
                  ref={awardsRef}
                  onMouseEnter={stopAwardsScroll}
                  onMouseLeave={startAwardsScroll}
                  className="h-[650px] overflow-y-auto scrollbar-hide space-y-6"
                >

                  {[...news, ...news].map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden border border-gray-100 bg-white shadow-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-cover"
                      />

                      <div className="p-5">
                        <span className="text-sm font-semibold text-[#D6A63C]">
                          {item.date}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-[#142B4A]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

        {/* CTA */}

        <section className="bg-[#142B4A] py-24 text-white">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <h2 className="text-4xl font-bold md:text-6xl">
              Creating Stories That Get Recognized
            </h2>

            <p className="mt-6 text-white/70">
              From corporate films to documentaries, we create visual
              experiences that leave a lasting impact.
            </p>

            <a
              href="/contact-us"
              className="mt-10 inline-flex rounded-full bg-[#D6A63C] px-8 py-4 font-semibold text-[#142B4A] transition hover:bg-white"
            >
              Contact Us
            </a>

          </div>

        </section>

      </main>
    );
  }

  export default NewsAwards;