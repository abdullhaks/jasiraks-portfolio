import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  FileText,
  BarChart3,
  Target,
  Megaphone,
  Palette,
  Layers,
  Globe,
  Calendar,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Activity,
  ArrowRight,
  Filter,
} from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* ===== DELIVERABLES DATA ===== */
const deliverables = [
  {
    num: "01",
    title: "Site Audit",
    category: "SEO & Audit",
    icon: ShieldCheck,
    desc: "Comprehensive technical, speed, and mobile responsiveness audit to eliminate crawl errors and enhance UX.",
  },
  {
    num: "02",
    title: "Keyword Analysis",
    category: "SEO & Audit",
    icon: BarChart3,
    desc: "In-depth evaluation of search volume, competition difficulty, and high-converting healthcare search intent.",
  },
  {
    num: "03",
    title: "Keyword Research",
    category: "SEO & Audit",
    icon: Search,
    desc: "Discovery and strategic mapping of localized patient queries to capture targeted organic search traffic.",
  },
  {
    num: "04",
    title: "Competitor Analysis",
    category: "SEO & Audit",
    icon: Target,
    desc: "Thorough benchmarking against regional medical centers to uncover market gaps and ranking opportunities.",
  },
  {
    num: "05",
    title: "Backlink Creation",
    category: "SEO & Audit",
    icon: Globe,
    desc: "Acquisition of high-authority citations and medical directory backlinks to boost domain authority and trust.",
  },
  {
    num: "06",
    title: "SEM Keyword Research",
    category: "Paid Performance",
    icon: TrendingUp,
    desc: "High-commercial intent keyword selection tailored for budget-efficient, high-ROI Google Ads campaigns.",
  },
  {
    num: "07",
    title: "Basic Content Calendar",
    category: "Content & Strategy",
    icon: Calendar,
    desc: "Structured baseline publishing roadmap to ensure consistent brand storytelling and patient engagement.",
  },
  {
    num: "08",
    title: "Advanced Content Calendar",
    category: "Content & Strategy",
    icon: Layers,
    desc: "Seasonal health campaigns, clinical awareness days, and topic clusters optimized for long-term SEO impact.",
  },
  {
    num: "09",
    title: "Meta and OG Optimisation",
    category: "SEO & Audit",
    icon: CheckCircle2,
    desc: "Search-optimized title tags, meta descriptions, and rich Open Graph snippets for maximum social and search CTR.",
  },
  {
    num: "10",
    title: "Blog Creation",
    category: "Content & Strategy",
    icon: FileText,
    desc: "Authoritative, doctor-backed healthcare articles addressing common patient questions and driving organic traffic.",
  },
  {
    num: "11",
    title: "Lead Campaign",
    category: "Paid Performance",
    icon: Megaphone,
    desc: "Targeted lead generation funnels and landing page forms engineered to maximize patient appointment bookings.",
  },
  {
    num: "12",
    title: "Poster Design",
    category: "Creative & Branding",
    icon: Palette,
    desc: "High-impact visual creatives, clinic promotional banners, and social assets aligning with brand identity.",
  },
  {
    num: "13",
    title: "Search Ads",
    category: "Paid Performance",
    icon: Target,
    desc: "Precision Google Search Ads with customized ad copy, extensions, and geo-targeting to capture immediate inquiries.",
  },
]

const categories = ["All Deliverables", "SEO & Audit", "Paid Performance", "Content & Strategy", "Creative & Branding"]

