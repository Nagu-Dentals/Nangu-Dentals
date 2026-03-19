import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-48 pb-20 px-6 md:px-16 lg:flex items-center gap-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">
            Way For Healthy Smile...
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-7xl md:text-8xl font-extrabold text-slate-900 leading-[0.85] tracking-tighter"
        >
          Advance <br />
          <span className="text-[#0085cc] bg-gradient-to-r from-[#0085cc] to-blue-400 bg-clip-text text-transparent">
            Dental Care.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-500 text-lg leading-relaxed max-w-lg italic"
        >
          "Your smile is our priority. Experience the difference of elite multi-speciality care."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 pt-4"
        >
          <a
            href="#booking"
            className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl hover:bg-slate-800 hover:scale-105 transition-all duration-200 active:scale-95"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all duration-200"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 mt-16 lg:mt-0 relative"
      >
        <div className="relative h-[550px] rounded-[60px] border-[16px] border-white shadow-2xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
            alt="Dental Clinic Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100"
        >
          <div className="text-3xl font-black text-blue-600">10+</div>
          <div className="text-xs font-bold text-slate-400 uppercase">Years Experience</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -top-6 -right-6 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl"
        >
          <div className="text-3xl font-black">2</div>
          <div className="text-xs font-bold text-slate-400 uppercase">Elite Branches</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
