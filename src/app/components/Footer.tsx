import { motion } from "motion/react";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Security", "Integrations"],
    Company: ["About Us", "Contact Support", "LinkedIn"],
    Legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Nexov
                <span className="text-primary drop-shadow-[0_0_10px_rgba(103,252,198,0.35)]">AI</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed text-slate-600">
              AI receptionist software for hospitals and clinics. Automate patient calls and appointments with
              intelligent voice agents.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/nexovai1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NexovAI LinkedIn"
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-100 hover:text-emerald-600"
              >
                <Linkedin className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/nexovai_pvt_limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NexovAI Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-emerald-100 hover:text-emerald-600"
              >
                <Instagram className="size-5" />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-600">© 2026 NexovAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
