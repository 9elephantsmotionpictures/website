import bts1 from "../assets/images/bts/IMG_1.JPG";
import bts2 from "../assets/images/bts/IMG_2.JPG";
import bts3 from "../assets/images/bts/IMG_5.JPG";
import bts4 from "../assets/images/bts/IMG_6.JPG";
import bts5 from "../assets/images/bts/IMG_7.JPG";
import bts6 from "../assets/images/bts/IMG_8.jpg";


function BTS() {
  const btsImages = [
    bts1,
    bts2,
    bts3,
    bts4,
    bts5,
    bts6,
  ];

  return (
    <main className="bg-[#FFFDF8]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#081C31] py-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,166,60,0.15),transparent_60%)]" />

        <div className="relative mt-5 mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6A63C]">
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
                src={btsImages[0]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[1]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[5]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={btsImages[1]}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl">
              <img
                src={btsImages[3]}
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

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-[#142B4A] lg:py-24 text-white">

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