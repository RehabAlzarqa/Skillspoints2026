"use client";

import React from "react";
import {
  Lightbulb,
  BookOpen,
  MessageSquare,
  TrendingUp,
  FileSpreadsheet,
  Layers,
  MessageCircle,
  ClipboardList,
  Code2,
  Users,
  Play,
  Home,
  Video,
  FileText,
  BarChart2,
  Award,
  User,
} from "lucide-react";

export default function AuthRightPanel() {
  return (
    <div className="hidden lg:flex relative flex-col items-center justify-between p-8 xl:p-12 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-blue-100/60 overflow-hidden min-h-[680px]">
      {/* Decorative Grid Dots Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#3B82F6 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Cloud Top Right */}
      <div className="absolute top-6 right-10 w-32 h-12 bg-white/60 backdrop-blur-xs rounded-full blur-xs opacity-70 pointer-events-none" />

      {/* Floating Badges */}
      {/* 1. Lightbulb Badge Top-Left */}
      <div className="absolute top-12 left-12 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-500/10 animate-bounce transition-transform duration-1000">
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md">
          <Lightbulb className="w-5 h-5" />
        </div>
      </div>

      {/* 2. Book Badge Top-Right */}
      <div className="absolute top-16 right-12 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
          <BookOpen className="w-5 h-5" />
        </div>
      </div>

      {/* 3. Message Badge Mid-Left */}
      <div className="absolute top-1/3 left-6 w-12 h-12 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
        <div className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center shadow-md">
          <MessageSquare className="w-5 h-5" />
        </div>
      </div>

      {/* 4. Trending Badge Mid-Right */}
      <div className="absolute top-1/2 right-6 w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shadow-lg shadow-amber-500/10">
        <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
          <TrendingUp className="w-5 h-5" />
        </div>
      </div>

      {/* Dashboard Preview Browser Mockup Window */}
      <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl border border-blue-200/80 shadow-xl overflow-hidden z-10 mt-6">
        {/* Top Browser Bar */}
        <div className="px-4 py-2.5 bg-blue-100/60 border-b border-blue-200/60 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>

        <div className="p-4 grid grid-cols-12 gap-3">
          {/* Mini Sidebar */}
          <div className="col-span-2 flex flex-col items-center gap-3 py-2 text-blue-500 border-r border-slate-100">
            <Home className="w-4 h-4 text-blue-600" />
            <Video className="w-4 h-4 text-slate-400" />
            <FileText className="w-4 h-4 text-slate-400" />
            <BarChart2 className="w-4 h-4 text-slate-400" />
            <Award className="w-4 h-4 text-slate-400" />
            <User className="w-4 h-4 text-slate-400" />
          </div>

          {/* Mini Dashboard Content */}
          <div className="col-span-10 space-y-3">
            {/* Top Video Preview Header */}
            <div className="flex gap-2">
              <div className="flex-1 bg-blue-100/70 rounded-xl p-4 flex items-center justify-center relative min-h-[70px]">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
              <div className="w-1/3 space-y-1.5 py-1">
                <div className="h-2 bg-blue-200 rounded-full w-full" />
                <div className="h-2 bg-slate-200 rounded-full w-3/4" />
                <div className="h-2 bg-slate-200 rounded-full w-4/5" />
              </div>
            </div>

            {/* 6 Micro Course Tiles */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              {/* Tile 1: Excel */}
              <div className="bg-emerald-50/70 border border-emerald-200/50 rounded-xl p-2 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-700 mt-1">Excel</span>
              </div>

              {/* Tile 2: Sitecore */}
              <div className="bg-purple-50/70 border border-purple-200/50 rounded-xl p-2 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-700 mt-1">Sitecore</span>
              </div>

              {/* Tile 3: Communication */}
              <div className="bg-blue-50/70 border border-blue-200/50 rounded-xl p-2 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-700 mt-1">Communication</span>
              </div>

              {/* Tile 4: Project Management */}
              <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-2 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
                  <ClipboardList className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-700 mt-1">Gestion de projet</span>
              </div>

              {/* Tile 5: Tools & Tech */}
              <div className="bg-sky-50/70 border border-sky-200/50 rounded-xl p-2 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-700 mt-1">Outils & Tech</span>
              </div>

              {/* Tile 6: Soft Skills */}
              <div className="bg-pink-50/70 border border-pink-200/50 rounded-xl p-2 text-center flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-bold text-slate-700 mt-1">Soft skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vector Illustration of 4 Colleagues Collaborating Around Laptop */}
      <div className="relative w-full max-w-lg mt-4 z-20 flex justify-center">
        <svg
          viewBox="0 0 500 240"
          className="w-full h-auto drop-shadow-md overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Desk Surface */}
          <path
            d="M20 220 C 150 215, 350 215, 480 220 L 500 240 L 0 240 Z"
            fill="#E2E8F0"
          />

          {/* Plant Left */}
          <g transform="translate(15, 170)">
            <path d="M15 50 L25 50 L22 30 L18 30 Z" fill="#94A3B8" />
            <path d="M12 30 Q5 15 15 5 Q25 15 20 30 Z" fill="#4ADE80" />
            <path d="M20 30 Q30 20 28 8 Q15 18 20 30 Z" fill="#22C55E" />
          </g>

          {/* Coffee Cup Right */}
          <g transform="translate(450, 185)">
            <rect x="0" y="5" width="18" height="24" rx="4" fill="#93C5FD" />
            <path d="M18 10 C22 10 22 20 18 20" stroke="#93C5FD" strokeWidth="3" fill="none" />
          </g>

          {/* Books Under Laptop */}
          <g transform="translate(385, 195)">
            <rect x="0" y="8" width="32" height="6" rx="2" fill="#3B82F6" />
            <rect x="2" y="0" width="30" height="7" rx="2" fill="#38BDF8" />
          </g>

          {/* Laptop Open */}
          <g transform="translate(310, 170)">
            {/* Screen */}
            <rect x="15" y="0" width="55" height="38" rx="4" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
            <rect x="18" y="3" width="49" height="32" rx="2" fill="#F8FAFC" />
            <circle cx="42.5" cy="19" r="4" fill="#3B82F6" />
            {/* Keyboard Base */}
            <path d="M0 38 L85 38 L75 48 L10 48 Z" fill="#94A3B8" />
          </g>

          {/* Person 1 (Far Left Woman in Blue) */}
          <g transform="translate(70, 70)">
            {/* Hair */}
            <path d="M15 15 C 5 25, 5 60, 10 90 C 25 90, 45 85, 50 60 C 50 30, 40 10, 25 10 Z" fill="#1E293B" />
            {/* Head */}
            <circle cx="30" cy="30" r="16" fill="#FDE68A" />
            {/* Smile & Eyes */}
            <circle cx="34" cy="28" r="1.5" fill="#1E293B" />
            <path d="M30 35 Q 34 38 37 35" stroke="#1E293B" strokeWidth="1.5" fill="none" />
            {/* Body */}
            <path d="M10 65 C 10 50, 20 46, 30 46 C 40 46, 50 50, 50 65 L 48 120 L 12 120 Z" fill="#93C5FD" />
            {/* Arm pointing */}
            <path d="M42 60 Q 60 55 65 35" stroke="#FDE68A" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>

          {/* Person 2 (Man with Glasses & Blue Shirt) */}
          <g transform="translate(165, 50)">
            {/* Hair */}
            <path d="M15 15 Q 30 2, 45 15 L 45 25 Q 30 20 15 25 Z" fill="#0F172A" />
            {/* Head */}
            <circle cx="30" cy="30" r="16" fill="#FED7AA" />
            {/* Glasses */}
            <circle cx="25" cy="28" r="4.5" stroke="#0F172A" strokeWidth="1.5" fill="none" />
            <circle cx="35" cy="28" r="4.5" stroke="#0F172A" strokeWidth="1.5" fill="none" />
            <line x1="29.5" y1="28" x2="30.5" y2="28" stroke="#0F172A" strokeWidth="1.5" />
            {/* Body */}
            <path d="M5 65 C 5 50, 18 46, 30 46 C 42 46, 55 50, 55 65 L 53 140 L 7 140 Z" fill="#60A5FA" />
          </g>

          {/* Person 3 (Woman in White Top) */}
          <g transform="translate(265, 75)">
            {/* Long Hair */}
            <path d="M10 15 C 0 30, 0 70, 10 100 C 25 100, 40 90, 45 70 C 45 30, 35 10, 25 10 Z" fill="#78350F" />
            {/* Head */}
            <circle cx="28" cy="28" r="15" fill="#FDE68A" />
            {/* Face details */}
            <circle cx="32" cy="26" r="1.5" fill="#1E293B" />
            <path d="M28 32 Q 32 35 35 32" stroke="#1E293B" strokeWidth="1.5" fill="none" />
            {/* White Sweater Body */}
            <path d="M10 60 C 10 48, 20 44, 28 44 C 36 44, 46 48, 46 60 L 44 110 L 12 110 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          </g>

          {/* Person 4 (Man in Blue Hoodie) */}
          <g transform="translate(350, 60)">
            {/* Short Dark Hair */}
            <path d="M15 15 Q 30 5, 45 15 L 45 26 Q 30 20 15 26 Z" fill="#1E293B" />
            {/* Head */}
            <circle cx="30" cy="30" r="16" fill="#FDBA74" />
            {/* Smile */}
            <circle cx="25" cy="28" r="1.5" fill="#1E293B" />
            <path d="M24 34 Q 28 37 32 34" stroke="#1E293B" strokeWidth="1.5" fill="none" />
            {/* Hoodie Body */}
            <path d="M5 65 C 5 50, 18 46, 30 46 C 42 46, 55 50, 55 65 L 53 130 L 7 130 Z" fill="#2563EB" />
          </g>
        </svg>
      </div>
    </div>
  );
}
