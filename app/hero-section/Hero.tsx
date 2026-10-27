import Link from "next/link";
import Image from "next/image";
import { syne } from "../fonts/syne";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import memoji from "../../public/memoji.png";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex min-h-[85vh] w-full flex-col overflow-x-hidden bg-[url('/hero.jpg')] bg-cover bg-center sm:min-h-[90vh] md:min-h-[100vh] 3xl:min-h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute inset-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      {/* Top navigation */}
      <div className="absolute inset-x-0 top-6 z-20 flex items-center justify-between px-5 sm:top-10 sm:mx-auto sm:w-[90%] sm:px-0 lg:max-w-[1440px]">
        <div>
          <Link
            href="https://calendly.com/cserohitmore"
            target="_blank"
            aria-label="BOOK A CALL"
            data-blobity
            className="inline-block cursor-pointer"
          >
            <motion.span
              className="hidden rounded-md border-2 border-[#BBD0F5] px-4 py-2 text-[14px] font-semibold text-[#BBD0F5] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.span>
          </Link>
        </div>

        <div className="flex gap-3 text-[#BBD0F5] sm:gap-8 md:gap-12 lg:gap-14">
          {[
            { name: "Github", link: "https://github.com/rohitmore07" },
            { name: "Linkedin", link: "https://www.linkedin.com/in/rohitmore07/" },
            { name: "Twitter", link: "https://twitter.com/rohittmore" },
            { name: "Hashnode", link: "https://hashnode.com/@rohitmore07" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              aria-label={`View ${item.name} Profile`}
              data-blobity
              className="inline-block cursor-pointer"
            >
              <motion.p className="text-[13px] font-bold text-[#BBD0F5] sm:text-[16px]" variants={bodyAnimation}>
                {item.name}
              </motion.p>
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-5 pb-32 pt-28 sm:px-10 sm:pb-24 sm:pt-24 lg:pb-0 lg:pt-0">
        <div className="flex w-full max-w-[1200px] min-w-0 flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-3 md:gap-4">
          <motion.div variants={imageAnimation} className="shrink-0">
            <Image
              src={memoji}
              alt="Memoji"
              width={240}
              height={200}
              className="h-auto w-[190px] sm:w-[120px] md:w-[180px] lg:w-[240px]"
            />
          </motion.div>

          <div className="flex min-w-0 max-w-full flex-col items-center text-center sm:items-start sm:text-left">
            <AnimatedWords
              title="Hey, I'm Rohit."
              style={`${syne.className} font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-7xl leading-[1.2] text-center sm:text-left inline-block pt-1 pb-0 md:pb-0`}
            />

            <motion.p
              className="mt-1 max-w-[300px] text-[15px] font-medium leading-relaxed text-[#BBD0F5] sm:mt-0 sm:max-w-[360px] sm:text-left sm:text-[15px] md:max-w-[480px] md:text-[18px] lg:max-w-[700px] lg:text-[20px]"
              variants={imageAnimation}
            >
              I'm a software engineer driven by the pursuit of elegant solutions to complex problems. I build scalable systems across the full stack and I'm particularly interested in how artificial intelligence can give products genuine intelligence.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center px-5 sm:bottom-8 lg:bottom-10 lg:mx-auto lg:w-[90%] lg:max-w-[1440px] lg:justify-between lg:px-0">
        <motion.div className="max-w-[350px]" variants={bodyAnimation}>
          <p className="z-50 text-center text-[14px] font-medium text-[#BBD0F5] sm:text-[16px] md:text-[20px] lg:text-left">
            Full-Stack Engineer · Applied AI
          </p>
        </motion.div>

        <motion.div className="hidden max-w-[420px] lg:block" variants={bodyAnimation}>
          <p className="text-right text-[16px] font-semibold text-[#BBD0F5] md:text-[20px]">
            Engineering what comes next.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;