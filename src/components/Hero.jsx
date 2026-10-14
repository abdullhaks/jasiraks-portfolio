import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback } from "./ui/avatar"

/* ===== ANIMATION VARIANTS ===== */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ===== ANIMATED BACKGROUND BLOB ===== */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Available Badge */}
          <motion.div variants={fadeUp}>
            <Badge variant="outline" className="mb-8 gap-2 px-4 py-2 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Small label */}
          <motion.p
            variants={fadeUp}
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted font-sans mb-4"
          >
            Hello, it's me
          </motion.p>

          {/* Giant Name */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-6xl md:text-7xl lg:text-[96px] font-bold text-dark leading-[0.95] mb-2"
          >
            Jasira
          </motion.h1>

          {/* Subtitle — italic serif */}
          <motion.p
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-primary font-medium leading-[1.1] mb-4"
          >
            Freelance Digital Marketer
          </motion.p>

          {/* Location */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted mb-10"
          >
            Based in Muscat, Oman
          </motion.p>

          {/* Quote Block */}
          <motion.blockquote
            variants={fadeUp}
            className="border-l-4 border-primary pl-6 py-2 mb-10 max-w-xl"
          >
            <p className="font-serif text-lg md:text-xl italic text-dark/80 leading-relaxed">
              "CONTENT is the atomic particle of all digital marketing."
            </p>
            <cite className="text-sm text-muted not-italic mt-2 block">— Rebecca Leib</cite>
          </motion.blockquote>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg" asChild>
              <a href="mailto:jasiraks@gmail.com">
                Feel Free to Connect
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["AK", "HF", "LT"].map((initials, i) => (
                <motion.div
                  key={initials}
                  variants={scaleIn}
                  className="border-2 border-white rounded-full"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted">
              Trusted by clients across <span className="font-semibold text-dark">multiple industries</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} className="text-muted" />
      </motion.div>
    </section>
  )
}
