import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Gift, Sparkles } from 'lucide-react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 right-0 z-[999] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-3 px-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 justify-center">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Gift className="w-5 h-5" />
            </motion.div>
            <p className="text-sm font-bold flex items-center gap-2 flex-wrap">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Special Offer:</span>
              <span>Get 20% OFF on First Consultation!</span>
              <span className="hidden md:inline">|</span>
              <a
                href="#booking"
                className="underline hover:no-underline font-black hidden md:inline"
              >
                Book Now →
              </a>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="shrink-0 hover:bg-white/20 p-1 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
