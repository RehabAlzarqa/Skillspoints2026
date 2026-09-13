"use client";

import React, { use } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES } from "@/lib/mockData";
import { Trophy, Coins, ArrowRight, Sparkles, Award, CheckCircle } from "lucide-react";

export default function CourseCompletionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id || "data-security-basics";
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  return (
    <AppLayout activePath="/courses">
      <div className="max-w-4xl mx-auto space-y-10 py-6">
        {/* Celebration Banner Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-md space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-0" />

          {/* Trophy Illustration Container */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-900 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20">
            <Trophy className="w-12 h-12 text-amber-900 stroke-[1.75]" />
          </div>

          <div className="relative z-10 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Congratulations! 🎉
            </h1>
            <p className="text-slate-600 font-medium text-base">
              You&apos;ve completed the course
            </p>
          </div>

          {/* Course Badge Summary */}
          <div className="relative z-10 inline-flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div className="text-left">
              <h3 className="text-sm font-bold text-slate-900">{course.title}</h3>
              <p className="text-xs text-slate-500">
                {course.lessonsCount} Lessons • {course.duration}
              </p>
            </div>
          </div>

          {/* Points Reward Callout */}
          <div className="relative z-10 py-4 max-w-sm mx-auto bg-amber-50 border border-amber-200/80 rounded-2xl">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Total Points Earned
            </span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <Coins className="w-7 h-7 text-amber-500 fill-amber-400" />
              <span className="text-3xl font-extrabold text-amber-700">
                +{course.points} pts
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/rewards"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-blue-500/25"
            >
              <span>Claim Reward</span>
              <Coins className="w-4 h-4 fill-white" />
            </Link>
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
            You might also like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {COURSES.slice(1, 4).map((item) => (
              <Link
                key={item.id}
                href={`/courses/${item.id}`}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-32 w-full bg-slate-100 rounded-xl overflow-hidden mb-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500">{item.level}</span>
                  <span className="text-amber-600 font-bold">{item.points} pts</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
