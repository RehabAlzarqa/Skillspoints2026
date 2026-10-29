"use client";

import Link from "next/link";
import Brand from "./brand";

type Mode = "signin" | "signup" | "email" | "otp";
const content = {
  signin: { title: "Welcome back.", description: "Your next step forward starts here.", button: "Sign in" },
  signup: { title: "Make room for growth.", description: "Create your account and start building your skills.", button: "Create account" },
  email: { title: "Forgot your password?", description: "Enter your email to get a password reset code.", button: "Send reset code" },
  otp: { title: "Check your inbox.", description: "Enter the 6-digit code from your password reset email.", button: "Verify code" },
};

export default function AuthScreen({ mode }: { mode: Mode }) {
  const copy = content[mode];
  return (
    <main className="auth-page">
      <section className="auth-main">
        <Brand />
        <div className="auth-content">
          <Link href={mode === "otp" ? "/forgot-password" : "/"} className="back-link">← {mode === "otp" ? "Change email" : "Back to home"}</Link>
          <p className="eyebrow">YOUR LEARNING JOURNEY</p>
          <h1>{copy.title}</h1>
          <p className="muted auth-description">{copy.description}</p>
          <form onSubmit={(event) => event.preventDefault()} className="auth-form">
            {mode === "signup" && <div className="name-fields"><Field name="firstName" label="First name" placeholder="Alex" autoComplete="given-name" /><Field name="lastName" label="Last name" placeholder="Morgan" autoComplete="family-name" /></div>}
            {mode !== "otp" && <Field name="email" label="Email address" type="email" placeholder="you@example.com" autoComplete="email" />}
            {(mode === "signin" || mode === "signup") && <Field name="password" label="Password" type="password" placeholder={mode === "signup" ? "Create a password" : "Enter your password"} autoComplete={mode === "signin" ? "current-password" : "new-password"} />}
            {mode === "signup" && <Field name="confirmPassword" label="Confirm password" type="password" placeholder="Repeat your password" autoComplete="new-password" />}
            {mode === "otp" && <label className="field" htmlFor="otp">Verification code<input id="otp" name="otp" className="otp-input" placeholder="000000" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required /></label>}
            {mode === "signin" && <div className="form-options"><label className="check-label"><input type="checkbox" name="remember" /> Remember me</label><Link href="/forgot-password">Forgot password?</Link></div>}
            <button className="button primary full" type="submit">{copy.button}<span aria-hidden="true">↗</span></button>
          </form>
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
  return <label className="field" htmlFor={name}>{label}<input id={name} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} required /></label>;
}
