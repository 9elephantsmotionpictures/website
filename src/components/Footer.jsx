import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#081C31] text-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">

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

            <div className="space-y-4 text-sm text-white/70">

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