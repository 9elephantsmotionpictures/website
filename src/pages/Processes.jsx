import process1 from "../assets/images/discovery.jfif";
import process2 from "../assets/images/script.jfif";
import process3 from "../assets/images/production.jfif";
import process4 from "../assets/images/post-production.jfif";

function Processes() {
  const steps = [
    {
      image: process1,
      title: "Discovery Call",
      description:
        "Understanding your vision, goals, audience, and requirements to build the perfect storytelling strategy.",
    },
    {
      image: process2,
      title: "Script & Storyboarding",
      description:
        "Transforming ideas into structured scripts and visual storyboards before production begins.",
    },
    {
      image: process3,
      title: "Production",
      description:
        "Capturing stunning visuals with professional equipment, lighting, sound, and cinematic direction.",
    },
    {
      image: process4,
      title: "Post-Production",
      description:
        "Editing, color grading, sound design, motion graphics, and final polishing to create impactful films.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#081C31] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6A63C]">
            9 ELEPHANTS
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Our Process
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70">
            Discovery defines the idea, pre-production designs the journey,
            production captures it, and post-production completes the story.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#F7F5F0] py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="grid gap-10 lg:gap-30 md:grid-cols-2">

            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg"
              >
                {/* Image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Normal Content */}
                <div className="p-8 transition-all duration-500 group-hover:opacity-0">
                  <span className="text-sm font-semibold text-[#D6A63C]">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold text-[#142B4A]">
                    {step.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex translate-y-full flex-col justify-center rounded-3xl border border-[#D6A63C]/50 bg-[#FFFDF8] p-8 transition-all duration-500 group-hover:translate-y-0">
                  <span className="text-sm font-semibold text-[#D6A63C]">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold text-[#142B4A]">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#142B4A] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-20 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6A63C]">
              Our Workflow
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              How We Bring Stories To Life
            </h2>

            <p className="mt-4 text-white/60">
              A streamlined creative process from concept to delivery.
            </p>
          </div>

          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-0 top-6 hidden h-1 w-full rounded-full bg-gradient-to-r from-transparent via-[#D6A63C] to-transparent md:block" />

            <div className="grid gap-12 md:grid-cols-4">

              {[
                "Discovery",
                "Storyboarding",
                "Production",
                "Final Delivery",
              ].map((title, index) => (
                <div
                  key={index}
                  className="relative text-center"
                >

                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#D6A63C] bg-[#081C31] text-2xl font-bold text-[#D6A63C] shadow-[0_0_30px_rgba(214,166,60,0.4)]">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {title}
                  </h3>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Processes;