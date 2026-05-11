import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import faq from "../assets/faq.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, MinusSignIcon } from "@hugeicons/core-free-icons";
import MotionSection from "./MotionSection";
import { itemVariants } from "./Motion2";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Amber exactly?",
      answer:
        "Amber is an autonomous ticket management companion designed to help teams stay organized, collaborate effectively, and track their progress with ease through intuitive workflows.",
    },
    {
      question: "How does the autonomous system work?",
      answer:
        "Our system leverages smart automation to handle repetitive logistics and data entry, allowing your team to focus on high-velocity communication and execution.",
    },
    {
      question: "Can I integrate Amber with other professional tools?",
      answer:
        "Yes, Amber provides seamless integrations with CRMs, marketing suites, and payment gateways to ensure a unified workflow and a single source of truth for your data.",
    },
    {
      question: "Is the interface really intuitive?",
      answer:
        "We prioritize user experience with a focus on a drag-and-drop interface that allows you to structure sales flows and attendee data exactly how you envision it.",
    },
    {
      question: "How do I get started with the AI assistant?",
      answer:
        "You can simply click the 'Talk to AI assistant' button on our header to begin exploring how our AI can help optimize your ticketing system.",
    },
  ];

  return (
    <MotionSection id="faqs" className="w-screen min-h-screen mt-20 mb-20">
      <div className="cont flex flex-col md:flex-row items-start gap-12">
        <motion.div
          variants={itemVariants}
          className="w-full md:w-[40%] md:sticky md:top-20 flex flex-col gap-6"
        >
          <h2 className="text-2xl font-semibold text-secondary bg-secondary/10 px-5 py-2 rounded-full border border-secondary/40 w-fit">
            FAQs
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h3>
          <div className="overflow-hidden rounded-4xl h-[50vh]">
            <img
              src={faq}
              alt="Frequently Asked Questions"
              className="h-full w-full object-cover grayscale-100 hover:grayscale-30 transition-all duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full flex-1 flex flex-col gap-4 mt-4 md:mt-20"
        >
          {faqItems.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={item.question}
              className="border-b border-foreground/10 last:border-none"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left py-6 focus:outline-none group"
              >
                <h4
                  className={`text-base sm:text-xl font-bold uppercase transition-colors duration-300 ${activeIndex === index ? "text-secondary" : "text-foreground hover:text-secondary/80"}`}
                >
                  {item.question}
                </h4>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <HugeiconsIcon
                    icon={activeIndex === index ? MinusSignIcon : Add01Icon}
                    size={24}
                    className={
                      activeIndex === index
                        ? "text-secondary"
                        : "text-foreground/40"
                    }
                  />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mb-6 text-sm font-medium opacity-70 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default FAQs;
