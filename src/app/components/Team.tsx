import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Team() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-64 bg-slate-100 rounded-[40px] overflow-hidden shadow-inner"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600"
                alt="Dental Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-48 bg-blue-600 rounded-[40px] p-8 text-white flex flex-col justify-end"
            >
              <div className="text-4xl font-black">10+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">
                Years Expertise
              </div>
            </motion.div>
          </div>
          <div className="pt-12 space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-48 bg-slate-900 rounded-[40px] p-8 text-white flex flex-col justify-end"
            >
              <div className="text-4xl font-black">2</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">
                Elite Branches
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-64 bg-slate-100 rounded-[40px] overflow-hidden shadow-inner"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&w=600"
                alt="Dental Clinic"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-900">
            Led by Visionary <br />
            <span className="text-blue-600 underline decoration-blue-100 decoration-4">
              Specialists.
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Nagu Dental Clinic is an <strong>Advance Multi-Speciality</strong> center dedicated
            to redefining oral healthcare in Bengaluru. Led by <strong>Dr. Bashishta (B.D.S)</strong>{' '}
            and <strong>Dr. Ankita Reddy (B.D.S)</strong>, our team focuses on surgical precision
            and a gentle touch.
          </p>
          <p className="text-slate-500 leading-relaxed">
            With over a decade of combined experience, our specialists bring expertise in all
            aspects of dentistry, from routine checkups to complex surgical procedures.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <h4 className="font-bold text-slate-900 text-lg">Dr. Bashishta</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Dental Surgeon
              </p>
              <p className="text-xs text-slate-500 mt-2">B.D.S, 10+ Years Experience</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <h4 className="font-bold text-slate-900 text-lg">Dr. Ankita Reddy</h4>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Dental Surgeon
              </p>
              <p className="text-xs text-slate-500 mt-2">B.D.S, Specialized Care</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
