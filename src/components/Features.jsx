import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const features = [
  "Expert Financial Advisors",
  "24/7 Customer Support",
  "Secure & Encrypted",
  "Customized Solutions",
  "Competitive Rates",
  "Fast Processing"
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide comprehensive financial solutions with a commitment to excellence and client satisfaction.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FaCheckCircle className="text-2xl text-primary-600" />
                  </motion.div>
                  <span className="text-lg text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Get Started Today
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-12 shadow-2xl"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Trusted by Thousands
                </h3>
                <p className="text-gray-600 mb-6">
                  Join our growing community of satisfied clients who have achieved their financial goals with our expert guidance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">10K+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-600 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
