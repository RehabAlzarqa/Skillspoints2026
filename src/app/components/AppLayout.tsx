"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CURRENT_USER } from "@/lib/mockData";

interface AppLayoutProps {
  children: React.ReactNode;
  activePath?: string;
}

export default function AppLayout({ children, activePath }: AppLayoutProps) {
  const pathname = usePathname();
  const currentPath = activePath || pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Micro-Courses", href: "/courses" },
    { name: "Rewards", href: "/rewards" },
    { name: "My Learning", href: "/my-learning" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/dashboard" className="shrink-0">
            <Image
              src="/images/skillspoints-logo.png"
              alt="SkillsPoints"
              width={150}
              height={50}
              priority
              className="h-auto w-[145px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {mainNavItems.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== "/dashboard" &&
                  currentPath.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-base font-medium transition ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[var(--color-primary)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Points */}
            <Link
              href="/rewards"
              className="hidden items-center gap-2 rounded-full bg-[var(--color-light-blue)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] sm:flex"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-orange)] text-[10px] text-white">
                ★
              </span>

              <span>{CURRENT_USER.points} pts</span>
            </Link>

            {/* Profile */}
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 transition hover:bg-slate-50"
            >
              <Image
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />

              <span className="hidden pr-2 text-sm font-medium text-[var(--color-text-primary)] sm:block">
                Sarah
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[var(--color-text-primary)] md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {mainNavItems.map((item) => {
                const isActive =
                  currentPath === item.href ||
                  (item.href !== "/dashboard" &&
                    currentPath.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-[var(--color-light-blue)] text-[var(--color-primary)]"
                        : "text-[var(--color-text-primary)] hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/create-course"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-lg bg-[var(--color-primary)] px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Create Course
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-8">{children}</main>
    </div>
  );
}