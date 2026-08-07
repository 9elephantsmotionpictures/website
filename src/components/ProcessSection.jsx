import { ArrowRight } from "lucide-react";

function ProcessSection() {
    return (
        <section className="border-y border-[#142B4A]/10 bg-[#F5F1E8] py-24 md:py-32">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
                            How We Work
                        </p>

                        <h2 className="text-4xl font-semibold leading-tight text-[#142B4A] md:text-6xl">

                            From an idea

                            <span className="block text-[#C58A19]">
                                to a visual story.
                            </span>

                        </h2>

                        <p className="mt-7 max-w-lg leading-8 text-[#142B4A]/60">

                            Discovery defines the idea, pre-production designs the
                            journey, production captures it, and post-production
                            completes the story.

                        </p>

                        <a
                            href="/processes"
                            className="mt-8 inline-flex items-center gap-3 font-semibold text-[#142B4A]"
                        >

                            Explore Our Process

                            <ArrowRight size={18} />

                        </a>

                    </div>


                    <div className="space-y-0">

                        {[
                            "Discovery Call",
                            "Script & Storyboarding",
                            "Production",
                            "Post-Production",
                        ].map((step, index) => (

                            <div
                                key={step}
                                className="flex items-center gap-7 border-b border-[#142B4A]/15 py-7"
                            >

                                <span className="text-sm font-bold text-[#C58A19]">
                                    0{index + 1}
                                </span>

                                <h3 className="text-2xl font-semibold text-[#142B4A]">
                                    {step}
                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProcessSection;