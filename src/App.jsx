import React from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import WhyChooseMe from "./components/WhyChooseMe"
import Certifications from "./components/Certifications"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import Location from "./components/Location"
import Footer from "./components/Footer"

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-bg font-sans"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Certifications />
        <FAQ />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </motion.div>
  )
}
