import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import MotionSection, { itemVariants } from "./MotionSection";

function About() {
  const texts = [
    {
      text: "streamline",
      rotate: "-rotate-6",
    },
    {
      text: "automate",
      rotate: "rotate-6",
    },
    {
      text: "visualize",
      rotate: "-rotate-6",
    },
    {
      text: "integrate",
      rotate: "-rotate-6",
    },
    {
      text: "optimize",
      rotate: "rotate-6",
    },
    {
      text: "execute",
      rotate: "-rotate-6",
    },
    {
      text: "improve",
      rotate: "rotate-6",
    },
    {
      text: "empower",
      rotate: "-rotate-6",
    },
  ];

  return (
    <MotionSection id="about" className="cont w-screen min-h-screen mt-16">
      <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-6">
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col gap-3 items-start"
        >
          <h2 className="text-2xl font-semibold text-secondary bg-secondary/10 px-5 py-2 rounded-full border border-secondary/40 w-fit">
            About Us
          </h2>
          <h4 className="text-2xl font-semibold">
            Meet Amber, your ticket management companion.
          </h4>
          <p className="text-sm font-medium opacity-70">
            At Amber, we are passionate about revolutionizing the way teams
            manage their work. Our mission is to provide a powerful yet
            intuitive ticketing system that helps teams stay organized,
            collaborate effectively, and track their progress with ease. We
            believe that work should be seamless and enjoyable, and our platform
            is designed to empower teams to achieve their goals efficiently.
            With a focus on user experience and continuous innovation, we are
            committed to delivering a solution that meets the evolving needs of
            modern teams.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.03, rotate: -2 }}
          className="w-full md:w-[34%] overflow-hidden rounded-4xl h-80 md:h-[40vh] shadow-2xl"
        >
          <img
            src={about}
            alt="About Us"
            className="h-full w-full object-cover grayscale-100"
          />
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="bg-foreground flex items-center justify-center min-h-[42vh] rounded-3xl mt-9 p-6 sm:p-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 items-center place-items-center gap-3">
          {texts.map((text) => (
            <motion.h2
              variants={itemVariants}
              key={text.text}
              whileHover={{ rotate: 0, scale: 1.08 }}
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-background rounded-full px-3 py-1 ${text.rotate}`}
            >
              {text.text}
            </motion.h2>
          ))}
        </div>
      </motion.div>
    </MotionSection>
  );
}

export default About;
