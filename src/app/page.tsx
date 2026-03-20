"use client";

import { useState } from "react";

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Races", "Gallery", "Services", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/rz-logo.png" alt="RZ Logo" className="h-10 w-auto" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 leading-none">
            Performance
          </span>
        </a>

        {/* Desktop links + socials */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase text-zinc-400" style={{ fontFamily: 'var(--font-oswald)' }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-red-500 transition-colors"
            >
              {l}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-zinc-700/50">
            <a href="https://www.instagram.com/ryanzerka/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://x.com/ZRyanzerka" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://substack.com/@ryanzerka" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase text-zinc-400" style={{ fontFamily: 'var(--font-oswald)' }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-3 mt-1 border-t border-zinc-800">
            <a href="https://www.instagram.com/ryanzerka/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://x.com/ZRyanzerka" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://substack.com/@ryanzerka" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950" />

      {/* Large faded logo watermark behind content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        <img src="/images/rz-logo.png" alt="" className="w-[500px] md:w-[700px]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-red-500 font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-6">
          Certified Personal Trainer
        </p>
        <h1 className="text-5xl md:text-7xl leading-tight tracking-tight mb-4" style={{ fontFamily: 'var(--font-teko)' }}>
          Push Your Limits.
        </h1>
        <h1 className="text-5xl md:text-7xl leading-tight tracking-tight mb-8" style={{ fontFamily: 'var(--font-teko)' }}>
          <span className="text-red-500">Own Your Strength.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Athletic-based training that builds strength, endurance, and resilience you can carry for life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Start Your Journey
          </a>
          <a
            href="#services"
            className="border border-zinc-700 hover:border-red-500 text-zinc-300 hover:text-red-500 font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const stats = [
    { value: "ISSA", label: "Certified Trainer" },
    { value: "5+", label: "Races Completed" },
    { value: "HYROX", label: "Competitor" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="aspect-[3/4] rounded-2xl overflow-hidden">
          <img
            src="/images/hyrox-farmers.jpg"
            alt="Ryan Zerka at HYROX New York"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mobility Is Strength. Strength Is Mobility.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I&apos;m an ISSA-certified personal trainer with a strong passion for functional
            fitness. My training philosophy integrates strength training, conditioning,
            plyometrics, and high-intensity work, all grounded in the belief that mobility is
            strength&mdash;and strength is mobility. My goal is to help clients feel strong,
            capable, and efficient in any physical endeavor they pursue.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I&apos;ve participated in a variety of challenging fitness events, including HYROX,
            Spartan Races, and multiple trail races. The most demanding feat to date was a half
            marathon up Killington Mountain, which took over seven hours and included obstacles
            along the way. These experiences have deepened my understanding of the physical
            demands of performance, as well as the importance of recovery through proper
            nutrition and restorative movement.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            I&apos;m currently pursuing my CSCS (Certified Strength and Conditioning Specialist)
            certification upon graduating college, and I&apos;m committed to deepening my expertise
            in performance training. To me, training athletic is training for life. The ability
            to jump, sprint, lift, and move with confidence isn&apos;t just for
            competitors&mdash;it&apos;s essential for everyone, especially as we age. Building
            and maintaining these capabilities is what keeps us independent, resilient, and
            capable for decades to come. Fitness isn&apos;t just about aesthetics or
            performance&mdash;it&apos;s training for life.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-red-500">{s.value}</p>
                <p className="text-zinc-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  const plans = [
    {
      name: "1-on-1 In Person",
      price: "$90",
      period: "/session",
      features: [
        "In-person training session",
        "Personalized workout plan",
        "Form correction in real time",
        "Nutrition guidelines",
      ],
      highlighted: false,
    },
    {
      name: "1-on-1 Online",
      price: "$130",
      period: "/month",
      features: [
        "Personalized workout plan",
        "Weekly check-ins",
        "Form correction via video",
        "Nutrition guidelines",
      ],
      highlighted: false,
    },
    {
      name: "Premium Coaching",
      price: "$175",
      period: "/month",
      features: [
        "Everything in 1-on-1",
        "Custom meal plans",
        "Daily messaging support",
        "Bi-weekly in-person sessions",
        "Progress tracking dashboard",
      ],
      highlighted: true,
    },
    {
      name: "Online Program",
      price: "$75",
      period: "/month",
      features: [
        "4-week training program",
        "Exercise video library",
        "Monthly program updates",
        "Community access",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Programs That Deliver Results
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-16">
          Choose a plan that fits your goals. Every program is backed by science and
          tailored to your needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 text-left transition-transform hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-red-500 text-white ring-2 ring-red-400"
                  : "bg-zinc-800/60 border border-zinc-700/50"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={plan.highlighted ? "text-red-100" : "text-zinc-500"}>
                  {plan.period}
                </span>
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-white" : "text-red-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-red-50" : "text-zinc-300"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition-colors ${
                  plan.highlighted
                    ? "bg-white text-red-600 hover:bg-red-50"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RACES ─── */
function Races() {
  const races = [
    {
      name: "Spartan Beast 21K",
      location: "Killington, VT",
      date: "Sep 2024",
      stats: [
        { value: "14.54", unit: "mi", label: "Distance" },
        { value: "6,050", unit: "ft", label: "Elevation" },
        { value: "4:32", unit: "", label: "Moving Time" },
        { value: "7:00+", unit: "", label: "Elapsed Time" },
      ],
      badge: "PR",
      timeNote: "Moving time reflects time spent running and climbing. Elapsed time includes obstacle queues, penalty loops, and mandatory rest — the full reality of a mountain beast race.",
      description: "Half marathon up Killington Mountain with 30+ obstacles and 6,000 ft of elevation gain.",
    },
    {
      name: "Gate2Gate Trail Race",
      location: "Alachua, FL",
      date: "Oct 2024",
      stats: [
        { value: "16.08", unit: "mi", label: "Distance" },
        { value: "11:21", unit: "/mi", label: "Pace" },
        { value: "3:02", unit: "", label: "Time" },
      ],
      badge: "PR",
      description: "Trail half marathon through San Felasco Hammock Preserve State Park.",
    },
    {
      name: "SC Spartan Trifecta",
      location: "Newberry, SC",
      date: "Nov 2024",
      stats: [
        { value: "3", unit: "", label: "Races" },
        { value: "25", unit: "mi", label: "Total Dist" },
        { value: "1", unit: "day", label: "Weekend" },
      ],
      badge: "TRIFECTA",
      description: "Beast, Super, and Sprint completed in a single weekend — earning the Spartan Trifecta.",
    },
    {
      name: "HYROX New York",
      location: "New York, NY",
      date: "2024",
      stats: [
        { value: "8", unit: "km", label: "Running" },
        { value: "8", unit: "", label: "Stations" },
        { value: "1", unit: "", label: "Mission" },
      ],
      badge: "HYROX",
      description: "The world's largest fitness competition — 8 km of running paired with 8 functional workout stations.",
    },
  ];

  return (
    <section id="races" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
          Race Resume
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tested on the Course
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-16">
          Every race deepens the knowledge I bring to my clients&mdash;real experience with
          endurance, grit, and pushing past limits.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {races.map((race) => (
            <div
              key={race.name}
              className="bg-zinc-800/60 border border-zinc-700/50 rounded-2xl p-8 text-left hover:border-red-500/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{race.name}</h3>
                  <p className="text-zinc-500 text-sm">
                    {race.location}
                  </p>
                </div>
                <span className="bg-red-500/15 text-red-500 text-xs font-bold tracking-wider px-3 py-1 rounded-full">
                  {race.badge}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {race.description}
              </p>

              <div
                className={`grid gap-4 pt-4 border-t border-zinc-700/50 ${
                  race.stats.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"
                }`}
              >
                {race.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-white">
                      {s.value}
                      <span className="text-sm font-medium text-zinc-500 ml-0.5">
                        {s.unit}
                      </span>
                    </p>
                    <p className="text-zinc-500 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {race.timeNote && (
                <p className="text-zinc-500 text-xs italic mt-3 leading-relaxed">
                  {race.timeNote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GALLERY ─── */
function Gallery() {
  const photos = [
    { src: "/images/spartan-fire.jpg", alt: "Jumping over fire at Spartan Race", label: "Spartan Race" },
    { src: "/images/hyrox-run.jpg", alt: "Running at HYROX New York", label: "HYROX New York" },
    { src: "/images/spartan-wall.jpg", alt: "Climbing wall at Spartan Race", label: "Killington Beast" },
    { src: "/images/spartan-crawl.jpg", alt: "Barbed wire crawl at Spartan Race", label: "Barbed Wire Crawl" },
    { src: "/images/spartan-carry.jpg", alt: "Sandbag carry at Spartan Race", label: "Sandbag Carry" },
    { src: "/images/spartan-climb.jpg", alt: "Metal rig climb at Spartan Race", label: "Rig Climb" },
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
          In Action
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built Through Competition
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-16">
          From Spartan Races to HYROX to mountain half marathons&mdash;every event sharpens
          the training I bring to my clients.
        </p>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/spartan-fire.jpg"
            >
              <source src="/images/training-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              src="/images/training-video-2.mp4#t=0.5"
            />
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p) => (
            <div
              key={p.src}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-semibold text-sm">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ryan completely changed my relationship with fitness. I went from dreading the gym to looking forward to every session.",
      name: "Sarah M.",
      detail: "Lost 25 lbs in 4 months",
    },
    {
      quote:
        "The personalized approach made all the difference. My program actually fits my schedule and I've never felt stronger.",
      name: "Sophia J.",
      detail: "Gained 12 lbs of muscle",
    },
    {
      quote:
        "As a busy mom of three, I thought getting in shape was impossible. Ryan proved me wrong with a plan that actually works.",
      name: "Michelle R.",
      detail: "Completed first 5K",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          What My Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-800/60 border border-zinc-700/50 rounded-2xl p-8 text-left"
            >
              {/* Stars */}
              <div className="flex gap-1 text-red-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-red-500">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-zinc-400 mb-12">
          Fill out the form below and I&apos;ll get back to you within 24 hours.
        </p>

        <form
          action="https://formsubmit.co/ryanzerka@gmail.com"
          method="POST"
          className="space-y-5 text-left"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_subject" value="New inquiry from RZ Performance website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://zerkperformance.com" />
          <input type="text" name="_honey" className="hidden" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-zinc-400 mb-1.5">
              Your Fitness Goal
            </label>
            <select
              id="goal"
              name="goal"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
            >
              <option>Weight Loss</option>
              <option>Muscle Building</option>
              <option>General Fitness</option>
              <option>Athletic Performance</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
              placeholder="Tell me about your goals..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} RZ Performance. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/ryanzerka/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://x.com/ZRyanzerka" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="X">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://substack.com/@ryanzerka" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors" aria-label="Substack">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Races />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
