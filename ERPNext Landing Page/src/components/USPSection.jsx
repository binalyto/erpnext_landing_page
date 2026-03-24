import { motion } from 'framer-motion';
import { Brain, Target, Puzzle, BarChart2, Shield } from 'lucide-react';

const usps = [
  {
    icon: <Brain size={24} />,
    title: 'AI-First Approach',
    desc: 'Every implementation is designed with AI augmentation from day one — not bolted on later.',
    gradient: 'from-blue-500/20 to-blue-500/5',
    border: 'hover:border-blue-500/40',
    glow: 'group-hover:glow-blue',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Target size={24} />,
    title: 'Business-Centric Implementation',
    desc: 'We map your processes first, then configure ERPNext around your reality — not the other way.',
    gradient: 'from-purple-500/20 to-purple-500/5',
    border: 'hover:border-purple-500/40',
    glow: 'group-hover:glow-purple',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: <Puzzle size={24} />,
    title: 'Custom Integrations',
    desc: 'Connect ERPNext to your existing tools — eCommerce, payments, logistics, or any third-party API.',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
    border: 'hover:border-cyan-500/40',
    glow: 'group-hover:glow-cyan',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'Data & Analytics Expertise',
    desc: 'We build dashboards and analytics pipelines so your leadership team always has the full picture.',
    gradient: 'from-green-500/20 to-green-500/5',
    border: 'hover:border-green-500/40',
    glow: 'group-hover:shadow-green-500/30',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: <Shield size={24} />,
    title: 'End-to-End Ownership',
    desc: 'From discovery to go-live and beyond — we own the entire delivery and never disappear after launch.',
    gradient: 'from-rose-500/20 to-rose-500/5',
    border: 'hover:border-rose-500/40',
    glow: 'group-hover:shadow-rose-500/30',
    iconBg: 'bg-rose-500/20',
    iconColor: 'text-rose-400',
  },
];

export default function USPSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 justify-center">Why Binalyto</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            What Makes Us{' '}
            <span className="gradient-text">Different</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We're not a generic IT firm. We're a business transformation partner
            obsessed with outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group card-glass rounded-2xl border border-white/7 ${usp.border} bg-gradient-to-b ${usp.gradient} p-6 flex flex-col transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-xl ${usp.iconBg} ${usp.iconColor} flex items-center justify-center mb-5`}>
                {usp.icon}
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-3">
                {usp.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
