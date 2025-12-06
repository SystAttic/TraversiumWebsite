'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Visually organized trips',
    description: 'All your memories in one beautiful place',
  },
  {
    title: 'Flexible media sorting',
    description: 'Organize by date, location, or your own system',
  },
  {
    title: 'Effortless collaboration',
    description: 'Share trips with friends and family seamlessly',
  },
  {
    title: 'Intuitive user interface',
    description: 'Beautiful, simple, and easy to use',
  },
  {
    title: 'Relivable moments',
    description: 'Experience your adventures again and again',
  },
  {
    title: 'Real-time updates',
    description: 'Stay connected with your travel companions',
  },
]

export default function SolutionSection() {
  return (
    <section id="features" className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trip Experience, Reimagined
          </h2>
          <p className="text-xl text-dark-textMuted italic">
            No clutter. No confusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-dark-bg2 rounded-lg border border-dark-border hover:border-accent-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-dark-textMuted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

