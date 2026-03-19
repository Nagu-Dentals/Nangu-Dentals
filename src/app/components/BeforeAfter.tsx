import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400',
    after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=400',
    treatment: 'Teeth Whitening',
    duration: '1 Visit',
  },
  {
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400',
    after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400',
    treatment: 'Dental Implants',
    duration: '3 Months',
  },
  {
    before: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400',
    after: 'https://images.unsplash.com/photo-1609558142945-cbb0b5c5c2e2?auto=format&fit=crop&w=400',
    treatment: 'Orthodontic Braces',
    duration: '18 Months',
  },
];

export function BeforeAfter() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentIndex];

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6"
          >
            <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
              Transformation Gallery
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl font-extrabold tracking-tighter mb-4"
          >
            Before & After Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400"
          >
            Real transformations from our patients
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <motion.div
              key={`before-${currentIndex}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -top-4 left-6 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase z-10">
                Before
              </div>
              <div className="rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={currentCase.before}
                  alt="Before treatment"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              key={`after-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -top-4 left-6 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase z-10">
                After
              </div>
              <div className="rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={currentCase.after}
                  alt="After treatment"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Treatment Info */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-2">{currentCase.treatment}</h3>
            <p className="text-slate-400">Treatment Duration: {currentCase.duration}</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCase}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <div className="flex items-center gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCase}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
