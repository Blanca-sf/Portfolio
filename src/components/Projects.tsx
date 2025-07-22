"use client"

import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    title: "PrepUp",
    description:
      "Practice interviews anywhere, on the go! PrepUp is a mobile app that prepares users to interviews in their field of study.",
    image: "/images/PrepUp.png",
    technologies: ["React Native", "Firebase", "Node.js"],
    link: "https://prepup.ca/",
  },
  {
    title: "Sweetqueue",
    description:
      "A web app that modernizes bakery management with real-time order tracking and customer notifications.",
    image: "/images/Sweetqueue.png",
    technologies: ["React", "MongoDB", "Express"],
    link: "https://github.com/Blanca-sf/SweetQueue",
  },
  {
    title: "Falcon",
    description: "Student web app with digital ID, class finder, and campus maps for enhanced university experience.",
    image: "/images/Falcon.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Blanca-sf/FalconApp",
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="animated-gradient py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">Featured Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className="md:w-1/2 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    className={`w-full h-64 md:h-full object-cover transition-all duration-500 ${
                      hoveredProject === index ? "scale-110 brightness-110" : "scale-100 brightness-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white bg-black/30 rounded-r-2xl">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-100 text-lg mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 w-fit group"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
