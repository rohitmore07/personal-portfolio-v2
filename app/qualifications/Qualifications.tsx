const Qualifications = () => {
  return (
    <section className="bg-[#212531] px-10 py-28 max-w-screen mx-auto">
      <div className="pt-10 text-center text-[60px] font-bold text-[#BBD0F5]">Qualification</div>
      <div className="flex flex-col lg:flex-row justify-center mx-auto lg:ml-64">
        {/* Left Section */}
        <div className="mt-24 lg:mx-auto lg:w-1/2 lg:mt-24">
          <div className="mb-6 flex items-center lg:mb-10">
            <img
              className="w-8 h-8 mr-4"
              src="https://img.icons8.com/glyph-neue/64/FFFFFF/graduation-cap.png"
              alt="graduation-cap"
            />
            <span className="text-base font-bold text-white">Education</span>
          </div>
          <div className="timeline">
            <ol className="relative border-l border-white">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2017-2021
                </time>
                <h3 className="text-lg font-semibold text-white">Diploma in Computer Engg.</h3>
                <p className="mb-4 text-base text-white">G. H. Raisoni Polytechnic, Jalgaon</p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2021-2024
                </time>
                <h3 className="text-lg font-semibold text-white">B. Tech Computer Science (AI)</h3>
                <p className="text-base font-normal text-white">Final Year</p>
                <p className="text-base font-normal text-white">G. H. Raisoni Institute of Engineering, Jalgaon.</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-10 lg:mr-40 lg:w-1/2 lg:mt-24">
          <div className="mb-6 flex items-center lg:mb-10">
            <img
              className="w-8 h-8 mr-4"
              src="https://img.icons8.com/ios-glyphs/90/FFFFFF/business.png"
              alt="business"
            />
            <span className="text-base font-bold text-white">Experience</span>
          </div>
          <div className="timeline">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Aug-2023 to Nov-2023
                </time>
                <h3 className="text-lg font-semibold text-white">ReactJS Intern</h3>
                <p className="text-white font-semibold">( LTIMindtree )</p>
                <p className="text-base font-normal text-gray-300">
                  • Played a key role in developing web applications using HTML, CSS and JavaScript, with a primary focus on ReactJS.
                  <br />
                  • Actively participated in software development projects, contributing to coding & debugging activities.
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May-2023 to July-2023
                </time>
                <h3 className="text-lg font-semibold text-white">UI/UX Design Intern</h3>
                <p className="text-white font-semibold">( Grownity )</p>
                <p className="text-base font-normal text-gray-300">
                  • Designed their overall user-centered mobile application.
                  <br />
                  • Stayed up-to-date with industry trends, best practices, and emerging technologies in UI/UX design, bringing fresh ideas.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May-2019 to July-2019
                </time>
                <h3 className="text-lg font-semibold text-white">PHP Developer Intern</h3>
                <p className="text-white font-semibold">( Scriptlet Solutions Pvt. Ltd. )</p>
                <p className="text-base font-normal text-gray-300">
                  • Completed six weeks of internship as a PHP developer.
                  <br />
                  • During my internship, I have been working on various projects, where I have honed my skills in PHP.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
