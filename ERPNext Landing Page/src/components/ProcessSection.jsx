import { motion } from 'framer-motion';
import { Search, Lightbulb, Settings2, Database, FlaskConical, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search size={20} />,
    title: 'Discovery',
    desc: 'We deep-dive into your business — processes, pain points, data flows, and team structure. No assumptions.',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    icon: <Lightbulb size={20} />,
    title: 'Solution Design',
    desc: 'We architect your ERPNext setup, define customizations, integration points, and the AI layer strategy.',
    duration: '1 week',
  },
  {
    number: '03',
    icon: <Settings2 size={20} />,
    title: 'Setup & Customization',
    desc: 'We configure, develop, and test your ERPNext environment with all custom workflows and integrations.',
    duration: '4–8 weeks',
  },
  {
    number: '04',
    icon: <Database size={20} />,
    title: 'Data Migration',
    desc: 'Clean, map, and migrate all your historical data. We validate every record before it enters the new system.',
    duration: '1–2 weeks',
  },
  {
    number: '05',
    icon: <FlaskConical size={20} />,
    title: 'Testing & Training',
    desc: 'User acceptance testing, performance checks, and hands-on training for your team — until everyone is confident.',
    duration: '1–2 weeks',
  },
  {
    number: '06',
    icon: <Rocket size={20} />,
    title: 'Go-Live & Support',
    desc: 'Managed go-live with us by your side. Followed by ongoing support, monitoring, and continuous improvement.',
    duration: 'Ongoing',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 justify-center">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
            Proven Delivery,{' '}
            <span className="gradient-text">Every Time</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our structured 6-step methodology minimises risk and maximises adoption
            — from kickoff to a system your team loves using.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-10 left-[8.33%] right-[8.33%] h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Step indicator */}
                <div className="relative mb-5 z-10">
                  <div className="w-20 h-20 rounded-2xl card-glass border border-blue-500/20 flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-blue-500/10 to-purple-500/5">
                    <div className="text-blue-400">{step.icon}</div>
                    <span className="text-slate-600 text-[9px] font-bold tracking-widest">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3 lg:px-1">{step.desc}</p>

                <span className="inline-flex items-center gap-1 text-[10px] text-blue-400/70 font-medium">
                  <span className="w-1 h-1 rounded-full bg-blue-400/50" />
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-sm px-8 py-3 relative z-10">
            <span className="relative z-10">Start Your Journey</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
