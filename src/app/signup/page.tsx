"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import AuthRightPanel from "@/app/components/AuthRightPanel";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("Please confirm your password"),
    }),

    onSubmit: async (values) => {
      try {
        setIsLoading(true);

        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${values.firstName} ${values.lastName}`.trim(),
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          }),
        });

        if (!res.ok) {
          // Demo fallback
          router.push("/login");
          return;
        }

        router.push("/login");
      } catch (error) {
        // Demo fallback
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 lg:p-6 xl:p-10 font-sans">
      <div className="w-full max-w-6xl bg-white lg:rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left Form Panel */}
        <div className="col-span-1 lg:col-span-6 xl:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Title Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcom to the Auth
              </h1>
            </div>

            {/* Segmented Toggle Switch */}
            <div className="bg-slate-100/90 border border-slate-200/60 p-1.5 rounded-2xl flex items-center mb-6">
              <div className="flex-1 py-2.5 text-center text-sm font-extrabold text-slate-900 bg-white rounded-xl shadow-xs border border-slate-200/50">
                sign up
              </div>
              <Link
                href="/login"
                className="flex-1 py-2.5 text-center text-sm font-semibold text-slate-400 hover:text-slate-700 transition"
              >
                sign in
              </Link>
            </div>

            {/* Signup Form */}
            <form onSubmit={form.handleSubmit} className="space-y-3.5">
              {/* First Name Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.values.firstName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className="w-full px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                />
                {form.touched.firstName && form.errors.firstName && (
                  <p className="text-red-500 text-[11px] font-semibold">
                    {form.errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.values.lastName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className="w-full px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                />
                {form.touched.lastName && form.errors.lastName && (
                  <p className="text-red-500 text-[11px] font-semibold">
                    {form.errors.lastName}
                  </p>
                )}
              </div>

              {/* Email Address Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800">
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
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                  />
                </div>
                {form.touched.email && form.errors.email && (
                  <p className="text-red-500 text-[11px] font-semibold">
                    {form.errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.values.password}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="••••••••••"
                  className="w-full px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                />
                {form.touched.password && form.errors.password && (
                  <p className="text-red-500 text-[11px] font-semibold">
                    {form.errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.values.confirmPassword}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  placeholder="••••••••••"
                  className="w-full px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition"
                />
                {form.touched.confirmPassword && form.errors.confirmPassword && (
                  <p className="text-red-500 text-[11px] font-semibold">
                    {form.errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-base rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition mt-4"
              >
                <span>{isLoading ? "Signing up..." : "Sign up"}</span>
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center ml-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </form>
          </div>

          {/* Footer Link */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Already have an account{" "}
              <Link href="/login" className="font-bold text-slate-900 hover:underline">
                Log In
              </Link>
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
