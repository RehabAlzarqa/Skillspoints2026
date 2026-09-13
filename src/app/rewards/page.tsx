"use client";

import React, { useState } from "react";
import AppLayout from "@/app/components/AppLayout";
import { REWARDS, CURRENT_USER } from "@/lib/mockData";
import { Search, CheckCircle2, X } from "lucide-react";

export default function RewardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReward, setSelectedReward] = useState<any | null>(null);
  const [redeemed, setRedeemed] = useState(false);

  const categories = [
    "All",
    "Airtime",
    "Vouchers",
    "Gift Cards",
    "Swag",
    "Donations",
  ];

  const filteredRewards = REWARDS.filter((rew) => {
    const matchesCat =
      selectedCategory === "All" || rew.category === selectedCategory;
    const matchesSearch = rew.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleRedeem = (reward: any) => {
    setSelectedReward(reward);
    setRedeemed(true);
  };

  return (
    <AppLayout activePath="/rewards">
      <div className="space-y-6 relative">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rewards Marketplace
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Redeem your points for exclusive rewards.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF3FF] border border-blue-200/80 rounded-full text-[#4086F4] font-extrabold text-sm shadow-2xs">
            <span className="w-5 h-5 rounded-full bg-[#4086F4] text-white flex items-center justify-center text-xs">★</span>
            <span>120 Points</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search rewards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#4086F4] focus:outline-none shadow-2xs"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
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

        {/* Product Grid matching Reward mockup card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-gradient-to-br from-[#FFF9E6] via-[#FFF5D6] to-[#FFEAA7] border border-amber-200/80 rounded-2xl md:rounded-3xl p-6 hover:shadow-md transition flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/70 border border-amber-200 flex items-center justify-center text-3xl shadow-2xs">
                  {reward.image}
                </div>
                <span className="text-xs font-bold text-amber-900 bg-white/80 px-3 py-1 rounded-full border border-amber-300">
                  {reward.points.toLocaleString()} pts
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {reward.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">{reward.category}</p>
              </div>

              <button
                onClick={() => handleRedeem(reward)}
                className="w-full py-2.5 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-xs rounded-xl transition shadow-2xs cursor-pointer"
              >
                Redeem Reward
              </button>
            </div>
          ))}
        </div>

        {/* Redemption Success Modal Overlay */}
        {redeemed && selectedReward && (
          <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setRedeemed(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Redemption Successful!
                </h2>
                <h3 className="text-lg font-bold text-[#4086F4]">
                  {selectedReward.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your reward is on the way. Check your email for details.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-600">
                Reference ID: <span className="font-bold text-slate-900">SP-80941-865D1</span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setRedeemed(false)}
                  className="w-full py-3 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition shadow-2xs cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

