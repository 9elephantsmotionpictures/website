function BTS() {
  const btsImages = [
    "/images/bts1.jpg",
    "/images/bts2.jpg",
    "/images/bts3.jpg",
    "/images/bts4.jpg",
    "/images/bts5.jpg",
    "/images/bts6.jpg",
  ];

  return (
    <main className="bg-[#FFFDF8]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#081C31] py-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,166,60,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

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

      <section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-[#142B4A]">
        BTS Photo Gallery
      </h2>
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

      <div className="col-span-2 overflow-hidden rounded-3xl">
        <img
          src={btsImages[5]}
          alt=""
          className="h-full w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>

      <div className="overflow-hidden rounded-3xl">
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