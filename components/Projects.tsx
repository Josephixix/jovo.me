import Image from "next/image"

const projects = [
  {
    image: "/x1.png",
    live: "https://soft-skin.vercel.app/",
  },
  {
    image: "/project4.png",
    live: "https://farmgate-beryl.vercel.app/",
  },
  {
    image: "/projects.png",
    live: "https://menswears.vercel.app/",
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
            Designs & Projects
          </h3>
          <p className="text-gray-600 text-sm sm:text-lg font-semibold">
            Here are some of my recent designs.
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
              className="
                block
                bg-gray-100
                rounded-xl
                border border-gray-200
                p-3
                transition
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={`Website project ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="
                    object-contain
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-start gap-3 mt-6">
          <h3 className="text-gray-700 font-semibold text-sm sm:text-lg">
            View my projects and designs on GitHub
          </h3>

          <a
            href="https://github.com/josephixix"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full
              px-5 py-2.5
              text-sm font-semibold
              text-white
              bg-black
              hover:bg-gray-900
              transition
            "
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.96.58.11.79-.25.79-.56v-2.05c-3.2.7-3.87-1.57-3.87-1.57-.52-1.33-1.27-1.68-1.27-1.68-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.65 1.23 3.3.94.1-.74.4-1.23.72-1.51-2.56-.3-5.26-1.29-5.26-5.74 0-1.27.45-2.3 1.18-3.11-.12-.3-.51-1.52.11-3.17 0 0 .96-.31 3.15 1.19a10.88 10.88 0 015.74 0c2.18-1.5 3.14-1.19 3.14-1.19.62 1.65.23 2.87.11 3.17.73.81 1.18 1.84 1.18 3.11 0 4.46-2.7 5.44-5.27 5.72.41.35.77 1.03.77 2.08v3.09c0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
