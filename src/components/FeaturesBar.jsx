import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAward, FaChartLine, FaMedal, FaTrophy } from 'react-icons/fa'

const features = [
  {
    icon: FaAward,
    text: 'World-class services'
  },
  {
    icon: FaChartLine,
    text: 'Experience strategy'
  },
  {
    icon: FaTrophy,
    text: 'Award winning agency'
  },
  {
    icon: FaMedal,
    text: 'Grow your business'
  }
]

export default function FeaturesBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-orange-500 text-3xl flex-shrink-0"
              >
                <feature.icon />
              </motion.div>
              <span className="text-gray-800 font-medium text-base">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
