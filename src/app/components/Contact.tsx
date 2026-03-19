import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Phone, Mail, MapPin } from 'lucide-react';

const branches = [
  {
    name: 'Branch 01: Hegganahalli',
    address: '#10/2, 1st Floor, Chikkathimme Gowdru complex, Hegganahalli Cross, Opp. Suresh Hospital, Bengaluru, Karnataka 560091',
    shortAddress: 'Opp. Suresh Hospital, Hegganahalli Cross, Bengaluru.',
  },
  {
    name: 'Branch 02: Srigandha Nagar',
    address: '#73/1, KTG College Road, Near Shree Vidya Vruddhi Mandira School, Srigandha Nagar, Bengaluru 560091',
    shortAddress: 'Near KTG College Road, Bengaluru.',
  },
];

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-24 bg-white border-t border-slate-100">
      <div className="px-6 md:px-16 grid lg:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-extrabold tracking-tighter mb-8 text-slate-900">
            Contact Us
          </h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <h6 className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                  Call/WhatsApp
                </h6>
              </div>
              <a
                href="tel:+918861932535"
                className="font-bold text-xl text-slate-900 hover:text-blue-600 transition-colors"
              >
                +91 88619 32535
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <h6 className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                  Email
                </h6>
              </div>
              <a
                href="mailto:nagudentals@gmail.com"
                className="font-bold text-slate-600 hover:text-blue-600 transition-colors"
              >
                nagudentals@gmail.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer pt-4"
            >
              <a
                href="https://wa.me/918861932535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1ea952] transition-colors"
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <h4 className="font-bold text-slate-900">{branch.name}</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{branch.address}</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-black text-blue-600 uppercase tracking-widest hover:text-blue-700"
              >
                Open in Maps →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
