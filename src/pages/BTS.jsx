import bts1 from "../assets/images/bts/IMG_1.JPG";
import bts2 from "../assets/images/bts/IMG_2.JPG";
import bts3 from "../assets/images/bts/IMG_3.JPG";
import bts4 from "../assets/images/bts/IMG_4.JPG";
import bts5 from "../assets/images/bts/IMG_5.JPG";
import bts6 from "../assets/images/bts/IMG_6.JPG";
import bts7 from "../assets/images/bts/IMG_7.JPG";
import bts8 from "../assets/images/bts/IMG_8.jpg";
import bts9 from "../assets/images/bts/IMG_9.jpg";
import bts10 from "../assets/images/bts/IMG_10.jpg";
import bts11 from "../assets/images/bts/IMG_11.JPG";
import bts12 from "../assets/images/bts/IMG_12.JPG";
import bts13 from "../assets/images/bts/IMG_13.JPG";
import bts14 from "../assets/images/bts/IMG_14.JPG";
import bts15 from "../assets/images/bts/IMG_15.JPG";
import bts16 from "../assets/images/bts/IMG_16.jpg";
import bts17 from "../assets/images/bts/IMG_17.jpg";
import bts18 from "../assets/images/bts/IMG_18.jpg";
import bts19 from "../assets/images/bts/IMG_19.jpg";
import bts20 from "../assets/images/bts/IMG_20.jpg";

import bts21 from "../assets/images/bts/IMG_21.JPG";
import bts22 from "../assets/images/bts/IMG_22.JPG";
import bts23 from "../assets/images/bts/IMG_23.JPG";
import bts24 from "../assets/images/bts/IMG_24.JPG";
import bts25 from "../assets/images/bts/IMG_25.JPG";
import bts26 from "../assets/images/bts/IMG_26.JPG";
import bts27 from "../assets/images/bts/IMG_27.JPG";
import bts28 from "../assets/images/bts/IMG_28.jpg";
import bts29 from "../assets/images/bts/IMG_29.jpg";
import bts30 from "../assets/images/bts/IMG_30.jpg";
import bts31 from "../assets/images/bts/IMG_31.JPG";
import bts32 from "../assets/images/bts/IMG_32.JPG";
import bts33 from "../assets/images/bts/IMG_33.JPG";
import bts34 from "../assets/images/bts/IMG_34.JPG";
import bts35 from "../assets/images/bts/IMG_35.JPG";
import bts36 from "../assets/images/bts/IMG_36.jpg";
import bts37 from "../assets/images/bts/IMG_37.jpg";
import bts38 from "../assets/images/bts/IMG_38.jpg"; 
import bts39 from "../assets/images/bts/IMG_39.jpg";
import bts40 from "../assets/images/bts/IMG_40.jpg";
import bts41 from "../assets/images/bts/IMG_41.jpg";
import bts42 from "../assets/images/bts/IMG_42.jpg";
import bts43 from "../assets/images/bts/IMG_43.jpg";
import bts44 from "../assets/images/bts/IMG_44.jpg";
function BTS() {
  const btsImages = [
    bts1,
    bts2,
    bts3,
    bts4,
    bts5,
    bts6,
    bts7,
    bts8,
    bts9,
    bts10,
    bts11,
    bts12,
    bts13,
    bts14,
    bts15,
    bts16,
    bts17,
    bts18,
    bts19,
    bts20,
    bts21,
    bts22,
    bts23,
    bts24,
    bts25,
    bts26,
    bts27,
    bts28,
    bts29,
    bts30,
    bts31,
    bts32,
    bts33,
    bts34,
    bts35,
    bts36,
    bts37,
    bts38,
    bts39,
    bts40,
    bts41,
    bts42,
    bts43,
    bts44,
  ];

  return (
    <main className="bg-[#FFFDF8]">

      {/* HERO */}

      <section
        className="
        relative overflow-hidden
        bg-[#081C31]
        py-28 text-white
      "
      >

        {/* Top Blue Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />

        {/* Bottom Blue Glow */}
        <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

        {/* Glossy Shine */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.06)_45%,transparent_70%)]" />

        <div className="relative mt-5 mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Behind The Scenes
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            BTS Gallery
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70">
            Take a look behind the camera and discover the creativity,
            teamwork and dedication that bring every story to life.
          </p>

        </div>

      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center flex justify-between">
            <h2 className="text-4xl font-bold text-[#142B4A]">
              BTS Photo Gallery
            </h2>

            <div className="mb-10">
              <a
                href="https://drive.google.com/drive/folders/1o8r9W39WkJxRj0xQGHv_IIQ14S1XVCSt?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#D6A63C] px-8 py-4 font-semibold text-[#142B4A] transition hover:text-white hover:bg-[#142B4A]"
              >
                View More Photos
              </a>
            </div>
          </div>


          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">

            

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[8]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[9]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[10]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[11]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[12]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[13]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[14]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[15]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[16]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[17]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[18]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[19]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

           

            {/* 20 btss ---------------------------------------- */}

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[20]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[21]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[22]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[23]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[24]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[25]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[26]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[27]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[28]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[29]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[30]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[31]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[32]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[33]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[34]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[35]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[36]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[37]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[38]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[39]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

             <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[0]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[1]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[2]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[3]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[4]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[5]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[6]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[7]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[40]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[41]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[42]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[43]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

                <div className="col-span-2 md:col-span-4 flex justify-center mt-6">
                  <a
                    href="https://drive.google.com/drive/folders/1o8r9W39WkJxRj0xQGHv_IIQ14S1XVCSt?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-15 items-center rounded-full bg-[#D6A63C] px-6 text-sm font-semibold text-[#142B4A] transition hover:bg-[#142B4A] hover:text-white"
                  >
                    View More Photos
                  </a>
                </div>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-[#142B4A] py-24 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold md:text-6xl">
            Every Great Film Has A Great Story Behind It
          </h2>

          <p className="mt-6 text-white/70">
            Explore how our team transforms ideas into cinematic experiences.
          </p>

          <a
            href="/contact-us"
            className="mt-10 inline-flex rounded-full bg-[#D6A63C] px-8 py-4 font-semibold text-[#142B4A] transition hover:bg-white"
          >
            Work With Us
          </a>

        </div>

      </section>

    </main>
  );
}

export default BTS;