import {Film, Sparkles} from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="bg-[#142B4A] py-24 text-white md:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <Sparkles
                className="mb-7 text-[#D6A63C]"
                size={35}
              />

              <h2 className="font-title text-4xl font-semibold leading-tight md:text-6xl">

                Creativity Meets

                <span className="block text-[#D6A63C]">
                  Technology.
                </span>

              </h2>

              <p className="font-description mt-7 max-w-xl leading-8 text-white/55">

                Every frame is engineered with a blend of creativity and
                technology. Our team works with modern filmmaking tools to
                deliver cinematic quality and impactful visual experiences.

              </p>

            </div>


            <div className="font-description grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">

              <div className="bg-[#142B4A] p-7">

                <h3 className="text-3xl font-semibold text-[#D6A63C]">
                  97%
                </h3>

                <p className="mt-3 text-sm text-white/50">
                  Client Retention
                </p>

              </div>


              <div className="bg-[#142B4A] p-7">

                <h3 className="text-3xl font-semibold text-[#D6A63C]">
                  450+
                </h3>

                <p className="mt-3 text-sm text-white/50">
                  Projects Delivered
                </p>

              </div>


              <div className="bg-[#142B4A] p-7">

                <h3 className="text-3xl font-semibold text-[#D6A63C]">
                  10+
                </h3>

                <p className="mt-3 text-sm text-white/50">
                  Years of Experience
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
  );
}

export default WhyChooseUs;