import { Typewriter } from "./typewriter"

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.75)] px-8 pt-[72px] md:px-16">
      <div className="flex w-full flex-col items-start gap-10 py-20 md:flex-row md:items-center md:gap-16">
        <div className="shrink-0">
          <div className="h-[180px] w-[180px] overflow-hidden rounded-full border-2 border-[#e0e0e0] shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
            <img
              src="/images/deep-warehouse.jpg"
              alt="Deep Pathak in engineering lab"
              className="h-full w-full object-cover object-[center_15%]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#999] before:block before:h-px before:w-6 before:bg-[#999] before:content-['']">
            Mechanical Engineer &middot; Berlin, Germany
          </div>
          <h1 className="mb-5 font-serif text-[clamp(2.4rem,3.8vw,3.2rem)] font-black leading-none tracking-[-0.03em] text-[#0a0a0a]">
            Deep<br />Pathak
          </h1>
          <Typewriter />
          <p className="mb-9 mt-8 max-w-[440px] text-[0.92rem] font-light leading-[1.85] text-[#666]">
            {"3+ years of hands-on product development in CAD design, FEA simulation, and tolerance analysis \u2014 currently at "}
            <strong className="font-medium text-[#0a0a0a]">Nuventura</strong>
            {" working on medium-voltage switchgear systems."}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[3px] bg-[#0a0a0a] px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.06em] text-white no-underline transition-all hover:-translate-y-0.5 hover:opacity-85"
            >
              View Projects
            </a>
            <a
              href="https://www.linkedin.com/in/deep-pathak-502918175/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[3px] border border-[#e0e0e0] bg-transparent px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.06em] text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:border-[#0a0a0a]"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[3px] border border-[#e0e0e0] bg-transparent px-6 py-3 text-[0.78rem] font-medium uppercase tracking-[0.06em] text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:border-[#0a0a0a]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
