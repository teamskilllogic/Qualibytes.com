import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen pt- bg-[#000000] qualibytes-background">
      {/* Hero Section */}
      <section className="w-full bg-[#030307] pt-36 pb-12 px-6 text-center relative overflow-hidden mb-12">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-blue-400 text-lg">
            Have questions about our courses or need guidance? We're here to
            help.
          </p>
        </div>
        <div className="absolute top-[-100px] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[150px] rounded-full z-0" />
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8 text-gray-400 text-sm">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    📍 Location
                  </h3>
                  <p>
                    D-9, Block-D, Sector 3<br />
                    Noida Uttar-Pradesh 201301
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    ✉️ Email us directly
                  </h3>
                  <a
                    href="mailto:hi@qualibytes.com"
                    className="hover:text-qualibytes-blue"
                  >
                    hi@qualibytes.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    📞 Phone
                  </h3>
                  <a
                    href="tel:+918377032324"
                    className="hover:text-qualibytes-blue"
                  >
                    +91 8377032324
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4 items-center">
                    <a
                      href="https://www.instagram.com/qualibytes/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/icons/instagram.png"
                        alt="Instagram"
                        className="w-9 h-9 object-contain"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/qualibytes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/icons/linkedin.png"
                        alt="LinkedIn"
                        className="w-11 h-11 object-contain"
                      />
                    </a>
                    <a
                      href="https://x.com/qualibytes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/icons/x.png"
                        alt="X"
                        className="w-11 h-11 object-contain"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@QualibytesITAcademy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="/icons/youtube.png"
                        alt="YouTube"
                        className="w-11 h-11 object-contain"
                      />
                    </a>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="mt-6 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4905038484458!2d77.31401203205202!3d28.585058388124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d3172b6069%3A0x55426a34bb907331!2sQualibytes%20IT%20Academy!5e0!3m2!1sen!2sin!4v1749755721954!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[450px] flex flex-col justify-between bg-[#05081b] p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
