
export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 md:px-12 py-20  bg-white"
    >
      <div className="mx-auto max-w-7xl w-full">

        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">
          About me and my work
        </h2>

        {/* Two-column layout on PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* LEFT COLUMN (2 stacked cards) */}
          <div className="flex flex-col gap-4">

            {/* Card 1 — Background */}
            <div className="bg-gray-100 rounded-xl p-6 md:p-8">
              <h3 className="font-semibold text-gray-900 mb-2">
                Background
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                I’m a physics major with a strong interest in computers and
                software development. My background shapes how I think analytical,
                detail oriented, and focused on problem solving. I enjoy building
                clean, modern, and user friendly web experiences that feel simple,
                fast, and purposeful.
              </p>
            </div>

            {/* Card 2 — How I Work */}
            <div className="bg-gray-100 rounded-xl p-6 md:p-8">
              <h3 className="font-semibold text-gray-900 mb-2">
                How I Work With Clients
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                I work closely with clients from the start understanding their
                brand, goals, and audience. From there, I move into design
                exploration and wireframing, making sure every decision is
                function first and focused on usability and conversion. I then
                write clean, scalable code and handle deployment, maintenance,
                and performance to ensure long term stability and results.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN — Tools */}
          <div className="bg-gray-200 rounded-xl p-6 md:p-10">
            <h3 className="font-semibold text-gray-900 mb-4">
              Tools & Technologies I Use
            </h3>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
              I mainly use <strong>TypeScript</strong> with{" "}
              <strong>React (Next.js)</strong> for frontend development. For data
              handling, I work with <strong>PostgreSQL</strong> using{" "}
              <strong>Supabase</strong> or <strong>Neon</strong>, alongside{" "}
              <strong>Drizzle ORM</strong> or <strong>Prisma</strong>.
            </p>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
              For UI and styling, I rely on <strong>Tailwind CSS</strong> and{" "}
              <strong>Shadcn/UI</strong>. I design interfaces in{" "}
              <strong>Figma</strong> and build interactive 3D experiences on the
              web using <strong>Three.js</strong>.
            </p>

            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              My daily development tools include <strong>VS Code</strong>
              (recently switched to <strong>Cursor</strong>), <strong>Git</strong>,
              the <strong>terminal</strong> (sometimes Warp), and{" "}
              <strong>Notepad</strong> for quick thoughts I keep my workflow
              simple and focused.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
