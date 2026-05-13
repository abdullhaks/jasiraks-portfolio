import React from "react"
import { motion } from "framer-motion"
import { Star, StarHalf } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const slideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const testimonials = [
  {
    name: "Anwar",
    initials: "AW",
    rating: 5,
    text: "Jasira's expertise in digital marketing transformed our online presence completely. Her strategic approach to SEO brought us to the first page of Google within months. Highly professional and always delivers beyond expectations.",
  },
  {
    name: "Haifa",
    initials: "HF",
    rating: 4.5,
    text: "Working with Jasira was a game-changer for our social media strategy. She understood our brand voice perfectly and created campaigns that truly resonated with our audience. Our engagement rates increased by over 200%.",
  },
  {
    name: "Luthufi",
    initials: "LT",
    rating: 5,
    text: "Exceptional work on our Google Ads campaigns. Jasira's data-driven approach and constant optimization helped us reduce our cost per acquisition significantly while increasing conversions. She's truly dedicated to client success.",
  },
]

function StarRating({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={16} className="fill-primary text-primary" />
      ))}
      {hasHalf && <StarHalf size={16} className="fill-primary text-primary" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} size={16} className="text-border" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
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
            <span className="text-primary font-bold">/</span> Testimonials
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight"
          >
            What Clients Say
          </motion.h2>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={slideIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Card className="p-8 h-full relative hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                {/* Decorative Quote */}
                <span className="absolute top-6 right-8 font-serif text-6xl md:text-7xl text-primary/20 leading-none select-none">
                  "
                </span>

                <CardContent className="p-0 flex flex-col h-full">
                  <p className="text-base text-muted italic leading-relaxed mb-6 flex-1 relative z-10">
                    "{t.text}"
                  </p>
                  <Separator className="mb-6" />
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-dark text-sm">{t.name}</p>
                      <StarRating rating={t.rating} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
