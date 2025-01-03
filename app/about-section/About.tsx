import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "Technologies that fuel my passion"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#BBD0F5] sm:text-[25px] md:mb-16 md:text-[40px] lg:text-[60px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#BBD0F5] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            {/* Skills Section */}
            <section id="skills" className="px-8 sm:px-16 py-36 max-w-screen" style={{ marginTop: "-4.600rem" }} id="skills">
              <div>

                {/* Skills */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-12" style={{ fontFamily: "'Roboto Mono', monospace" }}>

                  {/* Skill 01 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icons8-html-5-96.svg" alt="html icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">HTML</p>
                  </div>

                  {/* Skill 02 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icons8-css3-96.svg" alt="css icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">CSS</p>
                  </div>

                  {/* Skill 03 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/tailwind-css.svg" alt="tailwind css icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-center text-base">Tailwind CSS</p>
                  </div>

                  {/* Skill 04 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icons8-javascript-96.svg" alt="javascript icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">JavaScript</p>
                  </div>

                  {/* Skill 05 */}
                  <div className="flex flex-col items-center gap-2 mt-3">
                    <img src="./skills/react.png" alt="javascript icon" className="w-24 h-23" />
                    <p className="font-semibold text-white text-base">React JS</p>
                  </div>

                  {/* Skill 06 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icon-next.svg" alt="next icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">Next.js</p>
                  </div>

                  {/* Skill 07 */}
                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icon-threejs.svg" alt="ThreeJS icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">Three.js</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icon-materialui.svg" alt="MUI icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">Material UI</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icon-sass.png" alt="sass icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">Sass</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <img src="./skills/icons8-git-96.svg" alt="git icon" className="w-24 h-24" />
                    <p className="font-semibold text-white text-base">Git</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#BBD0F5]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#BBD0F5] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, TypeScript, Redux, Git/GitHub."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#BBD0F5] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#BBD0F5] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, FigJam, Adobe XD, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
