export default function AcademicWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7">
          <div className="text-xl font-bold text-slate-900">Hamid Abdollahi</div>
          <nav className="flex gap-10 text-lg text-slate-600">
            <a href="#publications" className="hover:text-teal-700">Publications</a>
            <a href="#research" className="hover:text-teal-700">Research</a>
            <a href="#awards" className="hover:text-teal-700">Awards</a>
            <a href="#service" className="hover:text-teal-700">Service</a>
            <a href="#teaching" className="hover:text-teal-700">Teaching</a>
            <a href="#mentorship" className="hover:text-teal-700">Mentorship</a>
            <a href="/cv.pdf" className="border border-blue-600 px-3 py-2 text-blue-700 hover:bg-blue-50">CV</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-[300px_1fr]">
        <aside className="text-center">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl bg-slate-200 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Hamid Abdollahi"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="mt-7 text-2xl font-bold text-slate-900">Hamid Abdollahi</h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Medical Physicist<br />
            AI, Radiomics, Digital Twins, and Radiation Oncology
          </p>

          <p className="mt-3 text-lg leading-7 text-teal-700">
            Research Associate / Medical Physics Researcher<br />
            Canada
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <a href="mailto:your.email@example.com" className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-xl hover:bg-slate-300">✉️</a>
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-xl hover:bg-slate-300">in</a>
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-xl hover:bg-slate-300">G</a>
            <a href="/cv.pdf" className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-xl hover:bg-slate-300">🎓</a>
          </div>

          <div className="mt-8">
            <p className="font-bold tracking-wide text-slate-400">QUICK LINKS</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a href="#research" className="rounded-full border border-teal-700 px-4 py-2 font-semibold text-teal-700 hover:bg-teal-50">Research</a>
              <a href="#publications" className="rounded-full border border-teal-700 px-4 py-2 font-semibold text-teal-700 hover:bg-teal-50">Papers</a>
              <a href="#projects" className="rounded-full border border-teal-700 px-4 py-2 font-semibold text-teal-700 hover:bg-teal-50">Projects</a>
              <a href="#contact" className="rounded-full border border-teal-700 px-4 py-2 font-semibold text-teal-700 hover:bg-teal-50">Contact</a>
            </div>
          </div>
        </aside>

        <section className="max-w-4xl text-[22px] leading-[1.75] text-slate-800">
          <p>
            I am a medical physicist and researcher working at the intersection of radiation oncology, quantitative imaging, radiomics, artificial intelligence, and radiopharmaceutical therapy. My work focuses on developing interpretable and clinically meaningful AI tools for precision oncology, including outcome prediction, treatment response modeling, dosimetry, and patient-specific decision support.
          </p>

          <p className="mt-8">
            My research spans radiomics, machine learning, deep learning, digital twins, time–activity curve modeling, PBPK-based simulation, and biologically informed dosimetry metrics such as BED and EQD2. I am especially interested in connecting imaging biomarkers, patient-specific modeling, and adaptive radiation therapy workflows to support more personalized cancer care.
          </p>

          <p className="mt-8">
            Beyond research, I am committed to education, mentorship, and scientific collaboration. I have experience in medical physics research, treatment planning, clinical quality assurance, model development, and manuscript writing, with a strong interest in making AI methods transparent, reproducible, and clinically useful.
          </p>

          <section id="research" className="mt-14">
            <h2 className="mb-5 text-4xl font-bold text-slate-900">Research</h2>
            <div className="space-y-5 text-xl leading-8">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700">AI-Enabled Radiomics and Outcome Modeling</h3>
                <p className="mt-3 text-slate-600">Development and validation of machine learning models for response prediction, survival analysis, and imaging biomarker discovery in oncology.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700">Radiopharmaceutical Therapy Dosimetry</h3>
                <p className="mt-3 text-slate-600">Predictive dosimetry using time–activity curves, PBPK simulation, absorbed dose, BED, EQD2, and explainable AI models.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700">Digital Twins in Radiation Oncology</h3>
                <p className="mt-3 text-slate-600">Patient-specific modeling frameworks for adaptive therapy, virtual trials, and biologically informed precision radiotherapy.</p>
              </div>
            </div>
          </section>

          <section id="publications" className="mt-14">
            <h2 className="mb-5 text-4xl font-bold text-slate-900">Selected Publications</h2>
            <ul className="list-disc space-y-4 pl-7 text-xl leading-8 text-slate-700">
              <li>Multimodality radiomics modeling for oncology outcome prediction.</li>
              <li>AI-based predictive dosimetry for radiopharmaceutical therapy.</li>
              <li>Digital twins and biologically informed adaptive radiotherapy.</li>
            </ul>
          </section>

          <section id="teaching" className="mt-14">
            <h2 className="mb-5 text-4xl font-bold text-slate-900">Teaching & Mentorship</h2>
            <p>
              I am interested in supporting students, residents, and early-career researchers in medical physics, radiomics, AI in oncology, research design, scientific writing, and reproducible computational workflows.
            </p>
          </section>

          <section id="contact" className="mt-14 rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Contact</h2>
            <p className="text-xl text-slate-700">
              For collaboration, research discussion, or professional opportunities, please contact me by email or through LinkedIn.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
