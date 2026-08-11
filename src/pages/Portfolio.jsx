import { useState } from "react";

function Portfolio() {
  const categories = [
    "All",
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

  const portfolioVideos = [
      {
        category: "Corporate Films",
        title: "Corporate Brand Film",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Ad Films",
        title: "Creative Advertisement",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Promotional Videos",
        title: "Product Launch Promo",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Documentaries",
        title: "Documentary Story",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Podcasts",
        title: "Business Podcast",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "AI Videos",
        title: "AI Generated Visuals",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Educational Videos",
        title: "Learning Content",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Influencer Videos",
        title: "Influencer Campaign",
        videoId: "DhY9PwfnOqo",
      },
      {
        category: "Tutorial Videos",
        title: "Step By Step Guide",
        videoId: "DhY9PwfnOqo",
      },
    ];


  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? portfolioVideos
      : portfolioVideos.filter(
          (video) => video.category === activeCategory
        );

  return (
    <main className="bg-[#FFFDF8]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#081C31] py-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,166,60,0.15),transparent_60%)]" />

        <div className="relative mt-5 mx-auto max-w-7xl px-6 text-center">

          <span className="inline-block rounded-full border border-[#D6A63C]/40 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#D6A63C]">
            Our Work
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            Portfolio
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Explore our collection of corporate films, advertisements,
            documentaries, podcasts and visual stories crafted with
            cinematic excellence.
          </p>

        </div>

      </section>

      {/* CATEGORY FILTER */}

      <section className="sticky top-0 z-100 border-b border-[#142B4A]/10 bg-white/90 py-6 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-5">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D6A63C] text-[#142B4A]"
                  : "bg-[#F5F1E8] text-[#142B4A] hover:bg-[#D6A63C] hover:text-[#142B4A]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>
      </section>

      {/* VIDEOS */}

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-[#142B4A]/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-video overflow-hidden">

                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allowFullScreen
                    className="h-full w-full"
                  />

                </div>

                <div className="p-6">

                  <div className="mb-4 flex items-center gap-2 text-[#D6A63C]">
                    <span className="text-xs font-semibold uppercase tracking-widest">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#142B4A]">
                    {video.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;