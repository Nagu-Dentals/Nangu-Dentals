import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ExternalLink } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const branches = [
  {
    name: 'Hegganahalli',
    description: 'Opp. Suresh Hospital, Main Road',
    address: '#10/2, 1st Floor, Chikkathimme Gowdru complex, Hegganahalli Cross',
    mapsUrl: 'https://maps.google.com',
    color: 'bg-blue-600',
  },
  {
    name: 'Srigandha Nagar',
    description: 'Near KTG College, Srigandha Nagar',
    address: '#73/1, KTG College Road, Near Shree Vidya Vruddhi Mandira School',
    mapsUrl: 'https://maps.google.com',
    color: 'bg-slate-900',
  },
];

export function MapModal({ isOpen, onClose }: MapModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative bg-white w-full max-w-5xl rounded-[60px] p-12 overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-10 right-10 text-slate-300 hover:text-slate-900 transition-colors group"
            >
              <X className="w-8 h-8" />
            </button>

            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tighter">
              Navigate To Branch
            </h2>
            <p className="text-slate-500 mb-12">Choose your preferred location</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {branches.map((branch, index) => (
                <motion.div
                  key={branch.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${branch.color} rounded-2xl flex items-center justify-center`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">{branch.name}</h4>
                  </div>
                  
                  <p className="text-sm text-slate-500 italic mb-2">{branch.description}</p>
                  <p className="text-xs text-slate-400 mb-8">{branch.address}</p>
                  
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${branch.color} text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity`}
                  >
                    Open in Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500">
                Open everyday from <span className="font-bold text-slate-900">9:00 AM - 10:00 PM</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Call us: <a href="tel:+918861932535" className="text-blue-600 hover:underline">+91 88619 32535</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
