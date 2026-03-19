import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept most major dental insurance plans. Please contact us to verify if your specific plan is covered.',
  },
  {
    question: 'Is the treatment really painless?',
    answer: 'We use the latest rotary and laser technology, along with modern anesthesia techniques to ensure minimal to no discomfort during procedures.',
  },
  {
    question: 'What are your sterilization standards?',
    answer: 'We follow ISO-standard clinical protocols with hospital-grade sterilization. All instruments are properly sanitized and sealed before each use.',
  },
  {
    question: 'Do you offer emergency dental services?',
    answer: 'Yes, we provide emergency dental services. Please call us immediately at +91 88619 32535 for urgent dental issues.',
  },
  {
    question: 'How long does a typical dental implant procedure take?',
    answer: 'The initial implant placement takes 1-2 hours. The complete process including healing and crown placement typically takes 3-6 months.',
  },
  {
    question: 'Do you treat children?',
    answer: 'Absolutely! We have specialized pediatric dental care with a gentle approach that makes children comfortable during their visit.',
  },
];

export function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black text-blue-700 uppercase tracking-widest">
              Got Questions?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl font-extrabold text-slate-900 tracking-tighter"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-slate-900 pr-4 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center p-8 bg-blue-50 rounded-[40px] border border-blue-100"
        >
          <p className="text-slate-700 mb-4">Still have questions?</p>
          <a
            href="tel:+918861932535"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            Call Us: +91 88619 32535
          </a>
        </motion.div>
      </div>
    </section>
  );
}
