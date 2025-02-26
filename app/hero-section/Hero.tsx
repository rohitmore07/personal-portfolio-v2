import Link from "next/link"; 
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import memoji from "../../public/memoji.png"; 

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
          {[
            { name: "Github", link: "https://github.com/rohitmore07" },
            { name: "Linkedin", link: "https://www.linkedin.com/in/rohitmore07/" },
            { name: "Twitter", link: "https://twitter.com/rohittmore" },
            { name: "Behance", link: "https://behance.net/rohitmore07" },
          ].map((item, index) => (
            <Link key={index} href={item.link} target="_blank" aria-label={`View ${item.name} Profile`}>
              <motion.p className="text-[16px] font-bold text-[#BBD0F5] md:text-[16px]" variants={bodyAnimation}>
                {item.name}
              </motion.p>
            </Link>
          ))}
        </div>
      </div>

      <div className="-mt-48 flex flex-col items-center justify-center sm:-mt-32 lg:-mt-40 lg:py-24">
        <div className={`relative flex flex-col items-center justify-center ${monaSans.className}`}>
          <motion.div className="-mb-4 md:-mb-8" variants={imageAnimation}>
          <Image
            src={memoji}
            alt="Memoji"
            width={220}
            height={220}
            className="rounded-full w-[180px] h-[150px] sm:w-[210px] sm:h-[180px] md:w-[250px] md:h-[220px]"
          />

          </motion.div>

          <AnimatedWords
            title="Hey, I'm Rohit."
            style="text-7xl sm:text-6xl md:text-7xl lg:text-9xl text-center inline-block overflow-hidden pt-0 sm:pt-1 -mr-1 sm:-mr-5 md:-mr-7 lg:-mr-2 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-0"
          />
        </div>
      </div>

      <div className="absolute bottom-10 flex items-center justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]" variants={bodyAnimation}>
          <p className="z-50 text-center text-[16px] font-medium text-[#BBD0F5] md:text-[20px] lg:text-left">
            Frontend Engineer and UI/UX Designer
          </p>
        </motion.div>

        <motion.div className="hidden max-w-[500px] lg:block lg:max-w-[420px]" variants={bodyAnimation}>
          <p className="text-right text-[16px] font-semibold text-[#BBD0F5] md:text-[20px]">
            Focused on interfaces and experiences.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
