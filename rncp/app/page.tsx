import Link from "next/link";
import Brand from "./components/brand";

export default function Home() {
  return (
    <div className="landing">
      <header className="site-header"><Brand /><nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#possibilities">Why SkillsPoints</a></nav><div className="header-actions"><Link href="/signin" className="signin-link">Sign in</Link><Link href="/signup" className="button primary small">Get started <span aria-hidden="true">↗</span></Link></div></header>
      <main>
        <section className="hero">
          <div className="hero-copy"><span className="hero-kicker"><span /> A LITTLE CURIOSITY GOES A LONG WAY</span><h1>Your next chapter<br />starts with a<br /><span>new skill.</span><span className="heading-star" aria-hidden="true">✳</span></h1><p>Turn your curiosity into progress. Discover new skills, build your confidence, and make every step count.</p><div className="hero-actions"><Link href="/signup" className="button primary">Start your journey <span aria-hidden="true">↗</span></Link><a href="#how-it-works" className="text-link">See how it works <span aria-hidden="true">↓</span></a></div><div className="hero-caption"><span className="tiny-star">✦</span> Your pace. Your potential. Your possibilities.</div></div>
          <div className="hero-visual" aria-label="Illustration of a personal learning journey"><div className="visual-top"><span>THE BEST INVESTMENT IS YOU.</span><span>01 / ∞</span></div><span className="visual-orbit" /><div className="big-flower" aria-hidden="true">✳</div><div className="progress-card"><span className="card-icon">↗</span><div><span className="card-label">A LITTLE BETTER, EVERY DAY</span><strong>Your potential is growing.</strong></div><div className="progress-track"><span /></div><div className="card-bottom"><span>Keep showing up</span><span>✦ +100 points</span></div></div><div className="visual-tag">Curiosity looks good on you.</div><div className="visual-bottom"><span>LEARN SOMETHING.<br />BECOME SOMETHING MORE.</span><span className="round-arrow">↗</span></div></div>
        </section>
        <section id="how-it-works" className="how-section"><div className="section-intro"><p className="eyebrow">BIG POSSIBILITIES. SIMPLE BEGINNINGS.</p><h2>A little effort. A lot of possibility.</h2></div><div className="feature-grid">{[{ number: "01", title: "Find your spark", text: "Follow your curiosity and discover skills you want to build.", icon: "✳" }, { number: "02", title: "Make your move", text: "Take it one step at a time. Fit learning into your everyday life.", icon: "↗" }, { number: "03", title: "See yourself grow", text: "Earn points along the way and celebrate your progress.", icon: "✦" }].map((item) => <article className="feature" key={item.number}><div className="feature-top"><span>{item.number}</span><span aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
        <section id="possibilities" className="closing"><div><p className="eyebrow">THIS IS JUST THE BEGINNING</p><h2>See where your curiosity takes you.</h2></div><Link href="/signup" className="button primary">Let’s get started <span aria-hidden="true">↗</span></Link></section>
      </main>
      <footer className="site-footer"><Brand /><p>Small steps. Real progress.</p><span>© {new Date().getFullYear()} SkillsPoints</span></footer>
    </div>
  );
}
