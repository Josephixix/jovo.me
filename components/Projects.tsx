import Image from "next/image"

const projects = [
  {
    title: "TaskFlow – To-Do App",
    description: "A clean productivity app for managing daily tasks with real-time storage and secure authentication.",
    tech: ["Next.js", "Firebase", "Clerk", "Tailwind"],
    image: "/todos2.png",
    live: "https://to-dos-list-beige.vercel.app/",
  },
  {
    title: "WhisperLink – Anonymous Messaging",
    description: "A platform where users receive anonymous messages through a shareable personal link.",
    tech: ["Next.js", "Convex", "Clerk", "Tailwind"],
    image: "/blk.png",
    live: "https://chattty-drab.vercel.app/",
  },
  {
    title: "NewsSphere – News Aggregator",
    description: "A news blog that aggregates and displays real-time headlines from multiple news APIs.",
    tech: ["Next.js", "NestJS", "REST APIs", "Tailwind"],
    image: "/news.png",
    live: "https://news-ng.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 md:px-12 py-22 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl w-full flex flex-col gap-6">

        {/* Section Header */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
            Projects
          </h3>
          <p className="text-gray-600 text-sm sm:text-lg font-semibold">
            Selected work showcasing my full-stack development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-start gap-3 mt-6">
          <h3 className="text-gray-700 font-semibold text-sm sm:text-lg">
            View more on GitHub
          </h3>

          <a
            href="https://github.com/josephixix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-black hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  )
}