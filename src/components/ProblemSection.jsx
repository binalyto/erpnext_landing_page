import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  DatabaseZap, Eye, ClipboardX, AlertTriangle, BarChart3, Network
} from 'lucide-react';

const problems = [
  {
    icon: <DatabaseZap size={22} />,
    title: 'Scattered Data',
    desc: 'Your data lives in spreadsheets, emails, and siloed apps — with no single source of truth.',
    color: 'from-red-500/20 to-red-500/5',
    border: 'border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: <Eye size={22} />,
    title: 'No Real-Time Visibility',
    desc: 'You\'re making decisions based on last week\'s report instead of live business data.',
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: <ClipboardX size={22} />,
    title: 'Endless Manual Work',
    desc: 'Your team wastes hours on data entry, copy-paste tasks, and repetitive processes daily.',
    color: 'from-yellow-500/20 to-yellow-500/5',
    border: 'border-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Costly Errors',
    desc: 'Manual processes breed mistakes — wrong invoices, stock mismatches, compliance risks.',
    color: 'from-red-600/20 to-red-600/5',
    border: 'border-red-600/20',
    iconColor: 'text-red-500',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Poor Decision-Making',
    desc: 'Without unified insights, leadership is flying blind — guessing instead of knowing.',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: <Network size={22} />,
    title: 'Disconnected Teams',
    desc: 'Finance, HR, ops and sales work in isolation — causing delays, miscommunication, and missed goals.',
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 justify-center">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            Is Your Business Still{' '}
            <span className="text-red-400">Running on Chaos?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Growing businesses hit the same operational walls. Recognise any of these?
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className={`rounded-2xl border ${p.border} bg-gradient-to-b ${p.color} p-6 card-glass group cursor-default`}
            >
              <div className={`${p.iconColor} mb-4 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center`}>
                {p.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20">
            <p className="text-lg sm:text-xl font-semibold text-white">
              You don't need more tools.{' '}
              <span className="gradient-text">You need a unified intelligent system.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
