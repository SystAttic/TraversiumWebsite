'use client'

import { motion } from 'framer-motion'

const expectations = [
  {
    percentage: 95,
    subPercentage: 48,
    subLabel: 'by date',
    title: 'want to relive their memories by date and destination',
  },
  {
    percentage: 83,
    maybe: 13,
    title: 'want to have their favourite trip section',
  },
  {
    percentage: 78,
    maybe: 13,
    title: 'want an onboarding process and new user helpers',
  },
  {
    percentage: 53,
    maybe: 30,
    title: 'want to collect achievements for app engagement',
  },
]

const additionalFeatures = [
  'Recent posts',
  'Smart sorting',
  'Push notifications',
  'Quiet hours',
  'Selective sharing',
  '2FA',
  'Travel Statistics',
  'Gallery highlights',
  'Map integration',
  'Trip planning',
]

export default function UserExpectations() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What People Expect
          </h2>
          <p className="text-lg text-dark-textMuted">
            real feedback from user expectations survey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-dark-bg3 rounded-lg border border-dark-border"
            >
              <div className="mb-4">
                <div className="text-5xl font-bold text-white mb-2">
                  {item.percentage}%
                </div>
                {item.subPercentage && (
                  <div className="text-sm text-dark-textMuted mb-1">
                    {item.subPercentage}% {item.subLabel}
                  </div>
                )}
                {item.maybe && (
                  <div className="text-sm text-dark-textMuted">
                    {item.maybe}% maybe
                  </div>
                )}
                <div className="w-full h-1 bg-dark-bg2 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-accent-orange"
                  ></motion.div>
                </div>
              </div>
              <p className="text-dark-textMuted text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-dark-textMuted text-lg mb-6">and more</p>
          <div className="p-8 bg-dark-bg3 rounded-lg border border-dark-border">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="text-dark-textMuted text-center"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

