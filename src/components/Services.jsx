import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaShieldAlt } from 'react-icons/fa'

function Counter({ value, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration })
      count.onChange((latest) => setDisplayValue(Math.round(latest)))
      return controls.stop
    }
  }, [isInView, count, value, duration])

  return <span ref={ref}>{displayValue}</span>
}

const chartData = [
  { label: 'Budget', value: 120, color: 'bg-gray-900' },
  { label: 'Saving', value: 100, color: 'bg-gray-900' },
  { label: 'Analytic', value: 95, color: 'bg-gray-900' }
]

const services = [
  'Social security and pension optimization',
  'GST, TDS, and income tax filings',
  'Tax deductions & exemptions guidance'
]

const carouselImages = [
  {
    src: '/carousel1.jpeg',
    alt: 'Business consultation'
  },
  {
    src: '/carousel2.jpeg',
    alt: 'Professional meeting'
  },
  {
    src: '/carousel3.jpeg',
    alt: 'Business analysis'
  }
]

export default function StatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Large decorative numbers in background */}
      <div className="absolute left-0 top-1/4 text-[300px] font-bold text-gray-100 opacity-50 select-none pointer-events-none">
        01
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Charts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
                Why Choose Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight"
            >
              Amazing accounting statistics show the power of numbers.
            </motion.h2>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-8 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* decorative background image for chart area */}
              <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/035/580/971/small/financial-graph-on-digital-technology-strategy-background-with-finance-data-marketing-chart-growth-bar-charts-in-analysis-report-or-success-investment-charts-vector.jpg')`,
                  opacity: 0.12
                }}
              />
              <div className="flex items-end justify-around h-64 gap-8">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${item.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.2, ease: "easeOut" }}
                      className={`w-full ${item.color} rounded-t-lg relative`}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.5 + index * 0.2 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm font-bold"
                      >
                        <Counter value={item.value} />
                      </motion.div>
                    </motion.div>
                    <div className="mt-4 text-sm font-semibold text-gray-700">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-900 rounded"></div>
                  <span className="text-gray-600">Element 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  <span className="text-gray-600">Element 2</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:pt-32"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Our firm is built on a foundation of responsiveness. We understand that in a fast-paced business world, a timely answer is a competitive advantage.
            </motion.p>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Carousel Section */}
        <div className="grid lg:grid-cols-[60%_40%] gap-8 items-center">
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative h-80 rounded-2xl overflow-hidden"
          >
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 1.1
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-8 h-2 bg-orange-500' 
                      : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  } rounded-full`}
                />
              ))}
            </div>
          </motion.div>

          {/* Risk Management Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6"
            >
              <FaShieldAlt className="text-3xl text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Risk Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Businesses that partner with us gain a strategic advantage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}