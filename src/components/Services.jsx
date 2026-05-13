import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const services = [
  {
    num: "01",
    title: "Keyword Research",
    points: [
      "Identify low competition and high-ranking keywords",
      "Understand the search intent of the target user",
      "Boost conversions and traffic",
    ],
  },
  {
    num: "02",
    title: "SEO",
    points: [
      "Raise your website's Google ranking",
      "Optimize pages for organic traffic",
      "Technical, on-page, and off-page SEO",
    ],
  },
  {
    num: "03",
    title: "SEM",
    points: [
      "Paid advertisements for immediate exposure",
      "Campaign optimization and Google Ads",
      "Accelerate targeted traffic",
    ],
  },
  {
    num: "04",
    title: "SMM",
    points: [
      "Increase brand awareness on social media platforms",
      "Engage the appropriate audience",
      "Increase followers, reach, and conversions",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
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
            <span className="text-primary font-bold">/</span> My Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight"
          >
            What I Do
          </motion.h2>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.num}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full p-8 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-default">
                <CardHeader className="p-0 mb-6">
                  <span className="font-serif text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4 block">
                    {service.num}
                  </span>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted">
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
