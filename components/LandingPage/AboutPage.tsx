"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="bg-black min-h-screen flex items-center w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-800 mb-6">
            About <span className="text-amber-500">Me</span>
          </h2>
          <div className="space-y-5 text-white text-lg sm:text-xl leading-relaxed">
            <p>
              I&apos;m a passionate <span className="font-semibold text-cyan-700">Frontend Developer</span> who loves building responsive, accessible, and user-friendly web interfaces with modern technologies such as <span className="font-semibold text-cyan-700">React, Next.js, and Tailwind CSS</span>.
            </p>
            <p>
              I enjoy turning ideas into polished experiences and continuously improving my skills in frontend architecture, performance, and accessibility. I am also currently learning cybersecurity fundamentals and web security.
            </p>
            <p>
              Beyond coding, I enjoy exploring new tools, contributing to open-source, and sharing knowledge with the developer community. My focus is to keep growing, innovating, and making an impact through technology.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2"
        >
          <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-3xl shadow-xl max-w-md w-full border border-cyan-200 transition-transform duration-300 transform hover:scale-[1.03]">
            <div className="flex items-center mb-6">
              <div className="bg-black p-3 rounded-xl mr-4 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-cyan-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyan-800">
                My Mission
              </h3>
            </div>
            <p className="text-white text-base sm:text-lg leading-relaxed">
              To create thoughtful frontend experiences that are fast,
              accessible, and useful. I am growing as a developer by building
              with modern web technologies and learning how to make interfaces
              more secure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
