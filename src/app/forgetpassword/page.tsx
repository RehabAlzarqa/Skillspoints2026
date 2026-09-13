"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const form = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    }),

    onSubmit: async () => {
      setSubmitted(true);

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-emerald-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
          Forgot Password
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Enter your email address to receive password reset instructions.
        </p>

        <form onSubmit={form.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400 text-sm"
            />
            {form.touched.email && form.errors.email && (
              <div className="text-red-500 text-xs mt-1 text-left">
                {form.errors.email}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 cursor-pointer shadow-md shadow-emerald-500/20"
          >
            {submitted ? "Sending instructions..." : "Reset Password"}
          </button>
        </form>

        <div className="text-center mt-6">
          <Link
            href="/login"
            className="text-emerald-600 hover:underline text-sm font-semibold transition"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

