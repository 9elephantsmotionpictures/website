import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer
      className="
    relative overflow-hidden
    border-t border-white/10
    bg-[#081C31]
    text-white
  "
    >

      {/* Top Blue Glow */}
      <div className="pointer-events-none absolute -left-0 -top-30 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]" />

      {/* Bottom Purple/Blue Glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-400/20 blur-[110px]" />

      {/* Glossy Shine */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.04)_45%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-14 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="font-title text-2xl font-bold text-[#D6A63C]">
              9 ELEPHANTS
            </h2>

            <p className="font-description mt-4 max-w-sm text-sm leading-7 text-white/65">
              Bringing your story to life through powerful visual
              storytelling and cinematic video production.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-title mb-5 font-semibold text-[#D6A63C]">
              Quick Links
            </h3>

            <div className="font-description flex flex-col gap-3 text-sm text-white/65">

              <a href="/" className="transition-colors hover:text-white">
                Home
              </a>

              <a href="/about-us" className="transition-colors hover:text-white">
                About Us
              </a>

              <a href="/services" className="transition-colors hover:text-white">
                Services
              </a>

              <a href="/portfolio" className="transition-colors hover:text-white">
                Portfolio
              </a>

              <a href="/contact-us" className="transition-colors hover:text-white">
                Contact Us
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-title mb-5 font-semibold text-[#D6A63C]">
              Contact
            </h3>

            <div className="font-description space-y-4 text-sm text-white/70">

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 text-[#D6A63C]"
                />

                <p>+91 77689 31234</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 text-[#D6A63C]"
                />

                <p>9elephantsmotionpictures@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#D6A63C]"
                />

                <p>
                  Jaysingpur, Kolhapur,
                  <br />
                  Maharashtra, India
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="font-description mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">

          © {new Date().getFullYear()}{" "}

          <a
            href="https://dreamwingssolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/70 transition-colors hover:text-[#D6A63C]"
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