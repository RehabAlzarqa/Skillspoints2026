"use client";

import React from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { ArrowRight, Star, Plus, Gift, Play, Clock } from "lucide-react";

export default function DashboardPage() {
  return (
    <AppLayout activePath="/dashboard">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Main Content - 8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-[#EBF3FF] via-[#E6F0FF] to-[#E0ECFF] rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-blue-100/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-3 z-10 max-w-sm">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Hi Sarah !
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keep learning, share your knowledge, and earn points!
              </p>
            </div>

            {/* Laptop Vector Graphic Illustration */}
            <div className="relative z-10 w-52 sm:w-60 h-36 shrink-0 flex items-center justify-center">
              <div className="relative w-full h-full bg-white/60 backdrop-blur-xs rounded-2xl border border-blue-200/80 p-3 shadow-md flex flex-col justify-between">
                {/* Mock Laptop Screen Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="w-12 h-1 bg-slate-200 rounded-full" />
                </div>
                {/* Screen Content */}
                <div className="flex items-center justify-center my-auto">
                  <div className="w-10 h-10 rounded-full bg-[#4086F4] text-white flex items-center justify-center shadow-md">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                {/* Books stack */}
                <div className="flex justify-between items-end pt-1">
                  <div className="space-y-1">
                    <div className="w-16 h-1.5 bg-blue-500 rounded-full" />
                    <div className="w-20 h-1.5 bg-emerald-500 rounded-full" />
                    <div className="w-14 h-1.5 bg-amber-400 rounded-full" />
                  </div>
                  <span className="text-xl">🎓</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Learning Card */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">My Learning</h2>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-20 h-16 rounded-xl bg-slate-100 border border-slate-200/60 shrink-0 flex items-center justify-center text-slate-400 text-xl font-bold">
                  📘
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 text-base truncate">
                    Sitecore Fundemintell
                  </h3>

                  {/* Progress Bar & Percentage */}
                  <div className="flex items-center gap-3">
                    <div className="w-48 sm:w-56 bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-[#4086F4] h-2 rounded-full"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700">65%</span>
                  </div>
                </div>
              </div>

              <Link
                href="/courses/data-security-basics/lessons/les-3"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition text-center shadow-2xs shrink-0"
              >
                Continue
              </Link>
            </div>
          </div>

          {/* Micro cours available Section */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Micro cours available</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Course 1 */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white flex flex-col justify-between space-y-3">
                <div className="h-32 bg-slate-100 w-full flex items-center justify-center text-slate-300 text-3xl">
                  🖼️
                </div>
                <div className="p-3 pt-0 space-y-3">
                  <div className="bg-slate-100/80 p-2 rounded-xl flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">10 min</span>
                  </div>
                  <Link
                    href="/courses/data-security-basics"
                    className="w-full py-2 bg-[#4086F4] hover:bg-blue-600 text-white text-xs font-bold rounded-xl text-center block transition"
                  >
                    see the cours
                  </Link>
                </div>
              </div>

              {/* Course 2 */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white flex flex-col justify-between space-y-3">
                <div className="h-32 bg-slate-100 w-full flex items-center justify-center text-slate-300 text-3xl">
                  🖼️
                </div>
                <div className="p-3 pt-0 space-y-3">
                  <div className="bg-slate-100/80 p-2 rounded-xl flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">20 min</span>
                  </div>
                  <Link
                    href="/courses/project-management-101"
                    className="w-full py-2 bg-[#4086F4] hover:bg-blue-600 text-white text-xs font-bold rounded-xl text-center block transition"
                  >
                    see the cours
                  </Link>
                </div>
              </div>

              {/* Course 3 */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white flex flex-col justify-between space-y-3">
                <div className="h-32 bg-slate-100 w-full flex items-center justify-center text-slate-300 text-3xl">
                  🖼️
                </div>
                <div className="p-3 pt-0 space-y-3">
                  <div className="bg-slate-100/80 p-2 rounded-xl flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">30 min</span>
                  </div>
                  <Link
                    href="/courses/effective-communication"
                    className="w-full py-2 bg-[#4086F4] hover:bg-blue-600 text-white text-xs font-bold rounded-xl text-center block transition"
                  >
                    see the cours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar Cards - 4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card 1: My Points */}
          <div className="bg-[#EBF3FF] rounded-2xl md:rounded-3xl p-6 border border-blue-100 space-y-4 shadow-2xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4086F4] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                ★
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">My Points</h3>
                <p className="text-2xl font-extrabold text-[#4086F4] mt-0.5">
                  120 Points
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Learn and earn exclusive rewards.
            </p>

            <Link
              href="/rewards"
              className="w-full py-2.5 px-4 bg-white/90 hover:bg-white border border-[#4086F4]/40 text-[#4086F4] font-bold text-xs rounded-xl flex items-center justify-between transition shadow-2xs cursor-pointer"
            >
              <span>See the points</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Create micro course */}
          <div className="bg-[#EBF3FF] rounded-2xl md:rounded-3xl p-6 border border-blue-100 space-y-4 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-base text-center">
              Create micro course
            </h3>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-200/80 text-[#4086F4] flex items-center justify-center shadow-2xs">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                Share your knowledge by creating your own micro-course.
              </p>
            </div>

            <Link
              href="/create-course"
              className="w-full py-2.5 px-4 bg-white/90 hover:bg-white border border-[#4086F4]/40 text-[#4086F4] font-bold text-xs rounded-xl flex items-center justify-between transition shadow-2xs cursor-pointer"
            >
              <span>Create micro course</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Reward */}
          <div className="bg-gradient-to-br from-[#FFF9E6] via-[#FFF5D6] to-[#FFEAA7] rounded-2xl md:rounded-3xl p-6 border border-amber-200/80 space-y-4 shadow-2xs relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base">Reward</h3>

              {/* 3D Gift Graphic Illustration */}
              <div className="w-20 h-20 text-4xl flex items-center justify-center shrink-0">
                🎁
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-[190px]">
              Redeem your points for exclusive rewards.
            </p>

            <Link
              href="/rewards"
              className="w-full py-2.5 px-4 bg-white/70 hover:bg-white border border-amber-300 text-amber-900 font-bold text-xs rounded-xl flex items-center justify-between transition shadow-2xs cursor-pointer"
            >
              <span>See your Reward</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}