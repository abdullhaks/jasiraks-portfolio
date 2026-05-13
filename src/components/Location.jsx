import React from "react"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Location() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg">
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
            <span className="text-primary font-bold">/</span> Find Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-4"
          >
            Based in Kozhikode, Kerala
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted flex items-center gap-2"
          >
            <MapPin size={18} className="text-primary" />
            Available for remote projects worldwide and in-person in Calicut
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125363.24!2d75.7804!3d11.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x49c2a40e2c4ba76b!2sKozhikode%2C+Kerala!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jasira's Location — Kozhikode, Kerala"
              />
            </div>
          </motion.div>

          {/* Contact CTA Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Card className="h-full p-8 flex flex-col justify-center bg-dark text-white border-dark">
              <CardContent className="p-0">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">
                  Ready to grow your brand?
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  Let's discuss how I can help elevate your digital presence and drive real results for your business.
                </p>
                <p className="text-sm text-primary font-medium mb-6">
                  jasiraks@gmail.com
                </p>
                <Button variant="primary" size="lg" asChild className="w-full">
                  <a href="mailto:jasiraks@gmail.com">
                    Let's Connect
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
