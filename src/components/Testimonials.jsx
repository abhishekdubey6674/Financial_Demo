import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "Outstanding service! Their financial expertise helped us navigate complex investment decisions with confidence.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "The team's dedication and professionalism exceeded our expectations. Highly recommend their services!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Business Owner",
    content: "They transformed our financial strategy and helped us achieve remarkable growth. Truly exceptional!",
    rating: 5
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our clients say about us
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveIndex(index)}
                className={`bg-white p-8 rounded-2xl shadow-lg transition-all ${
                  activeIndex === index ? 'ring-2 ring-primary-600' : ''
                }`}
              >
                <motion.div
                  animate={{ 
                    scale: activeIndex === index ? 1.1 : 1,
                    rotate: activeIndex === index ? 5 : 0
                  }}
                  className="text-4xl text-primary-600 mb-4"
                >
                  <FaQuoteLeft />
                </motion.div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <FaStar className="text-accent-500" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
