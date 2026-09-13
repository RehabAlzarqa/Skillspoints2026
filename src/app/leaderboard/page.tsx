"use client";

import React, { useState } from "react";
import AppLayout from "@/app/components/AppLayout";
import { LEADERBOARD, CURRENT_USER } from "@/lib/mockData";
import { Trophy, Medal, Award, Flame, ChevronRight } from "lucide-react";

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"week" | "month">("week");

  return (
    <AppLayout activePath="/leaderboard">
      <div className="space-y-6">
        {/* Header with Rank Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Leaderboard
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              See how you rank among your colleagues.
            </p>
          </div>

          {/* User Rank Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-4 flex items-center gap-4 shadow-md shadow-blue-500/20">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-bold text-lg">
              #{CURRENT_USER.rank}
            </div>
            <div>
              <p className="text-[11px] text-blue-100 font-semibold uppercase tracking-wider">
                My Rank
              </p>
              <p className="text-base font-extrabold">
                {CURRENT_USER.points.toLocaleString()} pts
              </p>
            </div>
          </div>
        </div>

        {/* Timeframe Toggle Tabs */}
        <div className="flex items-center gap-2 bg-slate-200/60 p-1 rounded-xl w-fit text-xs font-bold">
          <button
            onClick={() => setTimeframe("week")}
            className={`px-4 py-2 rounded-lg transition cursor-pointer ${
              timeframe === "week"
                ? "bg-white text-slate-900 shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setTimeframe("month")}
            className={`px-4 py-2 rounded-lg transition cursor-pointer ${
              timeframe === "month"
                ? "bg-white text-slate-900 shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            This Month
          </button>
        </div>

        {/* Leaderboard Table Container */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-100">
            {LEADERBOARD.map((user) => {
              const isTop3 = user.rank <= 3;
              return (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 sm:p-5 transition ${
                    user.isCurrentUser
                      ? "bg-blue-50/80 font-bold border-l-4 border-l-blue-600"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {/* Left: Rank & User Info */}
                  <div className="flex items-center gap-4">
                    {/* Rank Indicator */}
                    <div className="w-8 text-center flex justify-center">
                      {user.rank === 1 ? (
                        <span className="text-xl">🥇</span>
                      ) : user.rank === 2 ? (
                        <span className="text-xl">🥈</span>
                      ) : user.rank === 3 ? (
                        <span className="text-xl">🥉</span>
                      ) : (
                        <span className="text-sm font-bold text-slate-500">
                          #{user.rank}
                        </span>
                      )}
                    </div>

                    {/* Avatar & Name */}
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />

                    <div>
                      <h3
                        className={`text-sm font-bold ${
                          user.isCurrentUser ? "text-blue-700" : "text-slate-900"
                        }`}
                      >
                        {user.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs mt-0.5">
                        {user.badges.map((b, i) => (
                          <span key={i}>{b}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Points */}
                  <div className="text-right">
                    <span className="text-sm sm:text-base font-extrabold text-slate-900">
                      {user.points.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block font-normal">
                      pts
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
              <span>View full leaderboard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
