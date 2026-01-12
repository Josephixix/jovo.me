"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section 
    id="home"
    className="relative min-h-[78dvh] md:min-h-[80dvh] lg:min-h-[90dvh] overflow-hidden flex flex-col items-center px-4 md:px-12 bg-gray-50 pt-15 md:pt-32  mt-0 ">
      

      
      {/* Circular Image Icon */}
      <motion.div
        className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src="/hero2.jpg" 
          alt="Jovo Profile"
          width={200}
          height={200}
          className="object-cover"
        />
      </motion.div>

      {/* H1 */}
      <motion.h1
        className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Hello World, i am Jovo.
      </motion.h1>

      {/* H2 */}
      <motion.h2
        className="text-lg sm:text-xl md:text-3xl text-center text-black font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
Web Developer and Interface Designer
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-center text-gray-600 max-w-xl mb-6 px-2 sm:px-0 text-sm sm:text-lg font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
      >
I build stunning, functional, and scalable websites, with clean
 code, seamless UX, and performance that scales as your ideas grow.     
  </motion.p>

      {/* CTA Button */}
      <motion.a
        href="mailto:josephukohaobasi@gmail.com"
        className="bg-black text-white px-8 sm:px-10 py-2 sm:py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
      >
        Contact Me
      </motion.a>

    </section>
  )
}
