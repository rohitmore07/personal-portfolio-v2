import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  const isEven = id % 2 === 0;

  return (
    <motion.div
      style={
        {
          backgroundColor: "#212531",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      // Below lg: a normal stacked card (buttons, text, screenshot) that grows with its content.
      // From lg up: the original fixed-height card with absolutely positioned children.
      className="relative z-10 flex w-full flex-col overflow-hidden rounded-3xl px-6 pt-6 sm:px-8 sm:pt-8 lg:block lg:h-[520px] lg:p-0"
      initial="initial"
      animate="animate"
    >
      <Image
        src={image}
        alt={name}
        className={`order-3 -mb-2 mt-8 h-auto w-full max-w-[640px] self-center rounded-t-xl lg:absolute lg:-bottom-2 lg:mb-0 lg:mt-0 lg:w-[55%] lg:max-w-none lg:rounded-none ${
          isEven ? "lg:right-0" : "lg:left-0"
        }`}
      />
      <div
        className={`order-1 flex items-center gap-4 text-[#0E1016] lg:absolute lg:top-0 lg:mt-10 lg:justify-center ${
          isEven ? "lg:left-0 lg:ml-14" : "lg:right-0 lg:mr-14"
        }`}
      >
        {available ? (
          <>
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className=" w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
          </>
        ) : (
          <div className=" flex items-center justify-center gap-4">
            <Link
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-[20px]  rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className=" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`order-2 mt-6 text-white sm:mt-8 lg:absolute lg:top-52 lg:mt-0 lg:max-w-[40%] ${
          isEven ? "lg:left-10 lg:ml-4" : "lg:right-0 lg:mr-4"
        }`}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-full text-[34px] leading-none text-white sm:text-[40px] md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-4 w-full max-w-[457px] text-[15px] font-semibold text-[#95979D] sm:text-[16px]"
          }
        />
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-0 sm:mt-6 sm:gap-y-1">
          {technologies.map((tech, index) => (
            <div key={index}>
              <AnimatedTitle
                text={tech}
                wordSpace="mr-[0.25em]"
                charSpace="mr-[0.01em]"
                className="whitespace-nowrap text-[13px] font-bold uppercase leading-normal sm:text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[inherit]"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;