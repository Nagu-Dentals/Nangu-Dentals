import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Why Sterilization Matters?',
    description: 'Understanding ISO clinical standards in dentistry.',
    image: 'https://images.unsplash.com/photo-1593054325492-4914a806c9a3?auto=format&fit=crop&w=400',
    readTime: '3 Min Read',
  },
  {
    title: 'The Benefits of Dental Implants',
    description: 'How modern implants can restore your smile permanently.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400',
    readTime: '5 Min Read',
  },
  {
    title: 'Oral Hygiene Tips for Kids',
    description: 'Essential dental care practices for young children.',
    image: 'https://images.unsplash.com/photo-1609558142945-cbb0b5c5c2e2?auto=format&fit=crop&w=400',
    readTime: '4 Min Read',
  },
];

export function Articles() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="articles" ref={ref} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="text-5xl font-extrabold tracking-tighter text-slate-900"
          >
            Dental Insights
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            href="#"
            className="text-xs font-black uppercase text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
          >
            View Blog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-64 rounded-[40px] overflow-hidden mb-6 bg-slate-100">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h4>
              <p className="text-slate-500 text-sm mb-4">{article.description}</p>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3 h-3" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {article.readTime}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
