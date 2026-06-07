import { HugeiconsIcon } from "@hugeicons/react";
import {
  FolderShared01Icon,
  SparklesIcon,
  CallSpark02Icon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import collab from "../assets/collab.svg";
import track from "../assets/track.svg";
import organize from "../assets/organize.svg";

import MotionSection from "./MotionSection";
import { itemVariants } from "./Motion2";
function Header() {
  interface Cardinterface {
    title: string;
    step: string;
    description: string;
    illustration: string;
    rotate: string;
  }

  const Cards: Cardinterface[] = [
    {
      title: "Organize",
      step: "Step 1",
      description:
        "Easily categorize and prioritize your tickets with our intuitive drag-and-drop interface.",
      illustration: organize,
      rotate: "-rotate-6",
    },
    {
      title: "Collaborate",
      step: "Step 2",
      description:
        "Work together seamlessly with your team, sharing updates and feedback in real-time.",
      illustration: collab,
      rotate: "rotate-0",
    },
    {
      title: "Track",
      step: "Step 3",
      description:
        "Monitor the progress of your tickets with our comprehensive tracking and reporting features.",
      illustration: track,
      rotate: "rotate-6",
    },
  ];

  return (
    <MotionSection
      id="home"
      initial="hidden"
      animate="visible"
      className="w-screen min-h-screen md:mt-9 mt-3"
    >
      <header className="cont w-full h-full flex flex-col justify-center items-center gap-6 relative">
        <div className="w-90 h-90 blur-2xl rounded-full bg-secondary/10 absolute left-0 top-10"></div>
        <motion.div
          variants={itemVariants}
          className="flex max-w-full items-center gap-3 justify-between text-xs sm:text-sm border border-foreground/40 rounded-full"
        >
          <div className="bg-foreground text-background px-3 py-1 rounded-full ">
            <p className="flex items-center gap-1 text-[10px]">
              Just In{" "}
              <HugeiconsIcon
                icon={FolderShared01Icon}
                size={16}
                strokeWidth={2}
              />
            </p>
          </div>
          <div className="pr-3">
            <p className="font-semibold text-[10px]">
              A ticket system that works like an Organiser.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-medium text-center leading-snug">
            Transform your tickets
            <br />
            into organized{" "}
            <span className="inline-block text-secondary bg-secondary/10 px-4 sm:px-5 rounded-sm border border-secondary/40">
              workflows
            </span>
          </h1>

          <p className="text-center max-w-[42rem] font-semibold text-base sm:text-lg text-foreground/70 mt-4">
            Streamline your ticket management with our intuitive organiser,
            designed to boost productivity and keep your projects on track. Say
            goodbye to chaos and hello to efficiency!
          </p>

          <div className="flex w-full flex-col sm:w-auto sm:flex-row items-center gap-4">
            <button className=" flex items-center gap-2 justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-bold">
              Talk to Ai assistant
              <HugeiconsIcon icon={SparklesIcon} />
            </button>
            <button className="flex items-center gap-2 justify-center text-foreground px-6 py-3 border border-foreground/40 rounded-full font-bold">
              Book a call
              <HugeiconsIcon icon={CallSpark02Icon} />
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Cards.map((card) => (
            <motion.div
              variants={itemVariants}
              key={card.title}
              whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
              className={`flex flex-col items-start gap-4 p-5 border-2 shadow-2xl border-white rounded-4xl mt-6 sm:mt-10 ${card.rotate}`}
            >
              <img src={card.illustration} alt={card.title} className="mx-auto w-40" />
              <h2 className="text-xl font-semibold opacity-50">{card.step}</h2>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-foreground/70 font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </header>
    </MotionSection>
  );
}

export default Header;
