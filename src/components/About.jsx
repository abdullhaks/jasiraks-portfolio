import React from "react"
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

const skills = [
  "SEO", "SEM", "SMM", "Content Optimization", "Keyword Research", "Google Ads"
]

const stats = [
  { value: "Fresher", label: "Experience" },
  { value: "2", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeLeft}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-sans">
              <span className="text-primary font-bold">/</span> About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-2 leading-[1.1]">
              I'm Jasira.
            </h2>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-primary/80 leading-[1.1]">
              Digital Marketer
            </p>
          </motion.div>

          {/* Right Column — Body Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeRight}
            className="flex flex-col justify-center"
          >
            <p className="text-base md:text-lg text-muted leading-[1.8] mb-6">
              I'm a passionate{" "}
              <a
                href="https://jasira.digitalxwebctr.co.in/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Freelance digital marketer in Muscat, Oman
              </a>
              , dedicated to helping businesses grow their online presence. With expertise in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Search_engine_optimization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                SEO
              </a>
              , SEM, SMM, and content optimization, I craft data-driven strategies that deliver measurable results.
            </p>
            <p className="text-base md:text-lg text-muted leading-[1.8]">
              My approach combines creativity with analytics to build brand authority, drive organic traffic, and convert visitors into loyal customers. Whether you're a startup or an established brand, I tailor strategies to your unique needs and goals.
            </p>
          </motion.div>
        </div>

        {/* Skill Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-wrap gap-3 mb-16"
        >
          {skills.map((skill) => (
            <motion.div key={skill} variants={scaleIn}>
              <Badge variant="outline" className="text-sm px-5 py-2">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Card className="text-center p-8 hover:border-primary/50 transition-colors">
                <CardContent className="p-0">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
