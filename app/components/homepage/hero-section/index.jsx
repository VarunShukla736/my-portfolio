// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">
              {personalData.designation}
            </span>
            .
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          {/* Developer Code Block */}
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div>
                <span className="mr-2 text-pink-500">class</span>
                <span className="mr-2 text-white">FrontendDeveloper</span>
                <span className="mr-2 text-pink-500">:</span>
                <span className="text-gray-400">{}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">def</span>
                <span className="text-gray-400">__init__</span>
                <span className="text-amber-300">
                  (self, name, skills, hard_worker=True, quick_learner=True,
                  problem_solver=True)
                </span>
                <span className="text-gray-400">:</span>
              </div>
              <div className="ml-8">
                <span className="text-white">self.name</span>{" "}
                <span className="text-orange-400">=</span>{" "}
                <span className="text-gray-400">"Varun Shukla"</span>
              </div>
              <div className="ml-8">
                <span className="text-white">self.skills</span>{" "}
                <span className="text-orange-400">=</span>{" "}
                <span className="text-gray-400">
                  ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux",
                  "Tailwind CSS", "Bootstrap", "Material UI"]
                </span>
              </div>
              <div className="ml-8">
                <span className="text-white">self.hard_worker</span>{" "}
                <span className="text-orange-400">=</span>{" "}
                <span className="text-gray-400">hard_worker</span>
              </div>
              <div className="ml-8">
                <span className="text-white">self.quick_learner</span>{" "}
                <span className="text-orange-400">=</span>{" "}
                <span className="text-gray-400">quick_learner</span>
              </div>
              <div className="ml-8">
                <span className="text-white">self.problem_solver</span>{" "}
                <span className="text-orange-400">=</span>{" "}
                <span className="text-gray-400">problem_solver</span>
              </div>

              <div>
                <span className="ml-4 mr-2 text-white">def</span>
                <span className="text-orange-400">hireable(self)</span>
                <span className="text-gray-400">:</span>
              </div>
              <div className="ml-8">
                <span className="text-white">return</span>{" "}
                <span className="text-orange-400">
                  self.hard_worker and self.problem_solver and len(self.skills)
                </span>{" "}
                <span className="text-gray-400">{">="}</span>{" "}
                <span className="text-white">5</span>
              </div>

              <div>
                <span className="ml-4 text-white">coder</span>{" "}
                <span className="text-orange-400">=</span>{" "}
                <span className="text-gray-400">FrontendDeveloper(</span>
              </div>
              <div className="ml-8">
                <span className="text-green-400">name=</span>{" "}
                <span className="text-orange-400">"Varun Shukla"</span>,
              </div>
              <div className="ml-8">
                <span className="text-green-400">skills=</span>{" "}
                <span className="text-gray-400">
                  ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux",
                  "Tailwind CSS", "Bootstrap", "Material UI"]
                </span>
              </div>
              <div className="ml-4 text-cyan-400">)</div>

              <div className="font-mono text-sm bg-gray-900 rounded-xl p-4 shadow-md mt-4">
                <span className="text-cyan-400">print</span>
                <span className="text-white">(f"Hireable:</span>
                <span className="text-amber-300">{`{coder.hireable()}`}</span>
                <span className="text-white">)</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
