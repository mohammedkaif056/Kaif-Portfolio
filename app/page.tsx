'use client'

import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Hackathons from '@/components/sections/Hackathons'
import Contact from '@/components/sections/Contact'
import { ScrollProgress, FloatingElements } from '@/components/effects/ScrollEffects'
import InteractiveCursor from '@/components/effects/InteractiveCursor'

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollProgress />
        <FloatingElements />
        <InteractiveCursor />
      </Suspense>
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Hackathons />
      <Contact />
    </>
  )
}

