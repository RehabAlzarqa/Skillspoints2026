"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { object, string, ref } from "yup";

const Page = () => {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: object({
      firstName: string()
        .trim()
        .required("First name is required")
        .min(3, "At least 3 characters")
        .max(20, "Maximum 20 characters"),

      lastName: string()
        .trim()
        .required("Last name is required")
        .min(3, "At least 3 characters")
        .max(30, "Maximum 30 characters"),

      email: string()
        .trim()
        .required("Email is required")
        .email("Enter a valid email address"),

      password: string().required("Password is required"),

      confirmPassword: string()
        .required("Confirm your password")
        .oneOf([ref("password")], "Passwords must match"),
    }),

    onSubmit: () => {
      alert("submitting!");
    },
  });

  const fields = [
    {
      fieldName: "firstName",
      placeholder: "Your first name",
      type: "text",
      label: "First Name",
      autoComplete: "given-name",
    },
    {
      fieldName: "lastName",
      placeholder: "Your last name",
      type: "text",
      label: "Last Name",
      autoComplete: "family-name",
    },
    {
      fieldName: "email",
      placeholder: "Your email address",
      type: "email",
      label: "Email",
      autoComplete: "email",
    },
    {
      fieldName: "password",
      placeholder: "Create a password",
      type: "password",
      label: "Password",
      autoComplete: "new-password",
    },
    {
      fieldName: "confirmPassword",
      placeholder: "Confirm your password",
      type: "password",
      label: "Confirm Password",
      autoComplete: "new-password",
    },
  ] as const;

  return (
    <main className="min-h-screen bg-[#F5F8FF] px-4 py-8 md:px-8 xl:px-12">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[32px] bg-white p-4 shadow-[0_18px_50px_rgba(7,27,61,0.08)] lg:grid-cols-[1.08fr_0.92fr] lg:p-6">
        <section className="rounded-[28px] bg-white p-6 md:p-8">
          <Link href="/" className="mb-10 inline-block text-2xl font-bold">
            Skills<span className="text-[#4788F9]">Points</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Create your account
            </h1>

            <p className="mt-3 text-base text-[#56637A]">
              Learn new skills and earn points.
            </p>
          </div>

          <form
            onSubmit={form.handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {fields.map((field) => {
              const fieldKey = field.fieldName as keyof typeof form.initialValues;
              const error = form.errors[fieldKey];
              const showError = Boolean(form.touched[fieldKey] && error);

              return (
                <div key={field.fieldName} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.fieldName}
                    className="text-sm font-semibold"
                  >
                    {field.label}
                  </label>

                  <input
                    {...form.getFieldProps(field.fieldName)}
                    id={field.fieldName}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    aria-invalid={showError}
                    aria-describedby={
                      showError ? `${field.fieldName}-error` : undefined
                    }
                    className={`h-12 w-full rounded-xl border bg-white px-4 text-base text-[#071B3D] outline-none transition placeholder:text-[#56637A] focus:ring-2 ${
                      showError
                        ? "border-red-500 focus:ring-red-100"
                        : "border-[#D8DEE9] focus:border-[#4788F9] focus:ring-[#E8F1FF]"
                    }`}
                  />

                  {showError && (
                    <p
                      id={`${field.fieldName}-error`}
                      className="text-sm text-red-600"
                    >
                      {error}
                    </p>
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              className="mt-2 h-12 w-full rounded-xl bg-[#4788F9] font-semibold text-white transition hover:bg-[#3677E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4788F9]"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-5 text-center text-sm">
            Already have an account? {" "}
            <Link
              href="/signin"
              className="font-semibold text-[#4788F9] hover:underline"
            >
              Log In
            </Link>
          </p>
        </section>

        <section className="hidden flex-col items-center justify-center rounded-[28px] bg-[#E8F1FF] px-8 py-12 text-center lg:flex">
          <h2 className="text-3xl font-bold tracking-tight">
            Small lessons. Big progress.
          </h2>

          <p className="mt-3 text-base text-[#56637A]">
            Build your skills, one step at a time.
          </p>

          <img
            src="/images/LogoAuth.png"
            alt="Learners developing their skills together"
            className="mt-8 h-auto w-full max-w-[420px] object-contain"
          />
        </section>
      </div>
    </main>
  );
};

export default Page;