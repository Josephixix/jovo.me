"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const hobbies = [
  {
    icon: "🎮",
    title: "Hobbyist Game Dev",
    description:
      "I build small games for the joy of it. Currently experimenting with Godot and love-driven side projects.",
    image: "/CZw0Ok.png",
    link: "https://jovothedev.itch.io/",
    linkLabel: "Play on itch.io",
  },
  {
    icon: "🎥",
    title: "YouTube Channel",
    description:
      "I document my work and what I'm building, from dev logs to project breakdowns, so you can follow along with the process.",
    image: "/thumbnail.png",
    link: "https://www.youtube.com/@jovothedev",
    linkLabel: "Watch on YouTube",
  },
]

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="relative px-4 md:px-12 py-22 bg-white"
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col gap-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
            Hobbies
          </h3>
          <p className="text-gray-600 text-sm sm:text-lg font-semibold">
            What I build when nobody asked me to.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="group bg-gray-200 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.15 }}
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {hobby.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {hobby.description}
                </p>

                {hobby.link && (
                  <div className="mt-auto pt-2">
                    <a
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-black hover:bg-gray-900 transition w-fit"
                    >
                      {hobby.linkLabel}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}