"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES, LESSONS_DATA } from "@/lib/mockData";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  Volume2,
  Maximize,
  RotateCcw,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function LessonPlayerPage({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>;
}) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id || "data-security-basics";
  const lessonId = resolvedParams.lessonId || "les-3";
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <AppLayout activePath="/my-learning">
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/my-learning" className="hover:text-slate-800 transition">
            My Learning
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/courses/${course.id}`} className="hover:text-slate-800 transition">
            {course.title}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold truncate">
            Phishing Basics
          </span>
        </nav>

        {/* Player Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video Player & Lesson Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Custom Video Canvas */}
            <div className="relative aspect-video w-full bg-slate-900 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between group">
              {/* Simulated Video Canvas background with Phishing illustration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-900 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/20 backdrop-blur-md border border-blue-400/30 flex items-center justify-center mb-4">
                  <span className="text-4xl">📧</span>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl">
                  Recognizing Phishing Emails & Links
                </h3>
                <p className="text-blue-200 text-xs mt-1 max-w-sm">
                  Never click unknown attachments or verify sender domain URLs.
                </p>
              </div>

              {/* Central Play/Pause Overlay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition cursor-pointer z-10"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-white" />
                ) : (
                  <Play className="w-8 h-8 fill-white ml-1" />
                )}
              </button>

              {/* Video Player Control Bar (Bottom) */}
              <div className="relative z-20 bg-gradient-to-t from-slate-950/90 to-transparent p-4 flex flex-col gap-2 opacity-95 group-hover:opacity-100 transition">
                {/* Scrub Bar */}
                <div className="w-full bg-white/30 rounded-full h-1.5 cursor-pointer relative overflow-hidden">
                  <div className="bg-blue-500 h-1.5 rounded-full w-2/3" />
                </div>

                <div className="flex items-center justify-between text-white text-xs font-medium">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-blue-400">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <Volume2 className="w-4 h-4" />
                    <span>06:22 / 10:15</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                    <Maximize className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Title & Actions */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Phishing Basics</h1>
                  <p className="text-xs text-slate-500 mt-1">
                    Learn how phishing attacks work and how to recognize suspicious emails and links.
                  </p>
                </div>

                <button
                  onClick={() => setCompleted(!completed)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                    completed
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{completed ? "Completed" : "Mark as Complete"}</span>
                </button>
              </div>

              {/* Progress Tracker Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-600">
                  <span>Lesson progress</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Link>

                <Link
                  href={`/courses/${course.id}/completed`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-xs"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Course Content Menu */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 h-fit">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900">Course content</h2>
              <span className="text-xs text-slate-400 font-medium">
                {LESSONS_DATA.length} lessons
              </span>
            </div>

            <div className="space-y-2">
              {LESSONS_DATA.map((les, index) => {
                const isActive = les.id === lessonId || les.active;
                return (
                  <Link
                    key={les.id}
                    href={`/courses/${course.id}/lessons/${les.id}`}
                    className={`flex items-start justify-between p-3 rounded-xl border text-xs transition ${
                      isActive
                        ? "bg-blue-50 border-blue-200 font-bold text-blue-700 shadow-2xs"
                        : les.completed
                        ? "bg-slate-50 border-slate-100 text-slate-700"
                        : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {les.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      ) : isActive ? (
                        <Play className="w-4 h-4 text-blue-600 fill-blue-600 shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-4 text-slate-400 font-bold text-center shrink-0">
                          {index + 1}.
                        </span>
                      )}
                      <div>
                        <p className="line-clamp-1">{les.title}</p>
                        <span className="text-[10px] text-slate-400 font-normal mt-0.5 block">
                          {les.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
