  import { useState } from "react";
  import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    ArrowRight,
    Sparkles,
    Film,
    MessageCircle,
  } from "lucide-react";

import emailjs from "@emailjs/browser";

  function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    /* =====================================================
      FORM INPUT HANDLER
    ====================================================== */

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };


    /* =====================================================
      FORM SUBMIT
    ====================================================== */

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitted(false);
      setLoading(true);
      try{
        const templateParams = {
          name:formData.name,
          email:formData.email,
          phone:formData.phone,
          service:formData.service,
          message:formData.message,
          time:new Date().toLocaleString(),
        };
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setSubmitted(true);
        setFormData({name:"",email:"",phone:"",service:"",message:""});

        setTimeout(()=>{
          setSubmitted(false);
        },5000);

      }catch(error){
        console.error(error);
        alert("Failed to send enquiry. Please try again.");
      }finally{
        setLoading(false);
      }

    };

    const handleWhatsApp = () => {
    const phoneNumber = "917768931234"; // Country code सहित

    const message = `*New Project Enquiry*

  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Service: ${formData.service}
 Project Details:${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

    return (
      <main className="overflow-hidden bg-white">


        {/* =====================================================
            HERO SECTION
        ====================================================== */}

        <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#081C31]">

          {/* BACKGROUND DECORATION */}

          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#D6A63C]/10" />

          <div className="absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full border border-[#D6A63C]/10" />

          <div className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full border border-white/5" />


          {/* GOLD GLOW */}

          <div className="absolute right-[15%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#D6A63C]/10 blur-[120px]" />


          {/* CONTENT */}

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

            <div className="max-w-4xl pt-30">


              {/* DESCRIPTION */}

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">

                Ready to tell your story?

                <br />

                Reach out to The 9 Elephants MediaWorks and
                let's bring your vision to life through powerful
                cinematic storytelling.

              </p>


              {/* HERO BUTTON */}

              <a
                href="#contact-form"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D6A63C] px-8 py-4 font-bold text-[#142B4A] transition-all duration-300 hover:gap-5 hover:bg-white"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>

            </div>

          </div>


          {/* BOTTOM LABEL */}

          <div className="absolute bottom-8 left-6 hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/40 lg:left-10 lg:flex">

            <span className="h-px w-12 bg-[#D6A63C]" />

            9 ELEPHANTS MEDIAWORKS

          </div>

        </section>



        {/* =====================================================
            CONTACT INFO + FORM
        ====================================================== */}

        <section
          id="contact-form"
          className="bg-[#F8F7F4] py-24"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">


              {/* =================================================
                  LEFT CONTACT INFORMATION
              ================================================== */}

              <div>

                {/* LABEL */}

                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C58A19]">
                  Get In Touch
                </span>


                {/* HEADING */}

                <h2 className="mt-5 text-4xl font-bold leading-tight text-[#142B4A] md:text-5xl">

                  Let's Talk About

                  <span className="block text-[#C58A19]">
                    Your Next Project
                  </span>

                </h2>


                {/* DESCRIPTION */}

                <p className="mt-6 max-w-lg text-base leading-8 text-gray-600">

                  Whether you are looking for a corporate film,
                  advertisement, documentary, podcast or any
                  other visual production, our team is ready to
                  turn your idea into an impactful story.

                </p>


                {/* CONTACT DETAILS */}

                <div className="mt-10 space-y-5">


                  {/* EMAIL */}

                  <a
                    href="mailto:9elephantsmotionpictures@gmail.com"
                    className="group flex items-center gap-5"
                  >

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#142B4A] text-[#D6A63C] transition-all duration-300 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">

                      <Mail size={23} strokeWidth={1.5} />

                    </span>

                    <span>

                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
                        Email Us
                      </span>

                      <span className="mt-1 block break-all text-sm font-semibold text-[#142B4A] md:text-base">
                        9elephantsmotionpictures@gmail.com
                      </span>

                    </span>

                  </a>


                  {/* PHONE */}

                  <a
                    href="tel:+917768931234"
                    className="group flex items-center gap-5"
                  >

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#142B4A] text-[#D6A63C] transition-all duration-300 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">

                      <Phone size={23} strokeWidth={1.5} />

                    </span>

                    <span>

                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
                        Call Us
                      </span>

                      <span className="mt-1 block text-base font-semibold text-[#142B4A]">
                        +91 77689 31234
                      </span>

                    </span>

                  </a>


                  {/* LOCATION */}

                  <div className="group flex items-center gap-5">

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#142B4A] text-[#D6A63C] transition-all duration-300 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">

                      <MapPin size={23} strokeWidth={1.5} />

                    </span>

                    <span>

                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
                        Head Office
                      </span>

                      <span className="mt-1 block text-base font-semibold text-[#142B4A]">
                        Jaysingpur, Kolhapur, Maharashtra
                      </span>

                    </span>

                  </div>


                  {/* WORKING HOURS */}

                  <div className="group flex items-center gap-5">

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#142B4A] text-[#D6A63C] transition-all duration-300 group-hover:bg-[#D6A63C] group-hover:text-[#142B4A]">

                      <Clock size={23} strokeWidth={1.5} />

                    </span>

                    <span>

                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-400">
                        Working Hours
                      </span>

                      <span className="mt-1 block text-base font-semibold text-[#142B4A]">
                        Monday – Saturday | 10 AM – 7 PM
                      </span>

                    </span>

                  </div>

                </div>

              </div>



              {/* =================================================
                  CONTACT FORM
              ================================================== */}

              <div className="relative">

                {/* FORM CARD */}

                <div className="rounded-3xl bg-[#142B4A] p-7 shadow-[0_25px_70px_rgba(20,43,74,0.2)] md:p-10">

                  {/* FORM HEADER */}

                  <div className="mb-9">

                    <div className="flex items-center gap-3">

                      <Film
                        size={22}
                        className="text-[#D6A63C]"
                      />

                      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#D6A63C]">
                        Project Enquiry
                      </span>

                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      Fill out the form below and our team will
                      get back to you soon.
                    </p>

                  </div>


                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    {/* NAME + EMAIL */}

                    <div className="grid gap-6 md:grid-cols-2">

                      <div>

                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                          Your Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#D6A63C] focus:bg-white/10"
                        />

                      </div>


                      <div>

                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#D6A63C] focus:bg-white/10"
                        />

                      </div>

                    </div>


                    {/* PHONE + SERVICE */}

                    <div className="grid gap-6 md:grid-cols-2">

                      <div>

                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#D6A63C] focus:bg-white/10"
                        />

                      </div>


                      <div>

                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                          Select Service
                        </label>

                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-[#1b385d] px-5 py-4 text-sm text-white outline-none transition-all focus:border-[#D6A63C]"
                        >

                          <option value="">
                            Choose a service
                          </option>

                          <option value="Corporate Films">
                            Corporate Films
                          </option>

                          <option value="Ad Films">
                            Ad Films
                          </option>

                          <option value="Promotional Videos">
                            Promotional Videos
                          </option>

                          <option value="Documentaries">
                            Documentaries
                          </option>

                          <option value="Podcasts">
                            Podcasts
                          </option>

                          <option value="AI Videos">
                            AI Videos
                          </option>

                          <option value="Educational Videos">
                            Educational Videos
                          </option>

                          <option value="Influencer Videos">
                            Influencer Videos
                          </option>

                          <option value="Tutorial Videos">
                            Tutorial Videos
                          </option>

                          <option value="Other">
                            Other
                          </option>

                        </select>

                      </div>

                    </div>


                    {/* MESSAGE */}

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">
                        Tell Us About Your Project
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements and timeline..."
                        rows="3"
                        required
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-[#D6A63C] focus:bg-white/10"
                      />

                    </div>


                    {/* SUBMIT */}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-bold transition-all duration-300
                        ${
                          loading
                            ? "cursor-not-allowed bg-gray-400 text-white"
                            : "bg-[#D6A63C] text-[#142B4A] hover:bg-white hover:gap-5"
                        }`}
                    >
                      {loading 
                        ? "Sending..."
                        : "Send Enquiry"
                      }
                      <Send
                        size={19}
                        className="transition-transform duration-300 group-hover:rotate-12"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="group flex w-full items-center justify-center gap-3 rounded-xl border border-green-600 bg-green-600 px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-green-700"
                    >
                      <MessageCircle size={20} />
                      Talk on WhatsApp
                    </button>

                    {/* SUCCESS MESSAGE */}

                    {submitted && (

                      <p className="text-center text-sm text-[#D6A63C]">
                        Thank You! Your enquiry has been sent successfully.
                      </p>

                    )}

                  </form>

                </div>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            LOCATION SECTION
        ====================================================== */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid overflow-hidden rounded-3xl bg-[#142B4A] lg:grid-cols-2">


              {/* LOCATION INFO */}

              <div className="flex flex-col justify-center p-10 md:p-16">

                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#D6A63C]">
                  Our Location
                </span>

                <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                  From Kolhapur
                  <span className="block text-[#D6A63C]">
                    To The World
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-white/60">

                  Rooted in Jaysingpur, Kolhapur, we operate
                  extensively across Maharashtra and Karnataka,
                  with strategic service hubs in Pune and Bengaluru.

                </p>

                <div className="mt-8 flex items-start gap-4">

                  <MapPin
                    className="mt-1 shrink-0 text-[#D6A63C]"
                    size={24}
                  />

                  <div>

                    <h4 className="font-bold text-white">
                      9 Elephants MediaWorks
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Jaysingpur, Kolhapur,
                      Maharashtra, India
                    </p>

                  </div>

                </div>

              </div>


              {/* GOOGLE MAP */}

            <div className="overflow-hidden rounded-[30px] border border-[#D6A63C]/20 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30559.501788592625!2d74.51644037398974!3d16.779773704269072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11f2f4aa1f8ad%3A0x6ed3d90e33621e9!2sJaysingpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1785745995235!5m2!1sen!2sin" 
                width="100%"
                height="550"
                className="rounded-[24px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="9Elephants MediaWorks"
              />

            </div>

            </div>

          </div>

        </section>



        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#F8F7F4] py-24">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full border border-[#D6A63C]/20" />

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full border border-[#142B4A]/10" />


          <div className="relative mx-auto max-w-4xl px-6 text-center">

            <Sparkles
              className="mx-auto text-[#C58A19]"
              size={28}
            />

            <h2 className="mt-6 text-4xl font-bold text-[#142B4A] md:text-6xl">

              Your Story.

              <span className="text-[#C58A19]">
                {" "}Our Vision.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">

              Great visuals aren't just captured —
              they're engineered with creativity and technology
              working together.

            </p>
            
          </div>

        </section>

      </main>
    );
  }

  export default ContactUs;