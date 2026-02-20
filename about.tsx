"use client"

import { useEffect, useRef } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="scroll-mt-[100px] border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.8)]">
      <div className="flex items-baseline gap-8 border-b border-[#e0e0e0] px-8 py-11 md:px-16">
        <span className="min-w-[32px] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#999]">01</span>
        <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] text-[#0a0a0a]">About Me</h2>
      </div>
      <div className="fade-target grid grid-cols-1 gap-10 px-8 py-16 opacity-0 translate-y-[18px] transition-all duration-600 ease-out md:grid-cols-[380px_1fr] md:gap-[4.5rem] md:px-16">
        <div className="sticky top-[88px] overflow-hidden rounded-[3px] border border-[#e0e0e0] md:aspect-[3/4]">
          <img
            src="/images/deep-camera-lab.jpg"
            alt="Deep Pathak operating high-speed camera in engineering lab"
            className="h-full w-full object-cover object-[center_20%] grayscale-[8%]"
          />
        </div>
        <div>
          <p className="mb-5 text-[0.92rem] font-light leading-[1.85] text-[#666]">
            {"I'm a mechanical engineer combining deep technical expertise with systems-level thinking. My work spans safety-critical switchgear product development, vibration reliability research, and applying data science to real engineering challenges."}
          </p>
          <p className="mb-5 text-[0.92rem] font-light leading-[1.85] text-[#666]">
            {"Currently interning at "}
            <strong className="font-medium text-[#0a0a0a]">Nuventura</strong>
            {" and contributing to the "}
            <a
              href="https://greenbear.berlin/#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0a0a0a] underline underline-offset-[3px]"
            >
              Green Bear
            </a>
            {" Formula Student electric race car team at HTW Berlin."}
          </p>

          {/* Achievement rows */}
          <div className="grid grid-cols-[90px_1fr] items-start gap-4 border-t border-[#e0e0e0] py-4">
            <div className="whitespace-nowrap pt-[0.1rem] font-serif text-[0.95rem] font-bold text-[#0a0a0a]">{"15% \u2193"}</div>
            <p className="m-0 text-[0.86rem] leading-[1.65] text-[#666]">
              {"3 years of hands-on experience in mechanical product development \u2014 specializing in 3D CAD, tolerance analysis, DFA/DFMEA, and rapid design iteration for medium-voltage switchgear, achieving up to "}
              <strong className="font-medium text-[#0a0a0a]">{"15% reduction in design cycle time"}</strong>
              {"."}
            </p>
          </div>

          <div className="grid grid-cols-[90px_1fr] items-start gap-4 border-t border-[#e0e0e0] py-4">
            <div className="whitespace-nowrap pt-[0.1rem] font-serif text-[0.95rem] font-bold text-[#0a0a0a]">{"\u20AC100K"}</div>
            <p className="m-0 text-[0.86rem] leading-[1.65] text-[#666]">
              {"Collaborating with Nuventura\u2019s engineering team to optimize circuit breaker and drive assemblies \u2014 identified and resolved "}
              <strong className="font-medium text-[#0a0a0a]">critical late-stage design faults</strong>
              {", preventing potential losses of ~\u20AC100,000 and improving product reliability by 20%."}
            </p>
          </div>

          <div className="grid grid-cols-[90px_1fr] items-start gap-4 border-t border-[#e0e0e0] py-4">
            <div className="whitespace-nowrap pt-[0.1rem] font-serif text-[0.95rem] font-bold text-[#0a0a0a]">Signal</div>
            <p className="m-0 text-[0.86rem] leading-[1.65] text-[#666]">
              {"Leading vibration-based reliability evaluation in my Master\u2019s thesis \u2014 applying "}
              <strong className="font-medium text-[#0a0a0a]">signal processing techniques</strong>
              {" (HHT, FFT, PSD) to detect structural looseness in switchgear mechanical drives, resulting in quantified improvements in component endurance and fatigue life."}
            </p>
          </div>

          <div className="grid grid-cols-[90px_1fr] items-start gap-4 border-t border-b border-[#e0e0e0] py-4 mb-7">
            <div className="whitespace-nowrap pt-[0.1rem] font-serif text-[0.95rem] font-bold text-[#0a0a0a]">PLM</div>
            <p className="m-0 text-[0.86rem] leading-[1.65] text-[#666]">
              <strong className="font-medium text-[#0a0a0a]">Strong cross-functional team collaborator</strong>
              {" with PLM knowledge from design to manufacturing, production, and quality."}
            </p>
          </div>

          {/* Social links */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="https://www.linkedin.com/in/deep-pathak-502918175/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[3px] border border-[#e0e0e0] px-3.5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[#333] no-underline transition-all hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a
              href="mailto:pathakdeep31@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-[3px] border border-[#e0e0e0] px-3.5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[#333] no-underline transition-all hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              Email
            </a>
            <a
              href="https://github.com/Deeppathak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[3px] border border-[#e0e0e0] px-3.5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[#333] no-underline transition-all hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
            <a
              href="https://greenbear.berlin/#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[3px] border border-[#e0e0e0] px-3.5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[#333] no-underline transition-all hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
            >
              Green Bear FS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
