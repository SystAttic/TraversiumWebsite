'use client'

import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg2">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Your photos
              <br />
              tell stories
            </h2>
            <div className="w-24 h-1 bg-accent-orange mb-6"></div>
            <p className="text-xl text-dark-textMuted italic mb-8">
              But they get lost.
            </p>
            <p className="text-lg text-dark-textMuted">
              Most trip memories end up scattered across devices,
              <br />
              chats and gallery folders.
            </p>

            <div className="mt-8 p-6 bg-dark-bg3 rounded-lg border border-dark-border max-w-md">
              <ul className="grid grid-cols-2 gap-3 text-dark-textMuted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></span>
                  Disorganized
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></span>
                  Lost memories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></span>
                  Scattered photos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></span>
                  No structure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mr-3 flex-shrink-0"></span>
                  Hard to relive
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Phone mockup placeholder */}
            <div className="relative mx-auto max-w-sm">
              <div className="bg-dark-bg3 rounded-[3rem] p-4 border border-dark-border shadow-2xl">
                <div className="bg-dark-bg1 rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="p-6 space-y-4">
                    {/* Gallery grid simulation */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg ${
                            i % 3 === 0
                              ? 'bg-dark-bg3'
                              : 'bg-gradient-to-br from-accent-primary/20 to-accent-orange/20'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

