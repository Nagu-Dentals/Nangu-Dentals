import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 border-b border-white/5 pb-24">
        <div className="col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tighter"
          >
            NAGU DENTAL.
          </motion.div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Bengaluru's premier advance multi-speciality clinic focusing on surgical
            excellence and patient comfort.
          </p>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918861932535"
              className="w-12 h-12 bg-[#25D366] rounded-2xl flex items-center justify-center hover:bg-[#1ea952] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="space-y-8">
          <h6 className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
            1st Branch
          </h6>
          <p className="text-slate-500 text-xs leading-relaxed">
            #10/2, 1st Floor, Chikkathimme Gowdru complex,
            <br />
            Hegganahalli Cross, Opp. Suresh Hospital,
            <br />
            Bengaluru, Karnataka 560091
          </p>
        </div>

        <div className="space-y-8">
          <h6 className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
            2nd Branch
          </h6>
          <p className="text-slate-500 text-xs leading-relaxed">
            #73/1, KTG College Road,
            <br />
            Near Shree Vidya Vruddhi Mandira School,
            <br />
            Srigandha Nagar, Bengaluru 560091
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6 max-w-7xl mx-auto">
        <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.4em]">
          © 2026 Nagu Dental Clinic | All Rights Reserved
        </p>
        <div className="flex gap-8 text-[9px] font-black text-slate-400 uppercase tracking-widest">
          <a href="#about" className="hover:text-white transition-colors">
            Our Team
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Specialties
          </a>
          <a href="tel:+918861932535" className="hover:text-white transition-colors">
            +91 88619 32535
          </a>
        </div>
      </div>
    </footer>
  );
}
