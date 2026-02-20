"use client"

import { useEffect, useRef } from "react"

export function Education() {
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
    <section id="education" ref={sectionRef} className="scroll-mt-[100px] border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.8)]">
      <div className="flex items-baseline gap-8 border-b border-[#e0e0e0] px-8 py-11 md:px-16">
        <span className="min-w-[32px] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#999]">03</span>
        <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] text-[#0a0a0a]">Education</h2>
      </div>
      <div className="fade-target px-8 pb-14 opacity-0 translate-y-[18px] transition-all duration-600 ease-out md:px-16">
        {/* M.Sc. */}
        <div className="grid grid-cols-1 items-start gap-1 border-b border-[#e0e0e0] py-7 md:grid-cols-[140px_1fr_auto] md:gap-8">
          <div className="pt-0.5 text-[0.78rem] text-[#999]">{"2023 \u2013 Present"}</div>
          <div>
            <div className="mb-1 font-serif text-[1.05rem] font-bold text-[#0a0a0a]">M.Sc. Systems Engineering</div>
            <div className="mb-1.5 text-[0.85rem] text-[#666]">{"FH S\u00fcdwestfalen \u2014 Soest, Germany"}</div>
            <div className="text-[0.78rem] leading-[1.65] text-[#999]">
              {"German Grade: 2.0 \u00b7 Thesis: Vibration-Based Reliability Evaluation of Switchgear using Signal Processing techniques (HHT, FFT, PSD). Focus: system-level design validation, cross-functional engineering, product lifecycle."}
            </div>
          </div>
          <div className="whitespace-nowrap rounded-full border border-[#e0e0e0] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-[#333]">
            In Progress
          </div>
        </div>

        {/* B.E. */}
        <div className="grid grid-cols-1 items-start gap-1 border-b border-[#e0e0e0] py-7 md:grid-cols-[140px_1fr_auto] md:gap-8">
          <div className="pt-0.5 text-[0.78rem] text-[#999]">{"2017 \u2013 2021"}</div>
          <div>
            <div className="mb-1 font-serif text-[1.05rem] font-bold text-[#0a0a0a]">B.E. Mechanical Engineering</div>
            <div className="mb-1.5 text-[0.85rem] text-[#666]">Gujarat Technological University, India</div>
            <div className="text-[0.78rem] leading-[1.65] text-[#999]">
              {"GPA: 9.4 / 10 \u00b7 Ranked among top graduates. Foundation in thermodynamics, manufacturing, machine design, and fluid mechanics."}
            </div>
          </div>
          <div className="whitespace-nowrap rounded-full border border-[#c09a35] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-[#a07d20]">
            Silver Medal
          </div>
        </div>

        {/* Formula Student */}
        <div className="grid grid-cols-1 items-start gap-1 border-b border-[#e0e0e0] py-7 md:grid-cols-[140px_1fr_auto] md:gap-8">
          <div className="pt-0.5 text-[0.78rem] text-[#999]">{"2023 \u2013 Present"}</div>
          <div>
            <div className="mb-1 font-serif text-[1.05rem] font-bold text-[#0a0a0a]">
              {"Formula Student \u2014 "}
              <a
                href="https://greenbear.berlin/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a0a0a] underline underline-offset-[3px]"
              >
                Green Bear Racing
              </a>
            </div>
            <div className="mb-1.5 text-[0.85rem] text-[#666]">HTW Berlin</div>
            <div className="text-[0.78rem] leading-[1.65] text-[#999]">
              Mechanical design, component integration, and structural validation of an electric Formula Student race car.
            </div>
          </div>
          <div className="whitespace-nowrap rounded-full border border-[#e0e0e0] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-[#333]">
            Extracurricular
          </div>
        </div>
      </div>
    </section>
  )
}
