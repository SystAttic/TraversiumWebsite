'use client'

import { motion } from 'framer-motion'

const GOOGLE_DRIVE_LINK = 'https://drive.google.com/drive/folders/12E8nB8W7SXxp1aOXqqw_CJzKo6Et1EJr?usp=sharing'
const FEEDBACK_FORM_LINK = 'https://forms.gle/wzBYx5vCKmcRqXLK9'

export default function DownloadSection() {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Download Traversium
        </h1>
        <p className="text-xl text-dark-textMuted max-w-3xl mx-auto mb-8">
          Get the Traversium mobile app and start capturing your travel memories
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <a
          href={GOOGLE_DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-8 py-4 bg-accent-primary hover:bg-accent-primaryLight rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-primary/50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Download Development Version</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <p className="text-sm text-dark-textMuted mt-4">
          Click here to access the Google Drive folder with the APK file
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 bg-dark-bg2/50 rounded-lg border border-dark-border p-6"
      >
        <h3 className="text-xl font-semibold text-white mb-3">
          ⚠️ Development Version Notice
        </h3>
        <p className="text-dark-textMuted text-sm leading-relaxed">
          Please note that this is a development build and may contain bugs or
          incomplete features. Your feedback is valuable to us as we continue to
          improve the app. Thank you for your patience and support!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 rounded-lg border border-accent-primary/30 p-8 sm:p-10"
      >
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-primary/20 mb-4">
              <svg
                className="w-8 h-8 text-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Help Us Improve
          </h3>
          <p className="text-lg text-dark-textMuted mb-8 max-w-2xl mx-auto leading-relaxed">
            If you've downloaded and tried the app, we'd love to hear from you!
            Your feedback helps us understand what works well and what needs
            improvement. Please take a moment to share your thoughts and
            experiences with us.
          </p>
          <a
            href={FEEDBACK_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white hover:bg-gray-100 text-accent-primary rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Share Your Feedback</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="text-sm text-dark-textMuted mt-4">
            Your opinion matters and helps us build a better Traversium
          </p>
        </div>
      </motion.div>
    </section>
  )
}
