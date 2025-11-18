import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight, FaUser } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-32 bg-white min-h-[80vh] md:min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-auto md:h-[500px]">
              {/* Left Image - Team collaboration (smaller, top-left) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:absolute top-0 left-0 w-full md:w-[45%] z-20"
              >
                <img
                  src="/about1.jpg"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>

              {/* Right Image - Business meeting (larger, center-right) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:absolute top-12 right-0 w-full md:w-[60%] z-10"
              >
                <img
                  src="/about2.jpg"
                  alt="Business meeting"
                  className="w-full h-64 md:h-[380px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Customer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:absolute bottom-0 md:left-[15%] left-0 bg-white rounded-2xl shadow-2xl p-6 flex items-center gap-4 z-30"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                  <FaUser className="text-white text-xs" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center">
                  <FaUser className="text-white text-xs" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center">
                  <FaUser className="text-white text-xs" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900">20K+ Customer</div>
                <div className="text-sm text-gray-600">World wide</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              CERTIFIED CHARTERED ACCOUNTANTS (CAs) AND QUALIFIED TAX RETURN PREPARERS
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              Trinity Fin Tech with its highly advanced and customized processes and IT Policy in place to ensure client data is securely kept. The company has been growing leaps and bounds with the commitment to become a loved partner by the business clients, CAs and CPAs it serves. Trinity Fin Tech has served top-tier global businesses and consistently exceeded expectations with full-service dedication to their financial needs.
            </motion.p>

            {/* Stats and Button */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Years Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-6xl font-bold text-orange-500 mb-2">
                  25<span className="text-orange-400">+</span>
                </div>
                <div className="text-gray-900 font-semibold">Years of working</div>
                <div className="text-gray-900 font-semibold">experience</div>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-gray-200"></div>

              {/* Description and Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex-1"
              >
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We help small and growing businesses cut carbon, boost credibility, and move forward with confidence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 text-white px-8 py-3.5 rounded-md font-semibold flex items-center gap-3 shadow-lg hover:bg-gray-800 transition-colors"
                >
                  Discover More
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
