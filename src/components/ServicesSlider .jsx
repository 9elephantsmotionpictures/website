import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

function ServicesSlider() {
  const services = [
    "Corporate Films",
    "Ad Films",
    "Promotional Videos",
    "Documentaries",
    "Podcasts",
    "AI Videos",
    "Educational Videos",
    "Influencer Videos",
    "Tutorial Videos",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#142B4A] py-20 text-white md:py-32">

        <div className="mx-auto max-w-8xl px-6 lg:px-20">

          {/* Section Header */}

          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="font-subtitle mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#D6A63C]">
                What We Do
              </p>

              <h2 className="font-title text-4xl font-semibold md:text-6xl">
                Our Services
              </h2>

            </div>


            <a
              href="/services"
              className="font-description group flex items-center gap-3 font-semibold text-[#D6A63C]"
            >

              View All Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />

            </a>

          </div>


          <div className="relative">

            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#142B4A] to-transparent" />

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#142B4A] to-transparent" />

            <div className="service-slider">
              <div className="font-subtitle service-track">
                {services.map((service, index) => (
                  <a
                    key={`first-${service}`}
                    to="/services"
                    className="service-card group"
                  >

                    <span className="service-number">
                      0{index + 1}
                    </span>

                    <h3>
                      {service}
                    </h3>

                    <ArrowUpRight
                      size={24}
                      className="service-arrow"
                    />

                  </a>

                ))}


                {services.map((service, index) => (

                  <a
                    key={`second-${service}`}
                    to="/services"
                    className="service-card group"
                  >

                    <span className="service-number">
                      0{index + 1}
                    </span>

                    <h3>
                      {service}
                    </h3>

                    <ArrowUpRight
                      size={24}
                      className="service-arrow"
                    />

                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default ServicesSlider;