import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaChartLine, FaChartBar, FaFileAlt, FaMoneyBillWave, FaCalculator, FaArrowRight } from 'react-icons/fa'

const services = [
  {
    icon: FaChartLine,
    title: 'Business Growth',
    description: 'Maximize your tax benefits with our proactive planning and hassle-free filing services.'
  },
  {
    icon: FaChartBar,
    title: 'Capital Markets',
    description: 'Stay organized and focused on growth while we handle your day financial record.'
  },
  {
    icon: FaFileAlt,
    title: 'Business Planning',
    description: 'Maximize your tax benefits with our proactive planning and hassle-free filing services.'
  },
  {
    icon: FaMoneyBillWave,
    title: 'Financial Planning',
    description: 'We specialize in helping small businesses thrive by providing expert.'
  },
  {
    icon: FaCalculator,
    title: 'Taxes Planning',
    description: 'Stay organized and focused on growth while we handle your day financial record.'
  }
]

const scrollingServices = [
  'Investment Management',
  'Insurance Consulting',
  'Business Planning',
  'Audit Assurance',
  'Financial Projections',
  'Business Planning',
  'Investment Management',
  'Insurance Consulting'
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-start">
          {/* Left Side - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Image with light gray background */}
              <div className="relative bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/consultant.png"
                  alt="Professional consultant"
                  className="w-full h-[650px] object-contain object-bottom mix-blend-multiply"
                />
              </div>
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-20"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Our Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight"
            >
              Why choose us as your accountant consultant?
            </motion.h2>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                  >
                    <service.icon className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 leading-tight">
                Explore our all expertises we offers
              </h3>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-semibold flex items-center gap-3 hover:shadow-xl transition-all"
              >
                View All Services
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-orange-500" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 py-5 overflow-hidden shadow-lg">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...scrollingServices, ...scrollingServices, ...scrollingServices, ...scrollingServices].map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-white font-bold text-xl tracking-wide">
                {service}
              </span>
              <span className="text-white text-2xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
