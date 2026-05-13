import React from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const faqItems = [
  {
    q: "What services do you provide as a digital marketer?",
    a: "I offer a comprehensive range of digital marketing services including Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Marketing (SMM), content optimization, keyword research, Google Ads campaign management, and brand strategy development. Each service is tailored to meet your specific business goals and target audience.",
  },
  {
    q: "How can digital marketing benefit my company?",
    a: "Digital marketing can significantly boost your company's online visibility, drive targeted traffic to your website, generate quality leads, and increase conversions. It helps build brand awareness, establishes credibility in your industry, and provides measurable ROI through analytics and data-driven strategies. Whether you're looking to grow locally or globally, digital marketing opens doors to reach your ideal customers effectively.",
  },
  {
    q: "Which sectors do you work in?",
    a: "I work across multiple industries including e-commerce, healthcare, education, real estate, hospitality, technology startups, and local businesses. My strategies are adaptable to any sector because the fundamentals of digital marketing — understanding your audience, optimizing visibility, and driving engagement — are universal. I take the time to understand each industry's unique challenges and opportunities.",
  },
  {
    q: "Do you provide monthly packages?",
    a: "Yes, I offer flexible monthly packages designed to suit businesses of all sizes. Each package includes a customized mix of services based on your specific needs and goals. Monthly packages ensure consistent optimization and ongoing strategy adjustments based on performance data. Feel free to reach out to discuss a package that works best for your budget and objectives.",
  },
  {
    q: "Why should I hire you for my digital marketing?",
    a: "I bring a combination of creativity, analytical thinking, and hands-on experience to every project. My approach is transparent, data-driven, and results-oriented. I stay up-to-date with the latest trends and algorithm changes, I provide regular reporting and clear communication, and I genuinely care about helping your business succeed. With certifications from Google, SEMrush, and HubSpot, you can trust that your digital marketing is in capable hands.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-sans"
          >
            <span className="text-primary font-bold">/</span> FAQ
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
            Frequently Asked
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-primary/80">
            Questions
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-dark">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
