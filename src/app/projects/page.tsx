"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed">("all");
  const { ongoing, completed } = projectsData.projects;

  const displayProjects =
    filter === "ongoing"
      ? ongoing.map((p) => ({ ...p, status: "Ongoing" }))
      : filter === "completed"
      ? completed.map((p) => ({ ...p, status: "Completed" }))
      : [
          ...ongoing.map((p) => ({ ...p, status: "Ongoing" })),
          ...completed.map((p) => ({ ...p, status: "Completed" })),
        ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar />

      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            {language === "ceb" ? "Imprastraktura ug Pag-uswag" : "Public Works & Infrastructure Tracker"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {language === "ceb" ? "Tighatud sa mga Dagkong Proyekto sa Davao" : "Davao City Infrastructure Tracker"}
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-light">
            {language === "ceb"
              ? "Pagsunod sa mga mega-proyekto sa transportasyon, tulay sa kadagatan, mga tunel sa kabukiran, ug flood control sa dakbayan."
              : "Monitoring major transportation corridors, marine bridges, mountain tunnels, and public flood mitigation works shaping Davao."}
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        {/* Filter Toggle */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              filter === "all"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            All Projects ({ongoing.length + completed.length})
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              filter === "ongoing"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Ongoing ({ongoing.length})
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              filter === "completed"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Completed ({completed.length})
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${
                        project.status === "Ongoing"
                          ? "bg-amber-500 text-slate-950"
                          : "bg-emerald-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.sector && (
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-900/80 text-white backdrop-blur-xs">
                        {project.sector}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      Target Completion: <span className="text-slate-800 dark:text-slate-200 font-bold">{project.target_completion}</span> &bull; Budget: <span className="text-blue-600 dark:text-blue-400 font-bold">{project.budget}</span>
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual Progress Bar */}
                  {project.progress_percent !== undefined && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-500 dark:text-slate-400">Project Progress</span>
                        <span className={project.progress_percent === 100 ? "text-emerald-500" : "text-amber-500"}>
                          {project.progress_percent}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            project.progress_percent === 100
                              ? "bg-emerald-500"
                              : "bg-gradient-to-r from-amber-500 to-blue-500"
                          }`}
                          style={{ width: `${project.progress_percent}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Milestones Timeline */}
                  {project.milestones && project.milestones.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Key Milestones
                      </span>
                      <div className="space-y-1.5">
                        {project.milestones.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                m.status === "completed" ? "bg-emerald-500" : m.status === "active" ? "bg-amber-400 animate-pulse" : "bg-slate-300 dark:bg-slate-600"
                              }`}></span>
                              <span className={m.status === "completed" ? "line-through text-slate-400 dark:text-slate-500" : "font-medium text-slate-700 dark:text-slate-200"}>
                                {m.title}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">{m.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
