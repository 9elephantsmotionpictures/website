import process1 from "../assets/images/discovery.jfif";
import process2 from "../assets/images/script.jfif";
import process3 from "../assets/images/production.jfif";
import process4 from "../assets/images/post-production.jfif";

function Processes() {
  const steps = [
    {
      image: process1,
      number: "01",
      title: "Discovery Call",
      subtitle: "Understanding the Vision",
      description:
        "Understanding your vision, goals, audience, and requirements to build the perfect storytelling strategy.",
      points: [
        "Client enquiry & requirement gathering",
        "Initial meeting & creative discussion",
        "Project scope & deliverables",
        "Budget estimation",
        "Project finalization",
      ],
    },

    {
      image: process2,
      number: "02",
      title: "Pre-Production",
      subtitle: "Planning Before Production",
      description:
        "Transforming ideas into structured scripts, visual plans, schedules, and production requirements before the shoot begins.",
      points: [
        "Detailed inputs & references from client",
        "Concept research & creative development",
        "Script & screenplay development",
        "Shot division & visual planning",
        "Production scheduling & planning",
        "Equipment & material transportation",
      ],
    },

    {
      image: process3,
      number: "03",
      title: "Production",
      subtitle: "Bringing the Vision to Life",
      description:
        "Capturing stunning visuals through professional cinematography, direction, lighting, sound, and on-location production.",
      points: [
        "Scheduled shoot execution",
        "Professional production crew",
        "Cinematography & direction",
        "Lighting, sound & camera setup",
        "On-location production management",
        "Quality-controlled footage capture",
      ],
    },

    {
      image: process4,
      number: "04",
      title: "Post-Production",
      subtitle: "Crafting the Final Film",
      description:
        "Transforming captured footage into a polished final film through editing, VFX, sound design, voice-over, and mastering.",
      points: [
        "Professional video editing",
        "VFX & visual enhancement",
        "Audio recording & sound design",
        "Voice-over integration",
        "Client review & feedback round",
        "Final mastering & delivery",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="
        relative overflow-hidden py-28
        bg-[#081C31]
      "
      >
        {/* Glossy glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

        {/* Glossy shine */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.06)_45%,transparent_70%)]" />

        <div className="relative z-10 mt-5 mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Our Process
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70">
            Discovery defines the idea, pre-production designs the journey,
            production captures it, and post-production completes the story.
          </p>

        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#F7F5F0] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">

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

                  <h4 className="mt-3 text-lg font-semibold text-[#142B4A]">
                    {step.subtitle}
                  </h4>

                  <div className="mt-4 border-t border-gray-200 pt-4">

                    <ul className="space-y-2">

                      {step.points.map((point, pointIndex) => (

                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                        >

                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A63C]" />

                          <span>
                            {point}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>
                  
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