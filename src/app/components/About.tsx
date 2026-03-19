import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tighter mb-6">
            About Our Clinic
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-6">
            Nagu Dental is an <b>Advance Multi-Speciality Dental Clinic</b> led by{' '}
            <b>Dr. Bashishta (B.D.S)</b> and <b>Dr. Ankita Reddy (B.D.S)</b>. We provide a
            wide range of dental services using the latest technology and highest
            sterilization standards.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed mb-8">
            Our commitment to excellence and patient care has made us one of Bengaluru's most
            trusted dental care providers.
          </p>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex-1"
            >
              <Award className="w-8 h-8 text-blue-600 mb-2" />
              <span className="block text-3xl font-black text-blue-600">10+</span>
              <span className="text-xs font-bold text-slate-400 uppercase">Years Exp</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex-1"
            >
              <Users className="w-8 h-8 text-slate-900 mb-2" />
              <span className="block text-3xl font-black text-slate-900">2</span>
              <span className="text-xs font-bold text-slate-400 uppercase">Locations</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 grid grid-cols-2 gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400"
              alt="Dental Equipment"
              className="rounded-3xl shadow-lg mt-8 w-full h-64 object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400"
              alt="Dental Care"
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
