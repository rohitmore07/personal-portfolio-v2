"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";

interface TimelineItem {
  period: string;
  title: string;
  org: string;
  points?: string[];
}

const education: TimelineItem[] = [
  {
    period: "2021 - 2024",
    title: "B. Tech Computer Science (AI)",
    org: "G. H. Raisoni Institute of Engineering, Jalgaon",
  },
  {
    period: "2017 - 2021",
    title: "Diploma in Computer Engg.",
    org: "G. H. Raisoni Polytechnic, Jalgaon",
  },
];

const experience: TimelineItem[] = [
  {
    period: "Aug 2023 - Nov 2023",
    title: "Project Intern",
    org: "LTIMindtree",
    points: [
      "Played a key role in developing web applications using HTML, CSS and JavaScript, with a primary focus on ReactJS.",
      "Actively participated in software development projects, contributing to coding and debugging activities.",
    ],
  },
  {
    period: "May 2023 - Jul 2023",
    title: "UI/UX Design Intern",
    org: "Grownity",
    points: [
      "Designed their overall user-centered mobile application.",
      "Stayed up-to-date with industry trends, best practices, and emerging technologies in UI/UX design, bringing fresh ideas.",
    ],
  },
  {
    period: "May 2019 - Jul 2019",
    title: "PHP Developer Intern",
    org: "Scriptlet Solutions Pvt. Ltd.",
    points: [
      "Completed six weeks of internship as a PHP developer.",
      "Worked on various projects during the internship, honing my skills in PHP.",
    ],
  },
];

const Timeline = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: IconDefinition;
  items: TimelineItem[];
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0E1016] sm:h-12 sm:w-12">
          <FontAwesomeIcon icon={icon} className="h-5 w-5" />
        </span>
        <h3 className="text-[22px] font-bold text-white sm:text-2xl md:text-[28px]">{title}</h3>
      </div>

      <div className="relative pl-6 sm:pl-8">
        {/* The one animated moment: the timeline line draws down as it scrolls into view */}
        <motion.span
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-[#BBD0F5] to-[#BBD0F5]/10"
          initial={reduceMotion ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <ol className="space-y-5 sm:space-y-6">
          {items.map((item) => (
            <li
              key={`${item.title}-${item.period}`}
              data-no-blobity
              className="group relative"
            >
              <span
                aria-hidden
                className="absolute -left-6 top-6 h-[15px] sm:-left-8 sm:top-7 w-[15px] rounded-full border-2 border-[#BBD0F5] bg-[#212531] transition-colors duration-300 group-hover:bg-[#BBD0F5]"
              />
              <div className="rounded-2xl border border-white/10 bg-[#191C26] p-4 transition-colors sm:p-5 duration-300 group-hover:border-[#BBD0F5]/40">
                <time className="text-sm font-semibold text-[#BBD0F5]">
                  {item.period}
                </time>
                <h4
                  data-no-blobity
                  className="mt-2 break-words text-base font-semibold leading-snug text-white sm:text-lg md:text-xl">
                  {item.title}
                </h4>
                <p className="mt-1 break-words text-[15px] font-semibold text-[#95979D] sm:text-base">
                  {item.org}
                </p>
                {item.points && (
                  <ul className="mt-4 list-disc space-y-2 break-words pl-5 text-sm leading-relaxed sm:text-[15px] text-[#95979D] marker:text-[#BBD0F5]">
                    {item.points.map((point) => (
                      <li key={point} data-no-blobity>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const Qualifications = () => {
  return (
    <section
      aria-label="Qualification"
      className="w-full bg-[#212531] shadow-[0_0_0_100vmax_#212531] [clip-path:inset(0_-100vmax)] px-4 py-14 sm:px-8 sm:py-20 md:py-28 lg:px-12"
    >
      <div className="flex justify-center">
        <AnimatedTitle
          text="Qualification"
          className="text-center text-[30px] font-bold leading-none text-[#BBD0F5] min-[400px]:text-[34px] sm:text-[44px] md:text-[60px] md:leading-none"
          wordSpace="mr-[0.25em]"
          charSpace="mr-[0.01em]"
        />
      </div>

      <div className="mx-auto mt-10 grid max-w-[1280px] grid-cols-[minmax(0,1fr)] items-start gap-12 sm:mt-14 md:mt-20 lg:grid-cols-[minmax(0,0.64fr)_minmax(0,1fr)] lg:gap-x-10">
        <div className="lg:pl-10">
          <Timeline title="Education" icon={faGraduationCap} items={education} />
        </div>
        <Timeline title="Experience" icon={faBriefcase} items={experience} />
      </div>
    </section>
  );
};

export default Qualifications;