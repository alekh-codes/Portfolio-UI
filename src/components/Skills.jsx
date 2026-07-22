import React from 'react'
import { RiCodeLine, RiTeamFill, RiBookOpenLine } from 'react-icons/ri'

const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
const learningSkills = ["Node.js","Express.js", "MongoDB"]
const softSkills = ["Communication", "Problem Solver", "Collaborative", "Team Work", "Time Management", "Continuous Learning", "Adaptability"]

const SkillBadge = ({ item, color, dark }) => {
  const styles = {
    purple: {
      base: "bg-purple-700/10 border-purple-700/50 hover:border-purple-500 hover:bg-purple-700/20",
      text: dark ? "text-purple-300" : "text-purple-700",
    },
    amber: {
      base: "bg-amber-500/10 border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/20",
      text: dark ? "text-amber-300" : "text-amber-700",
    },
    green: {
      base: "bg-green-400/10 border-green-400/40 hover:border-green-300 hover:bg-green-400/20",
      text: dark ? "text-green-300" : "text-green-700",
    },
  }
  return (
    <span
      className={`border text-xs md:text-[18px] font-medium px-3 py-2 rounded-xl flex items-center justify-center text-center transition-all duration-300 cursor-default select-none ${styles[color].base} ${styles[color].text}`}
    >
      {item}
    </span>
  )
}

const Skills = ({ dark }) => {
  return (
    <section id="skills" className="flex flex-col w-full">
      <div className="flex flex-col items-center mt-16 px-6">
        <h1 className="text-4xl font-bold" data-aos="fade-up" data-aos-duration="1000">
          My <span className="text-purple-500">Skills</span>
        </h1>
        <p className="mt-3 opacity-50 text-sm text-center max-w-md" data-aos="fade-up" data-aos-duration="1000">
          A blend of technical expertise and interpersonal abilities that drive effective development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-14 mt-12 pb-20">

        <div
          className={`rounded-2xl p-6 border border-transparent hover:border-purple-700/60 transition-all duration-500 ${dark ? "bg-[#2f3034e2]" : "bg-[#dee8f7]"}`}
          data-aos="fade-up" data-aos-duration="1000"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-700/20 p-3 rounded-xl">
              <RiCodeLine className="text-purple-500 text-lg" />
            </div>
            <h2 className="font-bold text-lg">Technical Skills</h2>
          </div>

          <div className="mb-5">
            <p className="text-xs uppercase tracking-widest opacity-40 mb-3 font-semibold">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map(item => (
                <SkillBadge key={item} item={item} color="purple" dark={dark} />
              ))}
            </div>
          </div>

          <div className="border-t border-purple-700/20 my-4" />

          <div>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-3 font-semibold">Backend</p>
            <div className="flex flex-wrap gap-2">
              {learningSkills.map(item => (
                <SkillBadge key={item} item={item} color="amber" dark={dark} />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`rounded-2xl p-6 border border-transparent hover:border-green-400/50 transition-all duration-500 ${dark ? "bg-[#2f3034e2]" : "bg-[#eaf8e5]"}`}
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-400/10 p-3 rounded-xl">
              <RiTeamFill className="text-green-400 text-lg" />
            </div>
            <h2 className="font-bold text-lg">Soft Skills</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {softSkills.map(item => (
              <SkillBadge key={item} item={item} color="green" dark={dark} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills