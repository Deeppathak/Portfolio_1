"use client"

import { useEffect, useRef } from "react"

const skillColumns = [
  {
    title: "CAD & Design",
    skills: [
      "3D CAD Design",
      "Tolerance Analysis",
      "GD&T",
      "DFA / DFMEA",
      "Assembly Design",
      "Technical Drawing",
      "Design Iteration",
    ],
  },
  {
    title: "Simulation & Analysis",
    skills: [
      "Finite Element Analysis",
      "CFD",
      "Structural Analysis",
      "Thermal Analysis",
      "Fatigue Analysis",
      "FFT & PSD",
      "Vibration Testing",
    ],
  },
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "Signal Processing",
      "Machine Learning",
      "Embedded Systems",
      "Arduino / C",
      "Data Analysis",
      "HHT / EMD",
    ],
  },
  {
    title: "Engineering Process",
    skills: [
      "Systems Engineering",
      "Product Development",
      "Reliability Engineering",
      "Root Cause Analysis",
      "Cross-functional Teams",
      "Technical Documentation",
      "Formula Student",
    ],
  },
]

const tools = [
  { name: "Fusion 360", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Fusion_360_Logo.png" },
  { name: "PTC Creo", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/PTC_Creo_logo.svg" },
  { name: "AutoCAD", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/AutoCad_logo.svg/512px-AutoCad_logo.svg.png" },
  { name: "ANSYS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/ANSYS_logo_without-blur.png/640px-ANSYS_logo_without-blur.png" },
  { name: "MATLAB", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/640px-Matlab_Logo.png" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/512px-Matplotlib_icon.svg.png" },
  { name: "PyTorch", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
  { name: "Arduino", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/512px-Arduino_Logo.svg.png" },
  { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/512px-Scikit_learn_logo_small.svg.png" },
  { name: "SolidWorks", icon: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/512px-SolidWorks_Logo.svg.png" },
  { name: "Autodesk Inventor", icon: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/2025-workspace-icons/inventor-professional-2025-workspace-icon-75x75.png" },
  { name: "Autodesk Vault", icon: "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/2025-workspace-icons/vault-basic-2025-workspace-icon-75x75.png" },
  { name: "PTC Windchill", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1d/PTC_logo.svg" },
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="scroll-mt-[100px] border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.8)]">
      <div className="flex items-baseline gap-8 border-b border-[#e0e0e0] px-8 py-11 md:px-16">
        <span className="min-w-[32px] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#999]">02</span>
        <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-[-0.02em] text-[#0a0a0a]">{"Skills & Toolset"}</h2>
      </div>
      <div className="fade-target opacity-0 translate-y-[18px] transition-all duration-600 ease-out">
        <div className="grid grid-cols-1 border-t border-[#e0e0e0] sm:grid-cols-2 lg:grid-cols-4">
          {skillColumns.map((col, i) => (
            <div
              key={col.title}
              className={`px-8 py-9 ${i < skillColumns.length - 1 ? "border-r border-[#e0e0e0]" : ""} max-sm:border-r-0 max-sm:border-b max-sm:border-[#e0e0e0]`}
            >
              <div className="mb-5 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#999]">
                {col.title}
              </div>
              <div className="flex flex-col">
                {col.skills.map((skill, j) => (
                  <span
                    key={skill}
                    className={`py-2 text-[0.88rem] text-[#333] transition-all hover:pl-1 hover:text-[#0a0a0a] ${j < col.skills.length - 1 ? "border-b border-[#e0e0e0]" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Software & Tools */}
        <div className="border-t border-[#e0e0e0] px-8 py-11 md:px-16 md:pb-12">
          <div className="mb-7 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#999]">
            Software & Tools
          </div>
          <div className="flex flex-wrap gap-3.5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex w-[88px] flex-col items-center gap-2 rounded border border-[#e0e0e0] bg-white px-2.5 py-4 text-center transition-all hover:-translate-y-0.5 hover:border-[#0a0a0a] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-[42px] w-[42px] object-contain"
                  crossOrigin="anonymous"
                />
                <span className="text-[0.72rem] font-medium leading-tight text-[#333]">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
