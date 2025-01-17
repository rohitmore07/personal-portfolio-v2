import Link from "next/link"; 
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/photo.jpg";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://calendly.com/cserohitmore"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#BBD0F5] py-2 px-4 text-[14px] font-semibold text-[#BBD0F5] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#BBD0F5] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/rohitmore07"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#BBD0F5] md:text-[16px]"
              variants={bodyAnimation}
            >
              Github
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rohitmore07/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#BBD0F5] md:text-[16px]"
              variants={bodyAnimation}
            >
              Linkedin
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com/rohittmore"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#BBD0F5] md:text-[16px]"
              variants={bodyAnimation}
            >
              Twitter
            </motion.p>
          </Link>
          <Link
            href="https://behance.net/rohitmore07"
            target="_blank"
            aria-label="View Behance Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#BBD0F5] md:text-[16px]"
              variants={bodyAnimation}
            >
              Behance
            </motion.p>
          </Link>
        </div>
      </div>


      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-18 lg:py-24">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="Hey, I'm Rohit."
            style="word-spacing-[64px] text-9xl inline-block overflow-hidden pt-1 -mr-1 sm:-mr-5 md:-mr-7 lg:-mr-2 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-0"
          />
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#BBD0F5] md:text-[20px] lg:text-left">
            Frontend Engineer and UI/UX Designer
          </p>
        </motion.div>

        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#BBD0F5] md:text-[20px]">
            Focused on interfaces and experiences.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
