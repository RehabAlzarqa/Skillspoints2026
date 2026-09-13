"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Mail, ArrowRight, ArrowRightCircle } from "lucide-react";
import AuthRightPanel from "@/app/components/AuthRightPanel";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useFormik({
    initialValues: { email: "sarah@acme.co", password: "••••••••••" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (values) => {
      setIsLoading(true);


      fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "success") {
            localStorage.setItem("user", JSON.stringify(data.user));
            router.push("/dashboard");
          } else {
            // Fallback for demo: log in directly to dashboard
            localStorage.setItem(
              "user",
              JSON.stringify({ name: "Sarah", email: values.email })
            );
            router.push("/dashboard");
          }
          setIsLoading(false);
        })
        .catch(() => {
          // Demo fallback
          localStorage.setItem(
            "user",
            JSON.stringify({ name: "Sarah", email: values.email })
          );
          router.push("/dashboard");
          setIsLoading(false);
        });
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 lg:p-6 xl:p-10 font-sans">
      <div className="w-full max-w-6xl bg-white lg:rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left Form Panel */}
        <div className="col-span-1 lg:col-span-6 xl:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            {/* Logo Brand Header */}
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="relative w-11 h-11 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-blue-600 absolute top-0 left-0 opacity-90" />
                  <div className="w-6 h-6 rounded-full bg-emerald-500 absolute top-0 right-0 opacity-90" />
                  <div className="w-6 h-6 rounded-full bg-amber-400 absolute bottom-0 left-2 opacity-90" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                    Skills<span className="text-blue-600">Points</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 tracking-wide mt-0.5 flex items-center gap-1">
                    <span>Learn</span>
                    <span className="text-blue-500">•</span>
                    <span>Share</span>
                    <span className="text-emerald-500">•</span>
                    <span>Earn</span>
                    <span className="text-amber-500">•</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Segmented Toggle Switch */}
            <div className="bg-slate-100/90 border border-slate-200/60 p-1.5 rounded-2xl flex items-center mb-8">
              <Link
                href="/signup"
                className="flex-1 py-2.5 text-center text-sm font-semibold text-slate-400 hover:text-slate-700 transition"
              >
                sign up
              </Link>
              <div className="flex-1 py-2.5 text-center text-sm font-extrabold text-slate-900 bg-white rounded-xl shadow-xs border border-slate-200/50">
                sign in
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={form.handleSubmit} className="space-y-5">
              {/* Email Address Field */}
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-800">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="sarah@acme.co"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                  />
                </div>
                {form.touched.email && form.errors.email && (
                  <p className="text-red-500 text-xs font-semibold mt-1">
                    {form.errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-800">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.values.password}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="••••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                />
                {form.touched.password && form.errors.password && (
                  <p className="text-red-500 text-xs font-semibold mt-1">
                    {form.errors.password}
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-base rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition mt-6"
              >
                <span>{isLoading ? "Logging in..." : "Login"}</span>
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center ml-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </form>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 font-medium">
              By continuing you agree to your company&apos;s{" "}
              <Link href="/rgpd" className="text-slate-600 hover:underline">
                acceptable use policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right Illustration Panel */}
        <div className="col-span-1 lg:col-span-6 xl:col-span-7">
          <AuthRightPanel />
        </div>
      </div>
    </div>
  );
}
