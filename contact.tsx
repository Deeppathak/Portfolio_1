"use client"

import { useEffect, useRef } from "react"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0")
        })
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    )
    const el = sectionRef.current?.querySelector(".fade-target")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="scroll-mt-[100px] bg-[rgba(255,255,255,0.8)]">
      <div className="flex items-baseline gap-8 border-b border-[#e0e0e0] px-8 py-11 md:px-16">
        <span className="min-w-[32px] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#999]">05</span>
        <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] text-[#0a0a0a]">Get In Touch</h2>
      </div>
      <div className="fade-target grid grid-cols-1 gap-10 px-8 py-16 opacity-0 translate-y-[18px] transition-all duration-600 ease-out md:grid-cols-[1fr_1.2fr] md:gap-[4.5rem] md:px-16">
        <div>
          <h3 className="mb-3 font-serif text-[1.6rem] font-bold leading-tight tracking-[-0.02em] text-[#0a0a0a]">
            Open to New Opportunities
          </h3>
          <p className="mb-7 text-[0.88rem] font-light leading-[1.8] text-[#666]">
            {"Whether you're a recruiter, engineer, or researcher \u2014 I'd love to connect. Particularly interested in roles involving mechanical product development, simulation, and systems engineering."}
          </p>
          <a
            href="mailto:pathakdeep31@gmail.com"
            className="flex items-center gap-3 border-b border-[#e0e0e0] py-3.5 text-[0.84rem] text-[#666] no-underline transition-all hover:pl-1 hover:text-[#0a0a0a]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
            pathakdeep31@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/deep-pathak-502918175/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-b border-[#e0e0e0] py-3.5 text-[0.84rem] text-[#666] no-underline transition-all hover:pl-1 hover:text-[#0a0a0a]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            linkedin.com/in/deep-pathak-502918175
          </a>
          <a
            href="https://github.com/Deeppathak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-b border-[#e0e0e0] py-3.5 text-[0.84rem] text-[#666] no-underline transition-all hover:pl-1 hover:text-[#0a0a0a]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            github.com/Deeppathak
          </a>
        </div>
        <form action="https://formspree.io/f/mdkypqlg" method="POST" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#999]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="rounded-[3px] border border-[#e0e0e0] bg-white px-3.5 py-3 font-sans text-[0.9rem] text-[#0a0a0a] outline-none transition-colors focus:border-[#0a0a0a]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#999]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              className="rounded-[3px] border border-[#e0e0e0] bg-white px-3.5 py-3 font-sans text-[0.9rem] text-[#0a0a0a] outline-none transition-colors focus:border-[#0a0a0a]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#999]">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="What would you like to discuss?"
              required
              className="min-h-[110px] resize-none rounded-[3px] border border-[#e0e0e0] bg-white px-3.5 py-3 font-sans text-[0.9rem] text-[#0a0a0a] outline-none transition-colors focus:border-[#0a0a0a]"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer self-start rounded-[3px] border-none bg-[#0a0a0a] px-8 py-3.5 font-sans text-[0.76rem] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:-translate-y-0.5 hover:opacity-85 hover:shadow-[0_6px_18px_rgba(0,0,0,0.16)]"
          >
            {"Send Message \u2192"}
          </button>
        </form>
      </div>
    </section>
  )
}
