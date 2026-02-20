"use client"

import { useEffect, useRef } from "react"

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="scroll-mt-[100px] border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.8)]">
      <div className="flex items-baseline gap-8 border-b border-[#e0e0e0] px-8 py-11 md:px-16">
        <span className="min-w-[32px] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#999]">04</span>
        <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] text-[#0a0a0a]">Projects</h2>
      </div>
      <div className="fade-target opacity-0 translate-y-[18px] transition-all duration-600 ease-out">

        {/* Thesis Project */}
        <div className="grid grid-cols-1 border-b border-[#e0e0e0] md:grid-cols-2">
          <div className="grid grid-rows-2 overflow-hidden border-b border-[#e0e0e0] md:border-r md:border-b-0">
            <img
              src="/images/sensor-board.png"
              alt="Accelerometer sensor mounted on switchgear drive mechanism"
              className="block h-full w-full border-b border-[#e0e0e0] object-cover grayscale-[10%]"
            />
            <img
              src="/images/emd-thesis.jpg"
              alt="Empirical Mode Decomposition showing signal, IMF1, IMF2, IMF3 and Residual"
              className="block h-full w-full object-contain bg-white"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="mb-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#999]">{"Master Thesis \u00b7 Ongoing"}</div>
            <div className="mb-3 font-serif text-[1.3rem] font-bold leading-tight text-[#0a0a0a]">Vibration Analysis of Mechanical Drive in Switchgear</div>
            <p className="mb-5 text-[0.86rem] font-light leading-[1.8] text-[#666]">
              {"Detecting mechanical looseness in medium-voltage switchgear drive assemblies using advanced signal processing. Accelerometers are mounted on the drive mechanism to capture vibration data during switching operations. Signal decomposition via Hilbert-Huang Transform (HHT) and Empirical Mode Decomposition (EMD) extracts intrinsic mode functions, enabling detection of subtle structural anomalies that conventional FFT/PSD methods may miss \u2014 improving reliability assessment before costly field failures occur."}
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {["Signal Processing", "HHT / EMD", "FFT & PSD", "Vibration Analysis", "Python", "Reliability Engineering"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#e0e0e0] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#333]">
                  {tag}
                </span>
              ))}
            </div>
            <span className="cursor-default text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a] opacity-50">
              {"In Progress \u2014 FH S\u00fcdwestfalen / Nuventura"}
            </span>
          </div>
        </div>

        {/* Project 1 - Embedded Air Quality */}
        <div className="grid grid-cols-1 border-b border-[#e0e0e0] md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-12">
            <div className="mb-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#999]">Project 01</div>
            <div className="mb-3 font-serif text-[1.3rem] font-bold leading-tight text-[#0a0a0a]">Embedded Air Quality Measurement System</div>
            <p className="mb-5 text-[0.86rem] font-light leading-[1.8] text-[#666]">
              Developed an embedded system to monitor and report AQI using PM1.0, PM2.5, PM10.0, temperature, and humidity sensors. Designed signal acquisition pipeline and data visualization dashboard.
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {["Embedded Systems", "Sensor Fusion", "Python", "Data Analysis"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#e0e0e0] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#333]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Deeppathak/Embedded-Air-Quality-Measurement-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a] no-underline transition-all hover:gap-3"
            >
              View on GitHub <ArrowIcon />
            </a>
          </div>
          <div className="order-1 aspect-[16/10] overflow-hidden border-b border-[#e0e0e0] md:order-2 md:border-b-0 md:border-l">
            <img
              src="https://huggingface.co/spaces/DeepPathak/mechanical-marvels-green-bear-gears/resolve/main/images/joypi.jpg"
              alt="Embedded Air Quality System"
              className="block h-full w-full object-cover grayscale-[12%] transition-transform duration-600 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Project 2 - Movie Recommender */}
        <div className="grid grid-cols-1 border-b border-[#e0e0e0] md:grid-cols-2">
          <div className="aspect-[16/10] overflow-hidden border-b border-[#e0e0e0] md:border-r md:border-b-0">
            <img
              src="https://huggingface.co/spaces/DeepPathak/mechanical-marvels-green-bear-gears/resolve/main/images/MRS-1.jpg"
              alt="Movie Recommender System"
              className="block h-full w-full object-cover grayscale-[12%] transition-transform duration-600 hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="mb-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#999]">Project 02</div>
            <div className="mb-3 font-serif text-[1.3rem] font-bold leading-tight text-[#0a0a0a]">Movie Recommender System</div>
            <p className="mb-5 text-[0.86rem] font-light leading-[1.8] text-[#666]">
              {"Personalized recommendations using PyTorch and collaborative filtering on the MovieLens dataset \u2014 demonstrating ML application in e-commerce personalization with strong recall and precision metrics."}
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {["Machine Learning", "PyTorch", "Collaborative Filtering"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#e0e0e0] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#333]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Deeppathak/Recommender_system_-Movielens_dataset_with_Pytorch-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a] no-underline transition-all hover:gap-3"
            >
              View on GitHub <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Project 3 - Wheel Trolley FEA */}
        <div className="grid grid-cols-1 border-b border-[#e0e0e0] md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-12">
            <div className="mb-3 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#999]">Project 03</div>
            <div className="mb-3 font-serif text-[1.3rem] font-bold leading-tight text-[#0a0a0a]">Wheel Trolley Bracket FEA Analysis</div>
            <p className="mb-5 text-[0.86rem] font-light leading-[1.8] text-[#666]">
              {"Comprehensive static and fatigue analyses on a trolley bracket under 500kg load. Identified critical stress concentrations at fillet transitions, optimized geometry, and validated redesign through iterative FEA \u2014 preventing structural failure."}
            </p>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {["FEA", "ANSYS", "Fatigue Analysis", "Design Optimization"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#e0e0e0] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#333]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Deeppathak/FEA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a] no-underline transition-all hover:gap-3"
            >
              View on GitHub <ArrowIcon />
            </a>
          </div>
          <div className="order-1 aspect-[16/10] overflow-hidden border-b border-[#e0e0e0] md:order-2 md:border-b-0 md:border-l">
            <img
              src="https://huggingface.co/spaces/DeepPathak/mechanical-marvels-green-bear-gears/resolve/main/images/wheeltroly.png"
              alt="Wheel Trolley FEA"
              className="block h-full w-full object-cover grayscale-[12%] transition-transform duration-600 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* CAD Gallery */}
        <div className="border-t border-[#e0e0e0] px-8 py-10 md:px-16 md:pb-14">
          <div className="mb-7 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#999]">
            {"CAD & Simulation Gallery"}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "https://huggingface.co/spaces/DeepPathak/mechanical-marvels-green-bear-gears/resolve/main/images/gear.png",
                title: "Gear Box Design",
                desc: "3:1 reduction gearbox with optimized tooth profile designed from first principles",
              },
              {
                img: "https://huggingface.co/spaces/DeepPathak/mechanical-marvels-green-bear-gears/resolve/main/images/heatfin.png",
                title: "Heat Fins Thermal Analysis",
                desc: "Steady-state thermal simulation of heat sink fins for electronics cooling",
              },
              {
                img: "https://huggingface.co/spaces/DeepPathak/mechanical-marvels-green-bear-gears/resolve/main/images/fancfd.png",
                title: "Air Propeller CFD",
                desc: "Velocity and thrust force analysis using computational fluid dynamics",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[3px] border border-[#e0e0e0] bg-white transition-all hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="block h-40 w-full object-cover grayscale-[10%]"
                />
                <div className="px-4 py-3.5">
                  <h4 className="mb-1 text-[0.85rem] font-semibold text-[#0a0a0a]">{card.title}</h4>
                  <p className="text-[0.76rem] text-[#666]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
