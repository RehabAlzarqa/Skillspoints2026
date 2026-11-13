"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { toast } from "sonner";

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

    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            email: values.email.trim(),
            password: values.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch {
        toast.error("Unable to create your account. Please try again.");
      }
    },
    // connect the page to signup api
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
    <main className="flex min-h-dvh items-center bg-[#F5F8FF] px-4 py-4 md:px-8 xl:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-[32px] bg-white p-4 shadow-[0_18px_50px_rgba(7,27,61,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
        <section className="rounded-[28px] bg-white p-3 md:px-6 md:py-3">
          <Link
            href="/"
            className="mx-auto mb-3 block w-fit"
            aria-label="Skillspoints home"
          >
            <Image
              src={logo}
              alt="Skillspoints"
              className="h-12 w-40 object-contain"
              priority
            />
          </Link>

          <div className="mb-3">
            <h1 className="text-xl font-bold tracking-tight md:text-3xl">
              Create your account
            </h1>
          </div>

          <form
            onSubmit={form.handleSubmit}
            noValidate
            className="flex flex-col gap-2"
          >
            {fields.map((field) => {
              const fieldKey =
                field.fieldName as keyof typeof form.initialValues;
              const error = form.errors[fieldKey];
              const showError = Boolean(form.touched[fieldKey] && error);

              return (
                <div key={field.fieldName} className="flex flex-col gap-1">
                  <label
                    htmlFor={field.fieldName}
                    className="text-sm font-semibold "
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
                    className={`h-10 w-full rounded-xl border bg-white px-4 text-base text-[#071B3D] outline-none transition placeholder:text-[#56637A] focus:ring-2 ${
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
              disabled={form.isSubmitting}
              className="mt-3 h-10 w-full rounded-xl bg-[#4788F9] font-semibold text-white transition hover:bg-[#3677E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4788F9]"
            >
              {form.isSubmitting ? (
                <span className="inline-flex items-center gap-2 ">
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
                  />
                  Loading...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="mt-3 text-center text-sm ">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#4788F9] hover:underline"
            >
              Log In
            </Link>
          </p>
        </section>

        <section className="hidden flex-col items-center justify-center rounded-[28px] bg-[#E8F1FF] px-3 py-3 text-center lg:flex">
          <img
            src="/images/LogoAuth.png"
            alt="Learners developing their skills together"
            className="mt-3 h-auto max-h-[500px] w-full max-w-[480px] object-contain"
          />
        </section>
      </div>
    </main>
  );
};

export default Page;
