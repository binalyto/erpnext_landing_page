import { motion } from 'framer-motion';
import { TrendingDown, Eye, Brain, ArrowUpRight } from 'lucide-react';

const metrics = [
  {
    value: '60%',
    suffix: '',
    label: 'Reduction in Manual Work',
    desc: 'Automation eliminates repetitive data entry and follow-up tasks across every department.',
    icon: <TrendingDown size={18} />,
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    value: 'Real-',
    suffix: 'Time',
    label: 'Business Visibility',
    desc: 'Live dashboards give leadership and team leads instant insight into every KPI.',
    icon: <Eye size={18} />,
    color: 'from-purple-500 to-blue-500',
    glow: 'shadow-purple-500/20',
  },
  {
    value: '3x',
    suffix: '',
    label: 'Faster Decision-Making',
    desc: 'AI-powered insights surface the right data at the right time — no more hunting through reports.',
    icon: <Brain size={18} />,
    color: 'from-cyan-500 to-green-500',
    glow: 'shadow-cyan-500/20',
  },
  {
    value: '∞',
    suffix: '',
    label: 'Scalable Growth',
    desc: 'ERPNext grows with you — from 10 to 10,000 users without re-platforming.',
    icon: <ArrowUpRight size={18} />,
    color: 'from-green-500 to-teal-500',
    glow: 'shadow-green-500/20',
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#07071a] to-[#050510] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/6 via-purple-600/6 to-cyan-600/6 rounded-full blur-[100px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 justify-center">Outcomes</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            Results That{' '}
            <span className="gradient-text">Move the Needle</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our clients don't just get an ERP — they get a competitive advantage
            built into their daily operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`card-glass rounded-2xl p-7 text-center group cursor-default shadow-lg ${m.glow}`}
            >
              {/* Big number */}
              <div className={`text-5xl sm:text-6xl font-extrabold bg-gradient-to-br ${m.color} bg-clip-text text-transparent mb-1 leading-none`}>
                {m.value}
                <span className="text-3xl">{m.suffix}</span>
              </div>

              <div className="text-white font-semibold text-sm mb-3 mt-2">{m.label}</div>

              <div className="w-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto mb-3" />

              <p className="text-slate-500 text-xs leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
