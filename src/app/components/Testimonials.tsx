import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'Dental Implants',
    rating: 5,
    text: 'Outstanding service! Dr. Bashishta made my implant procedure completely painless. The clinic is spotlessly clean and the staff is incredibly professional.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
  },
  {
    name: 'Rajesh Kumar',
    treatment: 'Root Canal Treatment',
    rating: 5,
    text: 'I was terrified of root canals, but Dr. Ankita Reddy was so gentle and reassuring. The latest technology they use made it absolutely painless!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
  },
  {
    name: 'Meera Reddy',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'Amazing results in just one visit! My smile has never looked better. The team at Nagu Dental truly cares about their patients.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="text-xs font-black text-blue-700 uppercase tracking-widest">
              Patient Reviews
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl font-extrabold text-slate-900 tracking-tighter mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500"
          >
            Real experiences from real people
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[40px] shadow-lg hover:shadow-2xl transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
