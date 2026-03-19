import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isInView: boolean;
}

function Counter({ end, duration = 2, suffix = '', isInView }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Patients', color: 'from-blue-600 to-blue-400' },
  { value: 10, suffix: '+', label: 'Years Experience', color: 'from-purple-600 to-purple-400' },
  { value: 15, suffix: '+', label: 'Dental Services', color: 'from-green-600 to-green-400' },
  { value: 2, suffix: '', label: 'Modern Clinics', color: 'from-orange-600 to-orange-400' },
];

export function Stats() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            className={`text-center p-8 rounded-[40px] bg-gradient-to-br ${stat.color} text-white shadow-lg hover:shadow-2xl transition-all`}
          >
            <div className="text-4xl md:text-5xl font-black mb-2">
              <Counter end={stat.value} suffix={stat.suffix} isInView={isInView} />
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider opacity-90">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
