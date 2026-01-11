'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Ožbej Pavc',
    role: 'Project Lead & Frontend Developer',
    description: 'Someone who comes up with too many project ideas.',
    image: '/assets/team/ozbej.jpeg',
  },
  {
    name: 'Maja Razinger',
    role: 'Backend & Infrastructure Team Leader',
    description: 'A cozy programmer who loves to chill with her cats.',
    image: '/assets/team/maja.jpeg',
  },
  {
    name: 'Dejan Jarc',
    role: 'Backend & Infrastructure Developer',
    description: 'Gamer and Fitness enthusiast.',
    image: '/assets/team/dejan.jpeg',
  },
  {
    name: 'Jure Zupančič',
    role: 'Backend & Infrastructure Developer',
    description: 'Enjoying FRI time learning new technologies.',
    image: '/assets/team/jure.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
        <p className="text-dark-textMuted">
          The people behind Traversium
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="mb-6 relative">
              <div className="w-48 h-48 mx-auto rounded-full border-2 border-dark-border overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {member.name}
            </h3>
            <p className="text-accent-primary mb-3">{member.role}</p>
            <p className="text-dark-textMuted text-sm">{member.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="p-8 bg-dark-bg2 rounded-lg border border-dark-border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-dark-textMuted leading-relaxed">
            At Traversium, we believe that your travel memories are precious and
            deserve to be preserved in a beautiful, organized way. We're
            building a platform that makes it effortless to capture, organize,
            and relive your adventures with the people who matter most. Every
            trip tells a story, and we're here to help you tell it beautifully.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

