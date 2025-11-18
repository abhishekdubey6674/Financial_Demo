import { motion, AnimatePresence } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaArrowRight, FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    image: '/hero-bg.jpg',
    title: 'Financial Outsourcing Services',
    subtitle: '',
    description:
      'Leveraging innovative technology .'
  }, {
    image: '/hero-bg1.jpg',
    title: 'Investment',
    subtitle: 'Planning',
    description: 'Strategic solutions for wealth growth'
  },
  {
    image: '/hero-bg2.jpg',
    title: 'Business',
    subtitle: 'Consulting',
    description: 'Professional advice for your success'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [direction, setDirection] = useState(0) // 1 = forward, -1 = backward
  const [mobileOpen, setMobileOpen] = useState(false)
  const firstMobileLinkRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      // focus first link for a11y
      setTimeout(() => {
        firstMobileLinkRef.current?.focus()
      }, 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-5 left-5 right-5 z-50 rounded-2xl shadow-lg transition-colors duration-300 ${isScrolled ? 'bg-white text-gray-800 backdrop-blur-md' : 'bg-white/10 text-white backdrop-blur-md'}`}
      >
        <div className="px-4 md:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
                <img src="/logo.jpeg" alt="Gudfin logo" className="w-8 h-8 md:w-10 md:h-10 rounded-md object-cover" />
                <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Gudfin</span>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`hidden lg:flex items-center gap-6 text-sm ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" />
                <span className="font-medium">Book a call</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-400" />
                <span className="font-medium">1 4408488222</span>
              </div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                onClick={() => setMobileOpen((s) => !s)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.button>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Pages', 'Services', 'Portfolio', 'Blog', 'Contact Us'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ color: '#fb923c' }}
                  className={`font-medium transition-colors ${item === 'Home' ? 'text-orange-400' : (isScrolled ? 'text-gray-800' : 'text-white')}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: '#ea580c' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-orange-500 text-white px-6 py-2.5 rounded-md font-medium items-center gap-2 shadow-lg"
            >
              Get In Touch
              <FaArrowRight className="text-sm" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Images Carousel (slide with direction) */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={{
                enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-gradient-to-r from-slate-800 to-slate-600"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/40" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl pt-20">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={{
                    enter: (dir) => ({ x: dir > 0 ? '30%' : '-30%', opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (dir) => ({ x: dir > 0 ? '-30%' : '30%', opacity: 0 })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: 'spring', stiffness: 220, damping: 25 }, opacity: { duration: 0.25 } }}
                >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  {slides[currentSlide].title}
                  <br />
                  {slides[currentSlide].subtitle}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-8 py-3.5 rounded-md font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transition-shadow"
            >
              GET STARTED
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="text-orange-500" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
              className={`transition-all duration-300 ${currentSlide === index
                  ? 'w-12 h-3 bg-orange-500 rounded-full'
                  : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/80'
                }`}
            />
          ))}
        </div>

        {/* Mobile Menu (animated panel) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`fixed top-20 left-4 right-4 z-50 rounded-2xl p-6 shadow-lg ${isScrolled ? 'bg-white text-gray-800' : 'bg-slate-900/95 text-white'}`}
            >
                <div className="flex flex-col gap-4">
                  {['Home', 'Pages', 'Services', 'Portfolio', 'Blog', 'Contact Us'].map((item, idx) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      ref={idx === 0 ? firstMobileLinkRef : null}
                      onClick={(e) => {
                        // close menu and smooth scroll
                        setMobileOpen(false)
                      }}
                      className="block text-lg font-medium py-2 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      {item}
                    </a>
                  ))}
                  <div className="pt-4">
                    <a
                      className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md font-semibold"
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get In Touch <FaArrowRight />
                    </a>
                  </div>
                </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
