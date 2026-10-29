"use client";

import Link from "next/link";
import Brand from "./brand";
import { FormikProvider, useField, useFormik } from "formik";
import * as Yup from "yup";

type Values = { firstName: string; lastName: string; email: string; password: string; confirmPassword: string; otp: string };
type FormStatus = { kind: "success" | "error"; message: string };

function validationSchema(mode: Mode) {
  const email = Yup.string().trim().email("Enter a valid email address.").required("Email is required.");
  switch (mode) {
    case "signup":
      return Yup.object({
        firstName: Yup.string().trim().required("First name is required."),
        lastName: Yup.string().trim().required("Last name is required."),
        email,
        password: Yup.string().min(8, "Use at least 8 characters.").required("Password is required."),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match.").required("Confirm your password."),
      });
    case "signin":
      return Yup.object({ email, password: Yup.string().required("Password is required.") });
    case "email":
      return Yup.object({ email });
    case "otp":
      return Yup.object({ otp: Yup.string().matches(/^[0-9]{6}$/, "Enter the 6-digit code.").required("Verification code is required.") });
  }
}

type Mode = "signin" | "signup" | "email" | "otp";
const content = {
  signin: { title: "Welcome back.", description: "Your next step forward starts here.", button: "Sign in" },
  signup: { title: "Make room for growth.", description: "Create your account and start building your skills.", button: "Create account" },
  email: { title: "Forgot your password?", description: "Enter your email to get a password reset code.", button: "Send reset code" },
  otp: { title: "Check your inbox.", description: "Enter the 6-digit code from your password reset email.", button: "Verify code" },
};

export default function AuthScreen({ mode }: { mode: Mode }) {
  const copy = content[mode];
  const form = useFormik<Values>({
    initialValues: { firstName: "", lastName: "", email: "", password: "", confirmPassword: "", otp: "" },
    validationSchema: validationSchema(mode),
    onSubmit: async (values, helpers) => {
      helpers.setStatus(undefined);
      if (mode === "email" || mode === "otp") {
        helpers.setStatus({ kind: "error", message: "This service is not available yet. Please try again once password reset is connected." } satisfies FormStatus);
        return;
      }
      try {
        const payload = mode === "signin"
          ? { email: values.email.trim(), password: values.password }
          : { firstName: values.firstName.trim(), lastName: values.lastName.trim(), email: values.email.trim(), password: values.password };
        const response = await fetch(`/api/auth/${mode}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data: unknown = await response.json().catch(() => null);
        const result = data && typeof data === "object" ? data as Record<string, unknown> : {};
        const message = typeof result.message === "string" ? result.message : typeof result.msg === "string" ? result.msg : undefined;
        // The existing signin endpoint sometimes reports errors in the body with HTTP 200.
        if (!response.ok || (typeof result.status === "number" && result.status >= 400)) {
          throw new Error(message || "Unable to complete your request. Please try again.");
        }
        if (mode === "signin" && typeof result.token !== "string") {
          throw new Error(message || "The server returned an unexpected response.");
        }
        if (mode === "signup") helpers.resetForm();
        helpers.setStatus({ kind: "success", message: message || (mode === "signup" ? "Account created. You can now sign in." : "Signed in successfully.") } satisfies FormStatus);
      } catch (error) {
        helpers.setStatus({ kind: "error", message: error instanceof Error ? error.message : "Unable to connect. Please try again." } satisfies FormStatus);
      }
    },
  });
  const status = form.status as FormStatus | undefined;
  return (
    <main className="auth-page">
      <section className="auth-main">
        <Brand />
        <div className="auth-content">
          <Link href={mode === "otp" ? "/forgot-password" : "/"} className="back-link">← {mode === "otp" ? "Change email" : "Back to home"}</Link>
          <p className="eyebrow">YOUR LEARNING JOURNEY</p>
          <h1>{copy.title}</h1>
          <p className="muted auth-description">{copy.description}</p>
          <FormikProvider value={form}>
          <form onSubmit={form.handleSubmit} noValidate className="auth-form">
            {mode === "signup" && <div className="name-fields"><Field name="firstName" label="First name" placeholder="Alex" autoComplete="given-name" /><Field name="lastName" label="Last name" placeholder="Morgan" autoComplete="family-name" /></div>}
            {mode !== "otp" && <Field name="email" label="Email address" type="email" placeholder="you@example.com" autoComplete="email" />}
            {(mode === "signin" || mode === "signup") && <Field name="password" label="Password" type="password" placeholder={mode === "signup" ? "Create a password" : "Enter your password"} autoComplete={mode === "signin" ? "current-password" : "new-password"} />}
            {mode === "signup" && <Field name="confirmPassword" label="Confirm password" type="password" placeholder="Repeat your password" autoComplete="new-password" />}
            {mode === "otp" && <Field name="otp" label="Verification code" placeholder="000000" autoComplete="one-time-code" />}
            {mode === "signin" && <div className="form-options"><span /><Link href="/forgot-password">Forgot password?</Link></div>}
            {status && <p className={`form-message ${status.kind}`} role={status.kind === "error" ? "alert" : "status"}>{status.message}</p>}
            <button className="button primary full" type="submit" disabled={form.isSubmitting} aria-busy={form.isSubmitting}>{form.isSubmitting ? "Please wait…" : copy.button}<span aria-hidden="true">↗</span></button>
          </form>
          </FormikProvider>
          {mode === "signin" && <p className="auth-switch">New to SkillsPoints? <Link href="/signup">Create an account</Link></p>}
          {mode === "signup" && <p className="auth-switch">Already have an account? <Link href="/signin">Sign in</Link></p>}
          {mode === "email" && <p className="auth-switch"><Link href="/forgot-password/otp">Enter a reset code →</Link></p>}
          {(mode === "email" || mode === "otp") && <p className="auth-switch">Remember your password? <Link href="/signin">Sign in</Link></p>}
        </div>
        <p className="auth-footer">A little progress, every day.</p>
      </section>
      <aside className="auth-aside">
        <span className="pill">GOOD THINGS TAKE PRACTICE</span>
        <div className="growth-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="art-star">✦</span><div className="step step-one" /><div className="step step-two" /><div className="step step-three">↗</div><span className="floating-note">One step closer <span>✦</span></span></div>
        <h2>Small steps.<br />Extraordinary potential.</h2>
        <p>Discover what you can do when you keep going.<br />Build skills. Earn points. Find your next possibility.</p>
        <div className="aside-bottom"><span>MADE FOR YOUR NEXT CHAPTER</span><span>↗</span></div>
      </aside>
    </main>
  );
}

function Field({ name, label, type = "text", placeholder, autoComplete }: { name: string; label: string; type?: string; placeholder: string; autoComplete: string }) {
  const [field, meta] = useField(name);
  const error = meta.touched ? meta.error : undefined;
  return <div className="field">
    <label htmlFor={name}>{label}</label>
    <input {...field} id={name} type={type} placeholder={placeholder} autoComplete={autoComplete} required
      className={name === "otp" ? "otp-input" : undefined}
      inputMode={name === "otp" ? "numeric" : undefined}
      maxLength={name === "otp" ? 6 : undefined}
      aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
    {error && <span id={`${name}-error`} className="field-error">{error}</span>}
  </div>;
}
