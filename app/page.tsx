"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [showERPModal, setShowERPModal] = useState(false);

  const projects = [
    {
      title: "ERP System",
      desc: "A comprehensive ERP solution developed using Core PHP, JavaScript, and AJAX, engineered for end-to-end business automation including users, sales, inventory, invoices, and petty cash modules with scalable architecture.",
      img: "/erp.png",
      link: "https://your-dayim-link.com",
      restricted: true,
    },
    {
      title: "Dayim Marketing",
      desc: "A real estate platform built with Next.js and Laravel APIs featuring multi-building systems, property management, consultancy modules, and interactive room availability visualization.",
      img: "/dayim.png",
      link: "https://dayimmarketing.com",
      restricted: false,
    },
    {
      title: "Funkaar",
      desc: "A storytelling platform merging cinematic production with digital marketing to create impactful brand narratives.",
      img: "/funkaar.png",
      link: "https://funkaar.co/",
      restricted: false,
    },
  ];

  return (
    <main className="bg-[#0b1721] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Muhammad Mudasir
        </h1>

        <div className="flex gap-8 text-gray-300 mt-4 md:mt-0">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16 px-6 py-24 text-center md:text-left">

        {/* TEXT */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-400">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mt-3">
            Mudasir
          </h1>

          <h2 className="text-2xl md:text-4xl text-orange-500 mt-4">
            Web Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl">
            3+ years of experience in full-stack development specializing in PHP, Laravel, JavaScript, AJAX, and scalable systems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
            <button className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600">
              Hire Me
            </button>

            <a
              href="/mudasir-resume.pdf"
              download
              className="border border-gray-500 px-8 py-3 rounded-lg hover:border-white"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px]">
            <Image
              src="/maddys.jpg"
              alt="profile"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-gray-400 py-10 border-t border-gray-800">
        <span>PHP</span>
        <span>Laravel</span>
        <span>JavaScript</span>
        <span>AJAX</span>
        <span>Next.js</span>
        <span>Tailwind</span>
        <span>REST APIs</span>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto text-center py-24 px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          Dynamic software engineer with 3+ years experience in ERP systems, real estate platforms, and business automation tools.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Experience</h3>

        <div className="space-y-10">
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-orange-500">
              Web Developer
            </h4>
            <p className="text-gray-400">Global Business Concerns (2022 - Present)</p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-orange-500">
              Junior Backend Developer
            </h4>
            <p className="text-gray-400">Idenbrid Inc (2021 - 2022)</p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-orange-500">
              Intern Web Developer
            </h4>
            <p className="text-gray-400">Idenbrid Inc (2021)</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-14">Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#13202c] rounded-xl overflow-hidden shadow-lg text-left"
            >
              <div className="relative w-full aspect-[16/10] group">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  {item.restricted ? (
                    <button
                      onClick={() => setShowERPModal(true)}
                      className="bg-orange-500 px-6 py-2 rounded-lg"
                    >
                      Visit Site
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      className="bg-orange-500 px-6 py-2 rounded-lg"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-400 mt-3">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto text-center py-24 px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Contact</h3>

        <p className="text-gray-400">
          m.mudasirasif@gmail.com | +92-3022525228
        </p>

        <button className="bg-orange-500 px-8 py-3 rounded-lg mt-8 hover:bg-orange-600">
          Email Me
        </button>
      </section>

      {/* MODAL */}
      {showERPModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-6 z-50">
          <div className="bg-[#13202c] max-w-md w-full p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold text-orange-500">
              ERP System Restricted Access
            </h2>

            <p className="text-gray-300 mt-4">
              Internal system only. Contact for demo.
            </p>

            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={() => setShowERPModal(false)}
                className="px-4 py-2 bg-gray-700 rounded-lg"
              >
                Close
              </button>

              <a
                href="#contact"
                onClick={() => setShowERPModal(false)}
                className="px-4 py-2 bg-orange-500 rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}