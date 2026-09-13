"use client";

import React, { useState } from "react";
import AppLayout from "@/app/components/AppLayout";
import { NOTIFICATIONS, NotificationItem } from "@/lib/mockData";
import {
  Bell,
  CheckCircle2,
  Coins,
  Gift,
  Sparkles,
  BookOpen,
  CheckCheck,
} from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    NOTIFICATIONS
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filters = ["All", "Unread (4)", "Courses", "Points", "Rewards", "System"];

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const filteredNotifications = notifications.filter((n) => {
    if (selectedFilter === "Unread (4)") return n.unread;
    if (selectedFilter === "Courses") return n.type === "courses";
    if (selectedFilter === "Points") return n.type === "points";
    if (selectedFilter === "Rewards") return n.type === "rewards";
    if (selectedFilter === "System") return n.type === "system";
    return true;
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "courses":
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case "points":
        return <Coins className="w-5 h-5 text-amber-500 fill-amber-400" />;
      case "rewards":
        return <Gift className="w-5 h-5 text-purple-600" />;
      default:
        return <Bell className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <AppLayout activePath="/notifications">
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Notifications
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Stay updated with your learning activity.
            </p>
          </div>

          <button
            onClick={handleMarkAllRead}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
          >
            <CheckCheck className="w-4 h-4" />
            <span>Mark all as read</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedFilter === filter
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs divide-y divide-slate-100">
          {filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 sm:p-5 flex items-start justify-between gap-4 transition ${
                notif.unread ? "bg-blue-50/40" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60 mt-0.5">
                  {getNotificationIcon(notif.type)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      {notif.title}
                    </h3>
                    {notif.unread && (
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {notif.description}
                  </p>
                  <span className="text-[11px] text-slate-400 font-medium block">
                    {notif.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
