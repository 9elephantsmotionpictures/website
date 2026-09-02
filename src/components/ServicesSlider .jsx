import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import service1 from "../assets/images/services/service1.png";
import service2 from "../assets/images/services/service2.png";
import service3 from "../assets/images/services/service3.png";
import service4 from "../assets/images/services/service4.png";
import service5 from "../assets/images/services/service5.png";
import service6 from "../assets/images/services/service6.png";
import service7 from "../assets/images/services/service7.png";
import service8 from "../assets/images/services/service8.png";
import service9 from "../assets/images/services/service9.png";


function ServicesSlider() {
const services = [
  { title: "Corporate Films", image: service1 },
  { title: "Ad Films", image: service2 },
  { title: "Promotional Videos", image: service3 },
  { title: "Documentaries", image: service4 },
  { title: "Podcasts", image: service5 },
  { title: "AI Videos", image: service6 },
  { title: "Educational Videos", image: service7 },
  { title: "Influencer Videos", image: service8 },
  { title: "Tutorial Videos", image: service9 },
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
                    key={`first-${service.title}`}
                    href="/services"
                    className="service-item group"
                  >
                    <div className="service-card">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-image"
                      />

                      <div className="service-card-overlay" />

                      {/* <span className="service-number">
                        0{index + 1}
                      </span> */}
                    </div>

                    <h3 className="service-title">
                      {service.title}
                    </h3>
                  </a>
                ))}


                {/* Duplicate Set
                          Seamless Infinite Slider
                      */}

                  {services.map((service, index) => (
                    <a
                      key={`second-${service.title}`}
                      href="/services"
                      className="service-item group"
                    >
                      <div className="service-card">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="service-card-image"
                        />

                        <div className="service-card-overlay" />

                        {/* <span className="service-number">
                          0{index + 1}
                        </span> */}
                      </div>

                      <h3 className="service-title">
                        {service.title}
                      </h3>
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
                    .service-item {
                width: 280px;
                min-width: 280px;
                text-decoration: none;
                color: white;
              }

              .service-title {
                margin-top: 16px;
                font-size: 20px;
                font-weight: 600;
                line-height: 1.2;
                color: white;
                text-align: center;

                transition: color 0.3s ease;
              }

              .service-item:hover .service-title {
                color: #D6A63C;
              }

                  .service-card {
                    position: relative;
                    width: 280px;
                    height: 190px;
                    padding: 28px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.12);
                    background: #142B4A;
                    transition: all 0.5s ease;
                  }
                  .service-card-image {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                    transition: transform 0.6s ease;
                  }

                  .service-card-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background: linear-gradient(
                      to top,
                      rgba(8, 22, 41, 0.95),
                      rgba(8, 22, 41, 0.35),
                      rgba(8, 22, 41, 0.2)
                    );
                  }

                  .service-card:hover .service-card-image {
                    transform: scale(1.08);
                  }

                  .service-card .service-number,
                  .service-card h3,
                  .service-card .service-arrow {
                    position: relative;
                    z-index: 2;
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

                    .service-item {
                      width: 240px;
                      min-width: 240px;
                    }

                    .service-card {
                      width: 240px;
                      height: 170px;
                      padding: 22px;
                    }

                    .service-title {
                      font-size: 18px;
                      margin-top: 12px;
                    }
                  }
      
              `}</style>

      </section>
    </>
  );
}

export default ServicesSlider;