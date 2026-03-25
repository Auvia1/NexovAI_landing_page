import { motion } from "motion/react";
import { ArrowRight, BarChart3, Clock3, MessageSquare, Phone, PhoneCall, Route } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Phone,
      title: "AI Call Handling",
      description: "Multilingual support in 15+ Indian languages. Seamless transitions from Hindi to English or regional dialects.",
      badge: "MULTILINGUAL",
    },
    {
      icon: Clock3,
      title: "Automated Booking",
      description: "Deep integration with top EMR/HMS systems. Real-time slot locking and rescheduling without human intervention.",
      badge: "SYNC-READY",
    },
    {
      icon: Route,
      title: "Smart Call Routing",
      description: "Intelligently detects emergencies and routes them to a human doctor instantly while handling routine tasks automatically.",
      badge: "SMART TRIAGE",
    },
    {
      icon: PhoneCall,
      title: "Missed Call Recovery",
      description: "Automatically calls back any missed numbers within 60 seconds to ensure no patient lead is ever lost.",
      badge: "CONVERSION",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Bot",
      description: "WhatsApp bot for patient chat, appointment booking, follow-ups, confirmation notifications, reminders, and payment integration.",
      badge: "ENGAGEMENT",
    },
    {
      icon: BarChart3,
      title: "Clinic Analytics",
      description: "Understand call patterns, peak times, and appointment trends with our intuitive management dashboard.",
      badge: "REPORTS",
    },
  ];

  return (
    <section id="features" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Precision Engineering for Modern Clinics
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg md:text-[1.7rem] md:leading-[1.45]">
              Beyond a simple bot—a comprehensive operational engine.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 transition-colors hover:text-blue-800 sm:text-xl"
          >
            View all features
            <ArrowRight className="size-5" />
          </a>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-emerald-200 hover:shadow-lg sm:min-h-[300px] sm:p-8"
            >
              <div className="mb-7 inline-flex rounded-2xl bg-blue-50 p-3.5 transition-transform group-hover:scale-110">
                <feature.icon className="size-5 text-blue-700" />
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-[1.22] text-slate-900 sm:text-[2.05rem]">{feature.title}</h3>
              <p className="mb-7 text-base leading-relaxed text-slate-600 sm:text-[1.1rem]">{feature.description}</p>
              <span className="mt-auto inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wide text-emerald-700">
                {feature.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
