"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import {
  ChevronRight,
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  Image as ImageIcon,
  Video,
  Plus,
  Check,
  Save,
  Eye,
  GripVertical,
} from "lucide-react";

export default function LessonEditorPage() {
  const [lessonTitle, setLessonTitle] = useState("Types of Threats");
  const [content, setContent] = useState(
    "In this lesson, we'll explore common types of cyber threats and how they can impact organizations."
  );

  const outlineItems = [
    { id: 1, name: "Introduction", active: false },
    { id: 2, name: "Types of Threats", active: true },
    { id: 3, name: "Phishing", active: false },
    { id: 4, name: "Ransomware", active: false },
  ];

  return (
    <AppLayout activePath="/create-course">
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/create-course" className="hover:text-slate-800 transition">
              Create Course
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Lesson 2</span>
          </nav>

          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <Check className="w-4 h-4" /> Auto-saved
          </span>
        </div>

        {/* Editor Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content & Editor (Left 3 cols) */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Lesson Title Input */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Lesson Title
              </label>
              <input
                type="text"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base font-bold text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Rich Text Editor Module */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Content
              </label>
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50 border-b border-slate-200 text-slate-600">
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg text-xs font-bold">
                    <Bold className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg text-xs font-bold">
                    <Italic className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg text-xs font-bold">
                    <Underline className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-px bg-slate-300 mx-1" />
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg">
                    <List className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg">
                    <ListOrdered className="w-4 h-4" />
                  </button>
                  <div className="h-4 w-px bg-slate-300 mx-1" />
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg">
                    <Quote className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-slate-200/70 rounded-lg">
                    <Code className="w-4 h-4" />
                  </button>
                </div>

                {/* Textarea Area */}
                <textarea
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-4 text-sm text-slate-800 focus:outline-none resize-y"
                />
              </div>
            </div>

            {/* Media Uploaders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Image Upload Box */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <ImageIcon className="w-4 h-4 text-blue-600" />
                  <span>Image</span>
                </div>
                <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-white transition cursor-pointer">
                  <p className="text-xs font-semibold text-blue-600">
                    Change image
                  </p>
                </div>
              </div>

              {/* Video Upload Box */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Video className="w-4 h-4 text-purple-600" />
                  <span>Video (Optional)</span>
                </div>
                <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-white transition cursor-pointer">
                  <p className="text-xs font-semibold text-purple-600">
                    Upload video (MP4 up to 200MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <Link
                href="/create-course"
                className="px-6 py-2.5 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition"
              >
                Cancel
              </Link>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition cursor-pointer">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
                <Link
                  href="/courses/data-security-basics"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Lesson Outline Right Sidebar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 h-fit space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Lesson Outline
            </h3>
            <div className="space-y-2">
              {outlineItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                    item.active
                      ? "bg-blue-50 border-blue-200 text-blue-700 shadow-2xs"
                      : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <GripVertical className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-blue-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50 transition cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>Add Section</span>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
