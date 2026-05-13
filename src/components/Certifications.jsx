import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const certifications = [
  {
    name: "Google Ads Certified",
    logo: "/googleads.jpg",
    accent: "#4285F4",
    accentBg: "rgba(66, 133, 244, 0.08)",
    desc: "Google Ads Search & Display certification",
  },
  {
    name: "SEMrush Certified",
    logo: "/semrush.jpg",
    accent: "#FF642D",
    accentBg: "rgba(255, 100, 45, 0.08)",
    desc: "SEMrush SEO Toolkit certification",
  },
  {
    name: "HubSpot Certified",
    logo: "/hubSpot.jpg",
    accent: "#FF5C35",
    accentBg: "rgba(255, 92, 53, 0.08)",
    desc: "HubSpot Inbound Marketing certification",
  },
]

const marqueeSkills = [
  "SEO", "SEM", "SMM", "Content Marketing", "Google Ads", "Keyword Research",
  "Analytics", "Brand Strategy", "Social Media", "Paid Ads",
  "SEO", "SEM", "SMM", "Content Marketing", "Google Ads", "Keyword Research",
  "Analytics", "Brand Strategy", "Social Media", "Paid Ads",
]

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-sans"
          >
            <span className="text-primary font-bold">/</span> Certified By
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight"
          >
            Trusted Credentials
          </motion.h2>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-2"
                    style={{
                      backgroundColor: cert.accentBg,
                      border: `1px solid ${cert.accent}20`,
                    }}
                  >
                    <img
                      src={cert.logo}
                      alt={`${cert.name} logo`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted">{cert.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== INFINITE MARQUEE ===== */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {marqueeSkills.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="inline-flex items-center gap-3 text-lg md:text-xl font-medium text-muted/50 select-none"
            >
              {skill}
              <span className="h-2 w-2 rounded-full bg-primary/30" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
