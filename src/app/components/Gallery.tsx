import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600',
    alt: 'Dental Clinic',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800',
    alt: 'Modern Equipment',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600',
    alt: 'Treatment Room',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600',
    alt: 'Dental Care',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600',
    alt: 'Professional Tools',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600',
    alt: 'Patient Care',
    span: 'col-span-2',
  },
];

export function Gallery() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="gallery" ref={ref} className="py-32 px-6 md:px-16">
      <div className="text-center mb-20 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-extrabold tracking-tighter text-slate-900"
        >
          Clinical Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm uppercase font-bold tracking-widest"
        >
          A glimpse of our world-class environment
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`${image.span} bg-slate-100 rounded-[40px] overflow-hidden group cursor-pointer h-64 md:h-80`}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
