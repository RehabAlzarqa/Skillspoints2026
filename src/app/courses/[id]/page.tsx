"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES, LESSONS_DATA } from "@/lib/mockData";
import {
  ChevronRight,
  Clock,
  Coins,
  CheckCircle2,
  Bookmark,
  Play,
  Award,
  Globe,
  BarChart,
  UserCheck,
} from "lucide-react";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id || "data-security-basics";
  const course =
    COURSES.find((c) => c.id === courseId) || COURSES[0];

  const [activeTab, setActiveTab] = useState<"overview" | "lessons" | "reviews">(
    "overview"
  );
  const [saved, setSaved] = useState(false);

  const overviewRef = React.useRef<HTMLDivElement>(null);
  const lessonsRef = React.useRef<HTMLDivElement>(null);
  const reviewsRef = React.useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: "overview" | "lessons" | "reviews") => {
    setActiveTab(tab);
    if (tab === "overview" && overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (tab === "lessons" && lessonsRef.current) {
      lessonsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (tab === "reviews" && reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppLayout activePath="/courses">
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/courses" className="hover:text-slate-800 transition">
            Browse Courses
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-slate-800 transition cursor-pointer">
            {course.category}
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold truncate">
            {course.title}
          </span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Banner Illustration */}
            <div className="relative h-56 lg:h-auto bg-gradient-to-br from-blue-600 to-indigo-800 p-8 flex items-center justify-center text-white overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="relative z-10 text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto shadow-lg">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <p className="text-xs font-semibold tracking-wider uppercase opacity-90">
                  Interactive Course
                </p>
              </div>
            </div>

            {/* Course Overview Details */}
            <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    {course.level}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {course.title}
                </h1>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Instructor & Metadata */}
                <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {course.instructor.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {course.instructor.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-600">
                      <Coins className="w-4 h-4 fill-amber-500 text-amber-600" />
                      <span>{course.points} pts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={`/courses/${course.id}/lessons/les-3`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/20"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Course</span>
                </Link>
                <button
                  onClick={() => setSaved(!saved)}
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition cursor-pointer ${
                    saved
                      ? "bg-slate-100 border-slate-300 text-blue-600"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${saved ? "fill-blue-600" : ""}`} />
                  <span>{saved ? "Saved" : "Save"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-t border-slate-200 px-6 flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              onClick={() => handleTabClick("overview")}
              className={`py-4 border-b-2 transition cursor-pointer ${
                activeTab === "overview"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-slate-900"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("lessons")}
              className={`py-4 border-b-2 transition cursor-pointer ${
                activeTab === "lessons"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-slate-900"
              }`}
            >
              Lessons ({LESSONS_DATA.length})
            </button>
            <button
              onClick={() => handleTabClick("reviews")}
              className={`py-4 border-b-2 transition cursor-pointer ${
                activeTab === "reviews"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-slate-900"
              }`}
            >
              Reviews (24)
            </button>
          </div>
        </div>

        {/* Tab Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* About this course */}
            <div
              ref={overviewRef}
              className="scroll-mt-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-4"
            >
              <h2 className="text-lg font-bold text-slate-900">
                About this course
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                This course introduces key data security concepts, best practices, and actionable advice you can follow to keep information safe in modern workplace environments.
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-sm font-bold text-slate-900">What you&apos;ll learn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Understand data security principles",
                    "Identify common threats and risks",
                    "Practice safe data handling",
                    "Respond to security incidents",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lessons preview list */}
            <div
              ref={lessonsRef}
              className="scroll-mt-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-4"
            >
              <h2 className="text-lg font-bold text-slate-900">
                Lessons ({LESSONS_DATA.length})
              </h2>
              <div className="space-y-2">
                {LESSONS_DATA.map((les) => (
                  <Link
                    key={les.id}
                    href={`/courses/${course.id}/lessons/${les.id}`}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-200 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        les.completed ? "bg-emerald-100 text-emerald-600" : "bg-blue-100 text-blue-600"
                      }`}>
                        {les.completed ? <CheckCircle2 className="w-4 h-4" /> : <Play className="w-3.5 h-3.5 fill-blue-600 ml-0.5" />}
                      </div>
                      <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition">
                        {les.title}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      {les.duration}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Reviews list */}
            <div
              ref={reviewsRef}
              className="scroll-mt-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">
                  Reviews (24)
                </h2>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <span>★ 4.9</span>
                  <span className="text-slate-400 font-normal">(24 ratings)</span>
                </div>
              </div>
              <div className="space-y-3 divide-y divide-slate-100">
                {[
                  { name: "John Miller", role: "Product Manager", comment: "Great overview of essential security practices. Concise and actionable!" },
                  { name: "Emily Watson", role: "UX Designer", comment: "Very practical lessons with interactive quizzes. Highly recommended!" }
                ].map((rev, idx) => (
                  <div key={idx} className={`${idx > 0 ? "pt-3" : ""} space-y-1`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">{rev.name}</span>
                      <span className="text-amber-500">★★★★★</span>
                    </div>
                    <p className="text-xs text-slate-600">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Right Sidebar Metadata */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
                Course Information
              </h3>
              <div className="space-y-3.5 text-xs font-medium">
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-slate-400" /> Level
                  </span>
                  <span className="font-bold text-slate-900">{course.level}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-400" /> Language
                  </span>
                  <span className="font-bold text-slate-900">English</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-slate-400" /> Certificate
                  </span>
                  <span className="font-bold text-slate-900">Yes</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-500 fill-amber-400" /> Points
                  </span>
                  <span className="font-bold text-amber-600">{course.points} pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
