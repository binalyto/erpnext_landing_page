import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const modules = [
  { icon: '💰', label: 'Finance & Accounting', desc: 'AP/AR, GL, budgeting, real-time P&L' },
  { icon: '📦', label: 'Inventory & Warehouse', desc: 'Multi-warehouse, FIFO/LIFO, reorder alerts' },
  { icon: '🤝', label: 'CRM & Sales', desc: 'Pipeline, quotes, orders, customer 360' },
  { icon: '👥', label: 'HR & Payroll', desc: 'Recruitment, leave, payroll, performance' },
  { icon: '⚙️', label: 'Manufacturing', desc: 'BOM, work orders, production planning' },
  { icon: '📊', label: 'Projects', desc: 'Timelines, tasks, budgets, resource planning' },
];

const benefits = [
  'One platform for your entire business',
  'Open-source — no vendor lock-in',
  'Fully customizable to your workflows',
  'Built-in compliance and audit trails',
  'Scales from startup to enterprise',
];

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#070718] to-[#050510] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 justify-center">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            ERPNext: Your Entire Business,{' '}
            <span className="gradient-text">One Unified System</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ERPNext is a world-class, open-source ERP platform that connects every
            department — finance, inventory, HR, manufacturing, and more — into a
            single intelligent system.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Description + benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="card-glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why ERPNext?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Unlike expensive proprietary ERPs, ERPNext is built for modern
                businesses — open, flexible, and powerful. It replaces 10+ disconnected
                tools with one cohesive platform that grows with you.
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI highlight teaser */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm">
                  🤖
                </div>
                <span className="text-white font-semibold text-sm">Binalyto AI Layer</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We take ERPNext further — adding AI assistants, predictive analytics,
                and intelligent automation on top of your ERP to make it truly smart.
              </p>
            </div>
          </motion.div>

          {/* Right: Module grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-slate-300 mb-5">
              Modules We Implement
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                  className="card-glass rounded-xl p-4 group cursor-default"
                >
                  <div className="text-2xl mb-3">{mod.icon}</div>
                  <div className="text-white text-sm font-semibold mb-1">{mod.label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{mod.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-slate-400 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              +15 more modules available including E-commerce, POS, Quality, and Assets
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
