import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Binalyto didn't just implement ERPNext — they transformed how our entire business operates. The AI layer they added for inventory forecasting alone saved us thousands every month.",
    name: 'Sarah M.',
    role: 'CEO, Distribution Company',
    avatar: 'S',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    quote: "We tried implementing ERPNext ourselves and failed. Binalyto came in, understood our manufacturing complexity, and delivered a system our team actually uses every day.",
    name: 'Raj K.',
    role: 'Operations Director, Manufacturing',
    avatar: 'R',
    color: 'from-purple-500 to-pink-500',
  },
  {
    quote: "The real-time visibility we now have across our 5 stores is incredible. Our finance team closes books in 2 days instead of 2 weeks. Worth every penny.",
    name: 'Aisha T.',
    role: 'CFO, Retail Chain',
    avatar: 'A',
    color: 'from-green-500 to-teal-500',
  },
  {
    quote: "From day one, the Binalyto team felt like part of our company. They understood our workflows, pushed back on bad ideas (politely!), and delivered exactly what we needed.",
    name: 'Michael O.',
    role: 'Head of IT, Services Firm',
    avatar: 'M',
    color: 'from-orange-500 to-yellow-500',
  },
];

const clientLogos = [
  'TechCorp', 'RetailX', 'ManuFlow', 'DistroPlus', 'EduGroup', 'ServeCo',
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 justify-center">Social Proof</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            Trusted by{' '}
            <span className="gradient-text">Growing Businesses</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-glass rounded-2xl p-6 flex flex-col"
            >
              <Quote size={18} className="text-blue-400/50 mb-4 flex-shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-center text-slate-600 text-xs font-medium tracking-widest uppercase mb-6">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-5 py-2.5 rounded-lg card-glass border border-white/5 text-slate-600 text-sm font-semibold tracking-wide hover:text-slate-400 hover:border-white/10 transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
