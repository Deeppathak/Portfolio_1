"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const phrases = [
  "Mechanical Engineering",
  "CAD & FEA Simulation",
  "Embedded Programming",
  "Signal Processing",
  "Systems Engineering",
  "Product Development",
]

export function Typewriter() {
  const [text, setText] = useState("")
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)
  const deleting = useRef(false)

  const typeLoop = useCallback(() => {
    const current = phrases[phraseIndex.current]
    if (!deleting.current) {
      charIndex.current++
      setText(current.slice(0, charIndex.current))
      if (charIndex.current === current.length) {
        deleting.current = true
        setTimeout(typeLoop, 2000)
        return
      }
    } else {
      charIndex.current--
      setText(current.slice(0, charIndex.current))
      if (charIndex.current === 0) {
        deleting.current = false
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length
      }
    }
    setTimeout(typeLoop, deleting.current ? 42 : 78)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(typeLoop, 78)
    return () => clearTimeout(timeout)
  }, [typeLoop])

  return (
    <div className="min-h-[1.7em] text-[0.95rem] font-light text-[#666]">
      {"Specialising in "}
      <span className="font-medium text-[#0a0a0a]">{text}</span>
      <span className="inline-block h-[0.95em] w-[2px] animate-[blink_0.9s_step-end_infinite] bg-[#0a0a0a] align-text-bottom" />
    </div>
  )
}
