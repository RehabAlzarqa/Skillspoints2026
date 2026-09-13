import Link from "next/link";
import { BookOpen, Share2, Gift } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text-primary)]">
      {/* Navbar */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-extrabold">
              Skills
              <span className="text-[var(--color-primary)]">Points</span>
            </h1>

            <p className="text-xs text-[var(--color-text-secondary)]">
              Learn. Share. Earn.
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-base font-medium md:flex">
            <a href="#how-it-works">How it works</a>
            <a href="#about">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="font-medium text-[var(--color-primary)]"
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              className="rounded-[var(--radius-button)] bg-[var(--color-primary)] px-6 py-3 font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 font-semibold text-[var(--color-primary)]">
              SkillsPoints
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">
              Learn. Share. Grow.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]">
              Learn new skills through short micro-courses, share your knowledge
              with your colleagues and earn points while progressing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="rounded-[var(--radius-button)] bg-[var(--color-primary)] px-7 py-4 font-semibold text-white"
              >
                Get Started
              </Link>

              <Link
                href="/login"
                className="rounded-[var(--radius-button)] border border-[var(--color-primary)] bg-white px-7 py-4 font-semibold text-[var(--color-primary)]"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Temporary visual block */}
          <div className="flex min-h-[360px] items-center justify-center rounded-3xl bg-[var(--color-light-blue)] p-8">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                SkillsPoints
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Learn something new today.
              </h3>

              <div className="mt-6 h-3 rounded-full bg-[var(--color-light-blue)]">
                <div className="h-3 w-2/3 rounded-full bg-[var(--color-primary)]" />
              </div>

              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                Your learning journey
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="bg-[var(--color-surface)] px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold md:text-4xl">
                One platform. Three simple steps.
              </h2>

              <p className="mt-4 text-[var(--color-text-secondary)]">
                Develop your skills, contribute to collective knowledge and get
                rewarded for your progress.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-light-blue)] text-[var(--color-primary)]">
                  <BookOpen size={24} />
                </div>

                <h3 className="text-xl font-bold">Learn</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Follow short and practical micro-courses created around useful
                  workplace skills.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-light-blue)] text-[var(--color-primary)]">
                  <Share2 size={24} />
                </div>

                <h3 className="text-xl font-bold">Share</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Share your own expertise by creating useful micro-courses for
                  your colleagues.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-light-blue)] text-[var(--color-primary)]">
                  <Gift size={24} />
                </div>

                <h3 className="text-xl font-bold">Earn</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Earn points by learning and contributing, then use them to
                  unlock rewards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="about" className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--color-light-blue)] px-8 py-14 text-center">
            <h2 className="text-3xl font-extrabold">
              Ready to start learning?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Join SkillsPoints and turn everyday knowledge into shared skills
              and rewards.
            </p>

            <Link
              href="/signup"
              className="mt-8 inline-block rounded-[var(--radius-button)] bg-[var(--color-primary)] px-8 py-4 font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-dark-blue)] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">SkillsPoints</p>
            <p className="mt-1 text-sm text-blue-100">Learn. Share. Earn.</p>
          </div>

          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} SkillsPoints. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
