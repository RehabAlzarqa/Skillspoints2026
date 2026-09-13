"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES } from "@/lib/mockData";
import { Search, ChevronLeft, ChevronRight, Clock, Coins } from "lucide-react";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Technology",
    "Business",
    "Design",
    "Personal Development",
    "Compliance",
  ];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppLayout activePath="/courses">
      <div className="space-y-6">
        {/* Title Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Micro-Courses Catalog
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Explore micro-courses, earn points, and build skills.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses, topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#4086F4] focus:outline-none shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Sort by:
            </span>
            <select className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none shadow-2xs cursor-pointer">
              <option>Popular</option>
              <option>Newest</option>
              <option>Highest Points</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#4086F4] text-white shadow-2xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Catalog Grid matching mockup styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200/80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              {/* Thumbnail Header */}
              <div className="relative h-44 w-full bg-slate-100 flex items-center justify-center text-3xl">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                  {course.level}
                </span>
                <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                  +{course.points} pts
                </span>
              </div>

              {/* Course Info */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4086F4] mb-1">
                    <span>{course.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Vivid Blue Button matching image */}
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full py-2.5 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-xs rounded-xl text-center block transition shadow-2xs"
                >
                  see the cours
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#4086F4] text-white font-bold text-xs shadow-2xs">
            1
          </button>
          <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">
            2
          </button>
          <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">
            3
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

