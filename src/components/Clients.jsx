import client1 from "../assets/images/clients/Client1.png";
import client2 from "../assets/images/clients/Client2.png";
import client3 from "../assets/images/clients/Client3.png";
import client4 from "../assets/images/clients/Client4.png";
import client5 from "../assets/images/clients/Client5.png";
import client6 from "../assets/images/clients/Client6.png";
import client7 from "../assets/images/clients/Client7.png";
import client8 from "../assets/images/clients/Client8.png";
import client9 from "../assets/images/clients/Client9.png";
import client10 from "../assets/images/clients/Client10.png";
import client11 from "../assets/images/clients/Client11.png";
import client12 from "../assets/images/clients/Client12.png";
import client13 from "../assets/images/clients/Client13.png";
import client14 from "../assets/images/clients/Client14.png";
import client15 from "../assets/images/clients/Client15.png";
import client16 from "../assets/images/clients/Client16.png";
import client17 from "../assets/images/clients/Client17.png";
import client18 from "../assets/images/clients/Client18.png";
import client19 from "../assets/images/clients/Client19.png";
import client20 from "../assets/images/clients/Client20.png";
import client21 from "../assets/images/clients/Client21.png";
import client22 from "../assets/images/clients/Client22.png";
import client23 from "../assets/images/clients/Client23.png";
import client24 from "../assets/images/clients/Client24.png";
import client25 from "../assets/images/clients/Client25.png";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Clients() {
  const clients = [
    client1, client2, client3, client4, client5,
    client6, client7, client8, client9, client10,
    client11, client12, client13, client14, client15,
    client16, client17, client18, client19, client20,
    client21, client22, client23, client24, client25,
  ];

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      slider.scrollLeft += 1;

      if (
        slider.scrollLeft >=
        slider.scrollWidth - slider.clientWidth
      ) {
        slider.scrollLeft = 0;
      }
    }, 20);
  };

  useEffect(() => {
    startAutoScroll();

    return () => clearInterval(intervalRef.current);
  }, []);

  const moveLeft = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    clearInterval(intervalRef.current);

    slider.scrollBy({
      left: -350,
      behavior: "smooth",
    });

    setTimeout(() => {
      startAutoScroll();
    }, 1000);
  };

  const moveRight = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    clearInterval(intervalRef.current);

    slider.scrollBy({
      left: 350,
      behavior: "smooth",
    });

    setTimeout(() => {
      startAutoScroll();
    }, 1000);
  };

  return (
    <main className="bg-[#FFFDF8]">
      <section className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#142B4A] md:text-5xl">
              Brands We Worked With
            </h2>

            <p className="mt-4 text-gray-600">
              Trusted by companies across multiple industries
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Buttons */}
          <button
            onClick={moveLeft}
            className="absolute left-5 lg:left-10 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-[#D6A63C]"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={moveRight}
            className="absolute right-5 lg:right-10 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-[#D6A63C]"
          >
            <ChevronRight size={24} />
          </button>

          {/* Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#FFFDF8] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#FFFDF8] to-transparent" />

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex w-full gap-10 overflow-x-auto py-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="group flex h-40 w-60 shrink-0 items-center justify-center rounded-3xl border border-[#142B4A]/10 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={logo}
                  alt={`Client ${index}`}
                  className="max-h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Clients;