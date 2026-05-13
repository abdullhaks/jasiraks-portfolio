import React from "react"
import { motion } from "framer-motion"
import { BarChart3, Target, Search, Handshake } from "lucide-react"
import { Card, CardContent } from "./ui/card"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven",
    desc: "Strategies backed by analytics",
  },
  {
    icon: Target,
    title: "Results-Oriented",
    desc: "Focus on measurable KPIs",
  },
  {
    icon: Search,
    title: "Up-to-Date",
    desc: "Latest SEO & marketing trends",
  },
  {
    icon: Handshake,
    title: "Transparent",
    desc: "Open communication & reporting",
  },
]

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="py-24 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-sans"
        >
          <span className="text-primary font-bold">/</span> Why Choose Me?
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left — Large Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {["Results.", "Strategy.", "Growth."].map((word) => (
              <motion.span
                key={word}
                variants={fadeUp}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-dark block leading-[1.1]"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Right — Body Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeRight}
            className="flex flex-col justify-center"
          >
            <p className="text-base md:text-lg text-muted leading-[1.8] mb-4">
              In today's competitive digital landscape, having a strong online presence isn't optional — it's essential. I combine creative thinking with data-driven strategies to help your business stand out, reach the right audience, and achieve sustainable growth.
            </p>
            <p className="text-base md:text-lg text-muted leading-[1.8]">
              From{" "}
              <a
                href="https://en.wikipedia.org/wiki/Search_engine_optimization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                SEO
              </a>{" "}
              and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Search_engine_marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                SEM
              </a>{" "}
              to{" "}
              <a
                href="https://en.wikipedia.org/wiki/Social_media_marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                SMM
              </a>
              , I bring a holistic approach that covers every aspect of your digital marketing needs with transparency and measurable results.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Card className="text-center p-8 hover:border-primary hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <feature.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
