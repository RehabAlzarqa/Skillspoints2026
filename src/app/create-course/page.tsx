"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import {
  FileText,
  ListVideo,
  Settings,
  CheckCircle,
  Upload,
  ArrowRight,
  X,
  Image as ImageIcon,
} from "lucide-react";

export default function CreateCoursePage() {
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const steps = [
    { id: 1, title: "Basic Information", active: true, icon: FileText },
    { id: 2, title: "Content & Lessons", active: false, icon: ListVideo },
    { id: 3, title: "Settings & Points", active: false, icon: Settings },
    { id: 4, title: "Review & Publish", active: false, icon: CheckCircle },
  ];

  return (
    <AppLayout activePath="/create-course">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Create New Course
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Step 1 of 4: Enter fundamental course details.
            </p>
          </div>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stepper Navigation Sidebar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 h-fit space-y-1">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-xl text-xs font-semibold transition ${
                    step.active
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step.active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {step.id}
                  </div>
                  <span>{step.title}</span>
                </div>
              );
            })}
          </div>

          {/* Form Content (Right 3 cols) */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Course Title Field */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Course Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Effective Communication"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Short Description Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <span className="text-[11px] text-slate-400">
                  {description.length}/500
                </span>
              </div>
              <textarea
                rows={4}
                placeholder="Describe what learners will gain from this course..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={500}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none transition resize-none"
              />
            </div>

            {/* Category & Level Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="">Select category</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Design">Design</option>
                  <option value="Personal Development">Personal Development</option>
                  <option value="Compliance">Compliance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Thumbnail Uploader Dropzone */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Thumbnail Image
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50 hover:bg-blue-50/40 hover:border-blue-300 transition cursor-pointer flex flex-col items-center justify-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Upload Image
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    PNG, JPG up to 5MB (16:9 ratio recommended)
                  </p>
                </div>
              </div>
            </div>

            {/* Form Footer Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <Link
                href="/dashboard"
                className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition"
              >
                Cancel
              </Link>
              <Link
                href="/create-course/editor"
                className="inline-flex items-center gap-2 px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/20"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
