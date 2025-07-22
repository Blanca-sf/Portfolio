"use client"

import { useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Figma", "Adobe XD", "Node.js", "MongoDB", "Firebase"],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg ${
                activeCategory === index
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white transform scale-105"
                  : "bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 hover:shadow-xl"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === index ? "bg-white/20 text-white" : "bg-purple-50 text-purple-700"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
