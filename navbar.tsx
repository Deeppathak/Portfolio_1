"use client"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 z-[100] flex w-full max-w-[1320px] -translate-x-1/2 items-center justify-between border-b border-[#e0e0e0] bg-[rgba(255,255,255,0.92)] px-16 py-5 backdrop-blur-[20px]">
      <a
        href="#hero"
        className="font-serif text-[1.05rem] font-bold text-[#0a0a0a] no-underline"
      >
        Deep Pathak
      </a>
      <ul className="hidden list-none gap-10 md:flex">
        <li>
          <a
            href="#about"
            className="text-[0.77rem] font-medium uppercase tracking-[0.14em] text-[#666] no-underline transition-colors hover:text-[#0a0a0a]"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-[0.77rem] font-medium uppercase tracking-[0.14em] text-[#666] no-underline transition-colors hover:text-[#0a0a0a]"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="text-[0.77rem] font-medium uppercase tracking-[0.14em] text-[#666] no-underline transition-colors hover:text-[#0a0a0a]"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-[0.77rem] font-medium uppercase tracking-[0.14em] text-[#666] no-underline transition-colors hover:text-[#0a0a0a]"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="rounded-[3px] bg-[#0a0a0a] px-5 py-2 text-[0.77rem] font-medium uppercase tracking-[0.14em] text-white no-underline transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
