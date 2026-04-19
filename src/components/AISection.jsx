import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Package, MessageSquare, Zap, LineChart } from 'lucide-react';

const aiFeatures = [
  {
    icon: <TrendingUp size={16} />,
    title: 'Financial Insights AI',
    desc: 'Anomaly detection, cash flow forecasting, and smart expense categorization.',
  },
  {
    icon: <Package size={16} />,
    title: 'Inventory Prediction',
    desc: 'AI-powered demand forecasting prevents stockouts and overstocking.',
  },
  {
    icon: <MessageSquare size={16} />,
    title: 'AI Assistants',
    desc: 'Natural language queries on your ERP data — ask questions, get instant answers.',
  },
  {
    icon: <Zap size={16} />,
    title: 'Workflow Automation',
    desc: 'Intelligent triggers and approvals that reduce manual follow-up to near zero.',
  },
  {
    icon: <LineChart size={16} />,
    title: 'Predictive Analytics',
    desc: 'Sales forecasting, churn risk, supplier performance, and operational KPIs.',
  },
  {
    icon: <Sparkles size={16} />,
    title: 'Smart Document Processing',
    desc: 'Auto-extract data from invoices, POs, and receipts — no manual entry.',
  },
];

const nodes = [
  { label: 'Finance AI', x: 50, y: 10, color: '#3b82f6' },
  { label: 'Inventory AI', x: 85, y: 40, color: '#8b5cf6' },
  { label: 'Sales AI', x: 75, y: 80, color: '#06b6d4' },
  { label: 'HR AI', x: 20, y: 80, color: '#10b981' },
  { label: 'Ops AI', x: 10, y: 40, color: '#f59e0b' },
];

export default function AISection() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      {/* Dark background with glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#080820] to-[#050510]" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-4">AI Intelligence Layer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
              Turn ERPNext into an{' '}
              <span className="gradient-text">Intelligent System</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Standard ERP records what happened. Our AI layer predicts what's coming,
              automates what's repetitive, and surfaces insights you'd otherwise miss.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {aiFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-0.5">{f.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <span className="text-xl">🧠</span>
              <span className="text-white font-semibold text-sm italic">
                "Your ERP should think with you."
              </span>
            </motion.div>
          </motion.div>

          {/* Right Visual — AI Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px]">
              {/* SVG connections */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                {nodes.map((node) => (
                  <motion.line
                    key={node.label}
                    x1="190" y1="190"
                    x2={`${node.x}%`} y2={`${node.y}%`}
                    stroke={node.color}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                ))}
                {/* Outer ring */}
                <circle cx="190" cy="190" r="160" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
                <circle cx="190" cy="190" r="100" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
              </svg>

              {/* Center AI node */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], boxShadow: ['0 0 30px rgba(59,130,246,0.3)', '0 0 60px rgba(59,130,246,0.5)', '0 0 30px rgba(59,130,246,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center z-20"
              >
                <span className="text-3xl">🤖</span>
                <span className="text-white text-[9px] font-bold mt-1 tracking-wider">AI ENGINE</span>
              </motion.div>

              {/* Satellite nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: 'backOut' }}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ left: `calc(${node.x}% - 28px)`, top: `calc(${node.y}% - 28px)` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl card-glass flex items-center justify-center text-xs font-semibold text-center px-1"
                    style={{ borderColor: `${node.color}30`, color: node.color }}
                  >
                    <span style={{ fontSize: '9px', lineHeight: '1.2' }}>{node.label}</span>
                  </div>
                </motion.div>
              ))}

              {/* Floating data points */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/60"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
