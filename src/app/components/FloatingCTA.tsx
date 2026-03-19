import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, MapPin, X, Plus } from 'lucide-react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'bg-[#25D366] hover:bg-[#1ea952]',
      href: 'https://wa.me/918861932535',
      delay: 0.1,
    },
    {
      icon: Phone,
      label: 'Call Now',
      color: 'bg-blue-600 hover:bg-blue-700',
      href: 'tel:+918861932535',
      delay: 0.2,
    },
    {
      icon: MapPin,
      label: 'Location',
      color: 'bg-slate-900 hover:bg-slate-800',
      href: '#contact',
      delay: 0.3,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[2000] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.label}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: action.delay, type: 'spring', stiffness: 260, damping: 20 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: action.delay + 0.1 }}
                    className="bg-white px-4 py-2 rounded-full shadow-lg text-sm font-bold text-slate-900 whitespace-nowrap"
                  >
                    {action.label}
                  </motion.span>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-14 h-14 ${action.color} rounded-full shadow-2xl flex items-center justify-center text-white transition-colors`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse effect when closed */}
      {!isOpen && (
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16 bg-blue-600 rounded-full -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
}
