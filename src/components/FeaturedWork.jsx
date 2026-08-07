import {
    ArrowUpRight,
    Play,
    Film,
} from "lucide-react";

function FeaturedWork() {
    return (
        <section className="py-24 md:py-32">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div>

                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
                            Selected Work
                        </p>

                        <h2 className="text-4xl font-semibold text-[#142B4A] md:text-6xl">
                            Featured Portfolio
                        </h2>

                    </div>


                    <a
                        href="/portfolio"
                        className="group flex items-center gap-3 font-semibold"
                    >

                        View Portfolio

                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />

                    </a>

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                    <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#142B4A]">

                        <div className="absolute inset-0 flex items-center justify-center">

                            <Play
                                className="text-white"
                                size={45}
                            />

                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-8">

                            <p className="text-sm uppercase tracking-widest text-[#D6A63C]">
                                Featured Film
                            </p>

                            <h3 className="mt-2 text-3xl font-semibold text-white">
                                Our Stories
                            </h3>

                        </div>

                    </div>


                    <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#D6A63C]">

                        <div className="absolute inset-0 flex items-center justify-center">

                            <Play
                                className="text-[#142B4A]"
                                size={45}
                            />

                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-8">

                            <p className="text-sm uppercase tracking-widest text-[#142B4A]/60">
                                Latest Project
                            </p>

                            <h3 className="mt-2 text-3xl font-semibold text-[#142B4A]">
                                Behind The Story
                            </h3>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default FeaturedWork;