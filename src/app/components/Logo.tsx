import { motion } from 'motion/react';

export function Logo() {
  return (
    <div className="h-12 w-48 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 p-2 overflow-hidden">
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Tooth Icon */}
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          d="M12 8C12 5.79086 13.7909 4 16 4H18C20.2091 4 22 5.79086 22 8V14C22 16.2091 20.2091 18 18 18C18 20.2091 19.7909 22 22 22V26C22 28.2091 20.2091 30 18 30C15.7909 30 14 28.2091 14 26V22C14 20.2091 15.7909 18 18 18C15.7909 18 14 16.2091 14 14V8H12Z"
          fill="#0085cc"
          opacity="0.2"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          d="M16 6C14.8954 6 14 6.89543 14 8V14C14 15.1046 14.8954 16 16 16C17.1046 16 18 16.8954 18 18C18 19.1046 17.1046 20 16 20V26C16 27.1046 16.8954 28 18 28C19.1046 28 20 27.1046 20 26V20C18.8954 20 18 19.1046 18 18C18 16.8954 18.8954 16 20 16C21.1046 16 22 15.1046 22 14V8C22 6.89543 21.1046 6 20 6H16Z"
          stroke="#0085cc"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Text */}
        <motion.text
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          x="32"
          y="22"
          fill="#0f172a"
          fontSize="18"
          fontWeight="900"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          NAGU
        </motion.text>
        <motion.text
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          x="32"
          y="34"
          fill="#64748b"
          fontSize="9"
          fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif"
          letterSpacing="2"
        >
          DENTAL CLINIC
        </motion.text>
        
        {/* Sparkle */}
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ delay: 0.8, duration: 0.5 }}
          cx="78"
          cy="8"
          r="2"
          fill="#0085cc"
        />
      </svg>
    </div>
  );
}
