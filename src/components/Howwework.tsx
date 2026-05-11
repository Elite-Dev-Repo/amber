import { motion } from "framer-motion";
import MotionSection, { itemVariants } from "./MotionSection";

function Howwework() {
  const texts = [
    {
      step: "01",
      title: "Organize",
      description:
        "Take full control of your event logistics by categorizing and prioritizing your tickets. Our intuitive drag-and-drop interface allows you to structure your sales flow and attendee data exactly how you envision it, reducing complexity from day one.",
      rotate: "rotate-20",
    },
    {
      step: "02",
      title: "Collaborate",
      description:
        "Break down silos and work together seamlessly with your team. Share real-time updates, exchange instant feedback, and ensure every stakeholder is aligned through a centralized workspace designed for high-velocity communication.",
      rotate: "-rotate-6",
    },
    {
      step: "03",
      title: "Automate",
      description:
        "Eliminate manual overhead by leveraging smart automation to handle repetitive tasks. From instant checkout confirmations to dynamic inventory adjustments, our system handles the heavy lifting so you can focus on delivering a world-class experience.",
      rotate: "-rotate-6",
    },
    {
      step: "04",
      title: "Integrate",
      description:
        "Connect your ticketing ecosystem with the professional tools you already use. Whether it's CRM platforms, marketing suites, or payment gateways, our seamless integrations ensure a unified workflow and a single source of truth for your data.",
      rotate: "-rotate-20",
    },
  ];

  return (
    <MotionSection id="work" className="w-screen min-h-screen mt-20">
      <div className="cont w-full h-full flex flex-col justify-center items-center gap-6">
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <h2 className="text-2xl font-semibold text-secondary bg-secondary/10 px-5 py-2 rounded-full border border-secondary/40 w-fit">
            How we work
          </h2>

          <h3 className="text-center text-2xl font-semibold">
            Let us show you how our autonomous system works.
          </h3>
          <p className="text-sm font-medium opacity-70 max-w-[38rem] text-center">
            At Amber, we are passionate about revolutionizing the way teams
            manage their work. Our mission is to provide a powerful yet
            intuitive ticketing system that helps teams stay organized,
            collaborate effectively, and track their progress with ease.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-20 gap-y-8 md:gap-y-20 mt-12 md:mt-20 place-items-center"
        >
          {texts.map((text) => (
            <motion.div
              variants={itemVariants}
              key={text.title}
              whileHover={{ rotate: 0, y: -12, scale: 1.02 }}
              className={`flex flex-col w-full max-w-[22.5rem] min-h-80 gap-3 items-center justify-end bg-white shadow-2xl rounded-3xl p-6 ${text.rotate}`}
            >
              <div className="bg-foreground p-3 rounded-full mb-5"></div>
              <div className="bg-background p-3 rounded-lg">
                <h4 className="text-2xl font-semibold text-foreground/40">
                  {text.step}
                </h4>
                <h3 className="text-lg font-bold uppercase">{text.title}</h3>
                <p className="text-sm font-medium opacity-70">
                  {text.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}

export default Howwework;
