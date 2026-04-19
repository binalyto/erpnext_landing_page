import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is ERPNext suitable for my business size?',
    a: 'ERPNext scales from small businesses with 5 employees to large enterprises with thousands of users. Whether you\'re a 10-person team or a 500-employee organisation, we tailor the implementation to match your current size — and build it to grow with you.',
  },
  {
    q: 'How long does an ERPNext implementation take?',
    a: 'A standard implementation typically takes 8–14 weeks depending on complexity, number of modules, customisations, and data migration scope. We provide a detailed project timeline after the discovery phase. Urgent deployments with phased rollouts can be faster.',
  },
  {
    q: 'Can you migrate our data from our current system?',
    a: 'Yes. We handle data migration from any source — Excel spreadsheets, QuickBooks, Tally, SAP, NetSuite, Odoo, or any legacy system. Our migration process includes data mapping, cleaning, validation, and a test run before the final cutover.',
  },
  {
    q: 'What kind of support do you provide after go-live?',
    a: 'We offer flexible post-launch support plans including dedicated support hours, bug fixes, feature enhancements, user training sessions, and system health monitoring. We don\'t disappear after handover — you get a long-term partner.',
  },
  {
    q: 'What exactly is the AI layer you add on top of ERPNext?',
    a: 'Our AI layer is a set of intelligent enhancements built on top of your ERPNext data — including AI chatbots for ERP queries, demand/inventory forecasting, financial anomaly detection, automated reporting, and smart workflow triggers. It turns your ERP from a record-keeping system into a decision-making engine.',
  },
  {
    q: 'Do you offer ERPNext hosting and infrastructure management?',
    a: 'Yes. We offer managed hosting on cloud infrastructure (AWS, GCP, Azure, or dedicated VPS), including automated backups, security updates, SSL, performance monitoring, and 99.9% uptime SLAs.',
  },
  {
    q: 'What if we need a feature that ERPNext doesn\'t have out of the box?',
    a: 'ERPNext is highly customisable. We build custom doctypes, scripts, workflows, reports, and integrations to add capabilities your specific business needs. If it\'s logical, we can build it.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="border border-white/7 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/2 transition-colors duration-200"
      >
        <span className="text-white text-sm font-medium">{faq.q}</span>
        <ChevronDown
          size={16}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <div className="w-full h-px bg-white/5 mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 justify-center">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know before we get started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Still have questions?{' '}
          <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
            Talk to our team →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
