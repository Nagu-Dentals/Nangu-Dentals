import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  isVisible: boolean;
}

export function Loader({ isVisible }: LoaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[3000] bg-slate-950 flex items-center justify-center"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white font-black tracking-tighter text-4xl"
          >
            NAGU.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
