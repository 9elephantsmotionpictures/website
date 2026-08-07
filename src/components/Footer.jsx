import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#081C31] text-white">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-14 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#D6A63C]">
              9 ELEPHANTS
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Bringing your story to life through powerful visual
              storytelling and cinematic video production.
            </p>
          </div>


          {/* Links */}
          <div>
            <h3 className="mb-5 font-semibold text-[#D6A63C]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/60">

              <a href="/" className="hover:text-white">
                Home
              </a>

              <a href="/about-us" className="hover:text-white">
                About Us
              </a>

              <a href="/services" className="hover:text-white">
                Services
              </a>

              <a href="/portfolio" className="hover:text-white">
                Portfolio
              </a>

              <a href="/contact-us" className="hover:text-white">
                Contact Us
              </a>

            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold text-[#D6A63C]">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/60">

              <p>+91 77689 31234</p>

              <p>
                9elephantsmotionpictures@gmail.com
              </p>

              <p>
                Jaysingpur, Kolhapur,
                <br />
                Maharashtra, India
              </p>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://dreamwingssolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/70 hover:text-[#D6A63C] transition-colors"
          >
            Dreamwings Solutions Pvt. Ltd.
          </a>{" "}
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;