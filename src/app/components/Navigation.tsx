import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface NavigationProps {
  onMapClick: () => void;
}

export function Navigation({ onMapClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#articles', label: 'Articles' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-[1000] py-3 px-6 md:px-16 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-100' : 'bg-white/60 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="flex items-center gap-4">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-blue-600 transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <StatusBadge />
        <a
          href="#booking"
          className="bg-slate-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 hover:scale-105 transition-all duration-200 active:scale-95"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-900 p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl lg:hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-wide text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function StatusBadge() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Open from 9 AM to 10 PM
      setIsOpen(hour >= 9 && hour < 22);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
      <div
        className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}
      ></div>
      <span className="text-[9px] font-black uppercase text-slate-400">
        {isOpen ? 'Open Now' : 'Closed'}
      </span>
    </div>
  );
}