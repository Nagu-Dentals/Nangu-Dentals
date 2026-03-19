import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, Sparkles, Phone, Mail } from 'lucide-react';

interface BookingFormData {
  fullName: string;
  phone: string;
  branch: string;
  date: string;
}

export function Booking() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data);
    setFormData(data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData(null);
      reset();
    }, 8000);
  };

  return (
    <section id="booking" ref={ref} className="py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-[60px] p-12 md:p-20 relative overflow-hidden text-white">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative z-10 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Book An Appointment
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm italic">
            <Clock className="w-4 h-4" />
            <p>"Open Everyday | 9:00 AM - 10:00 PM"</p>
          </div>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 text-center py-12"
          >
            {/* Success Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative mx-auto w-24 h-24 mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-green-400 rounded-full"
              />
              <div className="relative w-full h-full bg-green-400 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h3 className="text-3xl md:text-4xl font-black">Thank You!</h3>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-xl font-bold mb-6 text-green-400">
                Your Appointment Request Has Been Received
              </p>
            </motion.div>

            {/* Booking Details */}
            {formData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/10"
              >
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                  Appointment Details
                </h4>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">👤</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Name</p>
                      <p className="font-bold">{formData.fullName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Branch</p>
                      <p className="font-bold">{formData.branch}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Date</p>
                      <p className="font-bold">
                        {new Date(formData.date).toLocaleDateString('en-IN', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <p className="text-slate-300 leading-relaxed max-w-md mx-auto">
                Our team will contact you within <span className="font-bold text-blue-400">24 hours</span> to confirm your appointment time and answer any questions you may have.
              </p>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-4">Need immediate assistance?</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="tel:+918861932535"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/918861932535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea952] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors"
                  >
                    <span>💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Auto-close indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 8, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-blue-400 to-green-400"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">Returning to form...</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 gap-6 relative z-10"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register('fullName', { required: 'Name is required' })}
                className={`w-full bg-white/5 border ${
                  errors.fullName ? 'border-red-500' : 'border-white/10'
                } p-4 rounded-2xl focus:border-blue-500 outline-none transition-all`}
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number',
                  },
                })}
                className={`w-full bg-white/5 border ${
                  errors.phone ? 'border-red-500' : 'border-white/10'
                } p-4 rounded-2xl focus:border-blue-500 outline-none transition-all`}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                {...register('branch', { required: 'Please select a branch' })}
                className={`w-full bg-white/5 border ${
                  errors.branch ? 'border-red-500' : 'border-white/10'
                } p-4 pl-12 rounded-2xl outline-none appearance-none cursor-pointer hover:border-blue-500 transition-all`}
              >
                <option value="" className="text-slate-900">
                  Select Branch
                </option>
                <option value="Hegganahalli" className="text-slate-900">
                  Hegganahalli
                </option>
                <option value="Srigandha Nagar" className="text-slate-900">
                  Srigandha Nagar
                </option>
              </select>
              {errors.branch && (
                <p className="text-red-400 text-xs mt-1">{errors.branch.message}</p>
              )}
            </div>

            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="date"
                {...register('date', { required: 'Please select a date' })}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full bg-white/5 border ${
                  errors.date ? 'border-red-500' : 'border-white/10'
                } p-4 pl-12 rounded-2xl outline-none hover:border-blue-500 transition-all`}
              />
              {errors.date && (
                <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-colors"
            >
              Confirm Request
            </motion.button>
          </motion.form>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="relative z-10 mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4 justify-center text-sm text-slate-400"
        >
          <span>📞 +91 88619 32535</span>
          <span>•</span>
          <span>📧 nagudentals@gmail.com</span>
        </motion.div>
      </div>
    </section>
  );
}