import React from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Separator } from "./ui/separator"

/* ===== CUSTOM SOCIAL SVG ICONS ===== */
function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

/* ===== ANIMATION VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Top Row — Logo + Tagline */}
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-2">Jasira</h2>
            <p className="text-white/50 text-sm">Freelance Digital Marketer, Muscat, Oman</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-white/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeUp} className="flex justify-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Separator */}
          <Separator className="bg-white/10 mb-8" />

          {/* Bottom Bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40"
          >
            <p>© 2025 Jasira. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Designed with <Heart size={12} className="text-primary fill-primary" /> By AKS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
