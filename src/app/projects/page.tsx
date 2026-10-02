"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
            Public Works & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Davao City Infrastructure Tracker
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto">
            Monitoring major transportation corridors, coastal revetments, mountain tunnels, and public utility projects 
            shaping the future of Davao City.
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
                ? "bg-blue-900 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Projects ({ongoing.length + completed.length})
          </button>
          <button
            onClick={() => setFilter("ongoing")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              filter === "ongoing"
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Ongoing ({ongoing.length})
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              filter === "completed"
                ? "bg-emerald-700 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            Completed ({completed.length})
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayProjects.map((project, idx) => {
            const isOngoing = project.status === "Ongoing";
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between overflow-hidden"
              >
                {(project as any).image && (
                  <div className="w-full h-48 bg-slate-200 overflow-hidden relative border-b border-slate-100">
                    <img src={(project as any).image} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                          isOngoing
                            ? "bg-amber-100 text-amber-900 border border-amber-200"
                            : "bg-emerald-100 text-emerald-900 border border-emerald-200"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Project #{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 leading-snug">
                      {project.name}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Location: Davao City Metropolitan Area</span>
                    <span className="text-blue-700 font-semibold">Priority Initiative</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
