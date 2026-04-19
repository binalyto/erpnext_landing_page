import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Rocket, Wrench, ArrowLeftRight, Bot, Link2, TrendingUp, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: <Rocket size={20} />,
    title: 'ERPNext Implementation',
    short: 'Full-cycle ERP deployment tailored to your business.',
    detail: 'We handle everything from requirements gathering, system design, configuration, and go-live. Whether you\'re starting fresh or replacing a legacy system, we ensure a smooth, on-time deployment.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Customization',
    short: 'Tailor ERPNext to match your unique workflows.',
    detail: 'Custom doctypes, fields, scripts, and print formats. We bend ERPNext to your business — not the other way around — ensuring your team actually adopts and uses the system.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: <ArrowLeftRight size={20} />,
    title: 'Data Migration',
    short: 'Seamless transition from your current system.',
    detail: 'We migrate your historical data — customers, inventory, transactions, HR records — with precision mapping, cleaning, and validation so nothing is lost in the move.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <Bot size={20} />,
    title: 'AI Integration',
    short: 'Make your ERP think with intelligent AI layers.',
    detail: 'Add AI assistants, predictive analytics, demand forecasting, anomaly detection, and workflow automation on top of ERPNext — turning your ERP into an intelligent decision engine.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: <Link2 size={20} />,
    title: 'Third-Party Integrations',
    short: 'Connect ERPNext to your entire business stack.',
    detail: 'Shopify, WooCommerce, Stripe, Razorpay, Amazon, FedEx, Slack, WhatsApp, custom APIs — we connect your ERP to every tool your team depends on.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Performance Optimization',
    short: 'Speed up and optimize existing ERPNext setups.',
    detail: 'Slow reports, clunky workflows, underutilized modules? We audit your existing ERPNext instance, fix bottlenecks, and unlock the performance you\'re paying for.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: 'Support & Training',
    short: 'Ongoing support and team enablement.',
    detail: 'Post-launch support plans, user training sessions, admin handover, and a dedicated support channel. We stay with you long after go-live.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
];

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`card-glass rounded-2xl border ${service.border} overflow-hidden cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl ${service.bg} ${service.color} flex items-center justify-center flex-shrink-0`}>
              {service.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">{service.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{service.short}</p>
            </div>
          </div>
          <ChevronDown
            size={16}
            className={`text-slate-500 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-400 text-xs leading-relaxed mt-4 pt-4 border-t border-white/5">
                {service.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 justify-center">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            Everything You Need to{' '}
            <span className="gradient-text">Go Live & Grow</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From initial setup to AI-powered automation — we cover the full ERP
            transformation journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