export default function ClientWork() {
  const [selectedCategory, setSelectedCategory] = useState("All Deliverables")

  const filteredDeliverables =
    selectedCategory === "All Deliverables"
      ? deliverables
      : deliverables.filter((item) => item.category === selectedCategory)

  return (
    <section id="work" className="py-24 md:py-32 bg-bg overflow-hidden border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-sans"
          >
            <span className="text-primary font-bold">/</span> Client Work
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight"
              >
                Featured Client Project
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-base md:text-lg text-muted max-w-2xl leading-relaxed"
              >
                Discover how comprehensive SEO, technical auditing, and data-driven performance
                marketing generated real patient growth for healthcare leaders.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-dark border border-primary/30">
                <Activity size={14} className="text-primary-dark" />
                Case Study
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-surface text-muted border border-border">
                13 Deliverables Completed
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== FEATURED CASE STUDY SHOWCASE ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="bg-surface rounded-3xl border border-border/80 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-8 md:p-12 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  {/* Client Logo & Title Header */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 px-4 py-2 bg-white rounded-2xl border border-border shadow-xs flex items-center justify-center">
                        <img
                          src="/cleint%20logo.png"
                          alt="Shajina Medical Center Logo"
                          className="h-10 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-primary-dark bg-primary/10 px-2.5 py-0.5 rounded-md">
                          Healthcare Partner
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-dark mt-1">
                          Shajina Medical Center
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-muted leading-relaxed mb-6">
                      A trusted healthcare institution providing high-standard patient care. I spearheaded
                      their full digital marketing roadmap — executing technical site architecture optimization,
                      local search rankings, clinical content calendars, and targeted patient lead campaigns.
                    </p>

                    {/* Key Strategic Pillars Badges */}
                    <div className="flex flex-wrap gap-2.5 mb-8">
                      {["Full SEO Audit", "Keyword Strategy", "Google Ads SEM", "Content Marketing", "Lead Gen"].map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-bg text-dark/80 border border-border"
                        >
                          <CheckCircle2 size={13} className="text-primary-dark" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="bg-bg/60 rounded-xl p-3.5 text-center">
                      <p className="font-serif text-2xl md:text-3xl font-bold text-dark">13</p>
                      <p className="text-xs text-muted font-medium mt-1">Core Deliverables</p>
                    </div>
                    <div className="bg-bg/60 rounded-xl p-3.5 text-center">
                      <p className="font-serif text-2xl md:text-3xl font-bold text-dark">360°</p>
                      <p className="text-xs text-muted font-medium mt-1">Digital Strategy</p>
                    </div>
                    <div className="bg-bg/60 rounded-xl p-3.5 text-center">
                      <p className="font-serif text-2xl md:text-3xl font-bold text-dark">Top</p>
                      <p className="text-xs text-muted font-medium mt-1">Search Visibility</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Web Mockup Preview */}
                <div className="lg:col-span-6">
                  <div className="relative group">
                    {/* Glowing background halo */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Browser Frame */}
                    <div className="relative rounded-2xl bg-dark border border-dark/90 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                      {/* Browser Window Bar */}
                      <div className="bg-[#1C1C1E] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                          <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                        </div>
                        <div className="flex-1 mx-3">
                          <div className="bg-black/40 text-white/60 text-xs px-3 py-1 rounded-md flex items-center justify-center gap-1.5 font-mono max-w-xs mx-auto truncate">
                            <span className="text-emerald-400">🔒</span>
                            shajinamedicalcenter.com
                          </div>
                        </div>
                        <span className="text-white/40 text-xs font-medium">Preview</span>
                      </div>

                      {/* Image Container */}
                      <div className="relative overflow-hidden bg-slate-900 aspect-[16/10]">
                        <img
                          src="/cleint%20page.png"
                          alt="Shajina Medical Center Website Preview"
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Web Presence</p>
                            <p className="text-sm font-medium">Shajina Medical Center Landing Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== SECTION 2: COMPLETE DELIVERABLES BREAKDOWN ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <motion.h3
                variants={fadeUp}
                className="font-serif text-2xl md:text-3xl font-bold text-dark"
              >
                Detailed Project Deliverables
              </motion.h3>
              <motion.p variants={fadeUp} className="text-sm md:text-base text-muted mt-1">
                Every phase executed with analytical precision, from foundational audits to active lead acquisition.
              </motion.p>
            </div>

            {/* Category Filter Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-dark text-white shadow-sm"
                      : "bg-surface text-muted hover:text-dark border border-border hover:border-dark/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Deliverables Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
          >
            <AnimatePresence>
              {filteredDeliverables.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.num}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="h-full"
                  >
                    <Card className="h-full p-6 bg-surface border border-border/80 hover:border-primary/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Top: Number Badge and Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-8 h-8 rounded-full bg-dark text-white font-mono text-xs font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                            {item.num}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-bg flex items-center justify-center text-dark/70 group-hover:text-primary-dark group-hover:bg-primary/10 transition-colors duration-300">
                            <IconComponent size={18} />
                          </div>
                        </div>

                        {/* Title & Category */}
                        <div className="mb-2">
                          <span className="text-[11px] uppercase tracking-wider font-semibold text-muted/70 block mb-1">
                            {item.category}
                          </span>
                          <h4 className="text-base font-bold text-dark group-hover:text-dark transition-colors">
                            {item.title}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-muted leading-relaxed mt-auto pt-2">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ===== PROJECT COLLABORATION CTA ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-16 bg-gradient-to-r from-dark to-[#1a1a1a] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2 block">
                Take Your Business Further
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-3">
                Need a tailored digital marketing roadmap for your brand?
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Whether you need a complete site audit, search optimization, or high-converting paid campaigns,
                I help businesses in Muscat, Oman and globally achieve tangible growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="font-medium shadow-md hover:shadow-primary/20"
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  Discuss Your Project
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
