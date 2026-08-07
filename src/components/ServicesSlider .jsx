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
      <section className="relative overflow-hidden bg-[#142B4A] py-24 text-white md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}

          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#D6A63C]">
                What We Do
              </p>

              <h2 className="text-4xl font-semibold md:text-6xl">
                Our Services
              </h2>

            </div>


            <a
              href="/services"
              className="group flex items-center gap-3 font-semibold text-[#D6A63C]"
            >

              View All Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />

            </a>

          </div>


          {/* =================================================
                    SERVICE SLIDER
                ================================================== */}

          <div className="relative">

            {/* Left Fade */}

            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#142B4A] to-transparent" />

            {/* Right Fade */}

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#142B4A] to-transparent" />


            {/* Slider */}

            <div className="service-slider">

              <div className="service-track">

                {/* First Set */}

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


                {/* Duplicate Set
                          Seamless Infinite Slider
                      */}

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


        {/* =================================================
                  SLIDER CSS
              ================================================== */}

        <style>{`
      
                .service-slider {
                  overflow: hidden;
                  width: 100%;
                }
      
                .service-track {
                  display: flex;
                  width: max-content;
                  gap: 20px;
                  animation: serviceSlide 35s linear infinite;
                }
      
                .service-track:hover {
                  animation-play-state: paused;
                }
      
                .service-card {
                  position: relative;
                  width: 280px;
                  min-width: 280px;
                  height: 190px;
                  padding: 28px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  border: 1px solid rgba(255,255,255,0.12);
                  background: rgba(255,255,255,0.03);
                  transition: all 0.5s ease;
                }
      
                .service-card:hover {
                  background: #D6A63C;
                  border-color: #D6A63C;
                  color: #142B4A;
                  transform: translateY(-8px);
                }
      
                .service-number {
                  font-size: 12px;
                  font-weight: 700;
                  letter-spacing: 0.2em;
                  color: #D6A63C;
                  transition: color 0.4s ease;
                }
      
                .service-card:hover .service-number {
                  color: #142B4A;
                }
      
                .service-card h3 {
                  font-size: 22px;
                  font-weight: 600;
                  line-height: 1.2;
                  max-width: 210px;
                }
      
                .service-arrow {
                  position: absolute;
                  right: 25px;
                  bottom: 25px;
                  color: #D6A63C;
                  transition: all 0.4s ease;
                }
      
                .service-card:hover .service-arrow {
                  color: #142B4A;
                  transform: translate(4px, -4px);
                }
      
                @keyframes serviceSlide {
                  from {
                    transform: translateX(0);
                  }
      
                  to {
                    transform: translateX(calc(-50% - 10px));
                  }
                }
      
                @media (max-width: 768px) {
      
                  .service-track {
                    gap: 14px;
                    animation-duration: 30s;
                  }
      
                  .service-card {
                    width: 240px;
                    min-width: 240px;
                    height: 170px;
                    padding: 22px;
                  }
      
                  .service-card h3 {
                    font-size: 19px;
                  }
      
                }
      
              `}</style>

      </section>
    </>
  );
}

export default ServicesSlider;