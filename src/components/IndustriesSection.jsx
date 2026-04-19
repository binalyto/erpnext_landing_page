import { motion } from 'framer-motion';

const industries = [
  { icon: '🛒', label: 'eCommerce', desc: 'Orders, inventory sync, returns, and customer management.' },
  { icon: '🏭', label: 'Manufacturing', desc: 'Production planning, BOM, quality control, and supply chain.' },
  { icon: '🚚', label: 'Distribution', desc: 'Multi-warehouse, route planning, and delivery tracking.' },
  { icon: '🏪', label: 'Retail', desc: 'POS, loyalty programs, stock visibility across outlets.' },
  { icon: '🎓', label: 'Education', desc: 'Admissions, fees, HR, and campus operations unified.' },
  { icon: '💼', label: 'Professional Services', desc: 'Projects, billing, resource management, and CRM.' },
  { icon: '🏥', label: 'Healthcare', desc: 'Patient records, billing, inventory, and staff scheduling.' },
  { icon: '🏗️', label: 'Construction', desc: 'Project costing, subcontractors, equipment, and compliance.' },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#060614] to-[#050510] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 justify-center">Industries</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            Built for Your{' '}
            <span className="gradient-text">Industry</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We bring deep domain knowledge to every engagement — your industry's
            challenges are not new to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card-glass rounded-2xl p-6 text-center group cursor-default"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {ind.icon}
              </div>
              <div className="text-white font-semibold text-sm mb-2">{ind.label}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{ind.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
