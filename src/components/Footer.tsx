import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  GithubIcon,
  Linkedin01Icon,
  Location01Icon,
  Mail01Icon,
  TelegramIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import MotionSection, { itemVariants } from "./MotionSection";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Workflows", "Automation", "Integrations", "Analytics"],
    },
    {
      title: "Company",
      links: ["About", "Customers", "Careers", "Contact"],
    },
  ];

  return (
    <MotionSection
      id="contact"
      className="w-screen bg-foreground text-background mt-20 rounded-t-[2rem] sm:rounded-t-[3rem]"
    >
      <footer className="cont py-10 sm:py-14">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
        >
          <div className="flex flex-col gap-6">
            <div className="w-fit rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm font-semibold text-secondary">
              Ready when your team is
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Bring every ticket into one calm, organized workflow.
            </h2>
            <p className="max-w-xl text-sm font-medium leading-relaxed text-background/70 sm:text-base">
              Amber keeps your requests, updates, and team decisions in motion
              without letting the work scatter.
            </p>
          </div>

          <motion.a
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            href="mailto:oyenekantomiwa2@gmail.com"
            className="flex w-full items-center justify-between gap-4 rounded-3xl border border-background/15 bg-background p-5 text-foreground shadow-2xl lg:max-w-sm"
          >
            <div>
              <p className="text-sm font-semibold text-foreground/50">
                Start a conversation
              </p>
              <p className="text-lg font-bold">oyenekantomiwa2@gmail.com</p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-background">
              <HugeiconsIcon icon={TelegramIcon} size={20} strokeWidth={2} />
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 gap-8 border-y border-background/10 py-8 md:grid-cols-[1fr_1fr_1fr]"
        >
          <div>
            <a href="#home" className="text-3xl font-bold tracking-widest">
              amb
            </a>
            <p className="mt-4 max-w-xs text-sm font-medium text-background/60">
              Autonomous ticket management for teams that like their work clear,
              quick, and a little less chaotic.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-bold uppercase text-background/40">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-background/75 transition-colors hover:text-secondary"
                    >
                      {link}
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={14}
                        strokeWidth={2}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-3 text-sm font-semibold text-background/60 sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={2} />
              oyenekantomiwa2@gmail.com
            </span>
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={2} />
              Built for modern teams
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[GithubIcon, Linkedin01Icon].map((icon, index) => (
              <a
                key={index}
                href="#contact"
                className="grid size-11 place-items-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-secondary hover:text-secondary"
                aria-label={index === 0 ? "Github" : "LinkedIn"}
              >
                <HugeiconsIcon icon={icon} size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </motion.div>
      </footer>
    </MotionSection>
  );
};

export default Footer;
