import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Shield, Sparkles, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Painless Tech',
    description: 'Modern rotary and laser tools for minimal discomfort.',
  },
  {
    icon: Sparkles,
    title: 'High Sterilization',
    description: 'ISO-standard clinical protocols for your safety.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Care',
    description: 'Elite multi-speciality care at accessible pricing.',
  },
  {
    icon: Heart,
    title: 'Compassionate',
    description: 'Gentle touch approach for nervous patients and children.',
  },
];

export function WhyUs() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-slate-900 text-white rounded-[100px] mx-4 my-10">
      <div className="px-6 md:px-16 grid lg:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="space-y-6"
        >
          <div className="text-blue-500 text-xs font-black uppercase tracking-[0.5em]">
            Advantage
          </div>
          <h2 className="text-5xl font-extrabold tracking-tighter">
            Why Choose <br />
            Nagu Dental?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            We don't just treat teeth; we care for smiles with a focus on hygiene, technology,
            and patient comfort.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex gap-6 items-start cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
