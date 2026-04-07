"use client"

import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { motion, AnimatePresence } from 'framer-motion'
import { AuroraText } from "@/components/magicui/aurora-text"

interface OverlayProps {
  onChoice: (choice: string) => void
}

const NotsotechOverlay: React.FC<OverlayProps> = ({ onChoice }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check for cookie on mount
    const preference = Cookies.get('notsotech_preference')
    if (preference) {
      onChoice(preference)
      setIsVisible(false)
    }
  }, [onChoice])

  const handleSelection = (choice: string) => {
    // 🔵 [NotsotechOverlay]: Storing preference for ${choice} (valid for 30 days)
    Cookies.set('notsotech_preference', choice, { expires: 30 })
    onChoice(choice)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black p-8 text-center"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <AuroraText className="text-4xl md:text-6xl font-bold">
              What are you here for?
            </AuroraText>
            <p className="mt-4 text-gray-500">Pick one to customize your experience.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {['Food', 'Music', 'Chaos'].map((option, i) => (
              <motion.button
                key={option}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                onClick={() => handleSelection(option)}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-black dark:hover:bg-white"
              >
                <span className="relative z-10 text-2xl font-bold group-hover:text-white dark:group-hover:text-black">
                  {option}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NotsotechOverlay
