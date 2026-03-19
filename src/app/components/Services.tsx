import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Root Canal',
    description: 'Painless treatment to save infected teeth.',
    category: 'clinical',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=300',
  },
  {
    title: 'Implants',
    description: 'Permanent solutions for missing teeth.',
    category: 'restoration',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=300',
  },
  {
    title: 'Whitening',
    description: 'Brighten your smile in one visit.',
    category: 'cosmetic',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=300',
  },
  {
    title: 'Ortho Braces',
    description: 'Traditional and clear aligner options.',
    category: 'orthodontic',
    image: 'https://images.unsplash.com/photo-1551601651-261ed073930e?auto=format&fit=crop&w=300',
  },
  {
    title: 'Cleaning',
    description: 'Professional deep cleaning & polishing.',
    category: 'preventive',
    image: 'https://images.unsplash.com/photo-1609558142945-cbb0b5c5c2e2?auto=format&fit=crop&w=300',
  },
  {
    title: 'Crowns & Bridges',
    description: 'Restore damaged or missing teeth.',
    category: 'restoration',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=300',
  },
  {
    title: 'Pediatric Care',
    description: 'Gentle dental care for children.',
    category: 'pediatric',
    image: 'https://images.unsplash.com/photo-1609558142945-cbb0b5c5c2e2?auto=format&fit=crop&w=300',
  },
  {
    title: 'Emergency Care',
    description: 'Immediate treatment for urgent cases.',
    category: 'emergency',
    image: 'https://images.unsplash.com/photo-1629909615957-be38ab0b156b?auto=format&fit=crop&w=300',
  },
];

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 bg-slate-50">
      <div className="px-6 md:px-16 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-extrabold text-slate-900 tracking-tighter"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-500 mt-4"
        >
          Comprehensive dental care tailored to your needs
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white p-6 rounded-[40px] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="h-40 w-full bg-slate-100 rounded-3xl mb-6 overflow-hidden">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 text-slate-900">{service.title}</h3>
            <p className="text-xs text-slate-400 mb-4">{service.description}</p>
            <div className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
              <span className="text-[9px] font-black uppercase tracking-widest">
                {service.category}
              </span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
