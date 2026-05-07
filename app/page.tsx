export default function ProfessionalWebsite() {
  const projects = [
    {
      title: "AI-Enabled Radiomics & Outcome Modeling",
      text: "Machine learning and deep learning models for treatment response, survival prediction, and imaging biomarker discovery in oncology.",
      icon: "🧠",
    },
    {
      title: "Radiopharmaceutical Therapy Dosimetry",
      text: "Predictive dosimetry using time–activity curves, PBPK simulation, BED/EQD2 modeling, and interpretable AI workflows.",
      icon: "📈",
    },
    {
      title: "Radiation Therapy Physics",
      text: "Clinical treatment planning, QA, image-guided radiation therapy, adaptive workflows, and implementation-focused research.",
      icon: "☢️",
    },
  ];

  const skills = [
    "Medical Physics",
    "Radiomics",
    "Machine Learning",
    "Deep Learning",
    "Radiation Oncology",
    "Theranostics",
    "Treatment Planning",
    "Python",
    "Model Evaluation",
    "SHAP Explainability",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">Dr. Hamid Abdollahi</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_35%)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                Medical Physicist · AI in Oncology · Radiomics
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Building intelligent tools for precision radiation oncology.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I work at the intersection of medical physics, quantitative imaging, artificial intelligence, and radiation therapy to support more personalized and interpretable cancer care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#research" className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 hover:bg-slate-200">
                  View Research →
                </a>
                <a href="#contact" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/20 text-4xl">
                🔬
              </div>
              <h2 className="text-2xl font-semibold text-white">Research Focus</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Translational AI, radiomics, digital twins, and biologically informed modeling for radiotherapy and radiopharmaceutical therapy.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-2xl bg-white/10 p-4">Predictive Modeling</div>
                <div className="rounded-2xl bg-white/10 p-4">Clinical Translation</div>
                <div className="rounded-2xl bg-white/10 p-4">Dosimetry</div>
                <div className="rounded-2xl bg-white/10 p-4">Explainable AI</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">About</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I am a medical physicist and researcher focused on developing clinically meaningful AI models for oncology. My work combines radiation therapy physics, quantitative imaging, radiomics, dosimetry, and model interpretability to improve decision support in cancer care.
            </p>
          </div>
        </section>

        <section id="research" className="bg-white/[0.03] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold md:text-4xl">Research & Projects</h2>
              <p className="mt-4 text-slate-300">Selected areas of work and scientific interest.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-7 text-white shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-2xl">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/[0.03] px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center shadow-2xl md:p-12">
            <h2 className="text-3xl font-bold md:text-4xl">Let’s connect</h2>
            <p className="mt-4 text-slate-300">
              For collaborations, research discussions, or professional opportunities, please reach out.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <span className="rounded-full bg-white/10 px-4 py-2">✉️ hamidrbp60@gmail.com</span>
              <span className="rounded-full bg-white/10 px-4 py-2">📍 Canada</span>
              <span className="rounded-full bg-white/10 px-4 py-2">LinkedIn</span>
              <span className="rounded-full bg-white/10 px-4 py-2">https://scholar.google.com/citations?user=uWIpnHwAAAAJ&hl=en </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Dr. Hamid Abdollahi. All rights reserved.
      </footer>
    </div>
  );
}
