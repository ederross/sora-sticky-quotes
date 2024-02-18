"use client"
import { useRef, useState } from 'react'

import { useScroll } from 'framer-motion'
import StickyQuote from './stickyQuote'

const quotes = ['Sora', 'All videos on this page were generated directly by Sora without modification.']

export default function StickyQuotes() {
  const stickyQuotesContainer = useRef(null)

  const [animIndex, setAnimIndex] = useState(0)

  // * The Framer motion scrollYProgress it's always on the range of [0, 1]
  const { scrollYProgress } = useScroll({
    target: stickyQuotesContainer,

    // * OFFSET EXPLANATION:
    // * 1 = [start center] = [The animation starts on the intersection between of the top of stickyQuotesContainer and at the center of the browser window]
    // * 2 = [end start] = [The animation ends on the intersection between stickyQuotesContainer bottom end: end of the stickyQuotesContainer and start of the browser window]
    offset: ['start center', 'end start'],
  })

  return (
    <section
      ref={stickyQuotesContainer}
      className="h-[400vh] relative w-full bg-black"
    >
      <div className="sticky top-0 h-screen w-full select-none items-center justify-center">
        <div className="flex h-full w-full items-center justify-center">
          {quotes.map((quote, index) => {
            // * Start of the first quote animation
            const start = index / quotes.length 
            // * End of the first quote animation
            const end = start + 1 / quotes.length

            return (
              <StickyQuote
                key={index}
                quote={quote}
                quoteIndex={index}
                animIndex={animIndex}
                setAnimIndex={setAnimIndex}
                range={[start, end]}
                progress={scrollYProgress}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
