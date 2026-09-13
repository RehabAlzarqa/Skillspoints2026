"use client";

import React, { useState } from "react";
import AppLayout from "@/app/components/AppLayout";
import { CURRENT_USER } from "@/lib/mockData";
import {
  User,
  Sliders,
  Bell,
  Lock,
  Award,
  BookOpen,
  Coins,
  Save,
  Check,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "preferences" | "notifications" | "security">(
    "profile"
  );

  const [fullName, setFullName] = useState(CURRENT_USER.name);
  const [email, setEmail] = useState(CURRENT_USER.email);
  const [department, setDepartment] = useState(CURRENT_USER.department);
  const [jobTitle, setJobTitle] = useState(CURRENT_USER.jobTitle);
  const [bio, setBio] = useState(CURRENT_USER.bio);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AppLayout activePath="/settings">
      <div className="space-y-6">
        {/* Title Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Profile & Settings
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your personal profile, credentials, and notifications.
          </p>
        </div>

        {/* Header Tabs */}
        <div className="flex items-center gap-6 border-b border-slate-200 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 border-b-2 transition cursor-pointer ${
              activeTab === "profile"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`pb-3 border-b-2 transition cursor-pointer ${
              activeTab === "preferences"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Preferences
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`pb-3 border-b-2 transition cursor-pointer ${
              activeTab === "notifications"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`pb-3 border-b-2 transition cursor-pointer ${
              activeTab === "security"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Security
          </button>
        </div>

        {/* Profile Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Profile Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 shadow-2xs h-fit">
            <img
              src={CURRENT_USER.avatar}
              alt={CURRENT_USER.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-50 shadow-md"
            />
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">
                {CURRENT_USER.name}
              </h2>
              <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                {CURRENT_USER.role}
              </span>
              <p className="text-xs text-slate-400 mt-2">
                Joined {CURRENT_USER.joinedDate}
              </p>
            </div>

            {/* User Stats Grid */}
            <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-slate-100 text-center">
              <div>
                <p className="text-lg font-bold text-slate-900">
                  {CURRENT_USER.completedCourses}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">Courses</p>
              </div>
              <div>
                <p className="text-lg font-bold text-amber-600">
                  {CURRENT_USER.points.toLocaleString()}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">Points</p>
              </div>
              <div>
                <p className="text-lg font-bold text-purple-600">
                  {CURRENT_USER.badgesCount}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">Badges</p>
              </div>
            </div>

            <button className="w-full py-2.5 bg-slate-50 border border-slate-200 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50 transition cursor-pointer">
              View my achievements
            </button>
          </div>

          {/* Right Column: Edit Personal Information Form */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900">
                Personal Information
              </h3>
              {saved && (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <Check className="w-4 h-4" /> Changes saved!
                </span>
              )}
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Department
                  </label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
