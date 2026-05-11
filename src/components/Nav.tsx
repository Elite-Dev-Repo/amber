import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-5 z-[100] flex w-[92%] md:w-[65%] mt-5 bg-white/80 backdrop-blur rounded-full min-h-15 shadow-lg mx-auto justify-between md:justify-center items-center gap-4 md:gap-12 px-5 md:px-0"
      >
        <a href="#home">
          <h1 className="font-bold text-2xl tracking-widest ">
            am<span className="">b</span>
          </h1>
        </a>

        <ul className="hidden md:flex gap-6 ml-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold transition-colors hover:text-secondary"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full font-bold">
          Get Started
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden grid size-10 place-items-center rounded-full border border-foreground/10 bg-background transition-all hover:bg-foreground/5 active:scale-95"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <HugeiconsIcon
            icon={isOpen ? Cancel01Icon : Menu01Icon}
            size={20}
            strokeWidth={2}
          />
        </button>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-24 z-[90] md:hidden overflow-hidden rounded-[2.5rem] bg-white/95 backdrop-blur-xl border border-foreground/10 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
          >
            <motion.div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-foreground/80 transition-colors hover:text-secondary"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <button className="w-full bg-primary text-primary-foreground py-5 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
