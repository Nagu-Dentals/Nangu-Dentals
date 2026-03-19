import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Shield, Award, Clock, CheckCircle2 } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'ISO Certified',
    description: 'International standards',
  },
  {
    icon: Award,
    title: 'Certified Dentists',
    description: 'Expert professionals',
  },
  {
    icon: Clock,
    title: '7 Days Open',
    description: '9 AM - 10 PM',
  },
  {
    icon: CheckCircle2,
    title: 'Guaranteed Results',
    description: 'Quality assured',
  },
];

export function TrustBadges() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 px-6 md:px-16 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{badge.title}</h4>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                {badge.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
