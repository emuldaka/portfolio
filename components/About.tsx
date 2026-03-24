"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/portriatCentered.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {siteConfig.bio}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I moved to the U.S. from Albania as a kid, which meant learning to
              adapt quickly to a new language, culture, and environment. I’m a
              proud dad of two who’s learned how to balance life between family,
              work, and personal growth. When I’m not spending time with my
              kids, you’ll usually find me gaming, staying active through
              sports, or sharpening my programming skills late at night.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>

          <div className="space-y-8">
            {/* Education */}
            {siteConfig.education.map((item, index) => (
              <motion.div
                key={`edu-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-purple-600 dark:border-purple-400"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.degree}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">
                    {item.school} • {item.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <AcademicCapIcon className="w-8 h-8 text-amber-500 dark:text-amber-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Certifications
            </h3>
            <AcademicCapIcon className="w-8 h-8 text-amber-500 dark:text-amber-400" />
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            Verified credentials from boot.dev, freeCodeCamp, and more.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative block overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl hover:ring-2 hover:ring-amber-400/50 dark:hover:ring-amber-500/50 transition-all duration-300"
              >
                {/* Corner ribbon */}
                <div className="absolute top-0 right-0">
                  <div className="absolute w-24 h-24 overflow-hidden">
                    <div className="absolute left-0 top-0 w-full h-full bg-amber-500 dark:bg-amber-600 transform rotate-45 translate-x-8 translate-y-[-2rem]" />
                  </div>
                  <CheckBadgeIcon className="absolute top-2 right-2 w-6 h-6 text-white drop-shadow" />
                </div>

                <div className="p-6 flex gap-4">
                  {/* Optional certificate image */}
                  {cert.image ? (
                    <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 ring-2 ring-amber-400/30">
                      <Image
                        src={cert.image}
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <AcademicCapIcon className="w-10 h-10 text-white" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mt-1 truncate">
                      {cert.issuer
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
                      <span>View verified certificate</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
